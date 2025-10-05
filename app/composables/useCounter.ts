/**
 * 计数器组合式函数
 */
export const useCounter = () => {
  const count = ref(0)

  const increment = () => {
    count.value++
  }

  const decrement = () => {
    count.value--
  }

  const reset = () => {
    count.value = 0
  }

  return {
    count: readonly(count),
    increment,
    decrement,
    reset,
  }
}