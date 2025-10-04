---
title: '快速开始'
description: '学习如何快速开始使用 Nuxt Content 构建你的内容驱动网站。'
category: 'getting-started'
position: 1
---

# 快速开始

欢迎使用 Nuxt Content！本指南将帮助你快速上手。

## 安装

首先，安装 Nuxt Content 模块：

```bash
# 使用 pnpm
pnpm add @nuxt/content

# 使用 npm
npm install @nuxt/content

# 使用 yarn
yarn add @nuxt/content
```

## 配置

在 `nuxt.config.ts` 中添加模块：

```typescript
export default defineNuxtConfig({
  modules: ['@nuxt/content'],
  content: {
    // 配置选项
  }
})
```

## 创建内容

在 `content/` 目录下创建你的第一个 Markdown 文件：

```markdown
---
title: '我的第一篇文章'
description: '这是我的第一篇文章'
---

# 我的第一篇文章

这里是文章内容...
```

## 显示内容

创建页面来显示内容：

```vue
<template>
  <div>
    <ContentDoc />
  </div>
</template>
```

就这么简单！你的内容驱动网站已经准备就绪。