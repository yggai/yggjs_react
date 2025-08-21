# yggjs_react

专为React快速开发打造的脚手架工具

[![npm version](https://badge.fury.io/js/yggjs_react.svg)](https://badge.fury.io/js/yggjs_react)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## 🚀 特性

- 🎯 **开箱即用** - 预配置的现代React开发环境
- ⚡ **极速构建** - 基于Vite的快速构建工具
- 🔧 **TypeScript支持** - 完整的TypeScript配置
- 🎨 **状态管理** - 集成Zustand轻量级状态管理
- 🛣️ **路由系统** - React Router v6路由配置
- 📦 **包管理** - 支持pnpm包管理器
- 🧪 **测试驱动** - TDD测试驱动开发支持

## 📋 模板列表

### Basic模板
- **Vite** - 下一代前端构建工具
- **React 18** - 最新版本React
- **TypeScript** - 类型安全的JavaScript
- **Zustand** - 轻量级状态管理
- **React Router** - 声明式路由
- **ESLint** - 代码质量检查

## 🛠️ 安装

### 全局安装

```bash
npm install -g yggjs_react
# 或
pnpm add -g yggjs_react
```

### 使用npx（推荐）

```bash
npx yggjs_react create my-app
```

## 🎯 快速开始

### 1. 创建新项目

```bash
# 交互式创建
yggjs_react create

# 指定项目名称
yggjs_react create my-react-app

# 使用短命令
ggr create my-react-app
```

### 2. 安装依赖

```bash
cd my-react-app
pnpm install
```

### 3. 启动开发服务器

```bash
pnpm dev
```

### 4. 构建生产版本

```bash
pnpm build
```

## 📚 文档

- 📖 [快速开始指南](./docs/快速开始.md) - 5分钟快速上手
- 📋 [完整使用教程](./docs/使用教程/v1.0.0/yggjs_react使用教程.md) - 详细的使用指南
- 🏗️ [目录结构说明](./docs/目录结构说明.md) - 项目结构和组织原则
- 🚀 [项目实战](./docs/使用教程/v1.0.0/yggjs_react使用教程.md#项目实战) - 完整的实战项目示例
- 📚 [文档中心](./docs/README.md) - 所有文档的导航入口

## 📚 CLI命令

### create

创建一个新的React项目

```bash
yggjs-react create [project-name] [options]
```

**参数:**
- `project-name` - 项目名称（可选，如果不提供会提示输入）

**选项:**
- `-t, --template <template>` - 指定模板类型（默认: basic）

**示例:**
```bash
# 交互式创建
yggjs_react create

# 创建名为"my-app"的项目
yggjs_react create my-app

# 使用basic模板创建项目
yggjs_react create my-app --template basic

# 使用短命令
ggr create my-app
```

### list

列出所有可用的模板

```bash
yggjs_react list
# 或使用短命令
ggr list
```

## 🏗️ 项目结构

使用basic模板创建的项目结构如下：

```
my-react-app/
├── .npmrc                      # pnpm配置文件
├── index.html                  # HTML模板
├── package.json                # 项目配置
├── tsconfig.json               # TypeScript配置
├── tsconfig.node.json          # Node.js TypeScript配置
├── vite.config.ts              # Vite配置
└── src/
    ├── components/             # 通用组件
    │   ├── Layout.tsx          # 布局组件
    │   └── index.ts            # 组件导出
    ├── pages/                  # 页面组件
    │   ├── Home.tsx            # 主页组件
    │   ├── About.tsx           # 关于页面
    │   └── index.ts            # 页面导出
    ├── routers/                # 路由配置
    │   └── index.tsx           # 路由配置文件
    ├── store/                  # 状态管理
    │   └── counter.ts          # Zustand状态管理
    ├── App.tsx                 # 主应用组件
    ├── App.css                 # 应用样式
    ├── main.tsx                # 应用入口
    └── index.css               # 全局样式
```

## 🎨 功能特性

### 状态管理 (Zustand)

项目集成了Zustand状态管理库，提供简单而强大的状态管理能力：

```typescript
// src/store/counter.ts
import { create } from 'zustand'

interface CounterState {
  count: number
  increment: () => void
  decrement: () => void
}

export const useCounterStore = create<CounterState>((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
}))
```

### 路由系统 (React Router)

预配置的React Router v6路由系统，采用模块化设计：

```typescript
// src/routers/index.tsx
import { Routes, Route } from 'react-router-dom'
import { Home, About } from '../pages'

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  )
}

// src/components/Layout.tsx
import { Link } from 'react-router-dom'

function Layout({ children }) {
  return (
    <div className="App">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>
      <main>{children}</main>
    </div>
  )
}
```

## 🔧 开发指南

### 添加新页面

1. 在`src/pages`目录下创建新的页面组件
2. 在`src/pages/index.ts`中导出新页面
3. 在`src/routers/index.tsx`中添加新的路由

```typescript
// 1. 创建页面组件 src/pages/Contact.tsx
export default function Contact() {
  return (
    <div>
      <h1>Contact Page</h1>
      <p>联系我们</p>
    </div>
  )
}

// 2. 导出页面 src/pages/index.ts
export { default as Home } from './Home'
export { default as About } from './About'
export { default as Contact } from './Contact'

// 3. 添加路由 src/routers/index.tsx
import { Routes, Route } from 'react-router-dom'
import { Home, About, Contact } from '../pages'

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  )
}
```

### 状态管理最佳实践

```typescript
// 创建新的store
import { create } from 'zustand'

interface UserState {
  user: User | null
  login: (user: User) => void
  logout: () => void
}

export const useUserStore = create<UserState>((set) => ({
  user: null,
  login: (user) => set({ user }),
  logout: () => set({ user: null }),
}))

// 在组件中使用
function UserProfile() {
  const { user, logout } = useUserStore()

  return (
    <div>
      {user ? (
        <div>
          <p>Welcome, {user.name}!</p>
          <button onClick={logout}>Logout</button>
        </div>
      ) : (
        <p>Please login</p>
      )}
    </div>
  )
}
```

## 📦 包管理

推荐使用pnpm作为包管理器，它具有以下优势：

- 🚀 **更快的安装速度**
- 💾 **节省磁盘空间**
- 🔒 **更严格的依赖管理**

### 常用命令

```bash
# 安装依赖
pnpm install

# 添加依赖
pnpm add package-name

# 添加开发依赖
pnpm add -D package-name

# 移除依赖
pnpm remove package-name

# 更新依赖
pnpm update

# 运行脚本
pnpm dev
pnpm build
pnpm preview
```

## 🧪 测试

项目支持TDD（测试驱动开发）方法：

```bash
# 运行测试
npm test

# 监听模式运行测试
npm run test:watch

# 生成测试覆盖率报告
npm run test:coverage
```

## 🌍 国际化

如需添加国际化支持，推荐使用react-i18next：

```bash
pnpm add react-i18next i18next
```

## 🎯 性能优化

### 代码分割

使用React.lazy进行代码分割：

```typescript
import { lazy, Suspense } from 'react'

const LazyComponent = lazy(() => import('./LazyComponent'))

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LazyComponent />
    </Suspense>
  )
}
```

### 构建优化

Vite已经预配置了多种优化选项：

- Tree shaking
- 代码压缩
- 资源优化
- 缓存策略

## 🔍 故障排除

### 常见问题

**Q: 安装依赖时出现网络错误**
A: 使用国内镜像源：
```bash
pnpm install --registry=https://registry.npmmirror.com
```

**Q: TypeScript编译错误**
A: 检查tsconfig.json配置，确保所有依赖都已正确安装

**Q: Vite开发服务器启动失败**
A: 检查端口是否被占用，或在vite.config.ts中修改端口：
```typescript
export default defineConfig({
  server: {
    port: 3001
  }
})
```

## 🤝 贡献指南

欢迎贡献代码！请遵循以下步骤：

1. Fork本仓库
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 创建Pull Request

### 开发环境设置

```bash
# 克隆仓库
git clone https://github.com/yuangungun/yggjs_react.git

# 安装依赖
cd yggjs_react
pnpm install --registry=https://registry.npmmirror.com

# 构建项目
pnpm build

# 运行测试
pnpm test

# 测试CLI工具
node dist/cli.js create test-project
```

## 📄 许可证

本项目基于 [MIT](LICENSE) 许可证开源。

## 👨‍💻 作者

**源滚滚**

- GitHub: [@yuangungun](https://github.com/yuangungun)

## 🙏 致谢

感谢以下优秀的开源项目：

- [Vite](https://vitejs.dev/) - 下一代前端构建工具
- [React](https://reactjs.org/) - 用于构建用户界面的JavaScript库
- [TypeScript](https://www.typescriptlang.org/) - JavaScript的超集
- [Zustand](https://github.com/pmndrs/zustand) - 轻量级状态管理
- [React Router](https://reactrouter.com/) - React声明式路由

## 📈 更新日志

### v1.0.0 (2025-08-21)

- 🎉 首次发布
- ✨ 支持Basic模板（Vite + React + TypeScript + Zustand + React Router）
- 🛠️ CLI工具支持
- 📚 完整文档
- 🧪 TDD测试支持

---

如果这个项目对你有帮助，请给个⭐️支持一下！
```
