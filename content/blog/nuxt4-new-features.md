---
title: "Nuxt 4 新特性详解"
description: "全面解析 Nuxt 4 的新特性，包括性能优化、开发体验提升等方面的改进。"
date: "2024-01-10"
author: "CXZ"
tags: ["Nuxt.js", "Vue.js", "性能优化"]
category: "Nuxt.js"
---

# Nuxt 4 新特性详解

Nuxt 4 带来了许多令人兴奋的新特性和改进。本文将详细介绍这些变化，帮助你更好地理解和使用 Nuxt 4。

## 🚀 主要新特性

### 1. 性能优化

#### 更快的构建速度
- **Vite 5 支持**：默认使用 Vite 5，构建速度提升 30%
- **增量构建**：只重新构建发生变化的部分
- **并行处理**：多核 CPU 利用率更高

```typescript
// nuxt.config.ts
export default defineNuxtConfig({
  vite: {
    build: {
      rollupOptions: {
        output: {
          manualChunks: {
            vendor: ['vue', 'vue-router']
          }
        }
      }
    }
  }
})
```

#### 运行时性能提升
- **Tree Shaking 优化**：更精确的无用代码消除
- **Bundle 分析**：自动优化包大小
- **预加载策略**：智能资源预加载

### 2. 开发体验改进

#### 新的文件系统路由
```
pages/
├── index.vue          // /
├── about.vue          // /about
├── users/
│   ├── index.vue      // /users
│   ├── [id].vue       // /users/:id
│   └── settings.vue   // /users/settings
└── [...slug].vue      // 捕获所有路由
```

#### 改进的错误处理
```vue
<!-- error.vue -->
<template>
  <div class="error-page">
    <h1>{{ error.statusCode }}</h1>
    <p>{{ error.statusMessage }}</p>
    <NuxtLink to="/">返回首页</NuxtLink>
  </div>
</template>

<script setup lang="ts">
interface Props {
  error: {
    statusCode: number
    statusMessage: string
  }
}

defineProps<Props>()
</script>
```

### 3. 新的 Composables

#### useAsyncData 增强
```typescript
// 自动缓存和重新验证
const { data, pending, error, refresh } = await useAsyncData('users', () => {
  return $fetch('/api/users')
}, {
  // 新选项
  dedupe: 'cancel', // 取消重复请求
  default: () => [], // 默认值
  transform: (data) => data.users, // 数据转换
  getCachedData: (key) => nuxtApp.ssrContext?.cache?.[key] // 自定义缓存
})
```

#### useFetch 改进
```typescript
// 更好的类型推导
const { data } = await useFetch<User[]>('/api/users', {
  method: 'POST',
  body: { name: 'John' },
  // 新的响应式选项
  watch: [searchQuery],
  immediate: false
})
```

### 4. 服务端改进

#### 新的 Server API
```typescript
// server/api/users.post.ts
export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  
  // 新的验证助手
  const validated = await validateBody(event, {
    name: { type: 'string', required: true },
    email: { type: 'email', required: true }
  })
  
  return await createUser(validated)
})
```

#### 中间件增强
```typescript
// server/middleware/auth.ts
export default defineEventHandler(async (event) => {
  // 新的上下文 API
  const user = await getUserFromToken(event)
  
  if (!user) {
    throw createError({
      statusCode: 401,
      statusMessage: 'Unauthorized'
    })
  }
  
  // 设置上下文
  event.context.user = user
})
```

## 🔧 配置变化

### 新的配置选项
```typescript
// nuxt.config.ts
export default defineNuxtConfig({
  // 新的实验性特性
  experimental: {
    payloadExtraction: false, // 禁用 payload 提取
    inlineSSRStyles: false,   // 内联 SSR 样式
    viewTransition: true      // 视图过渡动画
  },
  
  // 新的构建选项
  build: {
    analyze: true, // 构建分析
    extractCSS: true // CSS 提取
  },
  
  // 新的 SEO 配置
  seo: {
    fallbackTitle: '默认标题',
    templateParams: {
      separator: '|'
    }
  }
})
```

## 📦 模块生态系统

### 官方模块更新
- **@nuxt/content v3**: 更好的 Markdown 支持
- **@nuxt/image v2**: 新的图片优化算法
- **@nuxt/ui v3**: 全新的组件库

### 第三方模块兼容性
大多数 Nuxt 3 模块已经兼容 Nuxt 4，升级过程相对平滑。

## 🚨 破坏性变化

### 1. Node.js 版本要求
- 最低要求：Node.js 18.0.0
- 推荐版本：Node.js 20.x

### 2. 配置文件变化
```typescript
// Nuxt 3
export default defineNuxtConfig({
  target: 'static' // ❌ 已移除
})

// Nuxt 4
export default defineNuxtConfig({
  nitro: {
    prerender: {
      routes: ['/'] // ✅ 新的预渲染配置
    }
  }
})
```

## 📈 迁移指南

### 从 Nuxt 3 升级到 Nuxt 4

1. **更新依赖**
```bash
pnpm update nuxt@^4.0.0
```

2. **检查配置文件**
```bash
npx nuxi@latest upgrade --force
```

3. **更新模块**
```bash
pnpm update @nuxt/content @nuxt/image @nuxt/ui
```

4. **测试应用**
```bash
pnpm dev
pnpm build
```

## 🎯 最佳实践

### 1. 利用新的缓存机制
```typescript
// 使用新的缓存 API
const cachedData = await cachedFunction('cache-key', async () => {
  return await expensiveOperation()
}, {
  maxAge: 1000 * 60 * 5, // 5 分钟
  staleWhileRevalidate: 1000 * 60 * 60 // 1 小时
})
```

### 2. 优化包大小
```typescript
// 使用动态导入
const MyComponent = defineAsyncComponent(() => import('~/components/MyComponent.vue'))
```

### 3. 利用新的 SEO 功能
```vue
<script setup lang="ts">
useSeoMeta({
  title: '页面标题',
  description: '页面描述',
  ogImage: '/og-image.jpg'
})
</script>
```

## 总结

Nuxt 4 在性能、开发体验和功能完整性方面都有显著提升。主要亮点包括：

- 🚀 **性能提升**：更快的构建和运行时性能
- 🛠️ **开发体验**：更好的错误处理和调试工具
- 🔧 **新功能**：增强的 Composables 和服务端 API
- 📦 **生态系统**：更丰富的模块和工具

建议在新项目中直接使用 Nuxt 4，现有项目可以根据需要逐步迁移。