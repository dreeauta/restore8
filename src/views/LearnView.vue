<template>
  <main class="page-content">
    <PageHero title="Skills" subtitle="Front-end development, design, and tools for accessible, responsive websites." />
    <div ref="skillsSectionRef" class="scroll-animate">
      <SkillsSection />
    </div>
    <div ref="skillsLogosRef" class="scroll-animate">
      <SkillsLogos />
    </div>
    <Footer />
  </main>
</template>

<script setup>
import { ref } from 'vue'
import PageHero from '@/components/PageHero.vue'
import SkillsSection from '@/components/SkillsSection.vue'
import SkillsLogos from '@/components/SkillsLogos.vue'
import Footer from '@/components/Footer.vue'
import { useScrollAnimation } from '@/composables/useScrollAnimation'

const skillsSectionRef = ref(null)
const skillsLogosRef = ref(null)
useScrollAnimation(skillsSectionRef)
useScrollAnimation(skillsLogosRef)
</script>

<style lang="scss" scoped>
@use '../../styles/scss/global/variables' as *;

.scroll-animate {
  opacity: 0;
  transform: translateY(28px);
  transition: opacity 1s ease-out, transform 1s ease-out;
}

.scroll-animate.in-view {
  opacity: 1;
  transform: translateY(0);
}

.scroll-animate:nth-of-type(2) {
  transition-delay: 0.3s;
}
.scroll-animate:nth-of-type(2).in-view {
  transition-delay: 0s;
}

/* Skills logos: each tech item fades in with stagger when section is in view */
.scroll-animate.in-view :deep(.tech-item) {
  opacity: 1;
  transform: translateY(0);
}
.scroll-animate.in-view :deep(.tech-item:hover) {
  transform: translateY(-4px);
}
</style>
