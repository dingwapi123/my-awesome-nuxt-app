<!--
  默认布局（Nuxt 4 + Nuxt UI 最佳实践）
  - 提供 Header / Main / Footer 结构
  - 使用 <slot /> 渲染页面内容
-->
<template>
  <div class="min-h-screen flex flex-col">
    <!-- Header -->
    <header class="border-b bg-white/70 dark:bg-gray-900/60 backdrop-blur">
      <div class="container mx-auto px-4 py-4 flex items-center justify-between">
        <ULink to="/" class="font-bold text-gray-900 dark:text-white">
          My Awesome Nuxt App
        </ULink>
        <UColorModeButton size="md" />
      </div>
    </header>

    <!-- Main -->
    <main class="flex-1 container mx-auto px-4 py-8">
      <slot />
    </main>

    <!-- Footer -->
    <footer class="border-t">
      <div class="container mx-auto px-4 py-4 text-sm text-gray-600 dark:text-gray-400">
        © {{ new Date().getFullYear() }} · Built with Nuxt 4 & Nuxt UI
      </div>
    </footer>
  </div>
  
</template>

<script setup lang="ts">
// 该布局不需要额外逻辑，使用 Nuxt UI 组件即可
</script>

<style scoped>
/* 默认布局可选样式增强 */
</style>