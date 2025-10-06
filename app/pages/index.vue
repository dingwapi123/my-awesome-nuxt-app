<!--
  首页组件 - 现代化个人博客设计
  
  采用简洁现代的设计风格，优化用户体验和视觉效果
-->
<template>
  <div class="min-h-full">
    <!-- Hero 区域 - 全屏设计 -->
    <section class="relative min-h-screen flex items-center">
      <div
        class="grid lg:grid-cols-2 gap-12 items-center w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <!-- 左侧内容 -->
        <div class="text-center lg:text-left space-y-8">
          <!-- 主标题 -->
          <div v-reveal="{ delay: 100 }" class="space-y-6">
            <h1
              class="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white leading-tight"
            >
              你好，我是 CXZ
            </h1>
            <p
              class="text-xl md:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl mx-auto lg:mx-0"
            >
              前端工程师 & 产品设计师，专注于创造优雅的数字体验。
              <br class="hidden md:block" />
              热爱技术分享，记录成长足迹。
            </p>
          </div>

          <!-- 行动按钮 -->
          <div
            v-reveal="{ delay: 200 }"
            class="flex flex-row gap-3 justify-center lg:justify-start flex-wrap"
          >
            <UButton
              to="/blog"
              size="sm"
              class="px-4 py-2 text-sm font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex-shrink-0"
            >
              <UIcon name="i-lucide-book-open" class="w-4 h-4 mr-1" />
              阅读博客
            </UButton>
            <UButton
              to="/projects"
              variant="outline"
              size="sm"
              class="px-4 py-2 text-sm font-semibold hover:shadow-lg transition-all duration-300 flex-shrink-0"
            >
              <UIcon name="i-lucide-lightbulb" class="w-4 h-4 mr-1" />
              查看项目
            </UButton>
          </div>
        </div>

        <!-- 右侧内容 - 技术图标 -->
        <div class="hidden lg:flex justify-center items-center relative">
          <div
            class="absolute w-72 h-72 bg-primary-500/10 dark:bg-primary-400/10 rounded-full blur-3xl"
          />
          <div
            class="absolute bottom-1/4 right-1/4 w-48 h-48 bg-blue-500/10 dark:bg-blue-400/10 rounded-full blur-3xl"
          />

          <div class="relative grid grid-cols-2 gap-8">
            <div
              class="flex items-center justify-center w-48 h-48 bg-white/50 dark:bg-gray-800/50 backdrop-blur-md rounded-2xl shadow-lg transform hover:scale-105 transition-transform duration-300"
            >
              <UIcon
                name="i-simple-icons-vuedotjs"
                class="w-24 h-24 text-[#4FC08D]"
              />
            </div>
            <div
              class="flex items-center justify-center w-48 h-48 bg-white/50 dark:bg-gray-800/50 backdrop-blur-md rounded-2xl shadow-lg transform hover:scale-105 transition-transform duration-300 mt-16"
            >
              <UIcon
                name="i-simple-icons-nuxtdotjs"
                class="w-24 h-24 text-[#00DC82]"
              />
            </div>
            <div
              class="flex items-center justify-center w-48 h-48 bg-white/50 dark:bg-gray-800/50 backdrop-blur-md rounded-2xl shadow-lg transform hover:scale-105 transition-transform duration-300 -mt-16"
            >
              <UIcon
                name="i-simple-icons-vite"
                class="w-24 h-24 text-[#646CFF]"
              />
            </div>
            <div
              class="flex items-center justify-center w-48 h-48 bg-white/50 dark:bg-gray-800/50 backdrop-blur-md rounded-2xl shadow-lg transform hover:scale-105 transition-transform duration-300"
            >
              <UIcon
                name="i-simple-icons-tailwindcss"
                class="w-24 h-24 text-[#06B6D4]"
              />
            </div>
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
                <div class="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  <!-- Vue.js -->
                  <div
                    class="flex items-center gap-2 p-3 rounded-lg bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800"
                  >
                    <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M24,1.61H14.06L12,5.16,9.94,1.61H0L12,22.39ZM12,14.08,5.16,2.23H9.59L12,6.41l2.41-4.18h4.43Z"
                        fill="#4FC08D"
                      />
                    </svg>
                    <span
                      class="text-sm font-medium text-green-700 dark:text-green-300"
                      >Vue.js</span
                    >
                  </div>

                  <!-- React -->
                  <div
                    class="flex items-center gap-2 p-3 rounded-lg bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800"
                  >
                    <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="2.05" fill="#61dafb" />
                      <g stroke="#61dafb" stroke-width="1" fill="none">
                        <ellipse rx="11" ry="4.2" cx="12" cy="12" />
                        <ellipse
                          rx="11"
                          ry="4.2"
                          cx="12"
                          cy="12"
                          transform="rotate(60 12 12)"
                        />
                        <ellipse
                          rx="11"
                          ry="4.2"
                          cx="12"
                          cy="12"
                          transform="rotate(120 12 12)"
                        />
                      </g>
                    </svg>
                    <span
                      class="text-sm font-medium text-blue-700 dark:text-blue-300"
                      >React</span
                    >
                  </div>

                  <!-- TypeScript -->
                  <div
                    class="flex items-center gap-2 p-3 rounded-lg bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800"
                  >
                    <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0H1.125zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375v-2.166z"
                        fill="#3178C6"
                      />
                    </svg>
                    <span
                      class="text-sm font-medium text-blue-700 dark:text-blue-300"
                      >TypeScript</span
                    >
                  </div>

                  <!-- Nuxt.js -->
                  <div
                    class="flex items-center gap-2 p-3 rounded-lg bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800"
                  >
                    <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none">
                      <title>Nuxt</title>
                      <path
                        d="M13.4642 19.8295h8.9218c.2834 0 .5618-.0723.8072-.2098a1.5899 1.5899 0 0 0 .5908-.5732 1.5293 1.5293 0 0 0 .216-.783 1.529 1.529 0 0 0-.2167-.7828L17.7916 7.4142a1.5904 1.5904 0 0 0-.5907-.573 1.6524 1.6524 0 0 0-.807-.2099c-.2833 0-.5616.0724-.807.2098a1.5904 1.5904 0 0 0-.5907.5731L13.4642 9.99l-2.9954-5.0366a1.5913 1.5913 0 0 0-.591-.573 1.6533 1.6533 0 0 0-.8071-.2098c-.2834 0-.5617.0723-.8072.2097a1.5913 1.5913 0 0 0-.591.573L.2168 17.4808A1.5292 1.5292 0 0 0 0 18.2635c-.0001.2749.0744.545.216.783a1.59 1.59 0 0 0 .5908.5732c.2454.1375.5238.2098.8072.2098h5.6003c2.219 0 3.8554-.9454 4.9813-2.7899l2.7337-4.5922L16.3935 9.99l4.3944 7.382h-5.8586ZM7.123 17.3694l-3.9083-.0009 5.8586-9.8421 2.9232 4.921-1.9572 3.2892c-.7478 1.1967-1.5972 1.6328-2.9163 1.6328z"
                        fill="#4FC08D"
                      />
                    </svg>
                    <span
                      class="text-sm font-medium text-green-700 dark:text-green-300"
                      >Nuxt.js</span
                    >
                  </div>

                  <!-- Node.js -->
                  <div
                    class="flex items-center gap-2 p-3 rounded-lg bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800"
                  >
                    <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M11.998,24c-0.321,0-0.641-0.084-0.922-0.247l-2.936-1.737c-0.438-0.245-0.224-0.332-0.08-0.383 c0.585-0.203,0.703-0.25,1.328-0.604c0.065-0.037,0.151-0.023,0.218,0.017l2.256,1.339c0.082,0.045,0.197,0.045,0.272,0l8.795-5.076 c0.082-0.047,0.134-0.141,0.134-0.238V6.921c0-0.099-0.053-0.192-0.137-0.242l-8.791-5.072c-0.081-0.047-0.189-0.047-0.271,0 L2.46,6.68C2.376,6.729,2.322,6.825,2.322,6.921v10.15c0,0.097,0.054,0.189,0.139,0.235l2.409,1.392 c1.307,0.654,2.108-0.116,2.108-0.89V7.787c0-0.142,0.114-0.253,0.256-0.253h1.115c0.139,0,0.255,0.112,0.255,0.253v10.021 c0,1.745-0.95,2.745-2.604,2.745c-0.508,0-0.909,0-2.026-0.551L2.28,18.675c-0.57-0.329-0.922-0.945-0.922-1.604V6.921 c0-0.659,0.353-1.275,0.922-1.603l8.795-5.082c0.557-0.315,1.296-0.315,1.848,0l8.794,5.082c0.570,0.329,0.924,0.944,0.924,1.603 v10.15c0,0.659-0.354,1.273-0.924,1.604l-8.794,5.078C12.643,23.916,12.324,24,11.998,24z M19.099,13.993 c0-1.9-1.284-2.406-3.987-2.763c-2.731-0.361-3.009-0.548-3.009-1.187c0-0.528,0.235-1.233,2.258-1.233 c1.807,0,2.473,0.389,2.747,1.607c0.024,0.115,0.129,0.199,0.247,0.199h1.141c0.071,0,0.138-0.031,0.186-0.081 c0.048-0.054,0.074-0.123,0.067-0.196c-0.177-2.098-1.571-3.076-4.388-3.076c-2.508,0-4.004,1.058-4.004,2.833 c0,1.925,1.488,2.457,3.895,2.695c2.88,0.282,3.103,0.703,3.103,1.269c0,0.983-0.789,1.402-2.642,1.402 c-2.327,0-2.839-0.584-3.011-1.742c-0.02-0.124-0.126-0.215-0.253-0.215h-1.137c-0.141,0-0.254,0.112-0.254,0.253 c0,1.482,0.806,3.248,4.655,3.248C17.501,17.007,19.099,15.91,19.099,13.993z"
                        fill="#339933"
                      />
                    </svg>
                    <span
                      class="text-sm font-medium text-green-700 dark:text-green-300"
                      >Node.js</span
                    >
                  </div>

                  <!-- Tailwind CSS -->
                  <div
                    class="flex items-center gap-2 p-3 rounded-lg bg-cyan-50 dark:bg-cyan-900/20 border border-cyan-200 dark:border-cyan-800"
                  >
                    <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"
                        fill="#06B6D4"
                      />
                    </svg>
                    <span
                      class="text-sm font-medium text-cyan-700 dark:text-cyan-300"
                      >Tailwind CSS</span
                    >
                  </div>
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
          <NuxtLink
            v-for="article in articles"
            :key="article.id"
            :to="article.path"
            class="block"
          >
            <UPageCard
              class="group hover:shadow-xl transition-all duration-300 cursor-pointer h-full"
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
          </NuxtLink>

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
    path: "/blog/vue3-composition-api-best-practices",
  },
  {
    id: 2,
    title: "Nuxt 4 新特性详解",
    description:
      "全面解析 Nuxt 4 的新特性，包括性能优化、开发体验提升等方面的改进。",
    category: "Nuxt.js",
    date: new Date("2024-01-10"),
    readTime: 12,
    path: "/blog/nuxt4-new-features",
  },
  {
    id: 3,
    title: "TypeScript 进阶技巧",
    description:
      "分享一些 TypeScript 的高级用法和技巧，让你的代码更加类型安全。",
    category: "TypeScript",
    date: new Date("2024-01-05"),
    readTime: 10,
    path: "/blog/typescript-advanced-tips",
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
