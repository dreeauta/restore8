<template>
  <header class="site-header">
    <div class="site-header__main">
      <div class="site-header__inner">
        <RouterLink
          :to="to('/')"
          class="site-header__logo"
          aria-label="Restore8 GA — Home"
        >
          <HomeLogoIcon class="site-header__logo-icon" />
        </RouterLink>
        <nav class="site-header__nav" aria-label="Main navigation">
          <RouterLink :to="to('/exterior')" class="site-header__link">Exterior</RouterLink>
          <RouterLink :to="to('/basement')" class="site-header__link">Basement</RouterLink>
          <RouterLink :to="to('/about')" class="site-header__link">About</RouterLink>
        </nav>
        <div class="site-header__actions">
          <RouterLink :to="to('/requestaquote')" class="site-header__btn site-header__btn--primary">Request a Quote</RouterLink>
          <a href="tel:+14049666439" class="site-header__btn site-header__btn--ghost">404-966-6439</a>
        </div>
        <button
          type="button"
          class="site-header__menu-btn"
          aria-label="Toggle menu"
          :aria-expanded="menuOpen"
          @click="menuOpen = !menuOpen"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </div>
    <Transition name="fade">
      <div v-if="menuOpen" class="site-header__overlay" @click="menuOpen = false">
        <nav class="site-header__mobile-nav" @click.stop aria-label="Mobile navigation">
          <RouterLink :to="to('/exterior')" class="site-header__link" @click="menuOpen = false">Exterior</RouterLink>
          <RouterLink :to="to('/basement')" class="site-header__link" @click="menuOpen = false">Basement</RouterLink>
          <RouterLink :to="to('/about')" class="site-header__link" @click="menuOpen = false">About</RouterLink>
          <RouterLink :to="to('/requestaquote')" class="site-header__btn site-header__btn--primary" @click="menuOpen = false">Request a Quote</RouterLink>
          <a href="tel:+14049666439" class="site-header__btn site-header__btn--ghost" @click="menuOpen = false">404-966-6439</a>
        </nav>
      </div>
    </Transition>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import HomeLogoIcon from '@er/components/HomeLogoIcon.vue'
import { useRemodelingLink } from '@er/composables/useRemodelingLink.js'

const { to } = useRemodelingLink()
const menuOpen = ref(false)
</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.15s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
