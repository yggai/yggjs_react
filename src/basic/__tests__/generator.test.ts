import * as fs from 'fs-extra';
import * as path from 'path';
import { TemplateGenerator } from '../generator';
import { basicTemplate } from '../templates';

// Mock fs-extra
jest.mock('fs-extra');
const mockedFs = fs as jest.Mocked<typeof fs>;

describe('TemplateGenerator', () => {
  const mockProjectName = 'test-project';
  const mockTargetDir = '/test/path';
  
  beforeEach(() => {
    jest.clearAllMocks();
    mockedFs.ensureDir.mockResolvedValue(undefined);
    mockedFs.writeFile.mockResolvedValue(undefined);
    mockedFs.pathExists.mockResolvedValue(false);
    mockedFs.readdir.mockResolvedValue([]);
  });

  describe('constructor', () => {
    it('should create generator with correct options', () => {
      const options = {
        projectName: mockProjectName,
        targetDir: mockTargetDir,
        template: basicTemplate
      };
      
      const generator = new TemplateGenerator(options);
      expect(generator).toBeInstanceOf(TemplateGenerator);
    });
  });

  describe('generate', () => {
    it('should create target directory', async () => {
      const generator = new TemplateGenerator({
        projectName: mockProjectName,
        targetDir: mockTargetDir,
        template: basicTemplate
      });

      await generator.generate();

      expect(mockedFs.ensureDir).toHaveBeenCalledWith(mockTargetDir);
    });

    it('should generate all template files', async () => {
      const generator = new TemplateGenerator({
        projectName: mockProjectName,
        targetDir: mockTargetDir,
        template: basicTemplate
      });

      await generator.generate();

      // 验证所有模板文件都被生成
      expect(mockedFs.writeFile).toHaveBeenCalledTimes(basicTemplate.files.length);
      
      // 验证package.json文件被正确生成
      expect(mockedFs.writeFile).toHaveBeenCalledWith(
        path.join(mockTargetDir, 'package.json'),
        expect.stringContaining(mockProjectName),
        'utf-8'
      );
    });

    it('should replace project name in template content', async () => {
      const generator = new TemplateGenerator({
        projectName: 'my-custom-app',
        targetDir: mockTargetDir,
        template: basicTemplate
      });

      await generator.generate();

      // 验证项目名称被正确替换
      const packageJsonCall = mockedFs.writeFile.mock.calls.find(
        call => call[0].toString().endsWith('package.json')
      );
      
      expect(packageJsonCall).toBeDefined();
      expect(packageJsonCall![1]).toContain('my-custom-app');
      expect(packageJsonCall![1]).not.toContain('my-react-app');
    });

    it('should create necessary directories for nested files', async () => {
      const generator = new TemplateGenerator({
        projectName: mockProjectName,
        targetDir: mockTargetDir,
        template: basicTemplate
      });

      await generator.generate();

      // 验证src目录被创建
      expect(mockedFs.ensureDir).toHaveBeenCalledWith(
        path.join(mockTargetDir, 'src')
      );
      
      // 验证src/store目录被创建
      expect(mockedFs.ensureDir).toHaveBeenCalledWith(
        path.join(mockTargetDir, 'src', 'store')
      );
    });
  });

  describe('createProject', () => {
    it('should create project in specified directory', async () => {
      const targetPath = '/custom/path';
      
      await TemplateGenerator.createProject(mockProjectName, basicTemplate, targetPath);

      expect(mockedFs.pathExists).toHaveBeenCalledWith(targetPath);
      expect(mockedFs.ensureDir).toHaveBeenCalledWith(targetPath);
    });

    it('should create project in current directory if no path specified', async () => {
      const expectedPath = path.join(process.cwd(), mockProjectName);
      
      await TemplateGenerator.createProject(mockProjectName, basicTemplate);

      expect(mockedFs.pathExists).toHaveBeenCalledWith(expectedPath);
    });

    it('should throw error if target directory is not empty', async () => {
      const targetPath = '/existing/path';
      mockedFs.pathExists.mockResolvedValue(true);
      mockedFs.readdir.mockResolvedValue(['existing-file.txt'] as any);

      await expect(
        TemplateGenerator.createProject(mockProjectName, basicTemplate, targetPath)
      ).rejects.toThrow('Directory /existing/path is not empty');
    });

    it('should not throw error if target directory exists but is empty', async () => {
      const targetPath = '/empty/path';
      mockedFs.pathExists.mockResolvedValue(true);
      mockedFs.readdir.mockResolvedValue([]);

      await expect(
        TemplateGenerator.createProject(mockProjectName, basicTemplate, targetPath)
      ).resolves.not.toThrow();
    });
  });
});
