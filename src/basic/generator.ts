import * as fs from 'fs-extra';
import * as path from 'path';
import { Template, TemplateFile } from './templates';

export interface GeneratorOptions {
  projectName: string;
  targetDir: string;
  template: Template;
}

export class TemplateGenerator {
  private options: GeneratorOptions;

  constructor(options: GeneratorOptions) {
    this.options = options;
  }

  async generate(): Promise<void> {
    const { projectName, targetDir, template } = this.options;
    
    // 确保目标目录存在
    await fs.ensureDir(targetDir);
    
    // 生成所有文件
    for (const file of template.files) {
      await this.generateFile(file, targetDir, projectName);
    }
    
    console.log(`✅ Template "${template.name}" generated successfully in ${targetDir}`);
  }

  private async generateFile(file: TemplateFile, targetDir: string, projectName: string): Promise<void> {
    const filePath = path.join(targetDir, file.path);
    const fileDir = path.dirname(filePath);
    
    // 确保文件目录存在
    await fs.ensureDir(fileDir);
    
    // 替换模板变量
    let content = file.content;
    content = content.replace(/my-react-app/g, projectName);
    
    // 写入文件
    await fs.writeFile(filePath, content, 'utf-8');
    console.log(`📝 Generated: ${file.path}`);
  }

  static async createProject(projectName: string, template: Template, targetPath?: string): Promise<void> {
    const targetDir = targetPath || path.join(process.cwd(), projectName);
    
    // 检查目标目录是否已存在
    if (await fs.pathExists(targetDir)) {
      const files = await fs.readdir(targetDir);
      if (files.length > 0) {
        throw new Error(`Directory ${targetDir} is not empty`);
      }
    }
    
    const generator = new TemplateGenerator({
      projectName,
      targetDir,
      template
    });
    
    await generator.generate();
    
    console.log(`\n🎉 Project "${projectName}" created successfully!`);
    console.log(`\nNext steps:`);
    console.log(`  cd ${projectName}`);
    console.log(`  pnpm install --registry=https://registry.npmmirror.com`);
    console.log(`  pnpm dev`);
  }
}
