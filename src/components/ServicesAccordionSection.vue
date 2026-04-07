<template>
  <section
    :id="sectionId"
    class="services-accordion"
    aria-labelledby="services-accordion-heading"
  >
    <div class="services-accordion__inner">
      <div class="services-accordion__head">
        <p v-if="eyebrow" class="services-accordion__eyebrow">
          {{ eyebrow }}
        </p>
        <h2 id="services-accordion-heading" class="services-accordion__title">{{ title }}</h2>
      </div>
      <div class="services-accordion__list">
        <div
          v-for="(item, i) in items"
          :key="i"
          class="services-accordion__item"
        >
          <button
            type="button"
            class="services-accordion__trigger"
            :aria-expanded="openIndex === i"
            :aria-controls="`accordion-panel-${sectionId}-${i}`"
            :id="`accordion-trigger-${sectionId}-${i}`"
            @click="toggle(i)"
          >
            <span class="services-accordion__marker">{{ openIndex === i ? '−' : '+' }}</span>
            <span>{{ item.question }}</span>
          </button>
          <div
            :id="`accordion-panel-${sectionId}-${i}`"
            class="services-accordion__content"
            role="region"
            :aria-labelledby="`accordion-trigger-${sectionId}-${i}`"
            :hidden="openIndex !== i"
          >
            <div v-if="item.answer" class="services-accordion__content-inner">
              <p class="services-accordion__answer">{{ item.answer }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  id: { type: String, default: 'faq' },
  eyebrow: { type: String, default: 'Ready to update your home' },
  title: { type: String, default: 'Frequently Asked Questions' },
  items: {
    type: Array,
    default: () => [
      {
        question: 'What types of projects do you handle?',
        answer: 'We specialize in exterior home repair and basement improvement work, including siding and trim repair, soffit and fascia replacement, porch and deck repairs, structural exterior fixes, basement finishing, basement remodeling, and build-out projects.',
      },
      {
        question: 'Do you work on unfinished basements?',
        answer: 'Yes. We help homeowners convert unfinished basements into functional living space with framing, layout improvements, and finishing work designed around how the space will be used.',
      },
      {
        question: 'Do you handle weather-related exterior damage?',
        answer: 'Yes. We take on weather-damage repair work and replace deteriorated exterior materials to help protect the home and restore reliable performance.',
      },
    ],
  },
})

const openIndex = ref(0)

const sectionId = computed(() => props.id || 'faq')

function toggle(i) {
  openIndex.value = openIndex.value === i ? -1 : i
}
</script>
