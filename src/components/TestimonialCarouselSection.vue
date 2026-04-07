<template>
  <section
    :id="id"
    class="testimonial-carousel"
    aria-label="Testimonials"
  >
    <div class="testimonial-carousel__inner">
      <div class="testimonial-carousel__strip">
        <div class="testimonial-carousel__quote-wrap">
          <blockquote class="testimonial-carousel__quote">
            "{{ currentQuote }}"
          </blockquote>
        </div>
        <div class="testimonial-carousel__media">
          <img
            :src="currentImage"
            :alt="currentAlt"
            loading="lazy"
          />
        </div>
      </div>
      <div class="testimonial-carousel__nav">
        <button
          type="button"
          class="testimonial-carousel__nav-btn"
          aria-label="Previous testimonial"
          @click="prev"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
        </button>
        <button
          type="button"
          class="testimonial-carousel__nav-btn"
          aria-label="Next testimonial"
          @click="next"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  id: { type: String, default: '' },
  items: {
    type: Array,
    default: () => [
      {
        quote: 'Amazing results, from estimate to final results. Our contractors were professional and brought our vision to life',
        image: '/img/remodeling-images/exterior-5.webp',
        imageAlt: 'Exterior repair project',
      },
    ],
  },
})

const index = ref(0)
const currentQuote = computed(() => props.items[index.value]?.quote ?? '')
const currentImage = computed(() => props.items[index.value]?.image ?? '')
const currentAlt = computed(() => props.items[index.value]?.imageAlt ?? 'Testimonial')

function next() {
  index.value = (index.value + 1) % props.items.length
}
function prev() {
  index.value = (index.value - 1 + props.items.length) % props.items.length
}
</script>
