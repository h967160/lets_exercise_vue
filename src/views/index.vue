<script setup>
import LayoutNav from './layout/components/layout-nav.vue'
import LayoutFooter from './layout/components/layout-footer.vue'
</script>
<template>
  <div>
    <LayoutNav />
    <RouterView />
    <LayoutFooter />
  </div>
</template>
