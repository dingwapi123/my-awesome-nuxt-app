import { defineContentConfig, defineCollection, z } from '@nuxt/content'

/**
 * Nuxt Content 配置文件
 * 定义内容集合和数据结构
 */
export default defineContentConfig({
  collections: {
    // 博客文章集合
    blog: defineCollection({
      type: 'page',
      source: 'blog/**/*.md',
      // 定义博客文章的前置元数据结构
      schema: z.object({
        title: z.string(),
        description: z.string(),
        date: z.date(),
        author: z.string().optional(),
        tags: z.array(z.string()).optional(),
        image: z.object({
          src: z.string(),
          alt: z.string()
        }).optional(),
        draft: z.boolean().optional().default(false),
      })
    }),

    // 文档集合
    docs: defineCollection({
      type: 'page',
      source: {
        include: 'docs/**/*.md',
        prefix: '/docs'
      },
      // 定义文档的前置元数据结构
      schema: z.object({
        title: z.string(),
        description: z.string(),
        navigation: z.object({
          title: z.string().optional(),
          order: z.number().optional()
        }).optional(),
        links: z.array(z.object({
          label: z.string(),
          to: z.string(),
          icon: z.string().optional(),
          target: z.string().optional()
        })).optional()
      })
    })
  }
})