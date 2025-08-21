import { tsconfigTemplate, tsconfigNodeTemplate } from '../../templates/files/typescript-configs';

describe('tsconfigTemplate', () => {
  it('should have correct path', () => {
    expect(tsconfigTemplate.path).toBe('tsconfig.json');
  });

  it('should have valid JSON content', () => {
    expect(() => JSON.parse(tsconfigTemplate.content)).not.toThrow();
  });

  it('should have correct compiler options', () => {
    const tsconfig = JSON.parse(tsconfigTemplate.content);
    
    expect(tsconfig.compilerOptions.target).toBe('ES2020');
    expect(tsconfig.compilerOptions.jsx).toBe('react-jsx');
    expect(tsconfig.compilerOptions.strict).toBe(true);
    expect(tsconfig.compilerOptions.module).toBe('ESNext');
  });

  it('should include src directory', () => {
    const tsconfig = JSON.parse(tsconfigTemplate.content);
    expect(tsconfig.include).toContain('src');
  });

  it('should reference node config', () => {
    const tsconfig = JSON.parse(tsconfigTemplate.content);
    expect(tsconfig.references).toEqual([{ path: './tsconfig.node.json' }]);
  });
});

describe('tsconfigNodeTemplate', () => {
  it('should have correct path', () => {
    expect(tsconfigNodeTemplate.path).toBe('tsconfig.node.json');
  });

  it('should have valid JSON content', () => {
    expect(() => JSON.parse(tsconfigNodeTemplate.content)).not.toThrow();
  });

  it('should have composite enabled', () => {
    const tsconfigNode = JSON.parse(tsconfigNodeTemplate.content);
    expect(tsconfigNode.compilerOptions.composite).toBe(true);
  });

  it('should include vite config', () => {
    const tsconfigNode = JSON.parse(tsconfigNodeTemplate.content);
    expect(tsconfigNode.include).toContain('vite.config.ts');
  });
});
