import { basicTemplate } from '../templates/basic-template';

describe('basicTemplate', () => {
  it('should have correct metadata', () => {
    expect(basicTemplate.name).toBe('basic');
    expect(basicTemplate.description).toBe('Vite + React + TypeScript + Zustand + React Router');
  });

  it('should have all required files', () => {
    const expectedFiles = [
      'package.json',
      '.npmrc',
      'index.html',
      'vite.config.ts',
      'tsconfig.json',
      'tsconfig.node.json',
      'src/main.tsx',
      'src/App.tsx',
      'src/store/counter.ts',
      'src/index.css',
      'src/App.css'
    ];

    const actualFiles = basicTemplate.files.map(file => file.path);
    
    expectedFiles.forEach(expectedFile => {
      expect(actualFiles).toContain(expectedFile);
    });
    
    expect(basicTemplate.files).toHaveLength(expectedFiles.length);
  });

  it('should have correct dependencies', () => {
    expect(basicTemplate.dependencies).toEqual({
      react: '^18.3.1',
      'react-dom': '^18.3.1',
      'react-router-dom': '^6.28.0',
      zustand: '^5.0.1'
    });
  });

  it('should have correct dev dependencies', () => {
    expect(basicTemplate.devDependencies).toEqual({
      '@types/react': '^18.3.23',
      '@types/react-dom': '^18.3.7',
      '@typescript-eslint/eslint-plugin': '^6.21.0',
      '@typescript-eslint/parser': '^6.21.0',
      '@vitejs/plugin-react': '^4.3.4',
      eslint: '^8.57.1',
      'eslint-plugin-react-hooks': '^4.6.2',
      'eslint-plugin-react-refresh': '^0.4.14',
      typescript: '^5.9.2',
      vite: '^4.5.14'
    });
  });

  it('should have correct scripts', () => {
    expect(basicTemplate.scripts).toEqual({
      dev: 'vite',
      build: 'tsc && vite build',
      lint: 'eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 0',
      preview: 'vite preview'
    });
  });

  it('should have valid file contents', () => {
    basicTemplate.files.forEach(file => {
      expect(file.path).toBeTruthy();
      expect(file.content).toBeTruthy();
      expect(typeof file.path).toBe('string');
      expect(typeof file.content).toBe('string');
    });
  });
});
