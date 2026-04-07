<template>
  <div class="app-root">
    <NavBar />
    <div class="app-main">
      <RouterView />
    </div>
  </div>
</template>

<script setup>
import NavBar from '@er/components/NavBar.vue'
</script>

<style lang="scss" scoped>
.app-root {
  min-height: 100vh;
}
</style>
