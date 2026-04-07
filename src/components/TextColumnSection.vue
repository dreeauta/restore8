<template>
  <section
    :id="id"
    class="text-column"
    :class="[
      { 'text-column--alt': altBackground },
      { 'text-column--image-left': imageSrc && imagePosition === 'left' },
      { 'text-column--image-radius-asymmetric': imageSrc && imageRadius === 'asymmetric' },
    ]"
    :aria-labelledby="titleId"
  >
    <div class="text-column__inner">
      <div class="text-column__content">
        <div class="text-column__head">
          <p v-if="eyebrow" class="text-column__eyebrow">{{ eyebrow }}</p>
          <h2 :id="titleId" class="text-column__title">{{ title }}</h2>
        </div>
        <div v-if="$slots.default" class="text-column__body">
          <slot />
        </div>
        <div
          v-else-if="paragraphs?.length || listHeading || listItems?.length"
          class="text-column__body"
        >
          <p v-for="(p, i) in paragraphs" :key="`p-${i}`">{{ p }}</p>
          <template v-if="listHeading || listItems?.length">
            <p v-if="listHeading" class="text-column__list-heading">{{ listHeading }}</p>
            <ul v-if="listItems?.length" class="text-column__list">
              <li v-for="(item, i) in listItems" :key="`li-${i}`">{{ item }}</li>
            </ul>
          </template>
        </div>
      </div>
      <div v-if="imageSrc" class="text-column__media-wrap">
        <div class="text-column__media">
          <img
            :src="imageSrc"
            :alt="imageAlt"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'

defineProps({
  id: { type: String, default: '' },
  title: { type: String, required: true },
  eyebrow: { type: String, default: '' },
  paragraphs: { type: Array, default: () => [] },
  /** Optional line above a bullet list (e.g. “Our services include:”) */
  listHeading: { type: String, default: '' },
  /** Bullet strings rendered after paragraphs when not using the default slot */
  listItems: { type: Array, default: () => [] },
  altBackground: { type: Boolean, default: false },
  imageSrc: { type: String, default: '' },
  imageAlt: { type: String, default: '' },
  /** 'left' = image on left, text on right; 'right' = text on left, image on right (Figma 36:863 desktop) */
  imagePosition: {
    type: String,
    default: 'right',
    validator: (v) => v === 'left' || v === 'right',
  },
  /** 'default' = uniform card radius; 'asymmetric' = top-left + bottom-right radius (e.g. Homeowners interior block) */
  imageRadius: {
    type: String,
    default: 'default',
    validator: (v) => v === 'default' || v === 'asymmetric',
  },
})

const titleId = computed(() => `text-column-${Math.random().toString(36).slice(2, 9)}`)
</script>
