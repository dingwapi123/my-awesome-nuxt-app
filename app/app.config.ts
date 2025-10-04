/**
 * 应用配置文件
 * 
 * 定义 Nuxt UI 主题配置和应用级别的响应式配置
 * 这些配置可以在运行时更新，并且在客户端和服务端都可访问
 */

export default defineAppConfig({
  // Nuxt UI 主题配置
  ui: {
    // 主色调配置
    colors: {
      primary: 'blue',      // 主色调：蓝色
      secondary: 'slate',   // 次要色调：石板灰
      success: 'green',     // 成功色：绿色
      info: 'sky',          // 信息色：天蓝色
      warning: 'amber',     // 警告色：琥珀色
      error: 'red',         // 错误色：红色
      neutral: 'gray'       // 中性色：灰色
    },
    
    // 图标配置 - 为 ColorModeButton 配置 Lucide 图标
    icons: {
      light: 'i-lucide-sun',    // 亮色模式图标
      dark: 'i-lucide-moon'     // 暗色模式图标
    },
    
    // 全局组件默认配置
    button: {
      // 按钮组件的默认配置
      slots: {
        base: 'transition-all duration-200 ease-in-out'
      }
    },
    
    // 卡片组件配置
    card: {
      slots: {
        root: 'shadow-sm hover:shadow-md transition-shadow duration-200'
      }
    },
    
    // 输入框组件配置
    input: {
      slots: {
        base: 'transition-colors duration-200'
      }
    }
  },
  
  // 应用级别配置
  app: {
    // 网站基本信息
    name: 'My Awesome Nuxt App',
    description: 'A modern Nuxt 4 application with Nuxt UI',
    version: '1.0.0',
    
    // 主题设置
    theme: {
      // 默认颜色模式
      defaultColorMode: 'system', // 'light' | 'dark' | 'system'
      // 是否启用颜色模式切换
      colorModeToggle: true,
      // 主题色配置
      primaryColor: 'blue'
    },
    
    // 布局配置
    layout: {
      // 是否显示页头
      showHeader: true,
      // 是否显示页脚
      showFooter: true,
      // 是否显示侧边栏
      showSidebar: false
    }
  }
})