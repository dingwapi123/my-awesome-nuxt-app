/**
 * 自定义异步数据获取组合式函数
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

  const refresh = () => execute()

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
    refresh,
  }
}