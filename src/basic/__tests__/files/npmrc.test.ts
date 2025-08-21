import { npmrcTemplate } from '../../templates/files/npmrc';

describe('npmrcTemplate', () => {
  it('should have correct path', () => {
    expect(npmrcTemplate.path).toBe('.npmrc');
  });

  it('should configure npm mirror registry', () => {
    expect(npmrcTemplate.content).toContain('registry=https://registry.npmmirror.com');
  });

  it('should configure scoped registries', () => {
    expect(npmrcTemplate.content).toContain('@types:registry=https://registry.npmmirror.com');
    expect(npmrcTemplate.content).toContain('@typescript-eslint:registry=https://registry.npmmirror.com');
    expect(npmrcTemplate.content).toContain('@vitejs:registry=https://registry.npmmirror.com');
  });

  it('should disable package-lock', () => {
    expect(npmrcTemplate.content).toContain('package-lock=false');
  });

  it('should configure cache directory', () => {
    expect(npmrcTemplate.content).toContain('cache-dir=.pnpm-cache');
  });

  it('should configure peer dependencies', () => {
    expect(npmrcTemplate.content).toContain('strict-peer-dependencies=false');
  });

  it('should configure network timeout', () => {
    expect(npmrcTemplate.content).toContain('network-timeout=60000');
  });

  it('should enable progress bar', () => {
    expect(npmrcTemplate.content).toContain('progress=true');
  });

  it('should contain helpful comments', () => {
    expect(npmrcTemplate.content).toContain('# 使用国内镜像源加速包下载');
    expect(npmrcTemplate.content).toContain('# React 相关包的镜像源');
  });
});
