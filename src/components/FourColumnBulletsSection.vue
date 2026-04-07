<template>
  <section
    :id="id"
    class="four-col-bullets"
    :aria-labelledby="titleId"
  >
    <div class="four-col-bullets__inner">
      <div class="four-col-bullets__head">
        <p v-if="eyebrow" class="four-col-bullets__eyebrow">{{ eyebrow }}</p>
        <h2 :id="titleId" class="four-col-bullets__title">{{ title }}</h2>
        <div v-if="introParagraphs?.length" class="four-col-bullets__intro">
          <p v-for="(p, i) in introParagraphs" :key="i">{{ p }}</p>
        </div>
      </div>
      <div class="four-col-bullets__content">
        <div class="four-col-bullets__grid">
          <div
            v-for="(col, i) in columns"
            :key="i"
            class="four-col-bullets__col"
          >
            <h3 class="four-col-bullets__col-title">{{ col.title }}</h3>
            <div class="four-col-bullets__col-body">
              <p v-if="col.lead" class="four-col-bullets__col-lead">{{ col.lead }}</p>
              <ul v-if="col.bullets?.length" class="four-col-bullets__list">
                <li v-for="(b, j) in col.bullets" :key="j">{{ b }}</li>
              </ul>
            </div>
          </div>
        </div>
        <div v-if="ctaLabel" class="four-col-bullets__cta-wrap">
          <AppButton
            :to="ctaTo"
            :href="ctaHref"
            variant="dark"
            class="four-col-bullets__cta"
          >
            {{ ctaLabel }}
          </AppButton>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import AppButton from '@er/components/AppButton.vue'

defineProps({
  id: { type: String, default: '' },
  eyebrow: { type: String, default: '' },
  title: { type: String, required: true },
  introParagraphs: { type: Array, default: () => [] },
  columns: {
    type: Array,
    default: () => [],
    validator: (list) =>
      list.every(
        (c) =>
          c &&
          typeof c.title === 'string' &&
          Array.isArray(c.bullets) &&
          (c.lead === undefined || typeof c.lead === 'string')
      ),
  },
  ctaLabel: { type: String, default: '' },
  ctaTo: { type: [String, Object], default: '' },
  ctaHref: { type: String, default: '' },
})

const titleId = computed(() => `four-col-bullets-${Math.random().toString(36).slice(2, 9)}`)
</script>
