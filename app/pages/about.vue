<!--
  关于页面
  
  展示项目信息和更多 Nuxt UI 组件的使用示例
-->
<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900">
    <div class="container mx-auto px-4 py-8">
      <!-- 返回按钮 -->
      <div class="mb-6">
        <UButton
          to="/"
          icon="i-lucide-arrow-left"
          variant="ghost"
          color="neutral"
        >
          返回首页
        </UButton>
      </div>

      <!-- 页面标题 -->
      <div class="text-center mb-12">
        <h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          关于项目
        </h1>
        <p class="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          了解这个基于 Nuxt 4 和 Nuxt UI 构建的现代化 Web 应用程序
        </p>
      </div>

      <!-- 主要内容 -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <!-- 左侧内容 -->
        <div class="lg:col-span-2 space-y-8">
          <!-- 项目介绍 -->
          <UCard>
            <template #header>
              <h2
                class="text-2xl font-bold text-gray-900 dark:text-white flex items-center"
              >
                <UIcon
                  name="i-lucide-info"
                  class="w-6 h-6 mr-2 text-primary-500"
                />
                项目介绍
              </h2>
            </template>

            <div class="prose dark:prose-invert max-w-none">
              <p>
                这是一个使用最新技术栈构建的现代化 Web 应用程序模板。 项目采用了
                Nuxt 4 作为全栈框架，结合 Nuxt UI 组件库，
                为开发者提供了一个功能完整、开箱即用的开发环境。
              </p>

              <h3>主要特性</h3>
              <ul>
                <li><strong>Nuxt 4</strong> - 最新的全栈 Vue.js 框架</li>
                <li><strong>Nuxt UI</strong> - 100+ 精美的 UI 组件</li>
                <li><strong>TypeScript</strong> - 完整的类型安全支持</li>
                <li><strong>Tailwind CSS</strong> - 实用优先的 CSS 框架</li>
                <li><strong>ESLint</strong> - 代码质量检查</li>
                <li><strong>Nuxt Content</strong> - 基于文件的内容管理</li>
                <li><strong>Nuxt Image</strong> - 图片优化和处理</li>
              </ul>
            </div>
          </UCard>

          <!-- 技术栈详情 -->
          <UCard>
            <template #header>
              <h2
                class="text-2xl font-bold text-gray-900 dark:text-white flex items-center"
              >
                <UIcon
                  name="i-lucide-layers"
                  class="w-6 h-6 mr-2 text-primary-500"
                />
                技术栈详情
              </h2>
            </template>

            <div class="space-y-6">
              <div
                v-for="tech in techStack"
                :key="tech.name"
                class="border-l-4 border-primary-500 pl-4"
              >
                <h4 class="font-semibold text-gray-900 dark:text-white mb-2">
                  {{ tech.name }}
                </h4>
                <p class="text-gray-600 dark:text-gray-300 mb-2">
                  {{ tech.description }}
                </p>
                <UBadge :color="tech.badgeColor" variant="subtle">
                  {{ tech.version }}
                </UBadge>
              </div>
            </div>
          </UCard>
        </div>

        <!-- 右侧边栏 -->
        <div class="space-y-6">
          <!-- 项目统计 -->
          <UCard>
            <template #header>
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                项目统计
              </h3>
            </template>

            <div class="space-y-4">
              <div
                v-for="stat in projectStats"
                :key="stat.label"
                class="flex justify-between items-center"
              >
                <span class="text-gray-600 dark:text-gray-300">{{
                  stat.label
                }}</span>
                <UBadge :color="stat.color" variant="subtle">
                  {{ stat.value }}
                </UBadge>
              </div>
            </div>
          </UCard>

          <!-- 快速链接 -->
          <UCard>
            <template #header>
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                快速链接
              </h3>
            </template>

            <div class="space-y-3">
              <UButton
                v-for="link in quickLinks"
                :key="link.label"
                :to="link.url"
                :icon="link.icon"
                variant="ghost"
                color="neutral"
                block
                target="_blank"
                class="justify-start"
              >
                {{ link.label }}
              </UButton>
            </div>
          </UCard>

          <!-- 联系信息 -->
          <UCard>
            <template #header>
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                联系信息
              </h3>
            </template>

            <div class="space-y-3">
              <div class="flex items-center space-x-3">
                <UIcon name="i-lucide-mail" class="w-5 h-5 text-gray-500" />
                <span class="text-gray-600 dark:text-gray-300">
                  contact@example.com
                </span>
              </div>
              <div class="flex items-center space-x-3">
                <UIcon name="i-lucide-github" class="w-5 h-5 text-gray-500" />
                <ULink
                  to="https://github.com"
                  target="_blank"
                  class="text-primary-500 hover:text-primary-600"
                >
                  GitHub
                </ULink>
              </div>
              <div class="flex items-center space-x-3">
                <UIcon name="i-lucide-twitter" class="w-5 h-5 text-gray-500" />
                <ULink
                  to="https://twitter.com"
                  target="_blank"
                  class="text-primary-500 hover:text-primary-600"
                >
                  Twitter
                </ULink>
              </div>
            </div>
          </UCard>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
/**
 * 关于页面组件逻辑
 *
 * 展示项目详细信息和技术栈
 */

// 页面元数据
useHead({
  title: "关于项目",
  meta: [
    {
      name: "description",
      content:
        "了解这个基于 Nuxt 4 和 Nuxt UI 构建的现代化 Web 应用程序的详细信息",
    },
  ],
})

// 技术栈信息
const techStack: Array<{
  name: string
  description: string
  version: string
  badgeColor:
    | "success"
    | "info"
    | "warning"
    | "secondary"
    | "primary"
    | "error"
    | "neutral"
}> = [
  {
    name: "Nuxt 4",
    description: "最新的全栈 Vue.js 框架，提供服务端渲染、静态生成等功能",
    version: "v4.1.2",
    badgeColor: "success",
  },
  {
    name: "Nuxt UI",
    description: "基于 Tailwind CSS 和 Reka UI 构建的 Vue 组件库",
    version: "v4.0.1",
    badgeColor: "info",
  },
  {
    name: "Vue 3",
    description: "渐进式 JavaScript 框架，采用组合式 API",
    version: "v3.5.22",
    badgeColor: "success",
  },
  {
    name: "TypeScript",
    description: "JavaScript 的超集，提供静态类型检查",
    version: "v5.9.3",
    badgeColor: "info",
  },
  {
    name: "Tailwind CSS",
    description: "实用优先的 CSS 框架，快速构建现代界面",
    version: "v4.x",
    badgeColor: "info",
  },
]

// 项目统计
const projectStats: Array<{
  label: string
  value: string
  color:
    | "success"
    | "info"
    | "warning"
    | "secondary"
    | "primary"
    | "error"
    | "neutral"
}> = [
  { label: "组件数量", value: "100+", color: "info" },
  { label: "模块数量", value: "4", color: "success" },
  { label: "页面数量", value: "3", color: "warning" },
  { label: "开发工具", value: "5+", color: "secondary" },
]

// 快速链接
const quickLinks = [
  {
    label: "Nuxt 文档",
    url: "https://nuxt.com/docs",
    icon: "i-lucide-book-open",
  },
  {
    label: "Nuxt UI 文档",
    url: "https://ui.nuxt.com",
    icon: "i-lucide-palette",
  },
  {
    label: "Vue 3 文档",
    url: "https://vuejs.org",
    icon: "i-lucide-code",
  },
  {
    label: "Tailwind CSS",
    url: "https://tailwindcss.com",
    icon: "i-lucide-paintbrush",
  },
]
</script>

<style scoped>
/**
 * 页面特定样式
 * 使用 @reference 指令引用主样式文件以支持 @apply
 */
/* @reference "~/assets/css/main.css"; */

.prose {
  @apply text-gray-600 dark:text-gray-300;
}

.prose h3 {
  @apply text-gray-900 dark:text-white font-semibold mt-6 mb-3;
}

.prose ul {
  @apply space-y-2;
}

.prose li {
  @apply text-gray-600 dark:text-gray-300;
}
</style>
