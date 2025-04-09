<template>
  <div class="bg-light vh-100 p-3">
    <ul class="nav flex-column">
      <li class="nav-item" v-for="item in menu" :key="item.label">
        <RouterLink :to="item.to" class="nav-link">
          {{ item.label }}
        </RouterLink>
      </li>
    </ul>
  </div>
</template>

<script setup>
const menu = [
  { label: 'Dashboard', to: '/admin' },
  { label: 'Món ăn', to: '/admin/foods' }
]
</script>