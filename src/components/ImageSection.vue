<template>
  <section
    :id="id"
    class="image-section"
    :aria-label="imageAlt || 'Image'"
  >
    <div class="image-section__inner">
      <div class="image-section__media">
        <img
          v-if="src"
          :src="src"
          :alt="imageAlt"
          loading="lazy"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  id: { type: String, default: '' },
  src: { type: String, default: '' },
  imageAlt: { type: String, default: '' },
})
</script>
