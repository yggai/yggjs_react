# yggjs_react 使用教程 v1.0.0

## 项目介绍

yggjs_react 是一个专为React快速开发打造的现代化脚手架工具。它基于当前最流行的技术栈，为开发者提供开箱即用的React开发环境，让您能够专注于业务逻辑的实现，而不是繁琐的环境配置。

### 🎯 设计理念

- **开箱即用**：预配置完整的开发环境，无需额外配置
- **现代化技术栈**：采用最新的前端技术和最佳实践
- **模块化设计**：清晰的目录结构，便于维护和扩展
- **开发体验优先**：优化开发流程，提升开发效率

### ✨ 核心特性

| 特性 | 描述 | 版本 |
|------|------|------|
| **Vite** | 下一代前端构建工具，极速热更新 | ^4.5.14 |
| **React** | 最新版本React，支持所有新特性 | ^18.3.1 |
| **TypeScript** | 完整的类型安全支持 | ^5.9.2 |
| **Zustand** | 轻量级状态管理，简单易用 | ^5.0.1 |
| **React Router** | 声明式路由系统 | ^6.28.0 |
| **pnpm** | 高效的包管理器 | ^8.15.0 |
| **ESLint** | 代码质量检查和格式化 | ^8.57.1 |

### 🏗️ 架构设计

yggjs_react 采用模块化架构设计，将不同功能模块分离，提高代码的可维护性：

```
src/
├── components/     # 通用组件模块
├── pages/         # 页面组件模块  
├── routers/       # 路由配置模块
├── store/         # 状态管理模块
├── App.tsx        # 应用主组件
└── main.tsx       # 应用入口
```

## 安装

### 环境要求

在开始之前，请确保您的开发环境满足以下要求：

- **Node.js**: >= 16.0.0
- **pnpm**: >= 8.0.0 (推荐) 或 npm >= 8.0.0

### 检查环境

```bash
# 检查 Node.js 版本
node --version

# 检查 pnpm 版本
pnpm --version

# 如果没有安装 pnpm，可以通过以下命令安装
npm install -g pnpm
```

### 安装方式

#### 方式一：全局安装（推荐）

```bash
# 使用 npm 安装
npm install -g yggjs_react

# 使用 pnpm 安装
pnpm add -g yggjs_react

# 验证安装
yggjs_react --version
```

#### 方式二：使用 npx（无需安装）

```bash
# 直接使用，无需全局安装
npx yggjs_react create my-app
```

#### 方式三：使用 pnpm dlx

```bash
# 使用 pnpm dlx，无需全局安装
pnpm dlx yggjs_react create my-app
```

### 验证安装

安装完成后，运行以下命令验证是否安装成功：

```bash
# 查看版本信息
yggjs_react --version

# 查看帮助信息
yggjs_react --help

# 使用短命令
ggr --version
```

## 常用命令

### create 命令

`create` 是最常用的命令，用于创建新的React项目。

#### 基本语法

```bash
yggjs_react create [项目名称] [选项]
# 或使用短命令
ggr create [项目名称] [选项]
```

#### 使用示例

```bash
# 1. 交互式创建项目
yggjs_react create
# 系统会提示您输入项目名称和选择模板

# 2. 指定项目名称
yggjs_react create my-react-app

# 3. 指定项目名称和模板
yggjs_react create my-react-app --template basic

# 4. 在当前目录创建项目
yggjs_react create . --template basic
```

#### 命令选项

| 选项 | 简写 | 描述 | 默认值 |
|------|------|------|--------|
| `--template` | `-t` | 指定模板类型 | basic |
| `--help` | `-h` | 显示帮助信息 | - |

### list 命令

查看所有可用的项目模板。

```bash
# 列出所有可用模板
yggjs_react list

# 输出示例：
# Available templates:
# ├── basic - Vite + React + TypeScript + Zustand + React Router
# └── More templates coming soon...
```

### version 命令

查看当前版本信息。

```bash
# 查看版本
yggjs_react --version
yggjs_react -v

# 输出示例：
# yggjs_react v1.0.0
```

### help 命令

获取命令帮助信息。

```bash
# 查看总体帮助
yggjs_react --help

# 查看特定命令帮助
yggjs_react create --help
```

## 常用模板

### Basic 模板

Basic 模板是 yggjs_react 的核心模板，包含了现代React开发所需的所有基础功能。

#### 技术栈组成

| 技术 | 用途 | 特点 |
|------|------|------|
| **Vite** | 构建工具 | 极速热更新，优化的构建性能 |
| **React 18** | UI框架 | 最新特性支持，并发渲染 |
| **TypeScript** | 类型系统 | 完整类型安全，提升开发体验 |
| **Zustand** | 状态管理 | 轻量级，简单易用 |
| **React Router v6** | 路由管理 | 声明式路由，支持嵌套路由 |
| **pnpm** | 包管理 | 快速安装，节省磁盘空间 |

#### 项目结构详解

```
my-react-app/
├── .npmrc                      # pnpm配置，国内镜像源
├── index.html                  # HTML入口文件
├── package.json                # 项目配置和依赖
├── tsconfig.json               # TypeScript主配置
├── tsconfig.node.json          # Node.js环境TS配置
├── vite.config.ts              # Vite构建配置
└── src/                        # 源代码目录
    ├── components/             # 通用组件
    │   ├── Layout.tsx          # 布局组件
    │   └── index.ts            # 组件统一导出
    ├── pages/                  # 页面组件
    │   ├── Home.tsx            # 首页组件
    │   ├── About.tsx           # 关于页面
    │   └── index.ts            # 页面统一导出
    ├── routers/                # 路由配置
    │   └── index.tsx           # 路由配置文件
    ├── store/                  # 状态管理
    │   └── counter.ts          # 计数器状态示例
    ├── App.tsx                 # 应用主组件
    ├── App.css                 # 应用样式
    ├── main.tsx                # 应用入口
    └── index.css               # 全局样式
```

#### 核心文件说明

**1. 应用入口 (src/main.tsx)**
```typescript
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
```

**2. 应用主组件 (src/App.tsx)**
```typescript
import { Layout } from './components'
import AppRoutes from './routers'
import './App.css'

function App() {
  return (
    <Layout>
      <AppRoutes />
    </Layout>
  )
}

export default App
```

**3. 路由配置 (src/routers/index.tsx)**
```typescript
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

export default AppRoutes
```

#### 预配置功能

1. **国内镜像源配置**：`.npmrc` 文件预配置了国内镜像源，加速依赖安装
2. **TypeScript配置**：完整的TS配置，支持路径别名和严格模式
3. **ESLint配置**：代码质量检查和格式化规则
4. **Vite配置**：优化的构建配置，支持热更新
5. **状态管理示例**：Zustand状态管理的完整示例

#### 开发命令

```bash
# 安装依赖
pnpm install

# 启动开发服务器
pnpm dev

# 构建生产版本
pnpm build

# 预览构建结果
pnpm preview

# 代码检查
pnpm lint
```

## 项目实战

本节将通过一个完整的实战项目，展示如何使用 yggjs_react 构建一个功能完整的React应用。

### 实战项目：任务管理应用

我们将构建一个简单但功能完整的任务管理应用，包含以下功能：
- 任务列表展示
- 添加新任务
- 标记任务完成
- 删除任务
- 任务统计

### 第一步：创建项目

```bash
# 创建项目
yggjs_react create task-manager

# 进入项目目录
cd task-manager

# 安装依赖
pnpm install
```

### 第二步：设计状态管理

首先，我们需要设计任务管理的状态结构。创建 `src/store/tasks.ts`：

```typescript
// src/store/tasks.ts
import { create } from 'zustand'

export interface Task {
  id: string
  title: string
  completed: boolean
  createdAt: Date
}

interface TaskState {
  tasks: Task[]
  addTask: (title: string) => void
  toggleTask: (id: string) => void
  deleteTask: (id: string) => void
  getStats: () => { total: number; completed: number; pending: number }
}

export const useTaskStore = create<TaskState>((set, get) => ({
  tasks: [],

  addTask: (title: string) => {
    const newTask: Task = {
      id: Date.now().toString(),
      title,
      completed: false,
      createdAt: new Date()
    }
    set((state) => ({ tasks: [...state.tasks, newTask] }))
  },

  toggleTask: (id: string) => {
    set((state) => ({
      tasks: state.tasks.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    }))
  },

  deleteTask: (id: string) => {
    set((state) => ({
      tasks: state.tasks.filter(task => task.id !== id)
    }))
  },

  getStats: () => {
    const { tasks } = get()
    return {
      total: tasks.length,
      completed: tasks.filter(task => task.completed).length,
      pending: tasks.filter(task => !task.completed).length
    }
  }
}))
```

### 第三步：创建任务组件

创建任务相关的组件。首先创建 `src/components/TaskItem.tsx`：

```typescript
// src/components/TaskItem.tsx
import { Task } from '../store/tasks'

interface TaskItemProps {
  task: Task
  onToggle: (id: string) => void
  onDelete: (id: string) => void
}

export default function TaskItem({ task, onToggle, onDelete }: TaskItemProps) {
  return (
    <div className={`task-item ${task.completed ? 'completed' : ''}`}>
      <div className="task-content">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggle(task.id)}
        />
        <span className="task-title">{task.title}</span>
        <span className="task-date">
          {task.createdAt.toLocaleDateString()}
        </span>
      </div>
      <button
        className="delete-btn"
        onClick={() => onDelete(task.id)}
      >
        删除
      </button>
    </div>
  )
}
```

创建任务输入组件 `src/components/TaskInput.tsx`：

```typescript
// src/components/TaskInput.tsx
import { useState } from 'react'

interface TaskInputProps {
  onAdd: (title: string) => void
}

export default function TaskInput({ onAdd }: TaskInputProps) {
  const [title, setTitle] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (title.trim()) {
      onAdd(title.trim())
      setTitle('')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="task-input">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="输入新任务..."
        className="task-input-field"
      />
      <button type="submit" className="add-btn">
        添加任务
      </button>
    </form>
  )
}
```

创建统计组件 `src/components/TaskStats.tsx`：

```typescript
// src/components/TaskStats.tsx
interface TaskStatsProps {
  stats: {
    total: number
    completed: number
    pending: number
  }
}

export default function TaskStats({ stats }: TaskStatsProps) {
  return (
    <div className="task-stats">
      <div className="stat-item">
        <span className="stat-number">{stats.total}</span>
        <span className="stat-label">总任务</span>
      </div>
      <div className="stat-item">
        <span className="stat-number">{stats.completed}</span>
        <span className="stat-label">已完成</span>
      </div>
      <div className="stat-item">
        <span className="stat-number">{stats.pending}</span>
        <span className="stat-label">待完成</span>
      </div>
    </div>
  )
}
```

### 第四步：创建任务管理页面

创建 `src/pages/Tasks.tsx`：

```typescript
// src/pages/Tasks.tsx
import { useTaskStore } from '../store/tasks'
import TaskInput from '../components/TaskInput'
import TaskItem from '../components/TaskItem'
import TaskStats from '../components/TaskStats'

export default function Tasks() {
  const { tasks, addTask, toggleTask, deleteTask, getStats } = useTaskStore()
  const stats = getStats()

  return (
    <div className="tasks-page">
      <h1>任务管理</h1>

      <TaskStats stats={stats} />

      <TaskInput onAdd={addTask} />

      <div className="task-list">
        {tasks.length === 0 ? (
          <p className="empty-message">暂无任务，添加一个新任务开始吧！</p>
        ) : (
          tasks.map(task => (
            <TaskItem
              key={task.id}
              task={task}
              onToggle={toggleTask}
              onDelete={deleteTask}
            />
          ))
        )}
      </div>
    </div>
  )
}
```

### 第五步：更新路由和导出

更新 `src/pages/index.ts`：

```typescript
// src/pages/index.ts
export { default as Home } from './Home'
export { default as About } from './About'
export { default as Tasks } from './Tasks'
```

更新 `src/components/index.ts`：

```typescript
// src/components/index.ts
export { default as Layout } from './Layout'
export { default as TaskInput } from './TaskInput'
export { default as TaskItem } from './TaskItem'
export { default as TaskStats } from './TaskStats'
```

更新路由配置 `src/routers/index.tsx`：

```typescript
// src/routers/index.tsx
import { Routes, Route } from 'react-router-dom'
import { Home, About, Tasks } from '../pages'

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/tasks" element={<Tasks />} />
    </Routes>
  )
}

export default AppRoutes
```

更新布局组件 `src/components/Layout.tsx`，添加任务管理链接：

```typescript
// src/components/Layout.tsx
import { Link } from 'react-router-dom'
import { ReactNode } from 'react'

interface LayoutProps {
  children: ReactNode
}

function Layout({ children }: LayoutProps) {
  return (
    <div className="App">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/tasks">Tasks</Link>
      </nav>
      <main>
        {children}
      </main>
    </div>
  )
}

export default Layout
```

### 第六步：添加样式

在 `src/App.css` 中添加任务管理相关的样式：

```css
/* 任务管理样式 */
.tasks-page {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
}

.task-stats {
  display: flex;
  gap: 2rem;
  margin-bottom: 2rem;
  padding: 1rem;
  background: #f5f5f5;
  border-radius: 8px;
}

.stat-item {
  text-align: center;
}

.stat-number {
  display: block;
  font-size: 2rem;
  font-weight: bold;
  color: #646cff;
}

.stat-label {
  font-size: 0.9rem;
  color: #666;
}

.task-input {
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
}

.task-input-field {
  flex: 1;
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.add-btn {
  padding: 0.5rem 1rem;
  background: #646cff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.task-list {
  space-y: 1rem;
}

.task-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin-bottom: 0.5rem;
}

.task-item.completed {
  opacity: 0.6;
  text-decoration: line-through;
}

.task-content {
  display: flex;
  align-items: center;
  gap: 1rem;
  flex: 1;
}

.task-title {
  flex: 1;
}

.task-date {
  font-size: 0.8rem;
  color: #666;
}

.delete-btn {
  padding: 0.25rem 0.5rem;
  background: #ff4757;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.empty-message {
  text-align: center;
  color: #666;
  font-style: italic;
  padding: 2rem;
}
```

### 第七步：测试应用

启动开发服务器：

```bash
pnpm dev
```

打开浏览器访问 http://localhost:5173，测试以下功能：

1. ✅ 导航到任务管理页面
2. ✅ 添加新任务
3. ✅ 标记任务为完成
4. ✅ 删除任务
5. ✅ 查看任务统计

### 实战总结

通过这个实战项目，我们学会了：

1. **状态管理**：使用 Zustand 管理复杂的应用状态
2. **组件设计**：创建可复用的组件
3. **路由管理**：添加新的页面和路由
4. **TypeScript**：利用类型系统提升代码质量
5. **模块化开发**：按功能模块组织代码

这个项目展示了 yggjs_react 的强大功能和灵活性，您可以基于这个基础继续扩展更多功能。

## 总结

### yggjs_react 的优势

1. **快速启动**：一条命令即可创建完整的React项目
2. **现代技术栈**：集成最新的前端技术和最佳实践
3. **模块化设计**：清晰的项目结构，便于维护和扩展
4. **开发体验**：优化的开发环境，提升开发效率
5. **类型安全**：完整的TypeScript支持
6. **性能优化**：基于Vite的快速构建和热更新

### 适用场景

- **快速原型开发**：快速验证想法和概念
- **中小型项目**：完整的功能支持，无需额外配置
- **学习和教学**：标准的项目结构，适合学习React开发
- **团队协作**：统一的项目结构和开发规范

### 最佳实践建议

1. **遵循目录结构**：按照模板的目录结构组织代码
2. **合理使用状态管理**：根据应用复杂度选择合适的状态管理方案
3. **组件化开发**：将UI拆分为可复用的组件
4. **类型安全**：充分利用TypeScript的类型检查
5. **代码质量**：使用ESLint保持代码质量

### 后续学习建议

1. **深入学习React**：掌握React的高级特性和模式
2. **状态管理进阶**：学习更复杂的状态管理场景
3. **性能优化**：了解React性能优化技巧
4. **测试驱动开发**：编写单元测试和集成测试
5. **部署和运维**：学习项目部署和持续集成

### 社区和支持

- **GitHub仓库**：https://github.com/yuangungun/yggjs_react
- **问题反馈**：通过GitHub Issues提交问题
- **功能建议**：欢迎提交Pull Request

yggjs_react 将持续更新和改进，为React开发者提供更好的开发体验。感谢您的使用和支持！

---

**版本信息**：v1.0.0
**更新日期**：2025-08-21
**作者**：源滚滚
