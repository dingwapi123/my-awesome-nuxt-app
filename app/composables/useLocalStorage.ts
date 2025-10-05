/**
 * 本地存储组合式函数
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

  const setValue = (value: T) => {
    storedValue.value = value
  }

  const removeValue = () => {
    if (import.meta.client) {
      localStorage.removeItem(key)
    }
    storedValue.value = defaultValue
  }

  return {
    value: storedValue,
    setValue,
    removeValue,
  }
}