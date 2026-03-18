<template>
  <ProjectDetailHero v-if="project" :title="project.title" :hero-image="heroImage" />
  <div class="project-detail-view">

    <div v-if="project" class="project-detail-content">
      <div class="project-detail-info">
          <nav class="project-detail-nav">
      <router-link to="/projects" class="back-link">← Back to projects</router-link>
    </nav>
        <p v-for="(para, i) in project.description" :key="i">{{ para }}</p>
        <p class="project-technologies">
          <span>Technologies: </span> {{ project.technologies }}
        </p>
        <a
          v-if="project.websiteUrl"
          :href="project.websiteUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="app-btn"
        >
          Visit website
        </a>
      </div>
      <div class="project-detail-media">
        <video
          v-if="project.videoSrc"
          width="320"
          height="240"
          controls
          loop
          @loadedmetadata="onVideoLoaded"
        >
          <source :src="project.videoSrc" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <section v-else-if="project.images && project.images.length" class="project-detail-gallery-carousel carousel-shared">
          <div class="carousel-shared-bg" aria-hidden="true"></div>
          <div class="carousel-shared-inner">
            <button type="button" class="carousel-arrow carousel-arrow-prev" aria-label="Previous image"></button>
            <div class="swiper project-detail-gallery-swiper app-carousel-swiper" ref="gallerySwiperEl">
              <div class="swiper-wrapper">
                <div v-for="(src, i) in project.images" :key="i" class="swiper-slide">
                  <div class="project-detail-gallery-scroll-wrap">
                    <img
                      :src="src"
                      :alt="`${project.title} screenshot ${i + 1}`"
                      class="project-detail-gallery-img"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
              <div class="swiper-pagination"></div>
            </div>
            <button type="button" class="carousel-arrow carousel-arrow-next" aria-label="Next image"></button>
          </div>
        </section>
      </div>
     
    </div>
    <div v-else class="project-not-found">
      <h2>Project not found</h2>
      <router-link to="/projects">Back to projects</router-link>
    </div>
  </div>
  <Footer />
</template>

<script setup>
import { computed, ref, onMounted, onUnmounted, watch, nextTick } from 'vue'
import { useRoute } from 'vue-router'
import Swiper from 'swiper'
import { Navigation, Pagination } from 'swiper/modules'
import { getProjectBySlug } from '@/data/projects'
import Footer from '@/components/Footer.vue'
import ProjectDetailHero from '@/components/ProjectDetailHero.vue'

const route = useRoute()
const project = computed(() => getProjectBySlug(route.params.slug))
const heroImage = computed(() => {
  const p = project.value
  return p?.teaserImage || (p?.images?.length ? p.images[0] : null)
})

const gallerySwiperEl = ref(null)
let gallerySwiper = null
let autoScrollRaf = null
let userInteractedWithScroll = false
let scrollInteractionUnsubscribe = null
const AUTO_SCROLL_DURATION_MS = 8000

function stopAutoScroll() {
  if (autoScrollRaf != null) {
    cancelAnimationFrame(autoScrollRaf)
    autoScrollRaf = null
  }
}

function handleScrollInteraction(e) {
  if (e.target.closest('.project-detail-gallery-scroll-wrap')) {
    if (autoScrollRaf != null) return
    userInteractedWithScroll = true
    stopAutoScroll()
  }
}

function startAutoScrollForActiveSlide() {
  stopAutoScroll()
  if (userInteractedWithScroll) return
  if (!gallerySwiper?.el) return
  const activeSlide = gallerySwiper.el.querySelector('.swiper-slide-active')
  if (!activeSlide) return
  const wrap = activeSlide.querySelector('.project-detail-gallery-scroll-wrap')
  if (!wrap || wrap.scrollHeight <= wrap.clientHeight) return
  const maxScroll = wrap.scrollHeight - wrap.clientHeight
  const start = wrap.scrollTop
  const startTime = performance.now()
  function tick(now) {
    const elapsed = now - startTime
    const t = Math.min(elapsed / AUTO_SCROLL_DURATION_MS, 1)
    const eased = t * (2 - t)
    wrap.scrollTop = start + (maxScroll - start) * eased
    if (t < 1) autoScrollRaf = requestAnimationFrame(tick)
  }
  autoScrollRaf = requestAnimationFrame(tick)
}

function resetAllSlideScrolls() {
  if (!gallerySwiperEl.value) return
  gallerySwiperEl.value.querySelectorAll('.project-detail-gallery-scroll-wrap').forEach((el) => {
    el.scrollTop = 0
  })
}

function initGallerySwiper() {
  if (!gallerySwiperEl.value || !project.value?.images?.length) return
  stopAutoScroll()
  gallerySwiper?.destroy(true, true)
  gallerySwiper = null
  gallerySwiper = new Swiper(gallerySwiperEl.value, {
    modules: [Navigation, Pagination],
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 0,
    loop: project.value.images.length > 1,
    pagination: { el: '.project-detail-gallery-swiper .swiper-pagination', clickable: true },
    navigation: {
      nextEl: '.project-detail-gallery-carousel .carousel-arrow-next',
      prevEl: '.project-detail-gallery-carousel .carousel-arrow-prev',
    },
    on: {
      slideChangeTransitionEnd() {
        userInteractedWithScroll = false
        resetAllSlideScrolls()
        nextTick(() => startAutoScrollForActiveSlide())
      },
    },
  })
  userInteractedWithScroll = false
  scrollInteractionUnsubscribe?.()
  if (gallerySwiperEl.value) {
    const el = gallerySwiperEl.value
    el.addEventListener('scroll', handleScrollInteraction, true)
    el.addEventListener('wheel', handleScrollInteraction, { passive: true })
    scrollInteractionUnsubscribe = () => {
      el.removeEventListener('scroll', handleScrollInteraction, true)
      el.removeEventListener('wheel', handleScrollInteraction)
    }
  }
  nextTick(() => {
    resetAllSlideScrolls()
    startAutoScrollForActiveSlide()
  })
}

function onVideoLoaded(e) {
  const v = e.target
  if (v) v.playbackRate = 1.25
}

watch(project, () => {
  scrollInteractionUnsubscribe?.()
  scrollInteractionUnsubscribe = null
  stopAutoScroll()
  userInteractedWithScroll = false
  gallerySwiper?.destroy(true, true)
  gallerySwiper = null
  nextTick(initGallerySwiper)
}, { immediate: true })

onMounted(() => {
  nextTick(initGallerySwiper)
})

onUnmounted(() => {
  scrollInteractionUnsubscribe?.()
  stopAutoScroll()
  gallerySwiper?.destroy(true, true)
  gallerySwiper = null
})
</script>

<style lang="scss" scoped>
@use '../../styles/scss/global/variables' as *;

.project-detail-view {
  min-height: 100vh;
  padding: $space-xl;
  margin: 0 auto;
}
.project-detail-nav {
  background: transparent;
  margin-bottom: $space-xl;
  position: static;
  font-weight: 700;
}
.back-link {
  color: inherit;
  text-decoration: none;
  font-family: 'Poppins', sans-serif;
}
.back-link:hover {
  text-decoration: underline;
}
.project-detail-content {
  display: flex;
  flex-direction: column;
  gap: $space-xl;
}

.project-detail-info {
  max-width: 900px;
  margin: 0 auto;
}

.project-detail-media video {
  max-width: 900px;
  margin: 0 auto;
  border-radius: $radius-sm;
}

/* Project detail gallery carousel – same teal look as ProjectsCarousel */
.project-detail-gallery-carousel {
  width: 100%;
  padding: 5rem 0 $space-4xl;
  position: relative;
  display: flex;
  justify-content: center;
  box-sizing: border-box;
  overflow: hidden;
}

.project-detail-gallery-carousel .carousel-shared-bg {
  position: absolute;
  inset: 0;
  z-index: 0;
}

.project-detail-gallery-carousel .carousel-shared-bg::before {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(ellipse 80% 50% at 50% 0%, $teal-ui-glow 0%, transparent 55%);
  pointer-events: none;
}

.project-detail-gallery-carousel .carousel-shared-bg::after {
  content: '';
  position: absolute;
  inset: 0;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.03'/%3E%3C/svg%3E");
  pointer-events: none;
  opacity: 0.6;
}

.project-detail-gallery-carousel .carousel-shared-inner {
  width: 100%;
  max-width: 1400px;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  z-index: 1;
  padding: 0 5rem;
  box-sizing: border-box;
}

.project-detail-gallery-carousel :deep(.swiper) {
  overflow: hidden;
  width: 100% !important;
  max-width: 100%;
  margin-left: 0 !important;
  margin-right: 0 !important;
}

.project-detail-gallery-carousel :deep(.swiper-wrapper) {
  width: 100%;
  align-items: center;
}

.project-detail-gallery-carousel :deep(.swiper-slide) {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem 0;
  min-height: 70vh;
  box-sizing: border-box;
}

.project-detail-gallery-carousel .carousel-arrow {
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

.project-detail-gallery-carousel .carousel-arrow::after {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: block;
  line-height: 1;
}

.project-detail-gallery-carousel .carousel-arrow:hover {
  background: $teal-ui-glass-hover;
  border-color: $white-border-arrow;
  transform: translateY(-50%) scale(1.05);
}

.project-detail-gallery-carousel .carousel-arrow:active {
  transform: translateY(-50%) scale(0.98);
}

.project-detail-gallery-carousel .carousel-arrow-prev {
  left: $space-md;
}

.project-detail-gallery-carousel .carousel-arrow-prev::after {
  content: '‹';
}

.project-detail-gallery-carousel .carousel-arrow-next {
  right: $space-md;
}

.project-detail-gallery-carousel .carousel-arrow-next::after {
  content: '›';
}

.project-detail-gallery-carousel :deep(.swiper-pagination) {
  position: relative;
  margin-top: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.6rem;
}

.project-detail-gallery-carousel :deep(.swiper-pagination-bullet) {
  width: 10px;
  height: 10px;
  background: $teal-carousel-bullet;
  opacity: 1;
  border-radius: 50%;
  transition: background 0.3s, transform 0.3s, box-shadow 0.3s;
}

.project-detail-gallery-carousel :deep(.swiper-pagination-bullet:hover) {
  background: $teal-carousel-bullet;
  transform: scale(1.15);
}

.project-detail-gallery-carousel :deep(.swiper-pagination-bullet-active) {
  background: $teal-ui;
  transform: scale(1.3);
  box-shadow: $shadow-focus;
}

.project-detail-gallery-carousel .project-detail-gallery-scroll-wrap {
  height: 70vh;
  max-height: 70vh;
  overflow-y: auto;
  overflow-x: hidden;
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  border-radius: $radius-md;
  scrollbar-width: thin;
  scrollbar-color: $gray-400 $gray-border-alt;
}

.project-detail-gallery-carousel .project-detail-gallery-scroll-wrap::-webkit-scrollbar {
  width: 8px;
}
.project-detail-gallery-carousel .project-detail-gallery-scroll-wrap::-webkit-scrollbar-track {
  background: $gray-border-alt;
  border-radius: 4px;
}
.project-detail-gallery-carousel .project-detail-gallery-scroll-wrap::-webkit-scrollbar-thumb {
  background: $gray-400;
  border-radius: 4px;
}

.project-detail-gallery-carousel .project-detail-gallery-img {
  width: 100%;
  max-width: 100%;
  height: auto;
  min-height: auto;
  display: block;
  border-radius: $radius-md;
  box-shadow: $shadow-lg;
  vertical-align: middle;
  object-fit: contain;
}

@media (max-width: 768px) {
  .project-detail-gallery-carousel .carousel-shared-inner {
    padding: 0 1rem;
  }

  .project-detail-gallery-carousel .carousel-arrow {
    top: 93%;
  }
}

.project-detail-info p {
  margin-bottom: $space-md;
  line-height: 1.6;
}
.project-not-found {
  text-align: center;
  padding: $space-3xl;
}
</style>
