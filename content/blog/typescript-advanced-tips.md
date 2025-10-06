---
title: "TypeScript 进阶技巧"
description: "分享一些 TypeScript 的高级用法和技巧，让你的代码更加类型安全。"
date: "2024-01-05"
author: "CXZ"
tags: ["TypeScript", "进阶", "类型安全"]
category: "TypeScript"
---

# TypeScript 进阶技巧

TypeScript 不仅仅是 JavaScript 的超集，它还提供了强大的类型系统。本文将分享一些高级技巧，帮助你写出更加类型安全和优雅的代码。

## 🎯 高级类型操作

### 1. 条件类型 (Conditional Types)

```typescript
// 基础条件类型
type IsString<T> = T extends string ? true : false

type Test1 = IsString<string>  // true
type Test2 = IsString<number>  // false

// 实用的条件类型
type NonNullable<T> = T extends null | undefined ? never : T
type Flatten<T> = T extends (infer U)[] ? U : T

// 示例
type StringArray = string[]
type FlattenedString = Flatten<StringArray>  // string
```

### 2. 映射类型 (Mapped Types)

```typescript
// 基础映射类型
type Readonly<T> = {
  readonly [P in keyof T]: T[P]
}

type Partial<T> = {
  [P in keyof T]?: T[P]
}

// 高级映射类型
type Getters<T> = {
  [K in keyof T as `get${Capitalize<string & K>}`]: () => T[K]
}

interface User {
  name: string
  age: number
}

type UserGetters = Getters<User>
// {
//   getName: () => string
//   getAge: () => number
// }
```

### 3. 模板字面量类型

```typescript
// 基础模板字面量
type EventName<T extends string> = `on${Capitalize<T>}`
type ClickEvent = EventName<'click'>  // 'onClick'

// 复杂的模板字面量
type HTTPMethod = 'GET' | 'POST' | 'PUT' | 'DELETE'
type Endpoint = `/api/${string}`
type APIRoute<M extends HTTPMethod, E extends Endpoint> = `${M} ${E}`

type UserAPI = APIRoute<'GET', '/api/users'>  // 'GET /api/users'

// 实际应用：路由类型
type Route = 
  | '/home'
  | '/about'
  | `/user/${string}`
  | `/post/${string}/edit`

function navigate(route: Route) {
  // 类型安全的路由导航
}
```

## 🔧 实用工具类型

### 1. 深度操作类型

```typescript
// 深度只读
type DeepReadonly<T> = {
  readonly [P in keyof T]: T[P] extends object ? DeepReadonly<T[P]> : T[P]
}

// 深度可选
type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P]
}

// 深度必需
type DeepRequired<T> = {
  [P in keyof T]-?: T[P] extends object ? DeepRequired<T[P]> : T[P]
}
```

### 2. 键值操作类型

```typescript
// 选择特定类型的键
type PickByType<T, U> = {
  [K in keyof T as T[K] extends U ? K : never]: T[K]
}

// 排除特定类型的键
type OmitByType<T, U> = {
  [K in keyof T as T[K] extends U ? never : K]: T[K]
}

interface Example {
  name: string
  age: number
  isActive: boolean
  tags: string[]
}

type StringProps = PickByType<Example, string>  // { name: string }
type NonStringProps = OmitByType<Example, string>  // { age: number, isActive: boolean, tags: string[] }
```

## 🎨 高级模式

### 1. 函数重载与泛型约束

```typescript
// 函数重载
function createElement(tag: 'div'): HTMLDivElement
function createElement(tag: 'span'): HTMLSpanElement
function createElement(tag: 'input'): HTMLInputElement
function createElement(tag: string): HTMLElement
function createElement(tag: string): HTMLElement {
  return document.createElement(tag)
}

// 泛型约束
interface Lengthwise {
  length: number
}

function logLength<T extends Lengthwise>(arg: T): T {
  console.log(arg.length)
  return arg
}

logLength('hello')     // ✅
logLength([1, 2, 3])   // ✅
logLength({ length: 10, value: 3 })  // ✅
// logLength(123)      // ❌ 错误：number 没有 length 属性
```

### 2. 类型守卫 (Type Guards)

```typescript
// 基础类型守卫
function isString(value: unknown): value is string {
  return typeof value === 'string'
}

// 复杂类型守卫
interface User {
  type: 'user'
  name: string
  email: string
}

interface Admin {
  type: 'admin'
  name: string
  permissions: string[]
}

type Person = User | Admin

function isAdmin(person: Person): person is Admin {
  return person.type === 'admin'
}

function handlePerson(person: Person) {
  if (isAdmin(person)) {
    // TypeScript 知道这里 person 是 Admin 类型
    console.log(person.permissions)
  } else {
    // TypeScript 知道这里 person 是 User 类型
    console.log(person.email)
  }
}
```

### 3. 断言函数 (Assertion Functions)

```typescript
// 断言函数
function assertIsNumber(value: unknown): asserts value is number {
  if (typeof value !== 'number') {
    throw new Error('Expected number')
  }
}

function processValue(value: unknown) {
  assertIsNumber(value)
  // TypeScript 现在知道 value 是 number 类型
  return value * 2
}

// 更复杂的断言
function assertHasProperty<T, K extends string>(
  obj: T,
  key: K
): asserts obj is T & Record<K, unknown> {
  if (!(key in obj)) {
    throw new Error(`Property ${key} not found`)
  }
}
```

## 🚀 实际应用场景

### 1. API 响应类型

```typescript
// 通用 API 响应类型
interface APIResponse<T> {
  success: boolean
  data: T
  message?: string
  errors?: string[]
}

// 分页响应
interface PaginatedResponse<T> extends APIResponse<T[]> {
  pagination: {
    page: number
    limit: number
    total: number
    totalPages: number
  }
}

// 使用示例
async function fetchUsers(): Promise<PaginatedResponse<User>> {
  const response = await fetch('/api/users')
  return response.json()
}
```

### 2. 状态管理类型

```typescript
// Redux-like 状态管理
interface State {
  user: User | null
  posts: Post[]
  loading: boolean
}

type ActionType = 
  | 'SET_USER'
  | 'SET_POSTS'
  | 'SET_LOADING'

interface Action<T = any> {
  type: ActionType
  payload: T
}

// 类型安全的 action creators
function setUser(user: User): Action<User> {
  return { type: 'SET_USER', payload: user }
}

function setPosts(posts: Post[]): Action<Post[]> {
  return { type: 'SET_POSTS', payload: posts }
}
```

### 3. 表单验证类型

```typescript
// 表单字段类型
type FormField<T> = {
  value: T
  error?: string
  touched: boolean
}

type FormState<T> = {
  [K in keyof T]: FormField<T[K]>
}

// 验证规则
type ValidationRule<T> = (value: T) => string | undefined

type ValidationRules<T> = {
  [K in keyof T]?: ValidationRule<T[K]>[]
}

// 使用示例
interface LoginForm {
  email: string
  password: string
}

const loginRules: ValidationRules<LoginForm> = {
  email: [
    (value) => !value ? 'Email is required' : undefined,
    (value) => !/\S+@\S+\.\S+/.test(value) ? 'Invalid email' : undefined
  ],
  password: [
    (value) => !value ? 'Password is required' : undefined,
    (value) => value.length < 6 ? 'Password too short' : undefined
  ]
}
```

## 🎯 性能优化技巧

### 1. 类型缓存

```typescript
// 使用类型别名缓存复杂类型
type ComplexType<T> = T extends string 
  ? { type: 'string'; value: T }
  : T extends number
  ? { type: 'number'; value: T }
  : { type: 'other'; value: T }

// 缓存常用类型
type StringType = ComplexType<string>
type NumberType = ComplexType<number>
```

### 2. 避免过度嵌套

```typescript
// ❌ 避免过度嵌套
type BadType<T> = T extends string 
  ? T extends `${infer A}${infer B}` 
    ? B extends `${infer C}${infer D}`
      ? // 更多嵌套...
      : never
    : never
  : never

// ✅ 使用辅助类型
type SplitString<T extends string> = T extends `${infer A}${infer B}` ? [A, B] : [T]
type ProcessString<T extends string> = SplitString<T>
```

## 📚 总结

TypeScript 的高级特性能够帮助我们：

1. **提高代码质量**：通过类型系统捕获潜在错误
2. **增强开发体验**：更好的 IDE 支持和自动补全
3. **改善代码可维护性**：清晰的类型定义作为文档
4. **优化重构过程**：类型系统帮助安全重构

掌握这些高级技巧，能够让你在 TypeScript 项目中游刃有余，写出更加健壮和优雅的代码。

### 推荐资源

- [TypeScript 官方文档](https://www.typescriptlang.org/docs/)
- [TypeScript 深入理解](https://basarat.gitbook.io/typescript/)
- [Type Challenges](https://github.com/type-challenges/type-challenges) - 类型挑战练习