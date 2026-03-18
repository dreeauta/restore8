<template>
  <footer class="er-footer">
    <div class="er-footer-inner">
      <div class="er-footer-brand">
        <div class="er-footer-logo" aria-hidden="true">Logo</div>
        <p class="er-footer-name">European Remodeling & Design</p>
        <p class="er-footer-copy">© {{ currentYear }} Copyright</p>
      </div>
      <nav class="er-footer-nav" aria-label="Footer navigation">
        <div class="er-footer-col">
          <h4 class="er-footer-heading">Our Services</h4>
          <ul>
            <li><RouterLink to="/projects">Interior Remodeling</RouterLink></li>
            <li><RouterLink to="/projects">Exterior Remodeling</RouterLink></li>
            <li><a href="#services">Other Remodeling</a></li>
          </ul>
        </div>
        <div class="er-footer-col">
          <h4 class="er-footer-heading">Our Company</h4>
          <ul>
            <li><RouterLink to="/about">About Us</RouterLink></li>
            <li><a href="#contact">Request a Quote</a></li>
          </ul>
        </div>
        <div class="er-footer-col">
          <h4 class="er-footer-heading">Our Work</h4>
          <ul>
            <li><RouterLink to="/projects">Gallery</RouterLink></li>
            <li><a href="#contact">Reviews</a></li>
          </ul>
        </div>
      </nav>
    </div>
  </footer>
</template>

<script setup>
import { computed } from 'vue'
import { RouterLink } from 'vue-router'

const currentYear = computed(() => new Date().getFullYear())
</script>

<style lang="scss" scoped>
@use '../../styles/scss/global/variables' as *;

.er-footer {
  background: $er-accent;
  padding: clamp(2.5rem, 5vw, 3.5rem) 1.5rem 2rem;
  font-family: 'Inter', sans-serif;
}

.er-footer-inner {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: minmax(180px, 1fr) auto;
  gap: clamp(2rem, 4vw, 3rem);
  align-items: start;
}

.er-footer-brand {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.er-footer-logo {
  width: 80px;
  height: 40px;
  background: rgba(255, 255, 255, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.7rem;
  color: rgba(255, 255, 255, 0.7);
}

.er-footer-name {
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.1rem;
  font-weight: 600;
  color: $er-white;
  margin: 0;
}

.er-footer-copy {
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.75);
  margin: 0;
}

.er-footer-nav {
  display: flex;
  gap: clamp(2rem, 4vw, 3rem);
  flex-wrap: wrap;
}

.er-footer-col {
  min-width: 120px;
}

.er-footer-heading {
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: $er-white;
  margin: 0 0 0.75rem;
}

.er-footer-col ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.er-footer-col li {
  margin-bottom: 0.4rem;
}

.er-footer-col a {
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.85);
  text-decoration: none;
  transition: color 0.2s;
}

.er-footer-col a:hover {
  color: $er-white;
}

@media (max-width: 768px) {
  .er-footer-inner {
    grid-template-columns: 1fr;
    text-align: center;
  }
  .er-footer-brand {
    align-items: center;
  }
  .er-footer-nav {
    justify-content: center;
  }
}
</style>
