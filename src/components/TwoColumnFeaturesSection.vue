<template>
  <section
    :id="id"
    class="two-col-features"
    :aria-labelledby="titleId"
  >
    <div class="two-col-features__inner">
      <h2 :id="titleId" class="two-col-features__title">{{ title }}</h2>
      <div class="two-col-features__grid">
        <article
          v-for="(item, i) in items"
          :key="i"
          class="two-col-features__card"
        >
          <div v-if="item.image" class="two-col-features__media">
            <img
              :src="item.image"
              :alt="item.imageAlt || item.title"
              loading="lazy"
            />
          </div>
          <div class="two-col-features__body">
            <h3 class="two-col-features__card-title">{{ item.title }}</h3>
            <p v-if="item.description" class="two-col-features__desc">
              {{ item.description }}
            </p>
            <ul v-if="item.bullets?.length" class="two-col-features__list">
              <li v-for="(b, j) in item.bullets" :key="j">{{ b }}</li>
            </ul>
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
  title: { type: String, required: true },
  items: {
    type: Array,
    default: () => [],
    validator: (list) =>
      list.every((i) => i && typeof i.title === 'string'),
  },
})

const titleId = computed(() => `two-col-features-${Math.random().toString(36).slice(2, 9)}`)
</script>
