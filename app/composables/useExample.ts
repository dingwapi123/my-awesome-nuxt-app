/**
 * 示例组合式函数
 * 
 * 展示如何在 Nuxt 4 中创建和使用组合式函数
 * 这个文件会被自动导入，无需手动 import
 */

/**
 * 计数器组合式函数
 * 
 * 提供计数器的状态和操作方法
 */
export const useCounter = () => {
  const count = ref(0)

  /**
   * 增加计数
   */
  const increment = () => {
    count.value++
  }

  /**
   * 减少计数
   */
  const decrement = () => {
    count.value--
  }

  /**
   * 重置计数
   */
  const reset = () => {
    count.value = 0
  }

  return {
    count: readonly(count),
    increment,
    decrement,
    reset
  }
}

/**
 * 本地存储组合式函数
 * 
 * 提供本地存储的读写功能
 */
export const useLocalStorage = <T>(key: string, defaultValue: T) => {
  const storedValue = ref<T>(defaultValue)

  // 在客户端初始化时读取本地存储
  onMounted(() => {
    const item = localStorage.getItem(key)
    if (item) {
      try {
        storedValue.value = JSON.parse(item)
      } catch (error) {
        console.warn(`Error parsing localStorage key "${key}":`, error)
        storedValue.value = defaultValue
      }
    }
  })

  // 监听值的变化并保存到本地存储
  watch(
    storedValue,
    (newValue) => {
      if (import.meta.client) {
        localStorage.setItem(key, JSON.stringify(newValue))
      }
    },
    { deep: true }
  )

  /**
   * 设置值
   */
  const setValue = (value: T) => {
    storedValue.value = value
  }

  /**
   * 移除存储的值
   */
  const removeValue = () => {
    if (import.meta.client) {
      localStorage.removeItem(key)
    }
    storedValue.value = defaultValue
  }

  return {
    value: storedValue,
    setValue,
    removeValue
  }
}

/**
 * 自定义异步数据获取组合式函数
 * 
 * 重命名为 useCustomAsyncData 避免与 Nuxt 内置函数冲突
 */
export const useCustomAsyncData = <T>(
  key: string,
  fetcher: () => Promise<T>,
  options: {
    default?: () => T
    server?: boolean
    client?: boolean
  } = {}
) => {
  const data = ref<T | null>(null)
  const pending = ref(false)
  const error = ref<Error | null>(null)

  /**
   * 执行数据获取
   */
  const execute = async () => {
    pending.value = true
    error.value = null

    try {
      const result = await fetcher()
      data.value = result
    } catch (err) {
      error.value = err as Error
      if (options.default) {
        data.value = options.default()
      }
    } finally {
      pending.value = false
    }
  }

  /**
   * 刷新数据
   */
  const refresh = () => {
    return execute()
  }

  // 根据选项决定是否在服务端或客户端执行
  if (options.server !== false && import.meta.server) {
    execute()
  } else if (options.client !== false && import.meta.client) {
    onMounted(() => {
      execute()
    })
  }

  return {
    data: readonly(data),
    pending: readonly(pending),
    error: readonly(error),
    refresh
  }
}

/**
 * 防抖组合式函数
 * 
 * 提供防抖功能
 */
export const useDebounce = <T extends (...args: unknown[]) => unknown>(
  fn: T,
  delay: number = 300
) => {
  let timeoutId: ReturnType<typeof setTimeout> | null = null

  const debouncedFn = (...args: Parameters<T>) => {
    if (timeoutId) {
      clearTimeout(timeoutId)
    }

    timeoutId = setTimeout(() => {
      fn(...args)
    }, delay)
  }

  /**
   * 取消防抖
   */
  const cancel = () => {
    if (timeoutId) {
      clearTimeout(timeoutId)
      timeoutId = null
    }
  }

  // 组件卸载时清理定时器
  onUnmounted(() => {
    cancel()
  })

  return {
    debouncedFn: debouncedFn as T,
    cancel
  }
}

/**
 * 简化的主题管理组合式函数
 * 
 * 提供基础的主题切换功能
 */
export const useSimpleTheme = () => {
  const isDark = ref(false)

  /**
   * 切换颜色模式
   */
  const toggleColorMode = () => {
    isDark.value = !isDark.value
    if (import.meta.client) {
      document.documentElement.classList.toggle('dark', isDark.value)
    }
  }

  /**
   * 设置颜色模式
   */
  const setColorMode = (mode: 'light' | 'dark') => {
    isDark.value = mode === 'dark'
    if (import.meta.client) {
      document.documentElement.classList.toggle('dark', isDark.value)
    }
  }

  return {
    isDark,
    toggleColorMode,
    setColorMode
  }
}