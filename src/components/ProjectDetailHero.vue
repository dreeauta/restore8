<template>
  <header class="project-detail-hero">
    <div class="project-detail-hero-title-block">
      <div class="project-detail-hero-bg" aria-hidden="true"></div>
      <div class="project-detail-hero-inner">
        <h1 class="project-detail-hero-title">{{ title }}</h1>
      </div>
    </div>
    <div v-if="heroImage" class="project-detail-hero-image">
      <img
        :src="heroImage"
        alt=""
        class="project-detail-hero-img"
        fetchpriority="high"
      />
    </div>
  </header>
</template>

<script setup>
defineProps({
  title: { type: String, default: '' },
  heroImage: { type: String, default: null },
})
</script>

<style lang="scss" scoped>
@use '../../styles/scss/global/variables' as *;

.project-detail-hero {
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-height: 280px;
  border-radius: $radius-md;
  overflow: hidden;
  background-image: linear-gradient(to right top, #34669a, #1e6a96, #007598, #007f97, #008891, #179089, #179089);  padding: 4rem 1.5rem 6rem;
  padding: 0 50px;
}

.project-detail-hero:not(:has(.project-detail-hero-image)) {
  grid-template-columns: 1fr;
}

.project-detail-hero-image {
  position: relative;
  min-height: 200px;
  margin: 50px;
}

.project-detail-hero-img {
  border-radius: $radius-xl;
  width: 100%;
  height: 100%;
  min-height: 200px;
  object-fit: cover;
  display: block;
  vertical-align: middle;
}

.project-detail-hero-title-block {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: $space-4xl 1.5rem;
  overflow: hidden;
}

.project-detail-hero-bg {
  position: absolute;
  inset: 0;
}

.project-detail-hero-bg::before {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(ellipse 80% 50% at 50% 0%, $white-subtle 0%, transparent 60%);
  pointer-events: none;
}

.project-detail-hero-inner {
  position: relative;
  text-align: center;
  z-index: 1;
}

.project-detail-hero-title {
  color: $white-pure;
  margin: 0 0 0.75rem;
}


@media (max-width: 767px) {
  .project-detail-hero {
    grid-template-columns: 1fr;
    min-height: auto;
  }
  .project-detail-hero-image {
    min-height: 180px;
  }
  .project-detail-hero-img {
    min-height: 180px;
  }
  .project-detail-hero-title-block {
    min-height: 200px;
    padding: $space-3xl 1rem;
  }
}

@media (min-width: 768px) {
  .project-detail-hero {
    min-height: 320px;
  }
  .project-detail-hero-title-block {
    padding: 5rem 2rem;
  }
}
</style>
