<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900">
    <div class="container mx-auto px-4 py-8">
      <!-- 页面标题 -->
      <div class="text-center mb-12">
        <h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          联系方式
        </h1>
        <p class="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          提供你的社交账号与邮箱，方便访客联系你。
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <!-- 社交链接 -->
        <UCard>
          <template #header>
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">社交链接</h3>
          </template>
          <div class="space-y-3">
            <UButton to="https://github.com" target="_blank" icon="i-lucide-github" variant="ghost" color="neutral" block class="justify-start">GitHub</UButton>
            <UButton to="https://linkedin.com" target="_blank" icon="i-lucide-linkedin" variant="ghost" color="neutral" block class="justify-start">LinkedIn</UButton>
            <UButton to="https://juejin.cn" target="_blank" icon="i-lucide-book" variant="ghost" color="neutral" block class="justify-start">掘金</UButton>
            <UButton to="https://zhihu.com" target="_blank" icon="i-lucide-help-circle" variant="ghost" color="neutral" block class="justify-start">知乎</UButton>
          </div>
        </UCard>

        <!-- 邮箱与表单（占位） -->
        <UCard>
          <template #header>
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">邮箱联系</h3>
          </template>
          <div class="space-y-4">
            <div class="flex items-center gap-3">
              <UIcon name="i-lucide-mail" class="w-5 h-5 text-gray-500" />
              <span class="text-gray-600 dark:text-gray-300">contact@example.com</span>
            </div>
            <div class="text-sm text-muted">如需联系表单，请告知字段与处理方式（直接发邮件或第三方服务）。</div>
          </div>
        </UCard>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: '联系方式',
  description: '社交链接与邮箱联系方式页面',
  ogTitle: '联系方式',
  ogDescription: '社交链接与邮箱联系方式页面',
})
</script>

<style scoped>
</style>