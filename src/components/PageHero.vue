<template>
  <header class="page-hero">
    <div class="page-hero-bg" aria-hidden="true"></div>
    <div class="page-hero-inner">
      <h1 class="page-hero-title">{{ title }}</h1>
      <p v-if="subtitle" class="page-hero-subtitle">{{ subtitle }}</p>
      <div class="page-hero-accent"></div>
    </div>
  </header>
</template>

<script setup>
defineProps({
  title: { type: String, required: true },
  subtitle: { type: String, default: '' },
})
</script>

<style lang="scss" scoped>
@use '../../styles/scss/global/variables' as *;

.page-hero {
  position: relative;
  min-height: 280px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: $space-4xl 1.5rem;
  overflow: hidden;
}

.page-hero-bg {
  position: absolute;
  inset: 0;
  background-image: linear-gradient(to right top, #77599c, #5e5b98, #4a619a, #34669a, #1e6a96, #007598, #007f97);
}

.page-hero-bg::before {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(ellipse 80% 50% at 50% 0%, $white-subtle 0%, transparent 60%);
  pointer-events: none;
}

.page-hero-inner {
  position: relative;
  max-width: 640px;
  text-align: center;
  z-index: 1;
}

.page-hero-title {
  color: $white-pure;
  margin: 0 0 0.75rem;
}

.page-hero-subtitle {
  font-family: 'Poppins', sans-serif;
  font-size: 1.05rem;
  color: $white-muted;
  margin: 0;
  line-height: 1.6;
  max-width: 480px;
  margin-inline: auto;
}

.page-hero-accent {
  width: 48px;
  height: 3px;
  background: $white-pure;
  margin: $space-lg auto 0;
  border-radius: 2px;
}

@media (min-width: 768px) {
  .page-hero {
    min-height: 320px;
    padding: 5rem 2rem;
  }
}
</style>
