<template>
  <section
    :id="id"
    class="what-sets-apart"
    :aria-labelledby="titleId"
  >
    <div class="what-sets-apart__inner">
      <header class="what-sets-apart__head">
        <p v-if="eyebrow" class="what-sets-apart__eyebrow">{{ eyebrow }}</p>
        <h2 :id="titleId" class="what-sets-apart__title">{{ title }}</h2>
      </header>
      <div class="what-sets-apart__grid">
        <article
          v-for="(item, i) in items"
          :key="i"
          class="what-sets-apart__card"
        >
          <div v-if="item.image" class="what-sets-apart__media">
            <img
              :src="item.image"
              :alt="item.imageAlt || item.title"
              loading="lazy"
            />
          </div>
          <div class="what-sets-apart__body">
            <h3 class="what-sets-apart__card-title">{{ item.title }}</h3>
            <p v-if="item.description" class="what-sets-apart__card-text">
              {{ item.description }}
            </p>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'

defineProps({
  id: { type: String, default: '' },
  eyebrow: { type: String, default: '' },
  title: { type: String, required: true },
  items: {
    type: Array,
    default: () => [],
    validator: (list) =>
      list.every((i) => i && typeof i.title === 'string'),
  },
})

const titleId = computed(() => `what-sets-apart-${Math.random().toString(36).slice(2, 9)}`)
</script>
