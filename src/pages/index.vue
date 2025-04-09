<script setup>
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

onMounted(() => {
  router.replace('/user')
})
</script>

<template>
  <div>Đang chuyển hướng...</div>
</template>
