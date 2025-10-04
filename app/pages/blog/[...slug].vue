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
          variant="ghost"
          icon="i-lucide-arrow-left"
          size="sm"
          class="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100"
        >
          返回博客列表
        </UButton>
      </div>

      <!-- 文章内容区域 -->
      <div v-if="post" class="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <!-- 主要内容区域 -->
        <div class="lg:col-span-3">
          <!-- 文章头部信息 -->
          <div class="mb-8">
            <!-- 文章标题 -->
            <h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {{ post.title }}
            </h1>

            <!-- 文章元信息 -->
            <div
              class="flex flex-wrap items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-6"
            >
              <!-- 发布日期 -->
              <div class="flex items-center gap-2">
                <UIcon name="i-lucide-calendar" class="w-4 h-4" />
                <time :datetime="post.date">{{ formatDate(post.date) }}</time>
              </div>

              <!-- 作者信息 -->
              <div v-if="post.author" class="flex items-center gap-2">
                <UIcon name="i-lucide-user" class="w-4 h-4" />
                <span>{{ post.author }}</span>
              </div>

              <!-- 分享按钮 -->
              <UButton
                variant="ghost"
                size="xs"
                icon="i-lucide-share-2"
                class="ml-auto"
                @click="copyLink"
              >
                分享链接
              </UButton>
            </div>

            <!-- 文章标签 -->
            <div
              v-if="post.tags && post.tags.length > 0"
              class="flex flex-wrap gap-2 mb-6"
            >
              <UBadge
                v-for="tag in post.tags"
                :key="tag"
                variant="soft"
                size="sm"
                class="cursor-pointer hover:bg-primary-100 dark:hover:bg-primary-900"
              >
                {{ tag }}
              </UBadge>
            </div>

            <!-- 文章描述 -->
            <p
              v-if="post.description"
              class="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8"
            >
              {{ post.description }}
            </p>
          </div>

          <!-- 文章正文内容 -->
          <div class="prose prose-lg dark:prose-invert max-w-none">
            <ContentRenderer :value="post" />
          </div>
        </div>

        <!-- 侧边栏 - 目录 -->
        <div class="lg:col-span-1">
          <div class="sticky top-8">
            <!-- 目录组件 -->
            <div
              v-if="post?.body?.toc?.links && post.body.toc.links.length > 0"
              class="mb-8 hidden lg:block"
            >
              <div
                class="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6 shadow-sm"
              >
                <h3
                  class="text-sm font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2"
                >
                  <UIcon
                    name="i-lucide-list"
                    class="w-4 h-4 text-primary-500"
                  />
                  目录
                </h3>
                <div class="toc-container">
                  <UContentToc
                    :links="post.body.toc.links"
                    class="text-sm space-y-1"
                  />
                </div>
              </div>
            </div>

            <!-- 移动端目录按钮 -->
            <div class="lg:hidden fixed bottom-6 right-6 z-50">
              <UButton
                v-if="post?.body?.toc?.links && post.body.toc.links.length > 0"
                icon="i-lucide-list"
                size="lg"
                color="primary"
                variant="solid"
                class="shadow-xl hover:shadow-2xl transition-shadow duration-300 rounded-full w-14 h-14"
                @click="showMobileToc = !showMobileToc"
              />
            </div>

            <!-- 移动端目录弹窗 -->
            <UModal v-if="!isLgUp" v-model="showMobileToc">
              <UCard>
                <template #header>
                  <div
                    class="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700"
                  >
                    <h3
                      class="text-lg font-semibold text-gray-900 dark:text-white flex items-center gap-2"
                    >
                      <UIcon
                        name="i-lucide-list"
                        class="w-5 h-5 text-primary-500"
                      />
                      目录
                    </h3>
                    <UButton
                      icon="i-lucide-x"
                      variant="ghost"
                      size="sm"
                      class="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                      @click="showMobileToc = false"
                    />
                  </div>
                </template>

                <div class="p-4 max-h-96 overflow-y-auto mobile-toc">
                   <UContentToc
                     v-if="post?.body?.toc?.links"
                     :links="post.body.toc.links"
                     class="text-sm"
                     @click="showMobileToc = false"
                   />
                 </div>
              </UCard>
            </UModal>
          </div>
        </div>
      </div>

      <!-- 文章未找到 -->
      <div v-else class="text-center py-16">
        <UIcon
          name="i-heroicons-document-text"
          class="w-16 h-16 text-gray-400 mx-auto mb-4"
        />
        <h1 class="text-2xl font-bold text-gray-900 dark:text-white mb-2">
          文章未找到
        </h1>
        <p class="text-gray-600 dark:text-gray-400 mb-6">
          抱歉，您访问的文章不存在或已被删除。
        </p>
        <UButton to="/blog" color="primary"> 返回博客列表 </UButton>
      </div>

      <!-- 相关文章 -->
      <section
        v-if="post && relatedPosts && relatedPosts.length > 0"
        class="mt-16"
      >
        <div class="max-w-4xl mx-auto">
          <h2
            class="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center"
          >
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
                <h3
                  class="text-lg font-semibold text-gray-900 dark:text-white line-clamp-2"
                >
                  {{ relatedPost.title }}
                </h3>
              </template>

              <p class="text-gray-600 dark:text-gray-400 text-sm line-clamp-3">
                {{ relatedPost.description }}
              </p>

              <template #footer>
                <div
                  class="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400"
                >
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
import type { BlogCollectionItem } from "@nuxt/content"

// 获取路由参数
const route = useRoute()
const slug = route.params.slug as string[]
const path = `/blog/${slug.join("/")}`

// 移动端目录显示状态
const showMobileToc = ref(false)

// 响应式断点：判断是否为桌面端（lg及以上）
const isLgUp = ref(false)
let _updateLgUp: (() => void) | null = null

onMounted(() => {
  const update = () => {
    // 仅在客户端执行断点判断
    if (typeof window !== 'undefined') {
      isLgUp.value = window.matchMedia('(min-width: 1024px)').matches
      // 切到桌面端时自动关闭移动端目录弹窗，避免重复目录
      if (isLgUp.value) showMobileToc.value = false
    }
  }
  _updateLgUp = update
  update()
  if (typeof window !== 'undefined') {
    window.addEventListener('resize', update)
  }
})

onBeforeUnmount(() => {
  if (typeof window !== 'undefined' && _updateLgUp) {
    window.removeEventListener('resize', _updateLgUp)
  }
})

// 监听isLgUp变化，增强稳健性
watch(isLgUp, (val) => {
  if (val) showMobileToc.value = false
})

// 获取单篇文章
const { data: post } = await useAsyncData(`blog-${slug}`, () => {
  return queryCollection("blog").path(`/blog/${slug}`).first()
})

// 获取所有文章用于相关推荐
const { data: allPosts } = await useAsyncData("all-blog-posts", () => {
  return queryCollection("blog").all()
})

// 设置页面元信息
if (post.value) {
  useSeoMeta({
    title: post.value.title || "博客文章",
    description: post.value.description || "博客文章描述",
    ogTitle: post.value.title || "博客文章",
    ogDescription: post.value.description || "博客文章描述",
    ogType: "article",
  })
} else {
  useSeoMeta({
    title: "文章未找到",
    description: "您访问的文章不存在",
  })
}

// 计算相关文章
const relatedPosts = computed(() => {
  if (
    !post.value ||
    !post.value.tags ||
    !Array.isArray(post.value.tags) ||
    post.value.tags.length === 0 ||
    !allPosts.value
  ) {
    return (
      allPosts.value
        ?.filter((p: BlogCollectionItem) => p.path !== path)
        .slice(0, 3) || []
    )
  }

  // 根据共同标签数量排序
  const scored = allPosts.value
    .filter((p: BlogCollectionItem) => p.path !== path)
    .map((p: BlogCollectionItem) => {
      const commonTags =
        p.tags?.filter((tag: string) => post.value?.tags?.includes(tag)) || []
      return {
        ...p,
        score: commonTags.length,
      }
    })

  return scored
    .filter((p: BlogCollectionItem & { score: number }) => p.score > 0)
    .sort(
      (
        a: BlogCollectionItem & { score: number },
        b: BlogCollectionItem & { score: number }
      ) => b.score - a.score
    )
    .slice(0, 3)
})

/**
 * 格式化日期
 * @param dateString 日期字符串
 * @returns 格式化后的日期
 */
function formatDate(dateString?: string): string {
  if (!dateString) return ""

  return new Date(dateString).toLocaleDateString("zh-CN", {
    year: "numeric",
    month: "long",
    day: "numeric",
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
    console.error("复制链接失败:", error)
  }
}
</script>
