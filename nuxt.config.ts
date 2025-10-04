// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },

  // 模块配置 - 按推荐顺序排列
  modules: [
    "@nuxt/ui", // UI 组件库，需要在其他模块之前
    "@nuxt/content", // 内容管理
    "@nuxt/image", // 图片优化
    "@nuxt/eslint", // 代码检查
  ],

  // CSS 配置
  css: ["~/assets/css/main.css"],

  fonts: {
    provider: "bunny",
    families: [
      { name: "Roboto", weights: [400, 700] },
      { name: "Inter", weights: [400, 600] },
    ],
  },

  // Nuxt Content 配置
  content: {
    // 实验性功能配置
    experimental: {
      // 使用原生 SQLite 连接器
      // Node.js v22.15.0 完全支持原生 SQLite
      sqliteConnector: "native",
    },

    // 内容监听配置（开发模式下的热重载）
    watch: {
      enabled: true,
      port: 4000,
      showURL: false,
    },
  },

  // TypeScript 配置
  typescript: {
    strict: true,
    typeCheck: false, // 可以设置为 true 启用构建时类型检查
  },

  // 运行时配置
  runtimeConfig: {
    // 私有配置（仅服务端可访问）
    apiSecret: "",

    // 公共配置（客户端和服务端都可访问）
    public: {
      baseURL: "/",
      siteName: "My Awesome Nuxt App",
    },
  },

  // 应用配置
  app: {
    head: {
      title: "My Awesome Nuxt App",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          name: "description",
          content: "A modern Nuxt 4 application with Nuxt UI",
        },
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },
  },

  // 自动导入配置
  imports: {
    dirs: ["composables", "utils", "stores"],
  },

  // 组件自动注册配置
  components: [
    {
      path: "~/components",
      pathPrefix: false,
    },
  ],

  // Vite 配置
  vite: {
    vue: {
      features: {
        propsDestructure: true,
      },
    },
    plugins: [tailwindcss()],
  },
});
