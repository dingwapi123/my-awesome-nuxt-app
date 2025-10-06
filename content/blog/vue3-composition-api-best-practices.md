---
title: "Vue 3 Composition API 最佳实践"
description: "深入探讨 Vue 3 Composition API 的使用技巧和最佳实践，帮助你写出更优雅的代码。"
date: "2024-01-15"
author: "CXZ"
tags: ["Vue.js", "Composition API", "最佳实践"]
category: "Vue.js"
---

# Vue 3 Composition API 最佳实践

Vue 3 的 Composition API 为我们提供了更灵活、更强大的组件逻辑组织方式。本文将分享一些在实际项目中总结的最佳实践。

## 1. 逻辑复用与组合

### 使用 Composables 抽取可复用逻辑

```typescript
// composables/useCounter.ts
export function useCounter(initialValue = 0) {
  const count = ref(initialValue)
  
  const increment = () => count.value++
  const decrement = () => count.value--
  const reset = () => count.value = initialValue
  
  return {
    count: readonly(count),
    increment,
    decrement,
    reset
  }
}
```

### 在组件中使用

```vue
<script setup lang="ts">
const { count, increment, decrement, reset } = useCounter(10)
</script>
```

## 2. 响应式数据管理

### 合理使用 ref 和 reactive

- **ref**: 适用于基本类型和单一值
- **reactive**: 适用于对象和数组

```typescript
// ✅ 推荐
const count = ref(0)
const user = reactive({
  name: 'John',
  age: 30
})

// ❌ 不推荐
const count = reactive({ value: 0 })
const name = ref({ value: 'John' })
```

## 3. 生命周期钩子的使用

```typescript
import { onMounted, onUnmounted } from 'vue'

export function useEventListener(target: EventTarget, event: string, handler: Function) {
  onMounted(() => target.addEventListener(event, handler))
  onUnmounted(() => target.removeEventListener(event, handler))
}
```

## 4. 计算属性和侦听器

### 计算属性的最佳实践

```typescript
// ✅ 推荐：纯函数，无副作用
const fullName = computed(() => `${firstName.value} ${lastName.value}`)

// ❌ 避免：在计算属性中执行副作用
const badComputed = computed(() => {
  // 不要在这里发送请求或修改其他状态
  api.updateUser() // ❌
  return someValue.value
})
```

### 侦听器的使用

```typescript
// 侦听单个源
watch(count, (newVal, oldVal) => {
  console.log(`count changed from ${oldVal} to ${newVal}`)
})

// 侦听多个源
watch([firstName, lastName], ([newFirst, newLast], [oldFirst, oldLast]) => {
  console.log('Name changed')
})

// 立即执行
watchEffect(() => {
  console.log(`Count is ${count.value}`)
})
```

## 5. TypeScript 集成

### 为 Composables 添加类型

```typescript
interface User {
  id: number
  name: string
  email: string
}

export function useUser() {
  const user = ref<User | null>(null)
  const loading = ref(false)
  
  const fetchUser = async (id: number): Promise<void> => {
    loading.value = true
    try {
      const response = await api.getUser(id)
      user.value = response.data
    } finally {
      loading.value = false
    }
  }
  
  return {
    user: readonly(user),
    loading: readonly(loading),
    fetchUser
  }
}
```

## 总结

Composition API 的核心优势在于：

1. **更好的逻辑复用**：通过 composables 实现跨组件的逻辑共享
2. **更清晰的代码组织**：相关逻辑可以组织在一起
3. **更好的 TypeScript 支持**：类型推导更加准确
4. **更灵活的组合方式**：可以根据需要组合不同的功能

掌握这些最佳实践，能够帮助你写出更加优雅、可维护的 Vue 3 代码。