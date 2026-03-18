<template>
  <div class="app-root">
    <NavBar />
    <div class="app-main">
      <RouterView />
    </div>
  </div>
</template>

<script setup>
import NavBar from '@/components/NavBar.vue'
</script>

<style lang="scss">
@use '../styles/scss/global/variables' as *;

.app-root {
  min-height: 100vh;
}
.app-main {
  padding-top: 76px; /* reserve space for fixed header (12px top bar + 64px main) */
  background: $er-white;
}
.page-content {
  min-height: calc(100vh - 76px);
}

/* Shared primary button – use .app-btn on <a> or <button> */
.app-btn {
  display: inline-block;
  font-family: 'Poppins', sans-serif;
  font-size: 0.9rem;
  font-weight: 700;
  color: $navy;
  text-decoration: none;
  padding: 0.65rem 1.5rem;
  background: $teal-ui;
  border: none;
  border-radius: $radius-md;
  cursor: pointer;
  transition: background 0.2s, transform 0.15s, color 0.2s;
  text-align: center;
  line-height: 1.25;
}
.app-btn:hover {
  background: $teal-ui-hover;
  transform: translateY(-2px);
  color: $navy;
}
.app-btn:active {
  transform: translateY(0);
}
.app-btn:focus-visible {
  outline: 2px solid $navy;
  outline-offset: 2px;
}
</style>
