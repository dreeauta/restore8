<template>
  <header class="hdr">
    <div class="hdr-top-bar" aria-hidden="true"></div>
    <div class="hdr-main">
      <RouterLink to="/" class="hdr-logo">Logo</RouterLink>
    <nav class="hdr-nav" aria-label="Main navigation">
      <a href="#services" class="hdr-link">Interior</a>
      <a href="#services" class="hdr-link">Exterior</a>
      <RouterLink to="/projects" class="hdr-link">Custom</RouterLink>
      <RouterLink to="/contact" class="hdr-link">Contact</RouterLink>
    </nav>
    <div class="hdr-actions">
      <RouterLink to="/contact" class="hdr-btn hdr-btn-primary">Request a Quote</RouterLink>
      <a href="tel:+15551234567" class="hdr-btn hdr-btn-ghost">Call Us</a>
    </div>
    <button
      type="button"
      class="hdr-menu"
      aria-label="Toggle menu"
      :aria-expanded="menuOpen"
      @click="menuOpen = !menuOpen"
    >
      <span></span>
      <span></span>
      <span></span>
    </button>
    </div>
    <Transition name="fade">
      <div v-if="menuOpen" class="hdr-overlay" @click="menuOpen = false">
        <nav class="hdr-mobile" @click.stop aria-label="Mobile navigation">
          <a href="#services" class="hdr-link" @click="menuOpen = false">Interior</a>
          <a href="#services" class="hdr-link" @click="menuOpen = false">Exterior</a>
          <RouterLink to="/projects" class="hdr-link" @click="menuOpen = false">Custom</RouterLink>
          <RouterLink to="/contact" class="hdr-link" @click="menuOpen = false">Contact</RouterLink>
          <RouterLink to="/contact" class="hdr-link" @click="menuOpen = false">Request a Quote</RouterLink>
          <a href="tel:+15551234567" class="hdr-link" @click="menuOpen = false">Call Us</a>
        </nav>
      </div>
    </Transition>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

const menuOpen = ref(false)
</script>

<style lang="scss" scoped>
@use '../../styles/scss/global/variables' as *;

$hdr-top-bg: #343632;
$hdr-main-bg: #ebeae4;
$hdr-text: #333333;
$hdr-link: #4a4a4a;
$hdr-btn-primary-bg: #2e433f;

.hdr {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  font-family: 'Inter', sans-serif;
}

.hdr-top-bar {
  width: 100%;
  height: 12px;
  background: $hdr-top-bg;
  flex-shrink: 0;
}

.hdr-main {
  height: 64px;
  padding: 0 1.5rem;
  display: flex;
  align-items: center;
  background: $hdr-main-bg;
  border-bottom: 1px solid rgba($hdr-text, 0.08);
}

.hdr-logo {
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.5rem;
  font-weight: 700;
  color: $hdr-text;
  text-decoration: none;
  margin-right: 2rem;
  flex-shrink: 0;
}

.hdr-nav {
  display: none;
  align-items: center;
  gap: 1.75rem;
}

.hdr-link {
  color: $hdr-link;
  text-decoration: none;
  font-size: 0.9375rem;
  font-weight: 500;
  white-space: nowrap;
}
.hdr-link:hover,
.hdr-link.router-link-active {
  color: $hdr-text;
}

.hdr-actions {
  margin-left: auto;
  display: flex;
  align-items: center;
  gap: 12px;
  flex-shrink: 0;
}

.hdr-btn {
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 0.9375rem;
  font-weight: 500;
  text-decoration: none;
  white-space: nowrap;
  border: none;
}
.hdr-btn-primary {
  background: $hdr-btn-primary-bg;
  color: #fff;
}
.hdr-btn-primary:hover {
  background: darken($hdr-btn-primary-bg, 6%);
  color: #fff;
}
.hdr-btn-ghost {
  background: transparent;
  color: $hdr-text;
}
.hdr-btn-ghost:hover {
  color: $hdr-link;
}

.hdr-menu {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 4px;
  margin-left: 0.5rem;
  padding: 6px;
  background: none;
  border: none;
  cursor: pointer;
}
.hdr-menu span {
  width: 18px;
  height: 1.5px;
  background: $hdr-text;
}

.hdr-overlay {
  position: fixed;
  inset: 0;
  top: 76px;
  background: $hdr-btn-primary-bg;
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: center;
}
.hdr-mobile {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.25rem;
}
.hdr-mobile .hdr-link {
  color: #fff;
  padding: 0.5rem 1rem;
}
.hdr-mobile .hdr-link:hover {
  color: $hdr-main-bg;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.15s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

@media (min-width: 768px) {
  .hdr-nav {
    display: flex;
  }
  .hdr-menu {
    display: none;
  }
  .hdr-overlay {
    display: none !important;
  }
}
</style>