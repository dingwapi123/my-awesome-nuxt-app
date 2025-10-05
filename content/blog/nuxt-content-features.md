---
title: "Nuxt Content 高级功能详解"
description: "深入了解 Nuxt Content 的高级功能，包括查询 API、组件集成和性能优化。"
date: "2024-01-20"
tags: ["nuxt", "content", "advanced", "tutorial"]
author: "Senior Developer"
category: "tutorial"
featured: true
---

## 查询 API

Nuxt Content 提供了强大的查询 API，让你可以灵活地获取和过滤内容。

### 基础查询

```typescript
/**
 * 获取所有博客文章
 */
const { data: posts } = await queryContent("/blog").find()

/**
 * 获取特定文章
 */
const { data: post } = await queryContent("/blog/hello-world").findOne()

/**
 * 按标签过滤
 */
const { data: nuxtPosts } = await queryContent("/blog")
  .where({ tags: { $contains: "nuxt" } })
  .find()
```

### 高级查询

```typescript
/**
 * 复杂查询示例
 */
const { data: featuredPosts } = await queryContent("/blog")
  .where({
    featured: true,
    date: { $gte: new Date("2024-01-01") },
  })
  .sort({ date: -1 })
  .limit(5)
  .find()

/**
 * 搜索功能
 */
const { data: searchResults } = await queryContent()
  .where({
    $or: [
      { title: { $icontains: searchTerm } },
      { description: { $icontains: searchTerm } },
      { body: { $icontains: searchTerm } },
    ],
  })
  .find()
```

## 组件集成

### 在 Vue 组件中使用

```vue
<template>
  <div class="blog-list">
    <article v-for="post in posts" :key="post._path" class="post-card">
      <h2>{{ post.title }}</h2>
      <p>{{ post.description }}</p>
      <div class="meta">
        <span>{{ formatDate(post.date) }}</span>
        <div class="tags">
          <span v-for="tag in post.tags" :key="tag" class="tag">
            {{ tag }}
          </span>
        </div>
      </div>
    </article>
  </div>
</template>

<script setup lang="ts">
/**
 * 博客列表组件
 * 展示如何在组件中查询和显示内容
 */
interface BlogPost {
  _path: string
  title: string
  description: string
  date: string
  tags: string[]
}

// 查询博客文章
const { data: posts } = await queryContent<BlogPost>("/blog")
  .sort({ date: -1 })
  .find()

/**
 * 格式化日期
 * @param dateString 日期字符串
 * @returns 格式化后的日期
 */
function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString("zh-CN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
}
</script>
```

## 自定义组件

你可以在 Markdown 中使用自定义 Vue 组件：

::alert{type="info"}
这是一个自定义的警告组件！
::

::code-group

```bash [pnpm]
pnpm add @nuxt/content
```

```bash [npm]
npm install @nuxt/content
```

```bash [yarn]
yarn add @nuxt/content
```

::

## 内容类型

### YAML 前置数据

```yaml
---
title: "文章标题"
description: "文章描述"
date: "2024-01-20"
tags: ["tag1", "tag2"]
author:
  name: "作者姓名"
  email: "author@example.com"
  avatar: "/avatars/author.jpg"
seo:
  title: "SEO 标题"
  description: "SEO 描述"
  keywords: ["关键词1", "关键词2"]
---
```

### JSON 数据

```json
{
  "title": "配置示例",
  "settings": {
    "theme": "dark",
    "language": "zh-CN",
    "features": ["search", "comments", "analytics"]
  },
  "navigation": [
    { "name": "首页", "path": "/" },
    { "name": "博客", "path": "/blog" },
    { "name": "关于", "path": "/about" }
  ]
}
```

## 性能优化

### 1. 预渲染优化

```typescript
// nuxt.config.ts
export default defineNuxtConfig({
  nitro: {
    prerender: {
      routes: ["/sitemap.xml"],
    },
  },
  content: {
    experimental: {
      // 启用原生 SQLite 以提升性能
      sqliteConnector: "native",
    },
  },
})
```

### 2. 缓存策略

```typescript
/**
 * 带缓存的内容查询
 */
const cachedPosts = await $fetch("/api/posts", {
  key: "blog-posts",
  default: () => [],
  server: true,
})
```

### 3. 懒加载

```vue
<template>
  <div>
    <LazyBlogList v-if="showBlogList" />
  </div>
</template>

<script setup lang="ts">
/**
 * 懒加载博客列表
 */
const showBlogList = ref(false)

onMounted(() => {
  // 延迟加载非关键内容
  setTimeout(() => {
    showBlogList.value = true
  }, 100)
})
</script>
```

## SEO 优化

### 动态 Meta 标签

```vue
<script setup lang="ts">
/**
 * 动态设置页面 meta 信息
 */
const { data: post } = await queryContent("/blog/hello-world").findOne()

useSeoMeta({
  title: post.title,
  description: post.description,
  ogTitle: post.title,
  ogDescription: post.description,
  ogImage: post.image,
  twitterCard: "summary_large_image",
})
</script>
```

### 结构化数据

```typescript
/**
 * 添加 JSON-LD 结构化数据
 */
useJsonld({
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: post.title,
  description: post.description,
  author: {
    "@type": "Person",
    name: post.author,
  },
  datePublished: post.date,
  image: post.image,
})
```

## 部署注意事项

### 1. 静态生成

```bash
# 生成静态站点
pnpm run generate

# 预览生成的站点
pnpm run preview
```

### 2. 服务器端渲染

```typescript
// 确保内容在服务器端正确渲染
export default defineNuxtConfig({
  ssr: true,
  content: {
    // 内容配置
  },
})
```

## 总结

Nuxt Content 的高级功能包括：

1. **强大的查询 API** - 灵活的内容检索
2. **组件集成** - 无缝的 Vue 组件支持
3. **性能优化** - 多种优化策略
4. **SEO 友好** - 完整的 SEO 支持
5. **部署灵活** - 支持多种部署方式

这些功能让 Nuxt Content 成为现代 Web 开发的理想选择。

---

_更新于 2024 年 1 月 20 日 | 分类: tutorial_
