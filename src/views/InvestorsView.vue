<template>
  <main class="page-content">
    <PageHero
      theme="light"
      :title="copy.hero.title"
      :paragraphs="copy.hero.paragraphs"
      :cta-label="copy.hero.ctaLabel"
      cta-to=""
      cta-href="#contact"
      image-src="/img/remodeling-images/basement-5.jpg"
      image-alt="Basement finishing project"
    />

    <TextColumnSection
      id="built-for-investors"
      :eyebrow="copy.intro.eyebrow"
      :title="copy.intro.title"
      :paragraphs="copy.intro.paragraphs"
      image-src="/img/remodeling-images/basement-1.jpg"
      image-alt="Finished basement renovation"
      image-position="right"
    />


    <FourColumnBulletsSection
      id="rental-services"
      :eyebrow="copy.services.eyebrow"
      :title="copy.services.title"
      :intro-paragraphs="copy.services.introParagraphs"
      :columns="rentalColumns"
      :cta-label="copy.services.ctaLabel"
      cta-to=""
      cta-href="#contact"
    />

    <OurProcessSection
      id="turnkey-process"
      :eyebrow="copy.process.eyebrow"
      :title="copy.process.title"
      :intro-paragraphs="[]"
      :steps="copy.process.steps"
      cta-label=""
    />

    <TwoColumnFeaturesSection
      id="why-investors"
      :title="copy.features.title"
      :items="whyInvestorsItems"
    />

    
    <TestimonialCarouselSection
      id="testimonials"
      :items="testimonialItems"
    />


    <QuoteFormSection
      id="contact"
      :title="copy.quoteForm.title"
      :intro="copy.quoteForm.intro"
      :submit-label="copy.quoteForm.submitLabel"
    />

    <Footer />
  </main>
</template>

<script setup>
import siteCopy from '@er/data/siteCopy.json'
import PageHero from '@er/components/PageHero.vue'
import TextColumnSection from '@er/components/TextColumnSection.vue'
import FourColumnBulletsSection from '@er/components/FourColumnBulletsSection.vue'
import TestimonialCarouselSection from '@er/components/TestimonialCarouselSection.vue'
import TwoColumnFeaturesSection from '@er/components/TwoColumnFeaturesSection.vue'
import OurProcessSection from '@er/components/OurProcessSection.vue'
import QuoteFormSection from '@er/components/QuoteFormSection.vue'
import Footer from '@er/components/Footer.vue'
const copy = siteCopy.basement
const rentalColumns = copy.services.columns

const testimonialItems = [
  {
    quote: copy.testimonials[0].quote,
    image: '/img/remodeling-images/basement-4.jpg',
    imageAlt: 'Property exterior repair',
  },
]

const whyInvestorsItems = [
  {
    ...copy.features.items[0],
    image: '/img/remodeling-images/basement-2.jpg',
    imageAlt: 'Basement contractor work',
  },
  {
    ...copy.features.items[1],
    image: '/img/remodeling-images/basement-5.jpg',
    imageAlt: 'Basement staircase and build-out',
  },
]
</script>
