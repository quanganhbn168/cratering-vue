<template>
    <div class="wrapper">
      <Header @toggle-sidebar="toggleSidebar" />
      <Sidebar />
      <div class="content-wrapper">
        <slot />
      </div>
      <Footer />
    </div>
  </template>
  
  <script setup>
  import { onMounted } from 'vue'
  import Header from './Header.vue'
  import Sidebar from './Sidebar.vue'
  import Footer from './Footer.vue'
  
  const toggleSidebar = () => {
    document.body.classList.toggle('sidebar-collapse')
  }
  
  onMounted(() => {
    document.body.classList.add('hold-transition', 'sidebar-mini', 'layout-fixed')
  })
  </script>
  