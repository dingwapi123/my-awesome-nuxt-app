<!--
  默认布局（Nuxt 4 + Nuxt UI 最佳实践）
  - 提供 Header / Main / Footer 结构
  - 使用 <slot /> 渲染页面内容
-->
<template>
  <div class="min-h-screen flex flex-col">
    <!-- Header -->
    <header class="border-b bg-white/70 dark:bg-gray-900/60 backdrop-blur">
      <div
        class="container mx-auto px-4 py-4 flex items-center justify-between"
      >
        <!-- 左侧：Logo / 品牌 + 桌面导航 -->
        <div class="flex items-center gap-4">
          <ULink to="/" class="font-bold text-gray-900 dark:text-white">
            My Awesome Nuxt App
          </ULink>
          <!-- 桌面导航 -->
          <div class="hidden md:flex">
            <UNavigationMenu :items="navItems" />
          </div>
        </div>

        <!-- 右侧：移动端菜单按钮 + 颜色模式按钮 -->
        <div class="flex items-center gap-2">
          <UButton
            class="md:hidden"
            icon="i-lucide-menu"
            variant="ghost"
            color="neutral"
            aria-label="切换菜单"
            @click="mobileOpen = !mobileOpen"
          />
          <UColorModeButton size="md" />
        </div>
      </div>

      <!-- 移动端导航（折叠） -->
      <div v-if="mobileOpen" class="md:hidden border-t">
        <div class="container mx-auto px-4 py-2">
          <UNavigationMenu
            orientation="vertical"
            :items="navItems"
          />
        </div>
      </div>
    </header>

    <!-- Main -->
    <main class="flex-1 container mx-auto px-4 py-8">
      <slot />
    </main>

    <!-- Footer -->
    <footer class="border-t">
      <div
        class="container mx-auto px-4 py-4 text-sm text-gray-600 dark:text-gray-400"
      >
        © {{ new Date().getFullYear() }} · Built with Nuxt 4 & Nuxt UI
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
// 使用 Nuxt UI 的内置 UColorModeButton 实现明暗模式切换
import type { NavigationMenuItem } from "@nuxt/ui"

// 导航项（遵循 Nuxt UI NavigationMenu 文档）
const navItems = ref<NavigationMenuItem[]>([
  { label: "首页", icon: "i-lucide-home", to: "/" },
  { label: "博客", icon: "i-lucide-file-text", to: "/blog" },
  { label: "项目", icon: "i-lucide-layout-grid", to: "/projects" },
  { label: "关于", icon: "i-lucide-info", to: "/about" },
  { label: "联系", icon: "i-lucide-mail", to: "/contact" },
])

// 移动端菜单开关
const mobileOpen = ref(false)
</script>

<style scoped>
/* 默认布局可选样式增强 */
</style>
