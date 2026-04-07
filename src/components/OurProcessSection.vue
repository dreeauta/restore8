<template>
  <section
    :id="id"
    class="our-process"
    :class="{ 'our-process--minimal': variant === 'minimal' }"
    :aria-labelledby="headingId"
  >
    <div class="our-process__inner">
      <div class="our-process__head">
        <p v-if="eyebrow" class="our-process__eyebrow">{{ eyebrow }}</p>
        <h2 :id="headingId" class="our-process__title">{{ title }}</h2>
        <div v-if="introParagraphs?.length" class="our-process__intro">
          <p v-for="(p, i) in introParagraphs" :key="i">{{ p }}</p>
        </div>
      </div>
      <div class="our-process__grid">
        <article
          v-for="(step, i) in steps"
          :key="i"
          class="our-process__card"
          :class="`our-process__card--${(i % 4) + 1}`"
        >
          <h3 class="our-process__card-title">{{ step.title }}</h3>
          <p class="our-process__card-text">{{ step.description }}</p>
        </article>
      </div>
      <AppButton
        v-if="ctaLabel"
        :to="ctaTo"
        :href="ctaHref"
        variant="dark"
        class="our-process__cta"
      >
        {{ ctaLabel }}
      </AppButton>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import AppButton from '@er/components/AppButton.vue'

const props = defineProps({
  id: { type: String, default: '' },
  /** 'default' = filled colored cards; 'minimal' = no card bg, left border only (Figma 36-1284) */
  variant: {
    type: String,
    default: 'default',
    validator: (v) => v === 'default' || v === 'minimal',
  },
  eyebrow: { type: String, default: 'Our Process' },
  title: { type: String, default: 'Our Simple, Start-to-Finish Process' },
  introParagraphs: {
    type: Array,
    default: () => [
      'We inspect the condition, define the scope clearly, and complete the work with a focus on durability, craftsmanship, and straightforward communication.',
      'Whether the project involves exterior repairs or basement finishing, we keep the process organized from walkthrough to final review.',
    ],
  },
  steps: {
    type: Array,
    default: () => [
      { title: 'Walkthrough & Estimate', description: 'We assess your space and provide a clear, detailed scope.' },
      { title: 'Planning & Materials', description: 'We help guide selections and finalize the project plan.' },
      { title: 'Build & Project Management', description: 'Our team handles everything — from demo to final construction.' },
      { title: 'Final Walkthrough', description: 'We ensure every detail is completed to your satisfaction.' },
    ],
  },
  ctaLabel: { type: String, default: 'Request a Quote' },
  ctaTo: { type: String, default: '/requestaquote' },
  ctaHref: { type: String, default: '' },
})

const headingId = computed(() =>
  props.id ? `${props.id}-heading` : 'our-process-heading'
)
</script>
