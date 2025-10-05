/**
 * 防抖组合式函数
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

  const cancel = () => {
    if (timeoutId) {
      clearTimeout(timeoutId)
      timeoutId = null
    }
  }

  onUnmounted(() => {
    cancel()
  })

  return {
    debouncedFn: debouncedFn as T,
    cancel,
  }
}