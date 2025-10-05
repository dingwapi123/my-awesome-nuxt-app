/**
 * 简化的主题管理组合式函数（原 useSimpleTheme -> useTheme）
 */
export const useTheme = () => {
  const isDark = ref(false)

  const toggleColorMode = () => {
    isDark.value = !isDark.value
    if (import.meta.client) {
      document.documentElement.classList.toggle('dark', isDark.value)
    }
  }

  const setColorMode = (mode: 'light' | 'dark') => {
    isDark.value = mode === 'dark'
    if (import.meta.client) {
      document.documentElement.classList.toggle('dark', isDark.value)
    }
  }

  return {
    isDark,
    toggleColorMode,
    setColorMode,
  }
}