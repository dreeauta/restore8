<template>
  <section
    :id="id"
    class="teaser-container"
    aria-labelledby="teaser-container-heading"
  >
    <div class="teaser-container__inner">
      <div class="teaser-container__title-wrap">
        <h2 id="teaser-container-heading" class="teaser-container__title">
          {{ title }}
        </h2>
      </div>
      <div
        class="teaser-container__grid"
        :class="`teaser-container__grid--cols-${teaserCols}`"
      >
        <article
          v-for="(item, i) in items"
          :key="i"
          class="teaser-container__card"
        >
          <div class="teaser-container__card-media">
            <img
              :src="item.image"
              :alt="item.imageAlt || item.title"
              loading="lazy"
            />
          </div>
          <div class="teaser-container__card-body">
            <h3 class="teaser-container__card-title">{{ item.title }}</h3>
            <div class="teaser-container__card-text">
              <p v-for="(p, j) in item.paragraphs" :key="j">{{ p }}</p>
            </div>
          </div>
          <AppButton
            v-if="item.ctaLabel"
            :to="item.ctaTo"
            :href="item.ctaHref"
            variant="dark"
            class="teaser-container__card-cta"
          >
            {{ item.ctaLabel }}
          </AppButton>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import AppButton from '@er/components/AppButton.vue'

const props = defineProps({
  id: { type: String, default: '' },
  title: { type: String, default: 'Who we work with' },
  items: {
    type: Array,
    default: () => [],
    validator: (list) =>
      list.every(
        (i) =>
          i &&
          typeof i.title === 'string' &&
          Array.isArray(i.paragraphs) &&
          i.image
      ),
  },
})

const teaserCols = computed(() => {
  const count = props.items?.length || 0
  if (count >= 3) return 3
  if (count === 2) return 2
  return 1
})
</script>
