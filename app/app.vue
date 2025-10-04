<!--
  根应用组件
  
  这是 Nuxt 应用的根组件，包含了 Nuxt UI 的 UApp 包装器
  UApp 组件提供了全局配置，是 Toast、Tooltip 等组件正常工作的必要条件
-->
<template>
  <UApp>
    <!-- 路由公告器，用于无障碍访问 -->
    <NuxtRouteAnnouncer />
    
    <!-- 页面内容 -->
    <NuxtPage />
  </UApp>
</template>

<script setup lang="ts">
/**
 * 根组件设置
 * 
 * 在这里可以添加全局的组合式函数调用
 * 例如：全局状态管理、主题配置、错误处理等
 */

// 设置页面标题和 meta 信息
useHead({
  titleTemplate: '%s - My Awesome Nuxt App',
  meta: [
    {
      name: 'description',
      content: 'A modern Nuxt 4 application with Nuxt UI components'
    }
  ]
})

// 可以在这里添加全局的响应式状态或组合式函数
// 例如：
// const colorMode = useColorMode()
// const { $i18n } = useNuxtApp()
</script>

<style>
/**
 * 全局样式
 * 
 * 这里的样式会应用到整个应用
 * 主要的样式定义在 assets/css/main.css 中
 */
</style>
