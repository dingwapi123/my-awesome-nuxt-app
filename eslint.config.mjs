// @ts-check
import withNuxt from "./.nuxt/eslint.config.mjs"

export default withNuxt(
  // Your custom configs here
  {
    rules: {
      // 禁止 HTML 自闭合空元素（如 <br/>），应使用 <br>
      "vue/html-self-closing": ["never"],
    },
  }
)
