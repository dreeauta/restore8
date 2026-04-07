<template>
  <main class="page-content">
    <HomeHero
    :eyebrow="copy.hero.eyebrow"
    :title="copy.hero.title"
    :paragraphs="copy.hero.paragraphs"
    :primary-label="copy.hero.primaryLabel"
    :primary-to="to('/requestaquote')"
    :full-width-cta="false"
    image-src="/img/remodeling-images/exterior-4.webp"
    image-alt="Exterior home repair project"
    />

    <TextColumnSection
    id="overview"
    :eyebrow="copy.overview.eyebrow"
    :title="copy.overview.title"
    :paragraphs="copy.overview.paragraphs"
    image-src="/img/remodeling-images/exterior-1.webp"
    image-alt="Restore8 exterior and basement services"
    image-position="right"
    />

    <ThreeColumnSection
    :eyebrow="copy.whatWeOffer.eyebrow"
    :title="copy.whatWeOffer.title"
    :items="whatWeOfferItems"
    />

    <TeaserContainerSection
    id="teaser-container"
    :title="copy.teasers.title"
    :items="teaserContainerItems"
    />

        <OurProcessSection id="our-process" :cta-to="to('/requestaquote')" />

    <TestimonialCarouselSection id="testimonials" :items="testimonialItems" />
    
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
import HomeHero from '@er/components/HomeHero.vue'
import TextColumnSection from '@er/components/TextColumnSection.vue'
import ThreeColumnSection from '@er/components/ThreeColumnSection.vue'
import TeaserContainerSection from '@er/components/TeaserContainerSection.vue'
import OurProcessSection from '@er/components/OurProcessSection.vue'
import TestimonialCarouselSection from '@er/components/TestimonialCarouselSection.vue'
import QuoteFormSection from '@er/components/QuoteFormSection.vue'
import Footer from '@er/components/Footer.vue'

const { to } = useRemodelingLink()
const copy = siteCopy.home

const testimonialItems = [
  {
    quote: copy.testimonials[0].quote,
    image: '/img/remodeling-images/exterior-3.webp',
    imageAlt: 'Exterior repair project',
  },
  {
    quote: copy.testimonials[1].quote,
    image: '/img/remodeling-images/basement-2.jpg',
    imageAlt: 'Basement staircase renovation',
  },
]

const whatWeOfferItems = [
  {
    ...copy.whatWeOffer.items[0],
    image: '/img/remodeling-images/exterior-2.webp',
    imageAlt: 'Exterior repair services',
    ctaTo: to(copy.whatWeOffer.items[0].ctaTo),
  },
  {
    ...copy.whatWeOffer.items[1],
    image: '/img/remodeling-images/exterior-5.webp',
    imageAlt: 'Porch and deck repairs',
    ctaTo: to(copy.whatWeOffer.items[1].ctaTo),
  },
  {
    ...copy.whatWeOffer.items[2],
    image: '/img/remodeling-images/basement-3.jpg',
    imageAlt: 'Basement finishing services',
    ctaTo: to(copy.whatWeOffer.items[2].ctaTo),
  },
]

const teaserContainerItems = [
  {
    ...copy.teasers.items[0],
    image: '/img/remodeling-images/exterior-6.jpg',
    imageAlt: 'Exterior home repair services',
    ctaTo: to(copy.teasers.items[0].ctaTo),
  },
  {
    ...copy.teasers.items[1],
    image: '/img/remodeling-images/basement-5.jpg',
    imageAlt: 'Basement finishing services',
    ctaTo: to(copy.teasers.items[1].ctaTo),
  },
]
</script>
