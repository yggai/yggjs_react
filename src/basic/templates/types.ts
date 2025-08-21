/**
 * 模板文件接口定义
 */
export interface TemplateFile {
  /** 文件路径 */
  path: string;
  /** 文件内容 */
  content: string;
}

/**
 * 模板接口定义
 */
export interface Template {
  /** 模板名称 */
  name: string;
  /** 模板描述 */
  description: string;
  /** 模板文件列表 */
  files: TemplateFile[];
  /** 生产依赖 */
  dependencies: Record<string, string>;
  /** 开发依赖 */
  devDependencies: Record<string, string>;
  /** npm 脚本 */
  scripts: Record<string, string>;
}
