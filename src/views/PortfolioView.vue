<template>
  <main class="page-content">
    <PageHero title="Projects" subtitle="A mix of projects I've developed over the years, from startups to enterprise teams." />
    <ProjectsTeaserGrid />

    <Footer />
  </main>
</template>

<script setup>
import PageHero from '@/components/PageHero.vue'
import ProjectsTeaserGrid from '@/components/ProjectsTeaserGrid.vue'
import DemoAppsSection from '@/components/DemoAppsSection.vue'
import Footer from '@/components/Footer.vue'
</script>
