<!--
  博客文章详情页面
  
  显示单篇文章的完整内容，包括标题、内容、标签和相关文章
-->
<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900">
    <div class="container mx-auto px-4 py-8">
      <!-- 返回按钮 -->
      <div class="mb-6">
        <UButton
          to="/blog"
          icon="i-lucide-arrow-left"
          variant="ghost"
          color="neutral"
        >
          返回博客列表
        </UButton>
      </div>

      <!-- 文章内容 -->
      <article v-if="post" class="max-w-4xl mx-auto">
        <!-- 文章头部 -->
        <header class="mb-8 text-center">
          <h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {{ post.title }}
          </h1>
          
          <!-- 元信息 -->
          <div class="flex items-center justify-center space-x-6 text-gray-600 dark:text-gray-400 mb-6">
            <div class="flex items-center space-x-2">
              <UIcon name="i-heroicons-calendar" />
              <span>{{ formatDate(post.date) }}</span>
            </div>
            <div class="flex items-center space-x-2">
              <UIcon name="i-heroicons-user" />
              <span>{{ post.author }}</span>
            </div>
          </div>

          <!-- 标签 -->
          <div v-if="post.tags && post.tags.length > 0" class="flex justify-center flex-wrap gap-2 mb-6">
            <UBadge
              v-for="tag in post.tags"
              :key="tag"
              variant="soft"
              color="primary"
            >
              {{ tag }}
            </UBadge>
          </div>

          <!-- 描述 -->
          <p v-if="post.description" class="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {{ post.description }}
          </p>
        </header>

        <!-- 文章正文 -->
        <div class="prose prose-lg dark:prose-invert max-w-none">
          <ContentRenderer v-if="post" :value="post" />
          <div v-else class="text-center py-8">
            <p class="text-gray-500">文章内容加载中...</p>
          </div>
        </div>

        <!-- 文章底部 -->
        <footer class="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
          <div class="flex items-center justify-between">
            <div class="text-sm text-gray-500 dark:text-gray-400">
              最后更新：{{ formatDate(post.date) }}
            </div>
            
            <!-- 分享按钮 -->
            <UButton
              icon="i-heroicons-share"
              variant="ghost"
              color="neutral"
              @click="copyLink"
            >
              复制链接
            </UButton>
          </div>
        </footer>
      </article>

      <!-- 文章未找到 -->
      <div v-else class="text-center py-16">
        <UIcon name="i-heroicons-document-text" class="w-16 h-16 text-gray-400 mx-auto mb-4" />
        <h1 class="text-2xl font-bold text-gray-900 dark:text-white mb-2">
          文章未找到
        </h1>
        <p class="text-gray-600 dark:text-gray-400 mb-6">
          抱歉，您访问的文章不存在或已被删除。
        </p>
        <UButton to="/blog" color="primary">
          返回博客列表
        </UButton>
      </div>

      <!-- 相关文章 -->
      <section v-if="post && relatedPosts && relatedPosts.length > 0" class="mt-16">
        <div class="max-w-4xl mx-auto">
          <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            相关文章
          </h2>
          
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <UCard
              v-for="relatedPost in relatedPosts"
              :key="relatedPost.path"
              class="hover:shadow-lg transition-shadow cursor-pointer"
              @click="navigateTo(relatedPost.path)"
            >
              <template #header>
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white line-clamp-2">
                  {{ relatedPost.title }}
                </h3>
              </template>
              
              <p class="text-gray-600 dark:text-gray-400 text-sm line-clamp-3">
                {{ relatedPost.description }}
              </p>
              
              <template #footer>
                <div class="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                  <span>{{ formatDate(relatedPost.date) }}</span>
                  <span>{{ relatedPost.author }}</span>
                </div>
              </template>
            </UCard>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
/**
 * 博客文章详情页面
 * 显示单篇文章的完整内容
 */

// 导入 Nuxt Content 类型
import type { BlogCollectionItem } from '@nuxt/content'

// 获取路由参数
const route = useRoute()
const slug = route.params.slug as string[]
const path = `/blog/${slug.join('/')}`

// 获取单篇文章
const { data: post } = await useAsyncData(`blog-${slug}`, () => {
  return queryCollection('blog').path(`/blog/${slug}`).first()
})

// 获取所有文章用于相关推荐
const { data: allPosts } = await useAsyncData('all-blog-posts', () => {
  return queryCollection('blog').all()
})

// 设置页面元信息
if (post.value) {
  useSeoMeta({
    title: post.value.title || '博客文章',
    description: post.value.description || '博客文章描述',
    ogTitle: post.value.title || '博客文章',
    ogDescription: post.value.description || '博客文章描述',
    ogType: 'article'
  })
} else {
  useSeoMeta({
    title: '文章未找到',
    description: '您访问的文章不存在'
  })
}

// 计算相关文章
const relatedPosts = computed(() => {
  if (!post.value || !post.value.tags || !Array.isArray(post.value.tags) || post.value.tags.length === 0 || !allPosts.value) {
    return allPosts.value?.filter((p: BlogCollectionItem) => p.path !== path).slice(0, 3) || []
  }

  // 根据共同标签数量排序
  const scored = allPosts.value
    .filter((p: BlogCollectionItem) => p.path !== path)
    .map((p: BlogCollectionItem) => {
      const commonTags = p.tags?.filter((tag: string) => post.value?.tags?.includes(tag)) || []
      return {
        ...p,
        score: commonTags.length
      }
    })

  return scored
    .filter((p: BlogCollectionItem & { score: number }) => p.score > 0)
    .sort((a: BlogCollectionItem & { score: number }, b: BlogCollectionItem & { score: number }) => b.score - a.score)
    .slice(0, 3)
})

/**
 * 格式化日期
 * @param dateString 日期字符串
 * @returns 格式化后的日期
 */
function formatDate(dateString?: string): string {
  if (!dateString) return ''
  
  return new Date(dateString).toLocaleDateString('zh-CN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

/**
 * 复制文章链接
 */
async function copyLink(): Promise<void> {
  if (!post.value) return
  
  try {
    const url = `${window.location.origin}${post.value.path}`
    await navigator.clipboard.writeText(url)
    // 这里可以添加成功提示
  } catch (error) {
    console.error('复制链接失败:', error)
  }
}
</script>