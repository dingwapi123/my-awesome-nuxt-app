<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900">
    <div class="container mx-auto px-4 py-8">
      <!-- 页面标题 -->
      <div class="text-center mb-12">
        <h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          项目作品
        </h1>
        <p class="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          展示你已完成或正在进行的项目，链接到 GitHub 或在线预览。
        </p>
      </div>

      <!-- 项目网格 -->
      <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <UCard v-for="project in projects" :key="project.name" class="flex flex-col">
          <template #header>
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-2">
                <UIcon :name="project.icon" class="w-6 h-6 text-primary-500" />
                <h3 class="font-semibold text-gray-900 dark:text-white">{{ project.name }}</h3>
              </div>
              <UBadge :color="project.badgeColor" variant="subtle">{{ project.stack }}</UBadge>
            </div>
          </template>

          <p class="text-gray-600 dark:text-gray-300 mb-4">{{ project.description }}</p>

          <div class="mt-auto flex gap-3">
            <UButton v-if="project.github" :to="project.github" target="_blank" icon="i-lucide-github" variant="outline">GitHub</UButton>
            <UButton v-if="project.demo" :to="project.demo" target="_blank" icon="i-lucide-external-link">预览</UButton>
          </div>
        </UCard>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: '项目作品',
  description: '项目卡片展示，包含技术栈、简介以及 GitHub/预览链接',
  ogTitle: '项目作品',
  ogDescription: '项目卡片展示，包含技术栈、简介以及 GitHub/预览链接',
})

type Project = {
  name: string
  description: string
  stack: string
  badgeColor: 'primary' | 'success' | 'info' | 'warning' | 'error' | 'neutral'
  icon: string
  github?: string
  demo?: string
}

const projects: Project[] = [
  {
    name: '个人博客',
    description: '基于 Nuxt 4 + Nuxt UI + Nuxt Content 的个人博客站点',
    stack: 'Nuxt 4',
    badgeColor: 'success',
    icon: 'i-lucide-zap',
    github: 'https://github.com',
  },
  {
    name: '组件示例',
    description: '演示常用 UI 组件的使用方法与最佳实践',
    stack: 'Nuxt UI',
    badgeColor: 'info',
    icon: 'i-lucide-layout-grid',
    demo: '/components',
  },
  {
    name: '内容展示',
    description: '使用 Nuxt Content 展示 Markdown 文档与博客文章',
    stack: 'Content',
    badgeColor: 'primary',
    icon: 'i-lucide-file-text',
    demo: '/blog',
  },
]
</script>

<style scoped>
</style>