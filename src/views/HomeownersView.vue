<template>
  <main class="page-content">
    <PageHero
      theme="light"
      :title="copy.hero.title"
      :paragraphs="copy.hero.paragraphs"
      :cta-label="copy.hero.ctaLabel"
      :cta-to="to('/requestaquote')"
      image-src="/img/remodeling-images/exterior-5.webp"
      image-alt="Exterior repair contractor at work"
    />

    <TextColumnSection
      id="exterior-home-repairs"
      :eyebrow="copy.intro.eyebrow"
      :title="copy.intro.title"
      :paragraphs="copy.intro.paragraphs"
      image-src="/img/remodeling-images/exterior-3.webp"
      image-alt="Exterior home repair services"
      image-position="right"
      image-radius="asymmetric"
    />

    <FourColumnBulletsSection
      id="exterior-services"
      :eyebrow="copy.services.eyebrow"
      :title="copy.services.title"
      :intro-paragraphs="copy.services.introParagraphs"
      :columns="exteriorServiceColumns"
      :cta-label="copy.services.ctaLabel"
      :cta-to="to('/requestaquote')"
    />

    <OurProcessSection
      id="our-process"
      eyebrow="Our Process"
      :intro-paragraphs="[]"
      :steps="homeownersProcessSteps"
    />

    <TwoColumnFeaturesSection
      id="service-categories"
      :title="copy.categories.title"
      :items="serviceCategoryItems"
    />

    <QuoteFormSection
      id="contact"
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
import { useRemodelingLink } from '@er/composables/useRemodelingLink.js'
import siteCopy from '@er/data/siteCopy.json'
import PageHero from '@er/components/PageHero.vue'
import TextColumnSection from '@er/components/TextColumnSection.vue'
import FourColumnBulletsSection from '@er/components/FourColumnBulletsSection.vue'
import OurProcessSection from '@er/components/OurProcessSection.vue'
import TwoColumnFeaturesSection from '@er/components/TwoColumnFeaturesSection.vue'
import QuoteFormSection from '@er/components/QuoteFormSection.vue'
import Footer from '@er/components/Footer.vue'

const { to } = useRemodelingLink()
const copy = siteCopy.exterior

const exteriorServiceColumns = copy.services.columns

const homeownersProcessSteps = copy.process.steps

const serviceCategoryItems = [
  {
    ...copy.categories.items[0],
    image: '/img/remodeling-images/exterior-1.webp',
    imageAlt: 'Exterior repairs'
  },
  {
    ...copy.categories.items[1],
    image: '/img/remodeling-images/exterior-4.webp',
    imageAlt: 'Deck and trim contractor work'
  },
]
</script>
