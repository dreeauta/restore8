<template>
  <section class="home-hero" aria-label="Hero">
    <div class="home-hero__bg" aria-hidden="true">
      <img
        v-if="imageSrc"
        :src="imageSrc"
        :alt="''"
        class="home-hero__bg-img"
      />
      <div class="home-hero__bg-overlay" />
    </div>
    <div class="home-hero__inner">
      <div class="home-hero__card">
        <p v-if="eyebrow" class="home-hero__eyebrow">{{ eyebrow }}</p>
        <h1 class="home-hero__title">{{ title }}</h1>
        <div class="home-hero__body">
          <div v-if="$slots.body" class="home-hero__text">
            <slot name="body" />
          </div>
          <div
            v-else-if="paragraphs && paragraphs.length"
            class="home-hero__text"
          >
            <p v-for="(p, i) in paragraphs" :key="i">{{ p }}</p>
          </div>
          <p v-else-if="text" class="home-hero__text">{{ text }}</p>
          <div class="home-hero__actions">
            <AppButton
              :href="primaryHref || undefined"
              :to="primaryTo || undefined"
              variant="dark"
              :full-width="fullWidthCta"
              class="home-hero__primary-btn"
              @click="$emit('primary-click')"
            >
              {{ primaryLabel }}
            </AppButton>
            <a
              v-if="secondaryLabel"
              :href="secondaryHref"
              class="home-hero__secondary-link"
              @click.prevent="$emit('secondary-click')"
            >
              {{ secondaryLabel }}
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import AppButton from '@er/components/AppButton.vue'

defineProps({
  eyebrow: { type: String, default: '' },
  title: { type: String, required: true },
  text: { type: String, default: '' },
  paragraphs: { type: Array, default: () => [] },
  primaryLabel: { type: String, default: 'Request a Quote' },
  primaryHref: { type: String, default: '' },
  primaryTo: { type: [String, Object], default: '' },
  secondaryLabel: { type: String, default: '' },
  secondaryHref: { type: String, default: '#' },
  imageSrc: { type: String, default: '' },
  imageAlt: { type: String, default: 'Hero' },
  fullWidthCta: { type: Boolean, default: true },
})

defineEmits(['primary-click', 'secondary-click'])
</script>
