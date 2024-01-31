<script setup>
import LayoutNav from './Layout/components/layout-nav.vue'
import LayoutFooter from './Layout/components/layout-footer.vue'
</script>
<template>
  <div>
    <LayoutNav />
    <RouterView />
    <LayoutFooter />
  </div>
</template>
