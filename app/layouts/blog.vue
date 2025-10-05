<!--
  博客布局（示例）
  - 更专注于内容阅读区域
  - 可与页面内的目录（UContentToc）协作
-->
<template>
  <div class="min-h-screen">
    <header class="border-b bg-white/70 dark:bg-gray-900/60 backdrop-blur">
      <div class="container mx-auto px-4 py-4 flex items-center justify-between">
        <ULink to="/" class="font-bold text-gray-900 dark:text-white">Blog</ULink>
        <UColorModeButton size="md" />
      </div>
    </header>

    <main class="container mx-auto px-4 py-8">
      <slot />
    </main>

    <footer class="border-t">
      <div class="container mx-auto px-4 py-6 text-sm text-gray-600 dark:text-gray-400">
        阅读愉快！
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
// 使用 Nuxt UI 的内置 UColorModeButton 实现明暗模式切换
</script>

<style scoped>
/* 博客布局可选样式增强 */
</style>