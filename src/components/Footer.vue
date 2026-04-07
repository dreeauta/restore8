<template>
  <footer class="site-footer">
    <div class="site-footer__inner">
      <div class="site-footer__brand">
        <div class="site-footer__logo-wrap">
          <RouterLink
            :to="to('/')"
            class="site-footer__logo-link"
            aria-label="Restore8 GA — Home"
          >
            <HomeLogoIcon class="site-footer__logo site-footer__logo--home" />
          </RouterLink>
          <p class="site-footer__tagline">
            Exterior Repair &amp; Basement Finishing
          </p>
          <a class="site-footer__contact-link" href="tel:+14049666439">
            404-966-6439
          </a>
        </div>
      </div>
      <nav class="site-footer__nav" aria-label="Footer navigation">
        <div class="site-footer__col">
          <div class="site-footer__heading-wrap">
            <h4 class="site-footer__heading">Our Services</h4>
            <div class="site-footer__heading-line" aria-hidden="true">
              <img :src="imgLine1" alt="" />
            </div>
          </div>
          <ul>
            <li><RouterLink :to="to('/exterior')">Exterior</RouterLink></li>
            <li><RouterLink :to="to('/basement')">Basement</RouterLink></li>
          </ul>
        </div>
        <div class="site-footer__col">
          <div class="site-footer__heading-wrap">
            <h4 class="site-footer__heading">Our Company</h4>
            <div class="site-footer__heading-line" aria-hidden="true">
              <img :src="imgLine1" alt="" />
            </div>
          </div>
          <ul>
            <li><RouterLink :to="to('/about')">About Us</RouterLink></li>
            <li><RouterLink :to="to('/requestaquote')">Request a Quote</RouterLink></li>
          </ul>
        </div>
      </nav>
      <p class="site-footer__copy">{{ currentYear }} Copyright</p>
    </div>
  </footer>
</template>

<script setup>
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import HomeLogoIcon from '@er/components/HomeLogoIcon.vue'
import { useRemodelingLink } from '@er/composables/useRemodelingLink.js'

const { to } = useRemodelingLink()

const currentYear = computed(() => new Date().getFullYear())

// Figma assets (node 36:835) — decorative heading rules
const imgLine1 =
  'http://localhost:3845/assets/7283d4e16fd0f2df5b3246b0ea5237c5fe03f862.svg'
</script>
