<!--
  首页组件 - 现代化个人博客设计
  
  采用简洁现代的设计风格，优化用户体验和视觉效果
-->
<template>
  <div class="min-h-full">
    <!-- Hero 区域 - 全屏设计 -->
    <section class="relative min-h-screen flex items-center justify-center">
      <div class="relative z-10 w-full">
        <div
          class="text-center space-y-8 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <!-- 主标题 -->
          <div v-reveal="{ delay: 100 }" class="space-y-6">
            <h1
              class="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white leading-tight"
            >
              你好，我是 CXZ
            </h1>
            <p
              class="text-xl md:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto"
            >
              前端工程师 & 产品设计师，专注于创造优雅的数字体验。
              <br class="hidden md:block" />
              热爱技术分享，记录成长足迹。
            </p>
          </div>

          <!-- 行动按钮 -->
          <div
            v-reveal="{ delay: 200 }"
            class="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <UButton
              to="/blog"
              size="xl"
              class="px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <UIcon name="i-lucide-book-open" class="w-5 h-5 mr-2" />
              阅读博客
            </UButton>
            <UButton
              to="/about"
              variant="outline"
              size="xl"
              class="px-8 py-4 text-lg font-semibold"
            >
              <UIcon name="i-lucide-user" class="w-5 h-5 mr-2" />
              了解更多
            </UButton>
          </div>
        </div>
      </div>
    </section>

    <!-- 主要内容区域 -->
    <div class="py-20 space-y-20">
      <!-- 关于我 - 卡片式设计 -->
      <section v-reveal class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            关于我
          </h2>
          <p class="text-xl text-gray-600 dark:text-gray-300">
            了解我的技能和经验
          </p>
        </div>

        <div class="grid lg:grid-cols-2 gap-12">
          <!-- 个人信息 -->
          <UPageCard class="p-8 hover:shadow-xl transition-all duration-300">
            <div class="space-y-6">
              <div class="flex items-center space-x-4">
                <div
                  class="w-16 h-16 bg-gradient-to-br from-primary-500 to-blue-600 rounded-full flex items-center justify-center"
                >
                  <UIcon name="i-lucide-code" class="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 class="text-2xl font-bold text-gray-900 dark:text-white">
                    前端工程师
                  </h3>
                  <p class="text-gray-600 dark:text-gray-300">5年+ 开发经验</p>
                </div>
              </div>

              <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
                专注于现代前端技术栈，擅长 Vue.js、React、TypeScript 等技术。
                热衷于构建高性能、用户友好的 Web 应用程序。
              </p>

              <!-- 专业技能 -->
              <div class="space-y-4">
                <h4 class="text-lg font-semibold text-gray-900 dark:text-white">
                  专业技能
                </h4>
                <div class="flex flex-wrap gap-2">
                  <UBadge variant="soft" size="lg">Vue.js</UBadge>
                  <UBadge variant="soft" size="lg">React</UBadge>
                  <UBadge variant="soft" size="lg">TypeScript</UBadge>
                  <UBadge variant="soft" size="lg">Nuxt.js</UBadge>
                  <UBadge variant="soft" size="lg">Node.js</UBadge>
                  <UBadge variant="soft" size="lg">Tailwind CSS</UBadge>
                </div>
              </div>
            </div>
          </UPageCard>

          <!-- 统计数据 -->
          <div class="grid grid-cols-2 gap-6">
            <UPageCard
              class="p-6 text-center hover:shadow-lg transition-all duration-300"
            >
              <div class="space-y-2">
                <div class="text-3xl font-bold text-primary-600">50+</div>
                <div class="text-gray-600 dark:text-gray-300">项目经验</div>
              </div>
            </UPageCard>

            <UPageCard
              class="p-6 text-center hover:shadow-lg transition-all duration-300"
            >
              <div class="space-y-2">
                <div class="text-3xl font-bold text-primary-600">5+</div>
                <div class="text-gray-600 dark:text-gray-300">工作年限</div>
              </div>
            </UPageCard>

            <UPageCard
              class="p-6 text-center hover:shadow-lg transition-all duration-300"
            >
              <div class="space-y-2">
                <div class="text-3xl font-bold text-primary-600">100+</div>
                <div class="text-gray-600 dark:text-gray-300">博客文章</div>
              </div>
            </UPageCard>

            <UPageCard
              class="p-6 text-center hover:shadow-lg transition-all duration-300"
            >
              <div class="space-y-2">
                <div class="text-3xl font-bold text-primary-600">1K+</div>
                <div class="text-gray-600 dark:text-gray-300">GitHub Stars</div>
              </div>
            </UPageCard>
          </div>
        </div>
      </section>

      <!-- 最新文章 -->
      <section v-reveal class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            最新文章
          </h2>
          <p class="text-xl text-gray-600 dark:text-gray-300">
            分享我的技术思考和实践经验
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <UPageCard
            v-for="article in articles"
            :key="article.id"
            class="group hover:shadow-xl transition-all duration-300 cursor-pointer"
          >
            <div class="p-6 space-y-4">
              <div
                class="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400"
              >
                <div>{{ formatDate(article.date) }}</div>
                <UBadge variant="soft">{{ article.category }}</UBadge>
              </div>

              <h3
                class="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-primary-600 transition-colors"
              >
                {{ article.title }}
              </h3>

              <p class="text-gray-600 dark:text-gray-300 line-clamp-3">
                {{ article.description }}
              </p>

              <div class="flex items-center justify-between">
                <div class="text-sm text-gray-500 dark:text-gray-400">
                  阅读时间: {{ article.readTime }} 分钟
                </div>
                <UIcon
                  name="i-lucide-arrow-right"
                  class="w-4 h-4 text-primary-600 group-hover:translate-x-1 transition-transform"
                />
              </div>
            </div>
          </UPageCard>

          <!-- 暂无文章时的占位 -->
          <div
            v-if="articles.length === 0"
            class="col-span-full text-center py-12"
          >
            <UIcon
              name="i-lucide-file-text"
              class="w-16 h-16 text-gray-400 mx-auto mb-4"
            />
            <p class="text-gray-600 dark:text-gray-300">暂无文章</p>
          </div>
        </div>
      </section>

      <!-- 精选项目 -->
      <section v-reveal class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            精选项目
          </h2>
          <p class="text-xl text-gray-600 dark:text-gray-300">
            展示我的代表性作品
          </p>
        </div>

        <div class="grid md:grid-cols-2 gap-8">
          <UPageCard
            v-for="project in projects"
            :key="project.id"
            class="group hover:shadow-xl transition-all duration-300"
          >
            <div class="p-8 space-y-6">
              <div class="flex items-start justify-between">
                <div class="flex items-center space-x-3">
                  <div
                    class="w-12 h-12 bg-gradient-to-br from-primary-500 to-blue-600 rounded-lg flex items-center justify-center"
                  >
                    <UIcon name="i-lucide-folder" class="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3
                      class="text-xl font-semibold text-gray-900 dark:text-white"
                    >
                      {{ project.name }}
                    </h3>
                    <p class="text-gray-500 dark:text-gray-400">
                      {{ project.type }}
                    </p>
                  </div>
                </div>
                <UIcon
                  name="i-lucide-external-link"
                  class="w-5 h-5 text-gray-400 group-hover:text-primary-600 transition-colors"
                />
              </div>

              <p class="text-gray-600 dark:text-gray-300">
                {{ project.description }}
              </p>

              <div class="flex flex-wrap gap-2">
                <UBadge
                  v-for="tag in project.tags"
                  :key="tag"
                  variant="outline"
                  size="sm"
                >
                  {{ tag }}
                </UBadge>
              </div>

              <div
                class="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700"
              >
                <div
                  class="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400"
                >
                  <div class="flex items-center space-x-1">
                    <UIcon name="i-lucide-star" class="w-4 h-4" />
                    <div>{{ project.stars }}</div>
                  </div>
                  <div class="flex items-center space-x-1">
                    <UIcon name="i-lucide-git-fork" class="w-4 h-4" />
                    <div>{{ project.forks }}</div>
                  </div>
                </div>
                <UButton variant="ghost" size="sm"> 查看详情 </UButton>
              </div>
            </div>
          </UPageCard>
        </div>
      </section>

      <!-- 联系我 -->
      <section v-reveal class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          class="bg-gradient-to-r from-primary-600 to-blue-600 rounded-3xl p-12 text-center text-white"
        >
          <h2 class="text-4xl font-bold mb-6">让我们一起创造</h2>
          <p class="text-xl mb-8 opacity-90">
            如果你有有趣的项目想法，或者想要技术交流，随时联系我！
          </p>

          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <UButton
              to="mailto:contact@example.com"
              size="xl"
              variant="solid"
              class="px-8 py-4 text-lg font-semibold bg-white text-primary-600 hover:bg-gray-50"
            >
              <UIcon name="i-lucide-mail" class="w-5 h-5 mr-2" />
              发送邮件
            </UButton>
            <UButton
              to="https://github.com"
              size="xl"
              variant="outline"
              class="px-8 py-4 text-lg font-semibold border-white text-white hover:bg-white hover:text-primary-600"
            >
              <UIcon name="i-lucide-github" class="w-5 h-5 mr-2" />
              GitHub
            </UButton>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
/**
 * 首页组件的逻辑部分
 * 包含页面数据和工具函数
 */

// 页面元数据
useSeoMeta({
  title: "CXZ - 前端工程师 & 产品设计师",
  description: "专注于创造优雅的数字体验，分享技术思考和产品洞察",
  ogTitle: "CXZ - 前端工程师 & 产品设计师",
  ogDescription: "专注于创造优雅的数字体验，分享技术思考和产品洞察",
  ogImage: "/og-image.jpg",
  twitterCard: "summary_large_image",
})

// 模拟文章数据
const articles = ref([
  {
    id: 1,
    title: "Vue 3 Composition API 最佳实践",
    description:
      "深入探讨 Vue 3 Composition API 的使用技巧和最佳实践，帮助你写出更优雅的代码。",
    category: "Vue.js",
    date: new Date("2024-01-15"),
    readTime: 8,
  },
  {
    id: 2,
    title: "Nuxt 4 新特性详解",
    description:
      "全面解析 Nuxt 4 的新特性，包括性能优化、开发体验提升等方面的改进。",
    category: "Nuxt.js",
    date: new Date("2024-01-10"),
    readTime: 12,
  },
  {
    id: 3,
    title: "TypeScript 进阶技巧",
    description:
      "分享一些 TypeScript 的高级用法和技巧，让你的代码更加类型安全。",
    category: "TypeScript",
    date: new Date("2024-01-05"),
    readTime: 10,
  },
])

// 模拟项目数据
const projects = ref([
  {
    id: 1,
    name: "Vue Admin Dashboard",
    type: "Web 应用",
    description:
      "基于 Vue 3 和 TypeScript 构建的现代化管理后台，具有丰富的组件和完善的权限系统。",
    tags: ["Vue.js", "TypeScript", "Element Plus"],
    stars: 1200,
    forks: 300,
  },
  {
    id: 2,
    name: "Nuxt Blog Template",
    type: "模板项目",
    description:
      "使用 Nuxt 3 和 Nuxt Content 构建的博客模板，支持 Markdown 写作和 SEO 优化。",
    tags: ["Nuxt.js", "Nuxt Content", "Tailwind CSS"],
    stars: 800,
    forks: 150,
  },
])

/**
 * 格式化日期显示
 * @param date - 日期对象
 * @returns 格式化后的日期字符串
 */
const formatDate = (date: Date): string => {
  return new Intl.DateTimeFormat("zh-CN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date)
}
</script>

<style scoped>
@reference "~/assets/css/main.css";

/* 文本截断效果 */
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* 自定义滚动条（可选） */
::-webkit-scrollbar {
  width: 6px;
}

::-webkit-scrollbar-track {
  @apply bg-gray-100 dark:bg-gray-800;
}

::-webkit-scrollbar-thumb {
  @apply bg-gray-300 dark:bg-gray-600 rounded-full;
}

::-webkit-scrollbar-thumb:hover {
  @apply bg-gray-400 dark:bg-gray-500;
}
</style>
