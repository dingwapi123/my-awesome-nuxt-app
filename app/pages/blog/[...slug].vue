<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900">
    <div class="container mx-auto px-4 py-8">
      <!-- 返回按钮 -->
      <div class="mb-8">
        <UButton
          to="/blog"
          variant="ghost"
          icon="i-heroicons-arrow-left"
          size="sm"
        >
          返回博客列表
        </UButton>
      </div>

      <!-- 文章内容 -->
      <article v-if="data" class="max-w-4xl mx-auto">
        <!-- 文章头部 -->
        <header class="mb-8 text-center">
          <h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {{ data.title }}
          </h1>
          
          <div class="flex items-center justify-center space-x-6 text-gray-600 dark:text-gray-300 mb-6">
            <div class="flex items-center space-x-2">
              <UIcon name="i-heroicons-calendar" />
              <span>{{ formatDate(data.date) }}</span>
            </div>
            <div class="flex items-center space-x-2">
              <UIcon name="i-heroicons-user" />
              <span>{{ data.author }}</span>
            </div>
          </div>

          <!-- 标签 -->
          <div v-if="data.tags && data.tags.length > 0" class="flex justify-center flex-wrap gap-2 mb-6">
            <UBadge
              v-for="tag in data.tags"
              :key="tag"
              variant="soft"
            >
              {{ tag }}
            </UBadge>
          </div>

          <!-- 描述 -->
          <p v-if="data.description" class="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {{ data.description }}
          </p>
        </header>

        <!-- 文章正文 -->
        <div class="prose prose-lg dark:prose-invert max-w-none">
          <ContentRenderer :value="data" />
        </div>

        <!-- 文章底部 -->
        <footer class="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
          <div class="flex items-center justify-between">
            <div class="text-sm text-gray-500 dark:text-gray-400">
              最后更新：{{ formatDate(data.date) }}
            </div>
            
            <!-- 分享按钮 -->
            <div class="flex items-center space-x-2">
              <span class="text-sm text-gray-500 dark:text-gray-400">分享：</span>
              <UButton
                variant="ghost"
                size="sm"
                icon="i-heroicons-link"
                @click="copyLink"
              >
                复制链接
              </UButton>
            </div>
          </div>
        </footer>
      </article>

      <!-- 文章未找到 -->
      <div v-else class="max-w-4xl mx-auto text-center">
        <h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          文章未找到
        </h1>
        <p class="text-gray-600 dark:text-gray-300 mb-8">
          抱歉，您访问的文章不存在或已被删除。
        </p>
        <UButton to="/blog" variant="solid">
          返回博客列表
        </UButton>
      </div>

      <!-- 相关文章 -->
      <section v-if="data && relatedPosts.length > 0" class="mt-16">
        <div class="max-w-4xl mx-auto">
          <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            相关文章
          </h2>
          
          <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <article
              v-for="post in relatedPosts"
              :key="post._path"
              class="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <NuxtLink :to="post._path" class="block p-6">
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2 line-clamp-2">
                  {{ post.title }}
                </h3>
                <p class="text-gray-600 dark:text-gray-300 text-sm line-clamp-2">
                  {{ post.description }}
                </p>
                <div class="mt-3 text-xs text-gray-500 dark:text-gray-400">
                  {{ formatDate(post.date) }}
                </div>
              </NuxtLink>
            </article>
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

// 接口定义
interface BlogPost {
  _path: string
  title: string
  description: string
  date: string
  tags?: string[]
  author: string
  body?: Record<string, unknown>
}

interface ScoredPost extends BlogPost {
  score: number
}

// 获取路由参数
const route = useRoute()
const slug = route.params.slug as string[]
const path = `/blog/${slug.join('/')}`

// 模拟数据 - 实际项目中应该使用 queryContent
const mockPosts: BlogPost[] = [
  {
    _path: '/blog/hello-world',
    title: 'Hello World - 我的第一篇文章',
    description: '这是使用 Nuxt Content 创建的第一篇示例文章，展示了 Markdown 的各种功能。',
    date: '2024-01-15',
    tags: ['nuxt', 'content', 'markdown', 'blog'],
    author: 'Nuxt Developer'
  },
  {
    _path: '/blog/nuxt-content-features',
    title: 'Nuxt Content 高级功能详解',
    description: '深入了解 Nuxt Content 的高级功能，包括查询 API、组件集成和性能优化。',
    date: '2024-01-20',
    tags: ['nuxt', 'content', 'advanced', 'tutorial'],
    author: 'Senior Developer'
  }
]

// 查询当前文章
const data = mockPosts.find(post => post._path === path) || null

// 设置页面元信息
if (data) {
  useSeoMeta({
    title: data.title,
    description: data.description,
    ogTitle: data.title,
    ogDescription: data.description,
    ogType: 'article'
  })
} else {
  useSeoMeta({
    title: '文章未找到',
    description: '您访问的文章不存在'
  })
}

// 查询相关文章（相同标签的其他文章）
const allPosts: BlogPost[] = mockPosts.filter(post => post._path !== path)

// 计算相关文章
const relatedPosts = computed(() => {
  if (!data || !data.tags || data.tags.length === 0) {
    return allPosts.slice(0, 3)
  }

  // 根据共同标签数量排序
  const scored: ScoredPost[] = allPosts.map((post: BlogPost) => {
    const commonTags = post.tags?.filter((tag: string) => data.tags?.includes(tag)) || []
    return {
      ...post,
      score: commonTags.length
    }
  })

  return scored
    .filter((post: ScoredPost) => post.score > 0)
    .sort((a: ScoredPost, b: ScoredPost) => b.score - a.score)
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
  if (!data) return
  
  try {
    const url = `${window.location.origin}${data._path}`
    await navigator.clipboard.writeText(url)
    // 这里可以添加成功提示
    console.log('链接已复制到剪贴板')
  } catch (error) {
    console.error('复制链接失败:', error)
  }
}
</script>

<style scoped>
/**
 * 使用 @reference 指令引用主样式文件以支持 @apply
 */
@reference "~/assets/css/main.css";

.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* 自定义 prose 样式 */
:deep(.prose) {
  @apply text-gray-900 dark:text-gray-100;
}

:deep(.prose h1),
:deep(.prose h2),
:deep(.prose h3),
:deep(.prose h4),
:deep(.prose h5),
:deep(.prose h6) {
  @apply text-gray-900 dark:text-white;
}

:deep(.prose a) {
  @apply text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300;
}

:deep(.prose code) {
  @apply bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 px-1 py-0.5 rounded;
}

:deep(.prose pre) {
  @apply bg-gray-900 dark:bg-gray-800;
}

:deep(.prose blockquote) {
  @apply border-l-blue-500 bg-blue-50 dark:bg-blue-900/20;
}
</style>