<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900">
    <div class="container mx-auto px-4 py-8">
      <!-- 页面标题 -->
      <div class="text-center mb-12">
        <h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          博客文章
        </h1>
        <p class="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          探索我们的技术文章和教程，了解最新的 Web 开发趋势和最佳实践。
        </p>
      </div>

      <!-- 搜索和过滤 -->
      <div class="mb-8 flex flex-col sm:flex-row gap-4">
        <UInput
          v-model="searchQuery"
          placeholder="搜索文章..."
          icon="i-heroicons-magnifying-glass"
          class="flex-1"
        />
        <USelect
          v-model="selectedTag"
          :options="tagOptions"
          placeholder="选择标签"
          class="w-full sm:w-48"
        />
      </div>

      <!-- 文章列表 -->
      <div
        v-if="filteredPosts.length > 0"
        class="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
      >
        <article
          v-for="post in filteredPosts"
          :key="post.path"
          class="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
        >
          <NuxtLink :to="post.path" class="block p-6">
            <!-- 文章标题 -->
            <h2
              class="text-xl font-semibold text-gray-900 dark:text-white mb-3 line-clamp-2"
            >
              {{ post.title }}
            </h2>

            <!-- 文章描述 -->
            <p class="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
              {{ post.description }}
            </p>

            <!-- 文章元信息 -->
            <div
              class="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400"
            >
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
            <div
              v-if="post.tags && post.tags.length > 0"
              class="mt-4 flex flex-wrap gap-2"
            >
              <UBadge
                v-for="tag in post.tags.slice(0, 3)"
                :key="tag"
                variant="soft"
                size="sm"
              >
                {{ tag }}
              </UBadge>
            </div>
          </NuxtLink>
        </article>
      </div>

      <!-- 空状态 -->
      <div v-else class="text-center py-12">
        <UIcon
          name="i-heroicons-document-text"
          class="w-16 h-16 text-gray-400 mx-auto mb-4"
        />
        <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">
          没有找到文章
        </h3>
        <p class="text-gray-600 dark:text-gray-300">
          尝试调整搜索条件或清除过滤器。
        </p>
      </div>

      <!-- 分页 -->
      <div v-if="totalPages > 1" class="mt-12 flex justify-center">
        <UPagination
          v-model="currentPage"
          :page-count="pageSize"
          :total="totalPosts"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
/**
 * 博客列表页面
 * 展示所有博客文章，支持搜索和标签过滤
 */

// 导入必须位于模块顶部，避免 import/first 违规
import type { BlogCollectionItem } from "@nuxt/content"

// 页面元信息
useSeoMeta({
  title: "博客文章 - 技术分享与教程",
  description: "探索我们的技术文章和教程，了解最新的 Web 开发趋势和最佳实践。",
  ogTitle: "博客文章 - 技术分享与教程",
  ogDescription:
    "探索我们的技术文章和教程，了解最新的 Web 开发趋势和最佳实践。",
});

// 接口定义

interface TagOption {
  label: string;
  value: string;
}

// 响应式数据
const searchQuery = ref("");
const selectedTag = ref("");
const currentPage = ref(1);
const pageSize = 9;

// 查询所有博客文章 - 使用 Nuxt Content 集合 API
const { data: allPosts } = await useAsyncData("blog-all-posts", () => {
  return queryCollection("blog").all()
})

// 计算属性
const totalPosts = computed(() => allPosts.value?.length || 0);
const totalPages = computed(() => Math.ceil(totalPosts.value / pageSize));

// 获取所有标签
const allTags = computed(() => {
  const tags = new Set<string>();
  (allPosts.value || []).forEach((post: BlogCollectionItem) => {
    if (post.tags) {
      post.tags.forEach((tag: string) => tags.add(tag));
    }
  });
  return Array.from(tags).sort();
});

// 标签选项
const tagOptions = computed((): TagOption[] => [
  { label: "所有标签", value: "" },
  ...allTags.value.map((tag: string) => ({ label: tag, value: tag })),
]);

// 将日期值安全转换为时间戳，避免 any 类型
function toTimestamp(input: unknown): number {
  if (!input) return 0
  if (input instanceof Date) return input.getTime()
  if (typeof input === 'string' || typeof input === 'number') {
    const d = new Date(input)
    const t = d.getTime()
    return Number.isNaN(t) ? 0 : t
  }
  return 0
}

// 过滤后的文章
const filteredPosts = computed(() => {
  let posts: BlogCollectionItem[] = (allPosts.value || []);

  // 按日期倒序（如果存在 date）
  posts = posts.slice().sort((a: BlogCollectionItem, b: BlogCollectionItem) => {
    const ad = toTimestamp(a.date as unknown)
    const bd = toTimestamp(b.date as unknown)
    return bd - ad
  })

  // 搜索过滤
  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase();
    posts = posts.filter(
      (post: BlogCollectionItem) =>
        post.title.toLowerCase().includes(query) ||
        post.description.toLowerCase().includes(query) ||
        (post.tags &&
          post.tags.some((tag: string) => tag.toLowerCase().includes(query)))
    );
  }

  // 标签过滤
  if (selectedTag.value) {
    posts = posts.filter(
      (post: BlogCollectionItem) => post.tags && post.tags.includes(selectedTag.value)
    );
  }

  // 分页
  const start = (currentPage.value - 1) * pageSize;
  const end = start + pageSize;
  return posts.slice(start, end);
});

/**
 * 格式化日期
 * @param dateString 日期字符串
 * @returns 格式化后的日期
 */
function formatDate(dateInput: string | Date): string {
  const date = typeof dateInput === 'string' ? new Date(dateInput) : dateInput
  return date.toLocaleDateString("zh-CN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

// 监听搜索和标签变化，重置分页
watch([searchQuery, selectedTag], () => {
  currentPage.value = 1;
});
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>