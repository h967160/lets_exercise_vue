<script setup>
import LayoutNav from './components/layout-nav.vue'
import LayoutFooter from './components/layout-footer.vue'
</script>
<template>
  <div>
    <LayoutNav />
    <RouterView />
    <LayoutFooter />
  </div>
</template>
