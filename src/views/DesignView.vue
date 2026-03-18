<template>
  <main class="page-content">
    <PageHero title="Design" subtitle="UI/UX work, design systems, and visual design projects." />
    <section class="design-section">
      <div class="design-content">
        <!-- Add your design work here: case studies, galleries, or project links -->
      </div>
    </section>
    <Footer />
  </main>
</template>

<script setup>
import PageHero from '@/components/PageHero.vue'
import Footer from '@/components/Footer.vue'
</script>

<style scoped>
.design-section {
  padding: 2rem 1.5rem 4rem;
  max-width: 900px;
  margin: 0 auto;
}
.design-content {
  margin-top: 2rem;
  min-height: 200px;
}
</style>
