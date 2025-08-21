import { viteConfigTemplate } from '../../templates/files/vite-config';

describe('viteConfigTemplate', () => {
  it('should have correct path', () => {
    expect(viteConfigTemplate.path).toBe('vite.config.ts');
  });

  it('should import defineConfig from vite', () => {
    expect(viteConfigTemplate.content).toContain("import { defineConfig } from 'vite'");
  });

  it('should import react plugin', () => {
    expect(viteConfigTemplate.content).toContain("import react from '@vitejs/plugin-react'");
  });

  it('should use defineConfig function', () => {
    expect(viteConfigTemplate.content).toContain('export default defineConfig({');
  });

  it('should include react plugin in plugins array', () => {
    expect(viteConfigTemplate.content).toContain('plugins: [react()]');
  });

  it('should have proper TypeScript syntax', () => {
    // Check that it doesn't have obvious syntax errors
    expect(viteConfigTemplate.content).toMatch(/export default defineConfig\(\{[\s\S]*\}\)/);
  });
});
