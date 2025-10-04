<!--
  组件展示页面
  
  展示各种 Nuxt UI 组件的使用方法和效果
-->
<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900">
    <div class="container mx-auto px-4 py-8">
      <!-- 返回按钮 -->
      <div class="mb-6">
        <UButton
          to="/"
          icon="i-lucide-arrow-left"
          variant="ghost"
          color="neutral"
        >
          返回首页
        </UButton>
      </div>

      <!-- 页面标题 -->
      <div class="text-center mb-12">
        <h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          组件展示
        </h1>
        <p class="text-xl text-gray-600 dark:text-gray-300">
          探索 Nuxt UI 组件库的强大功能
        </p>
      </div>

      <!-- 组件展示区域 -->
      <div class="space-y-12">
        <!-- 按钮组件 -->
        <section>
          <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            按钮组件
          </h2>
          <UCard>
            <div class="space-y-6">
              <!-- 基础按钮 -->
              <div>
                <h3
                  class="text-lg font-semibold mb-4 text-gray-900 dark:text-white"
                >
                  基础按钮
                </h3>
                <div class="flex flex-wrap gap-4">
                  <UButton>默认按钮</UButton>
                  <UButton color="primary">主要按钮</UButton>
                  <UButton color="secondary">次要按钮</UButton>
                  <UButton color="success">成功按钮</UButton>
                  <UButton color="warning">警告按钮</UButton>
                  <UButton color="error">错误按钮</UButton>
                </div>
              </div>

              <!-- 按钮变体 -->
              <div>
                <h3
                  class="text-lg font-semibold mb-4 text-gray-900 dark:text-white"
                >
                  按钮变体
                </h3>
                <div class="flex flex-wrap gap-4">
                  <UButton variant="solid">实心按钮</UButton>
                  <UButton variant="outline">轮廓按钮</UButton>
                  <UButton variant="ghost">幽灵按钮</UButton>
                  <UButton variant="link">链接按钮</UButton>
                </div>
              </div>

              <!-- 带图标的按钮 -->
              <div>
                <h3
                  class="text-lg font-semibold mb-4 text-gray-900 dark:text-white"
                >
                  带图标的按钮
                </h3>
                <div class="flex flex-wrap gap-4">
                  <UButton icon="i-lucide-plus">添加</UButton>
                  <UButton icon="i-lucide-edit">编辑</UButton>
                  <UButton icon="i-lucide-trash" color="error">删除</UButton>
                  <UButton icon="i-lucide-download" variant="outline"
                    >下载</UButton
                  >
                </div>
              </div>
            </div>
          </UCard>
        </section>

        <!-- 输入组件 -->
        <section>
          <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            输入组件
          </h2>
          <UCard>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div class="space-y-4">
                <UInput
                  v-model="formData.name"
                  placeholder="请输入姓名"
                  label="姓名"
                />
                <UInput
                  v-model="formData.email"
                  type="email"
                  placeholder="请输入邮箱"
                  label="邮箱"
                  icon="i-lucide-mail"
                />
                <UTextarea
                  v-model="formData.message"
                  placeholder="请输入消息"
                  label="消息"
                  :rows="4"
                />
              </div>
              <div class="space-y-4">
                <USelect
                  v-model="formData.category"
                  :options="categoryOptions"
                  placeholder="选择分类"
                  label="分类"
                />
                <UCheckbox v-model="formData.agree" label="我同意服务条款" />
                <URadioGroup
                  v-model="formData.priority"
                  :options="priorityOptions"
                  label="优先级"
                />
              </div>
            </div>
          </UCard>
        </section>

        <!-- 反馈组件 -->
        <section>
          <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            反馈组件
          </h2>
          <UCard>
            <div class="space-y-6">
              <!-- 通知按钮 -->
              <div>
                <h3
                  class="text-lg font-semibold mb-4 text-gray-900 dark:text-white"
                >
                  通知
                </h3>
                <div class="flex flex-wrap gap-4">
                  <UButton @click="showNotification('success')"
                    >成功通知</UButton
                  >
                  <UButton color="info" @click="showNotification('info')"
                    >信息通知</UButton
                  >
                  <UButton color="warning" @click="showNotification('warning')"
                    >警告通知</UButton
                  >
                  <UButton color="error" @click="showNotification('error')"
                    >错误通知</UButton
                  >
                </div>
              </div>

              <!-- 徽章 -->
              <div>
                <h3
                  class="text-lg font-semibold mb-4 text-gray-900 dark:text-white"
                >
                  徽章
                </h3>
                <div class="flex flex-wrap gap-4 items-center">
                  <UBadge>默认</UBadge>
                  <UBadge color="primary">主要</UBadge>
                  <UBadge color="success">成功</UBadge>
                  <UBadge color="warning">警告</UBadge>
                  <UBadge color="error">错误</UBadge>
                  <UBadge variant="outline">轮廓</UBadge>
                </div>
              </div>

              <!-- 进度条 -->
              <div>
                <h3
                  class="text-lg font-semibold mb-4 text-gray-900 dark:text-white"
                >
                  进度条
                </h3>
                <div class="space-y-4">
                  <UProgress :value="progressValue" />
                  <UProgress :value="75" color="success" />
                  <UProgress :value="50" color="warning" />
                  <UProgress :value="25" color="error" />
                </div>
              </div>
            </div>
          </UCard>
        </section>

        <!-- 数据展示组件 -->
        <section>
          <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            数据展示
          </h2>
          <UCard>
            <div class="space-y-6">
              <!-- 表格 -->
              <div>
                <h3
                  class="text-lg font-semibold mb-4 text-gray-900 dark:text-white"
                >
                  表格
                </h3>
                <UTable :rows="tableData" :data="tableColumns" />
              </div>

              <!-- 头像 -->
              <div>
                <h3
                  class="text-lg font-semibold mb-4 text-gray-900 dark:text-white"
                >
                  头像
                </h3>
                <div class="flex gap-4 items-center">
                  <UAvatar
                    src="https://avatars.githubusercontent.com/u/739984?v=4"
                    alt="Avatar"
                  />
                  <UAvatar
                    src="https://avatars.githubusercontent.com/u/904724?v=4"
                    alt="Avatar"
                    size="lg"
                  />
                  <UAvatar text="JD" color="primary" />
                  <UAvatar text="AB" color="success" size="sm" />
                </div>
              </div>
            </div>
          </UCard>
        </section>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
/**
 * 组件展示页面逻辑
 */

// 页面元数据
useHead({
  title: "组件展示",
  meta: [
    {
      name: "description",
      content: "展示 Nuxt UI 组件库中各种组件的使用方法和效果",
    },
  ],
});

// 表单数据
const formData = reactive({
  name: "",
  email: "",
  message: "",
  category: "",
  agree: false,
  priority: "medium",
});

// 选择器选项
const categoryOptions = [
  { label: "技术支持", value: "tech" },
  { label: "销售咨询", value: "sales" },
  { label: "产品反馈", value: "feedback" },
  { label: "其他", value: "other" },
];

const priorityOptions = [
  { label: "低", value: "low" },
  { label: "中", value: "medium" },
  { label: "高", value: "high" },
];

// 进度条值
const progressValue = ref(60);

// 表格数据
const tableColumns: Array<{
  key: string;
  label: string;
}> = [
  { key: "name", label: "姓名" },
  { key: "email", label: "邮箱" },
  { key: "role", label: "角色" },
  { key: "status", label: "状态" },
];

const tableData = [
  {
    name: "张三",
    email: "zhangsan@example.com",
    role: "管理员",
    status: "活跃",
  },
  {
    name: "李四",
    email: "lisi@example.com",
    role: "用户",
    status: "活跃",
  },
  {
    name: "王五",
    email: "wangwu@example.com",
    role: "用户",
    status: "非活跃",
  },
];

/**
 * 显示通知
 */
const showNotification = (type: "success" | "info" | "warning" | "error") => {
  const messages = {
    success: "操作成功！",
    info: "这是一条信息通知",
    warning: "请注意这个警告",
    error: "发生了一个错误",
  };

  // 简单的通知实现，实际项目中可以使用 Nuxt UI 的 Toast 组件
  alert(messages[type]);
};

// 定时更新进度条
onMounted(() => {
  const interval = setInterval(() => {
    progressValue.value = (progressValue.value + 10) % 100;
  }, 2000);

  onUnmounted(() => {
    clearInterval(interval);
  });
});
</script>

<style scoped>
/**
 * 页面特定样式
 */
</style>
