<template>
  <section class="demo-modern">
    <h2 class="demo-section-title">Demo apps</h2>
    <p class="demo-section-subtitle">Creative games and tools built with Vue.js.</p>
    <div class="demo-apps-grid">
      <a
        v-for="app in demoApps"
        :key="app.title"
        :href="app.demoUrl"
        target="_blank"
        rel="noopener noreferrer"
        class="demo-card"
      >
        <div class="demo-card-image">
          <img :src="app.image" :alt="app.title" />
        </div>
        <div class="demo-card-content">
          <h3 class="demo-card-title">{{ app.title }}</h3>
          <p class="demo-card-desc">{{ app.description }}</p>
          <span class="demo-card-cta">Open demo →</span>
        </div>
      </a>
    </div>
  </section>
</template>

<script setup>
import { demoApps } from '@/data/projects'
</script>

<style lang="scss" scoped>
@use '../../styles/scss/global/variables' as *;

.demo-modern {
  padding: $space-xl $space-md $space-4xl;
  max-width: 1100px;
  margin: 0 auto;
}
.demo-section-title {
  font-family: 'Poppins', sans-serif;
  font-size: 1.5rem;
  font-weight: 700;
  color: $black-soft;
  margin: 0 0 $space-xs;
  text-align: center;
}
.demo-section-subtitle {
  font-size: 0.95rem;
  color: $gray-500;
  margin: 0 0 $space-lg;
  text-align: center;
}
.demo-apps-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: $space-lg;
}

@media (min-width: 640px) {
  .demo-apps-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .demo-apps-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 1.75rem;
  }
}

.demo-card {
  display: block;
  background: $white-pure;
  border-radius: $radius-lg;
  overflow: hidden;
  border: 1px solid $gray-border-alt;
  box-shadow: $shadow-card;
  text-decoration: none;
  color: inherit;
  transition: box-shadow 0.2s, transform 0.2s;
  height: 100%;
}
.demo-card:hover {
  box-shadow: $shadow-card-hover;
  transform: translateY(-4px);
}
.demo-card-image {
  aspect-ratio: 16 / 10;
  overflow: hidden;
  background: $gray-bg;
}
.demo-card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.demo-card-content {
  padding: 1.25rem;
}
.demo-card-title {
  font-family: 'Poppins', sans-serif;
  font-size: 1.1rem;
  font-weight: 600;
  margin: 0 0 $space-sm;
  color: $black-soft;
}
.demo-card-desc {
  font-size: 0.875rem;
  color: $gray-500;
  line-height: 1.5;
  margin: 0 0 0.75rem;
}
.demo-card-cta {
  font-size: 0.875rem;
  font-weight: 600;
  color: $black;
}
</style>
