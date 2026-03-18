<template>
  <section class="er-who-we-are" id="about" aria-labelledby="who-we-are-heading">
    <div class="er-who-inner">
      <div class="er-who-text">
        <p class="er-who-eyebrow">European craftsmanship. Thoughtful design. Exceptional renovations.</p>
        <h2 id="who-we-are-heading" class="er-who-title">Who we are</h2>
        <p>
          We are a family-owned remodeling company with over 20 years of experience bringing European craftsmanship and thoughtful design to homes across the Greater Atlanta area.
        </p>
        <p>
          From kitchen and bathroom renovations to full-home remodels and design updates, we work closely with every client to deliver exceptional results that reflect your vision and our commitment to quality.
        </p>
      </div>
      <div class="er-who-image-wrap">
        <img
          src="https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&q=80"
          alt="Luxury bathroom vanity with marble and modern fixtures"
          class="er-who-img"
          loading="lazy"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
</script>

<style lang="scss" scoped>
@use '../../styles/scss/global/variables' as *;

.er-who-we-are {
  background: $er-white;
  padding: clamp(3rem, 6vw, 5rem) 1.5rem;
}

.er-who-inner {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: clamp(2.5rem, 5vw, 4rem);
  align-items: center;
}

.er-who-eyebrow {
  font-family: 'Inter', sans-serif;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: $er-text-muted;
  margin: 0 0 0.75rem;
}

.er-who-title {
  font-family: 'Cormorant Garamond', serif;
  font-size: clamp(1.75rem, 3vw, 2.25rem);
  font-weight: 700;
  color: $er-accent;
  margin: 0 0 1.25rem;
  line-height: 1.2;
}

.er-who-text p {
  font-family: 'Inter', sans-serif;
  font-size: 1rem;
  line-height: 1.7;
  color: $er-text;
  margin: 0 0 1rem;
}

.er-who-image-wrap {
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
}

.er-who-img {
  width: 100%;
  height: auto;
  display: block;
  object-fit: cover;
  min-height: 380px;
  max-height: 500px;
}

@media (max-width: 768px) {
  .er-who-inner {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  .er-who-text {
    order: 1;
  }
  .er-who-image-wrap {
    order: 0;
  }
  .er-who-img {
    min-height: 280px;
  }
}
</style>
