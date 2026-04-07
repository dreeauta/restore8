<template>
  <section
    :id="id"
    class="three-column"
    :class="{ 'three-column--alt': altBackground }"
    :aria-labelledby="titleId"
  >
    <div class="three-column__inner">
      <header class="three-column__header">
        <p v-if="eyebrow" class="three-column__eyebrow">{{ eyebrow }}</p>
        <h2 :id="titleId" class="three-column__title">{{ title }}</h2>
      </header>
      <div class="three-column__cols">
        <div class="three-column__grid">
          <article
            v-for="(item, i) in items"
            :key="i"
            class="three-column__card"
          >
            <div v-if="item.image" class="three-column__card-media">
              <img :src="item.image" :alt="item.imageAlt || item.title" loading="lazy" />
            </div>
            <div v-else class="three-column__card-media" />
            <div class="three-column__card-overlay">
              <h3 class="three-column__card-title">{{ item.title }}</h3>
            </div>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'

defineProps({
  id: { type: String, default: '' },
  title: { type: String, default: '' },
  eyebrow: { type: String, default: '' },
  altBackground: { type: Boolean, default: false },
  items: {
    type: Array,
    default: () => [],
    validator: (list) => list.every((i) => i && typeof i.title === 'string'),
  },
})

const titleId = computed(() => `three-column-${Math.random().toString(36).slice(2, 9)}`)
</script>
