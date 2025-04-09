<script setup>
import { useRoute } from 'vue-router'
import DefaultLayout from './layouts/default.vue'
import DashboardLayout from './layouts/dashboard.vue'

const route = useRoute()

const layoutMap = {
  dashboard: DashboardLayout,
  default: DefaultLayout
}
</script>

<template>
  <component :is="layoutMap[route.meta.layout || 'default']">
    <RouterView />
  </component>
</template>
