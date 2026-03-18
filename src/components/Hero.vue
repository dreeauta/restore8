<template>
  <section class="er-hero" aria-label="Hero">
    <div class="er-hero-bg" aria-hidden="true"></div>
    <div class="er-hero-inner">
      <div class="er-hero-content-box">
        <h1 class="er-hero-title">
          <span class="er-hero-title-line">European Remodeling</span>
          <span class="er-hero-title-line"> & Design</span>
        </h1>
        <p class="er-hero-desc">
          Transforming kitchens, bathrooms, basements, and entire homes for homeowners throughout the Greater Atlanta area and nearby communities.
        </p>
        <RouterLink to="/contact" class="er-hero-cta">Request a Quote</RouterLink>
      </div>
    </div>
  </section>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>

<style lang="scss" scoped>
@use '../../styles/scss/global/variables' as *;

.er-hero {
  position: relative;
  min-height: 85vh;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 2rem 1.5rem 4rem;
  overflow: hidden;
}

.er-hero-bg {
  position: absolute;
  inset: 0;
  background:
    linear-gradient(105deg, rgba($er-dark-cool, 0.25) 0%, transparent 45%),
    linear-gradient(180deg, transparent 0%, rgba($er-dark-warm, 0.08) 100%),
    url('https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1600&q=80') center / cover no-repeat;
  z-index: 0;
}

.er-hero-inner {
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  justify-content: flex-end;
}

.er-hero-content-box {
  background: rgba(255, 255, 255, 0.92);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.6);
  border-radius: 16px;
  padding: clamp(2.25rem, 4.5vw, 3.75rem);
  max-width: 500px;
  box-shadow:
    0 4px 24px rgba($er-dark-warm, 0.06),
    0 24px 48px rgba(0, 0, 0, 0.08);
}

.er-hero-title {
  font-family: 'Inter', sans-serif;
  font-size: clamp(1.85rem, 4vw, 2.75rem);
  font-weight: 700;
  color: $er-dark-warm;
  margin: 0 0 1.125rem;
  line-height: 1.2;
  letter-spacing: -0.03em;
}

.er-hero-title-line {
  display: block;
}

.er-hero-title-line:last-child {
  letter-spacing: 0.02em;
  font-weight: 600;
}

.er-hero-desc {
  font-family: 'Inter', sans-serif;
  font-size: clamp(0.9375rem, 1.4vw, 1rem);
  color: $er-rose;
  line-height: 1.65;
  margin: 0 0 1.875rem;
  max-width: 42ch;
}

.er-hero-cta {
  display: inline-block;
  font-family: 'Inter', sans-serif;
  font-size: 0.9375rem;
  font-weight: 600;
  color: $er-white;
  background: $er-dark-cool;
  padding: 0.875rem 1.875rem;
  border-radius: 8px;
  text-decoration: none;
  transition: background 0.25s ease, transform 0.2s ease, box-shadow 0.25s ease;
  box-shadow: 0 2px 12px rgba($er-dark-cool, 0.3);
}

.er-hero-cta:hover {
  background: $er-slate;
  transform: translateY(-1px);
  box-shadow: 0 4px 20px rgba($er-dark-cool, 0.35);
}

@media (max-width: 768px) {
  .er-hero {
    min-height: 75vh;
    justify-content: center;
    padding: 1.5rem 1rem 3rem;
  }
  .er-hero-inner {
    justify-content: center;
  }
  .er-hero-content-box {
    max-width: 100%;
  }
  .er-hero-bg {
    background:
      linear-gradient(180deg, rgba($er-dark-cool, 0.2) 0%, transparent 45%),
      url('https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&q=80') center / cover no-repeat;
  }
}
</style>
