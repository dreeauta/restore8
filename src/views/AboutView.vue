<template>
  <main class="page-content">
    <PageHero title="About" subtitle="Front End Developer and product designer, building creative solutions for startups to enterprise." />
    <div ref="aboutSectionRef" class="scroll-animate">
      <AboutSection />
    </div>
    <Footer />
  </main>
</template>

<script setup>
import { ref } from 'vue'
import PageHero from '@/components/PageHero.vue'
import AboutSection from '@/components/AboutSection.vue'
import Footer from '@/components/Footer.vue'
import { useScrollAnimation } from '@/composables/useScrollAnimation'

const aboutSectionRef = ref(null)
useScrollAnimation(aboutSectionRef)
</script>

<style lang="scss" scoped>
@use '../../styles/scss/global/variables' as *;

.scroll-animate {
  opacity: 0;
  transform: translateY(28px);
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}

.scroll-animate.in-view {
  opacity: 1;
  transform: translateY(0);
}
</style>
