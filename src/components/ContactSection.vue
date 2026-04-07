<template>
  <section class="contact-cta" aria-labelledby="contact-cta-heading">
    <div class="contact-cta__inner">
      <h2 id="contact-cta-heading" class="contact-cta__title">
        {{ title }}
      </h2>
      <p v-if="text" class="contact-cta__text">{{ text }}</p>
      <AppButton
        :to="ctaTo"
        :href="ctaHref"
        variant="dark"
        class="contact-cta__btn"
      >
        {{ ctaLabel }}
      </AppButton>
    </div>
  </section>
</template>

<script setup>
import AppButton from '@er/components/AppButton.vue'

defineProps({
  title: { type: String, default: 'Ready to get started?' },
  text: { type: String, default: '' },
  ctaLabel: { type: String, default: 'Request a Quote' },
  ctaTo: { type: String, default: '/requestaquote' },
  ctaHref: { type: String, default: '' },
})
</script>
