<template>
  <section class="er-what-we-offer" aria-labelledby="what-we-offer-heading">
    <p class="er-offer-eyebrow">Ready to elevate your home</p>
    <h2 id="what-we-offer-heading" class="er-offer-heading">What we offer</h2>
    <div class="er-offer-grid">
      <article class="er-offer-card">
        <div class="er-offer-img-wrap">
          <img
            src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80"
            alt="Interior remodeling"
            loading="lazy"
          />
        </div>
        <h3 class="er-offer-title">Interior Remodeling</h3>
        <p class="er-offer-desc">
          From kitchens and bathrooms to living spaces, we deliver high-quality interior renovations tailored to your style and needs.
        </p>
        <ul class="er-offer-list">
          <li>Kitchen & bathroom remodels</li>
          <li>Interior painting</li>
          <li>Trim and finish work</li>
          <li>Drywall repair</li>
        </ul>
        <RouterLink to="/projects" class="er-offer-cta">Learn More</RouterLink>
      </article>
      <article class="er-offer-card">
        <div class="er-offer-img-wrap">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80"
            alt="Exterior remodeling"
            loading="lazy"
          />
        </div>
        <h3 class="er-offer-title">Exterior Remodeling</h3>
        <p class="er-offer-desc">
          Enhance curb appeal and durability with expert exterior updates, from siding and roofing to porches and outdoor living spaces.
        </p>
        <ul class="er-offer-list">
          <li>Siding repair & replacement</li>
          <li>Roof and structural repairs</li>
          <li>Porch & deck construction</li>
          <li>Exterior painting</li>
        </ul>
        <RouterLink to="/projects" class="er-offer-cta">Learn More</RouterLink>
      </article>
      <article class="er-offer-card">
        <div class="er-offer-img-wrap">
          <img
            src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&q=80"
            alt="Additional remodeling services"
            loading="lazy"
          />
        </div>
        <h3 class="er-offer-title">Additional Remodeling Services</h3>
        <p class="er-offer-desc">
          Basement finishing, design updates, and whole-home renovations. We handle every detail so you can enjoy a seamless experience.
        </p>
        <ul class="er-offer-list">
          <li>Basement finishing</li>
          <li>Design updates & consultations</li>
          <li>Whole-home renovations</li>
          <li>Custom millwork</li>
        </ul>
        <RouterLink to="/projects" class="er-offer-cta">Learn More</RouterLink>
      </article>
    </div>
  </section>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>

<style lang="scss" scoped>
@use '../../styles/scss/global/variables' as *;

.er-what-we-offer {
  background: $er-white;
  padding: clamp(3rem, 6vw, 5rem) 1.5rem;
}

.er-offer-eyebrow {
  font-family: 'Inter', sans-serif;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: $er-text-muted;
  text-align: center;
  margin: 0 0 0.5rem;
}

.er-offer-heading {
  font-family: 'Cormorant Garamond', serif;
  font-size: clamp(1.75rem, 3.5vw, 2.5rem);
  font-weight: 700;
  color: $er-accent;
  text-align: center;
  margin: 0 0 clamp(2.5rem, 5vw, 3.5rem);
}

.er-offer-grid {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: clamp(1.5rem, 3vw, 2.5rem);
}

.er-offer-card {
  background: $er-white;
  border: 1px solid $er-border;
  border-radius: 12px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: box-shadow 0.2s, border-color 0.2s;
}

.er-offer-card:hover {
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.08);
  border-color: rgba($er-accent, 0.2);
}

.er-offer-img-wrap {
  aspect-ratio: 4 / 3;
  overflow: hidden;
}

.er-offer-img-wrap img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.er-offer-title {
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.35rem;
  font-weight: 700;
  color: $er-accent;
  margin: 1.25rem 1.25rem 0;
}

.er-offer-desc {
  font-family: 'Inter', sans-serif;
  font-size: 0.95rem;
  line-height: 1.6;
  color: $er-text;
  margin: 0.5rem 1.25rem 0;
}

.er-offer-list {
  font-family: 'Inter', sans-serif;
  font-size: 0.9rem;
  color: $er-text-muted;
  margin: 0.75rem 1.25rem 0;
  padding-left: 1.25rem;
  line-height: 1.6;
}

.er-offer-cta {
  display: inline-block;
  margin: 1.25rem 1.25rem 1.5rem;
  font-family: 'Inter', sans-serif;
  font-size: 0.9rem;
  font-weight: 600;
  color: $er-white;
  background: $er-accent;
  padding: 0.65rem 1.25rem;
  border-radius: 6px;
  text-decoration: none;
  align-self: flex-start;
  transition: background 0.2s, transform 0.15s;
}

.er-offer-cta:hover {
  background: $er-accent-hover;
  transform: translateY(-2px);
}

@media (max-width: 900px) {
  .er-offer-grid {
    grid-template-columns: 1fr;
    max-width: 420px;
    margin-left: auto;
    margin-right: auto;
  }
}
</style>
