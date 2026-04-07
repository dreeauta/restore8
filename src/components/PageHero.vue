<template>
  <header
    class="page-hero"
    :class="`page-hero--${theme}`"
    :aria-labelledby="titleId"
  >
    <div v-if="imageSrc" class="page-hero__media">
      <img :src="imageSrc" :alt="imageAlt" />
    </div>
    <div class="page-hero__content">
      <h1 :id="titleId" class="page-hero__title">{{ title }}</h1>
      <div class="page-hero__body">
        <div v-if="$slots.body" class="page-hero__text">
          <slot name="body" />
        </div>
        <div v-else-if="paragraphs?.length" class="page-hero__text">
          <p v-for="(p, i) in paragraphs" :key="i">{{ p }}</p>
        </div>
        <p v-else-if="subtitle" class="page-hero__text">{{ subtitle }}</p>
        <AppButton
          v-if="ctaLabel"
          :to="ctaTo"
          :href="ctaHref"
          :variant="ctaVariant"
          class="page-hero__cta"
        >
          {{ ctaLabel }}
        </AppButton>
      </div>
    </div>
  </header>
</template>

<script setup>
import { computed } from 'vue'
import AppButton from '@er/components/AppButton.vue'

const props = defineProps({
  /** 'light' = tan bg, dark green title/text, dark CTA. 'dark' = dark teal bg, white text, secondary CTA. */
  theme: {
    type: String,
    default: 'dark',
    validator: (v) => v === 'light' || v === 'dark',
  },
  title: { type: String, required: true },
  subtitle: { type: String, default: '' },
  paragraphs: { type: Array, default: () => [] },
  ctaLabel: { type: String, default: 'Request a Quote' },
  ctaTo: { type: String, default: '/requestaquote' },
  ctaHref: { type: String, default: '' },
  imageSrc: { type: String, default: '' },
  imageAlt: { type: String, default: '' },
})

const titleId = computed(() => `page-hero-${Math.random().toString(36).slice(2, 9)}`)

const ctaVariant = computed(() => (props.theme === 'light' ? 'dark' : 'secondary'))
</script>
