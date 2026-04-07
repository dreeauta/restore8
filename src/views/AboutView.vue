<template>
  <main class="page-content">
    <PageHero
      :title="copy.hero.title"
      :paragraphs="copy.hero.paragraphs"
      :cta-label="copy.hero.ctaLabel"
      :cta-to="to('/requestaquote')"
      image-src="/img/remodeling-images/exterior-1.webp"
      image-alt="Restore8 GA exterior repair project"
    />

    <TextColumnSection
      id="who-we-are"
      :eyebrow="copy.whoWeAre.eyebrow"
      :title="copy.whoWeAre.title"
      :paragraphs="copy.whoWeAre.paragraphs"
      image-src="/img/remodeling-images/basement-3.webp"
      image-alt="Finished basement living area"
      image-position="right"
    />

    <ImageSection
      id="about-kitchen-banner"
      src="/img/remodeling-images/exterior-2.webp"
      image-alt="Exterior home repair and replacement work"
    />


    <FourColumnBulletsSection
      id="about-our-process"
      :eyebrow="copy.process.eyebrow"
      :title="copy.process.title"
      :intro-paragraphs="copy.process.introParagraphs"
      :columns="copy.process.columns"
      :cta-label="copy.process.ctaLabel"
      :cta-to="to('/requestaquote')"
    />

    <WhatSetsUsApartSection
      id="what-sets-us-apart"
      :eyebrow="copy.whatSetsUsApart.eyebrow"
      :title="copy.whatSetsUsApart.title"
      :items="whatSetsUsApartItems"
    />

    <ServicesAccordionSection
      id="faq"
      :eyebrow="copy.faq.eyebrow"
      :title="copy.faq.title"
      :items="copy.faq.items"
    />

    <QuoteFormSection
      id="about-contact"
      :title="copy.quoteForm.title"
      :intro="copy.quoteForm.intro"
      :intro2="copy.quoteForm.intro2"
      :message-label="copy.quoteForm.messageLabel"
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
import ImageSection from '@er/components/ImageSection.vue'
import WhatSetsUsApartSection from '@er/components/WhatSetsUsApartSection.vue'
import ServicesAccordionSection from '@er/components/ServicesAccordionSection.vue'
import QuoteFormSection from '@er/components/QuoteFormSection.vue'
import FourColumnBulletsSection from '@er/components/FourColumnBulletsSection.vue'
import Footer from '@er/components/Footer.vue'

const { to } = useRemodelingLink()
const copy = siteCopy.about

const whatSetsUsApartItems = [
  {
    ...copy.whatSetsUsApart.items[0],
    image: '/img/remodeling-images/exterior-1.webp',
    imageAlt: 'Person using a smartphone',
  },
  {
    ...copy.whatSetsUsApart.items[1],
    image: '/img/remodeling-images/basement-4.webp',
    imageAlt: 'Exterior contractor craftsmanship',
  },
  {
    ...copy.whatSetsUsApart.items[2],
    image: '/img/remodeling-images/basement-5.webp',
    imageAlt: 'Finished basement transformation',
  },
]
</script>
