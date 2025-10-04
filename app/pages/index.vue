<!--
  首页组件
  
  展示 Nuxt UI 组件的基本使用方法和项目介绍
-->
<template>
  <div class="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
    <!-- 页头区域 -->
    <header class="container mx-auto px-4 py-8">
      <div class="flex items-center justify-between">
        <!-- Logo 和标题 -->
        <div class="flex items-center space-x-4">
          <UIcon name="i-lucide-zap" class="w-8 h-8 text-primary-500" />
          <h1 class="text-2xl font-bold text-gray-900 dark:text-white">
            My Awesome Nuxt App
          </h1>
        </div>
        
        <!-- 颜色模式切换按钮 -->
        <UButton
          :icon="isDark ? 'i-lucide-sun' : 'i-lucide-moon'"
          size="sm"
          color="neutral"
          variant="ghost"
          :aria-label="isDark ? '切换到亮色模式' : '切换到暗色模式'"
          @click="toggleColorMode"
        />
      </div>
    </header>

    <!-- 主要内容区域 -->
    <main class="container mx-auto px-4 py-8">
      <!-- 欢迎区域 -->
      <section class="text-center mb-12">
        <UCard class="max-w-2xl mx-auto">
          <template #header>
            <div class="text-center">
              <UIcon name="i-lucide-rocket" class="w-16 h-16 text-primary-500 mx-auto mb-4" />
              <h2 class="text-3xl font-bold text-gray-900 dark:text-white">
                欢迎使用 Nuxt 4 + Nuxt UI
              </h2>
            </div>
          </template>
          
          <div class="space-y-4">
            <p class="text-lg text-gray-600 dark:text-gray-300">
              这是一个基于 Nuxt 4 和 Nuxt UI 构建的现代化 Web 应用程序。
            </p>
            <p class="text-gray-600 dark:text-gray-300">
              项目已经配置了 TypeScript、Tailwind CSS、ESLint 等开发工具，
              并集成了 Nuxt Content 和 Nuxt Image 等实用模块。
            </p>
          </div>
          
          <template #footer>
            <div class="flex justify-center space-x-4">
              <UButton
                to="/components"
                icon="i-lucide-layout-grid"
                size="lg"
              >
                查看组件示例
              </UButton>
              <UButton
                to="/about"
                variant="outline"
                icon="i-lucide-info"
                size="lg"
              >
                了解更多
              </UButton>
            </div>
          </template>
        </UCard>
      </section>

      <!-- 功能特性展示 -->
      <section class="mb-12">
        <h3 class="text-2xl font-bold text-center mb-8 text-gray-900 dark:text-white">
          项目特性
        </h3>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <UCard
            v-for="feature in features"
            :key="feature.title"
            class="hover:shadow-lg transition-shadow duration-300"
          >
            <template #header>
              <div class="flex items-center space-x-3">
                <UIcon :name="feature.icon" class="w-6 h-6 text-primary-500" />
                <h4 class="font-semibold text-gray-900 dark:text-white">
                  {{ feature.title }}
                </h4>
              </div>
            </template>
            
            <p class="text-gray-600 dark:text-gray-300">
              {{ feature.description }}
            </p>
          </UCard>
        </div>
      </section>

      <!-- 快速开始指南 -->
      <section>
        <UCard>
          <template #header>
            <h3 class="text-xl font-bold text-gray-900 dark:text-white flex items-center">
              <UIcon name="i-lucide-play-circle" class="w-6 h-6 mr-2 text-primary-500" />
              快速开始
            </h3>
          </template>
          
          <div class="space-y-4">
            <div class="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
              <h4 class="font-semibold mb-2 text-gray-900 dark:text-white">开发服务器</h4>
              <UKbd>pnpm dev</UKbd>
            </div>
            
            <div class="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
              <h4 class="font-semibold mb-2 text-gray-900 dark:text-white">构建生产版本</h4>
              <UKbd>pnpm build</UKbd>
            </div>
            
            <div class="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
              <h4 class="font-semibold mb-2 text-gray-900 dark:text-white">预览生产版本</h4>
              <UKbd>pnpm preview</UKbd>
            </div>
          </div>
        </UCard>
      </section>
    </main>

    <!-- 页脚 -->
    <footer class="container mx-auto px-4 py-8 mt-12">
      <div class="text-center text-gray-600 dark:text-gray-400">
        <p>
          使用 
          <ULink to="https://nuxt.com" target="_blank" class="text-primary-500 hover:text-primary-600">
            Nuxt 4
          </ULink>
          和
          <ULink to="https://ui.nuxt.com" target="_blank" class="text-primary-500 hover:text-primary-600">
            Nuxt UI
          </ULink>
          构建
        </p>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
/**
 * 首页组件逻辑
 * 
 * 展示项目特性和基本的 Nuxt UI 组件使用方法
 */

// 页面元数据
useHead({
  title: '首页',
  meta: [
    {
      name: 'description',
      content: '基于 Nuxt 4 和 Nuxt UI 构建的现代化 Web 应用程序首页'
    }
  ]
})

// 颜色模式管理 - 简化实现避免 useColorMode 导入问题
const isDark = ref(false)

/**
 * 切换颜色模式
 */
const toggleColorMode = () => {
  isDark.value = !isDark.value
  // 简单的主题切换实现
  if (import.meta.client) {
    document.documentElement.classList.toggle('dark', isDark.value)
  }
}

// 项目特性数据
const features = [
  {
    title: 'Nuxt 4',
    icon: 'i-lucide-zap',
    description: '最新的 Nuxt 框架，提供更好的性能和开发体验'
  },
  {
    title: 'Nuxt UI',
    icon: 'i-lucide-palette',
    description: '100+ 精美的 UI 组件，基于 Tailwind CSS 构建'
  },
  {
    title: 'TypeScript',
    icon: 'i-lucide-code',
    description: '完整的 TypeScript 支持，提供更好的类型安全'
  },
  {
    title: 'Tailwind CSS',
    icon: 'i-lucide-paintbrush',
    description: '实用优先的 CSS 框架，快速构建现代界面'
  },
  {
    title: 'ESLint',
    icon: 'i-lucide-shield-check',
    description: '代码质量检查工具，保持代码风格一致'
  },
  {
    title: '响应式设计',
    icon: 'i-lucide-smartphone',
    description: '完美适配各种设备屏幕尺寸'
  }
]
</script>

<style scoped>
/**
 * 页面特定样式
 * 
 * 这里可以添加仅适用于首页的样式
 */
</style>