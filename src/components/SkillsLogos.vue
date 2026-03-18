<template>
  <section class="tech-stack">
    <div class="tech-stack-bg" aria-hidden="true"></div>
    <h3 class="tech-stack-title">Tech & tools</h3>
    <div class="tech-grid">
      <div
        v-for="(tech, i) in techList"
        :key="tech.name"
        class="tech-item"
        :style="{ '--i': i }"
      >
        <div class="tech-item-inner">
          <img :src="tech.icon" :alt="tech.name" class="tech-icon" />
          <span class="tech-name">{{ tech.name }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const techList = [
  { name: 'HTML5', icon: '/img/icon/htmlicon.png' },
  { name: 'CSS', icon: '/img/icon/cssicon.png' },
  { name: 'SASS', icon: '/img/icon/scssicon.png' },
  { name: 'JavaScript', icon: '/img/icon/javascripticon.png' },
  { name: 'Vue', icon: '/img/icon/Vue.png' },
  { name: 'AEM', icon: '/img/icon/aem.jpeg' },
  { name: 'Sitecore', icon: '/img/icon/sitecore.png' },
  { name: 'Optimizely', icon: '/img/icon/optimizely.png' },
  { name: 'Kentico', icon: '/img/icon/kentico.png' },
   { name: 'Figma', icon: '/img/icon/figma.png' },

]
</script>

<style lang="scss" scoped>
@use '../../styles/scss/global/variables' as *;

.tech-stack {
  position: relative;
  padding: $space-3xl 1.5rem $space-4xl;
  max-width: 1000px;
  margin: 0 auto;
  overflow: hidden;
}

.tech-stack-bg {
  position: absolute;
  inset: 0;
  border-radius: $radius-xl;
  pointer-events: none;
}

.tech-stack-title {
  position: relative;
  font-family: 'Poppins', sans-serif;
  font-size: 1rem;
  font-weight: 600;
  color: $slate-500;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  margin: 0 0 $space-xl;
  text-align: center;
}

.tech-grid {
  position: relative;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: $space-lg;
  margin: 0 auto;
}

.tech-item {
  opacity: 0;
  transform: translateY(14px);
  transition: opacity 0.45s ease-out, transform 0.45s ease-out;
  transition-delay: calc(0.055s * var(--i, 0));
}

.tech-item:hover {
  transform: translateY(-4px);
}

.tech-item-inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: $space-sm;
  padding: 1.5rem $space-md;
  background: linear-gradient(180deg, $white-pure 0%, rgba(255, 255, 255, 0.95) 100%);
  border: 1px solid $gray-border-alt;
  border-radius: $radius-lg;
  box-shadow: $shadow-sm;
  transition: box-shadow 0.25s ease, border-color 0.25s ease, background 0.25s ease;
}

.tech-item-inner:hover {
  box-shadow: $shadow-lg;
  border-color: rgba(93, 212, 208, 0.4);
  background: linear-gradient(180deg, $white-pure 0%, rgba(93, 212, 208, 0.06) 100%);
}

.tech-icon {
  width: 48px;
  height: 48px;
  object-fit: contain;
  filter: grayscale(0.25);
  transition: filter 0.25s ease;
}

.tech-item:hover .tech-icon {
  filter: grayscale(0);
}

.tech-name {
  font-family: 'Poppins', sans-serif;
  font-size: 0.8rem;
  font-weight: 600;
  color: $slate-600;
  text-align: center;
}

@media (max-width: 640px) {
  .tech-stack {
    padding: 2rem 1rem 3rem;
  }
  .tech-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: $space-md;
  }
  .tech-item-inner {
    padding: 1.25rem $space-sm;
  }
  .tech-icon {
    width: 40px;
    height: 40px;
  }
}
</style>
