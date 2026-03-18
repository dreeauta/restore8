<template>
  <section class="er-our-services" id="services" aria-labelledby="our-services-heading">
    <h2 id="our-services-heading" class="er-services-heading">Our Services</h2>
    <div class="er-services-grid">
      <article class="er-service-card">
        <div class="er-service-card-img-wrap">
          <img
            src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80"
            alt="Modern kitchen"
            loading="lazy"
          />
        </div>
        <h3 class="er-service-card-title">Kitchen</h3>
      </article>
      <article class="er-service-card">
        <div class="er-service-card-img-wrap">
          <img
            src="https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=600&q=80"
            alt="Contemporary bathroom"
            loading="lazy"
          />
        </div>
        <h3 class="er-service-card-title">Bathroom</h3>
      </article>
      <article class="er-service-card">
        <div class="er-service-card-img-wrap">
          <img
            src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=600&q=80"
            alt="Design updates"
            loading="lazy"
          />
        </div>
        <h3 class="er-service-card-title">Design Updates</h3>
      </article>
    </div>
  </section>
</template>

<script setup>
</script>

<style lang="scss" scoped>
@use '../../styles/scss/global/variables' as *;

.er-our-services {
  background: $er-accent;
  padding: clamp(3rem, 6vw, 4.5rem) 1.5rem;
}

.er-services-heading {
  font-family: 'Cormorant Garamond', serif;
  font-size: clamp(1.75rem, 3.5vw, 2.5rem);
  font-weight: 700;
  color: $er-white;
  text-align: center;
  margin: 0 0 clamp(2rem, 4vw, 3rem);
}

.er-services-grid {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: clamp(1.25rem, 2.5vw, 2rem);
}

.er-service-card {
  background: rgba(255, 255, 255, 0.08);
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.12);
  transition: transform 0.2s, box-shadow 0.2s;
}

.er-service-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 28px rgba(0, 0, 0, 0.2);
}

.er-service-card-img-wrap {
  aspect-ratio: 4 / 3;
  overflow: hidden;
}

.er-service-card-img-wrap img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.er-service-card-title {
  font-family: 'Inter', sans-serif;
  font-size: 1.125rem;
  font-weight: 700;
  color: $er-white;
  text-align: center;
  padding: 1.25rem 1rem;
  margin: 0;
}

@media (max-width: 768px) {
  .er-services-grid {
    grid-template-columns: 1fr;
    max-width: 400px;
    margin-left: auto;
    margin-right: auto;
  }
}
</style>
