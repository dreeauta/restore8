<template>
  <main class="page-content">
    <PageHero
      :title="copy.hero.title"
      :subtitle="copy.hero.subtitle"
      :cta-label="copy.hero.ctaLabel"
      cta-to="#contact"
      image-src="/img/remodeling-images/exterior-7.webp"
      image-alt="Request a repair estimate"
    />
    <QuoteFormSection
      id="contact"
      variant="request-page"
      :title="copy.quoteForm.title"
      :intro="copy.quoteForm.intro"
      :intro2="copy.quoteForm.intro2"
      :intro3="copy.quoteForm.intro3"
      :submit-label="copy.quoteForm.submitLabel"
    />
    <Footer />
  </main>
</template>

<script setup>
import siteCopy from '@er/data/siteCopy.json'
import PageHero from '@er/components/PageHero.vue'
import QuoteFormSection from '@er/components/QuoteFormSection.vue'
import Footer from '@er/components/Footer.vue'

const copy = siteCopy.requestQuote
</script>
