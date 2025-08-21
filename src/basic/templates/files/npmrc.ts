import { TemplateFile } from '../types';

/**
 * .npmrc 配置文件模板
 * 配置国内镜像源以加速包下载
 */
export const npmrcTemplate: TemplateFile = {
  path: '.npmrc',
  content: `# 使用国内镜像源加速包下载
registry=https://registry.npmmirror.com

# React 相关包的镜像源
@types:registry=https://registry.npmmirror.com
@typescript-eslint:registry=https://registry.npmmirror.com
@vitejs:registry=https://registry.npmmirror.com

# 禁用包锁定文件的自动更新
package-lock=false

# 设置缓存目录
cache-dir=.pnpm-cache

# 启用严格的 peer dependencies 检查
strict-peer-dependencies=false

# 设置网络超时时间
network-timeout=60000

# 启用进度条
progress=true

# 禁用工作区模式，强制在当前目录安装依赖
ignore-workspace=true`
};
