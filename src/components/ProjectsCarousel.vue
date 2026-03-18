<template>
  <section class="projects-carousel" id="projects">
    <div class="projects-carousel-bg" aria-hidden="true"></div>
    <div class="projects-carousel-inner">
      <h2 class="projects-carousel-heading">Featured Projects</h2>
      <button type="button" class="carousel-arrow carousel-arrow-prev" aria-label="Previous project"></button>
      <div class="swiper project-swiper" ref="swiperEl">
        <div class="swiper-wrapper">
          <div v-for="project in sliderProjects" :key="project.slug" class="swiper-slide">
            <ProjectSlide :project="project" />
          </div>
        </div>
        <div class="swiper-pagination"></div>
      </div>
      <button type="button" class="carousel-arrow carousel-arrow-next" aria-label="Next project"></button>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import Swiper from 'swiper'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/swiper-bundle.css'
import { sliderProjects } from '@/data/projects'
import ProjectSlide from './ProjectSlide.vue'

const swiperEl = ref(null)
let swiperInstance = null

onMounted(() => {
  if (!swiperEl.value) return
  swiperInstance = new Swiper(swiperEl.value, {
    modules: [Navigation, Pagination],
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 0,
    direction: 'horizontal',
    loop: true,
    pagination: { el: '.project-swiper .swiper-pagination', clickable: true },
    navigation: {
      nextEl: '.carousel-arrow-next',
      prevEl: '.carousel-arrow-prev',
    },
  })
})
</script>

<style lang="scss" scoped>
@use '../../styles/scss/global/variables' as *;

.projects-carousel {
  width: 100%;
  padding: 5rem 0 $space-4xl;
  position: relative;
  display: flex;
  justify-content: center;
  box-sizing: border-box;
  overflow: hidden;
}

.projects-carousel-bg {
  position: absolute;
  inset: 0;
  z-index: 0;
}

.projects-carousel-bg::before {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(ellipse 80% 50% at 50% 0%, $teal-ui-glow 0%, transparent 55%);
  pointer-events: none;
}

.projects-carousel-bg::after {
  content: '';
  position: absolute;
  inset: 0;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.03'/%3E%3C/svg%3E");
  pointer-events: none;
  opacity: 0.6;
}

.projects-carousel-inner {
  width: 100%;
  max-width: 1400px;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  z-index: 1;
  padding: 0 5rem;
  box-sizing: border-box;
}

.projects-carousel-heading {
  font-family: 'Poppins', sans-serif;
  font-size: clamp(1.5rem, 3vw, 3rem);
  font-weight: 700;
  color: $slate-900;
  text-align: center;
  margin: 0 0 $space-lg;
}

.projects-carousel-inner :deep(.project-swiper) {
  overflow: hidden;
  width: 100% !important;
  max-width: 100%;
  margin-left: 0 !important;
  margin-right: 0 !important;
}

.projects-carousel-inner :deep(.swiper-wrapper) {
  width: 100%;
  align-items: center;
}

.projects-carousel-inner :deep(.swiper-slide) {
  width: 100%;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  height: auto;
  padding: 0.5rem 0;
}

/* Arrows – pill shape with teal glass */
.carousel-arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 2;
  width: 52px;
  height: 52px;
  margin: 0;
  padding: 0;
  border: 2px solid $white-border-strong;
  border-radius: 50%;
  background: $teal-ui-glass;
  backdrop-filter: blur(8px);
  color: $white-pure;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 1;
  transition: background 0.25s, border-color 0.25s, box-shadow 0.25s, transform 0.2s;
}

.carousel-arrow::after {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: block;
  line-height: 1;
}

.carousel-arrow:hover {
  background: $teal-ui-glass-hover;
  border-color: $white-border-arrow;
  transform: translateY(-50%) scale(1.05);
}

.carousel-arrow:active {
  transform: translateY(-50%) scale(0.98);
}

.carousel-arrow-prev {
  left: $space-md;
}

.carousel-arrow-prev::after {
  content: '‹';
}

.carousel-arrow-next {
  right: $space-md;
}

.carousel-arrow-next::after {
  content: '›';
}

.projects-carousel-inner :deep(.swiper-pagination) {
  position: relative;
  margin-top: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.6rem;
}

.projects-carousel-inner :deep(.swiper-pagination-bullet) {
  width: 10px;
  height: 10px;
  background: $teal-carousel-bullet;
  opacity: 1;
  border-radius: 50%;
  transition: background 0.3s, transform 0.3s, box-shadow 0.3s;
}

.projects-carousel-inner :deep(.swiper-pagination-bullet:hover) {
  background: $teal-carousel-bullet;
  transform: scale(1.15);
}

.projects-carousel-inner :deep(.swiper-pagination-bullet-active) {
  background: $teal-ui;
  transform: scale(1.3);
  box-shadow: $shadow-focus;
}

@media (max-width: 768px) {
  .projects-carousel-inner {
    padding: 0 1rem;
  }

  .carousel-arrow {
    top: 93%;
  }
}
</style>
