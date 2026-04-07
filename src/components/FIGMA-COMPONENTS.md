# Figma components → code reference

| Figma component        | Vue component                 | SCSS partial              |
|------------------------|-------------------------------|---------------------------|
| Primary Button         | `AppButton.vue` (variant="primary" or "dark") | `_primitives.scss` |
| Text Column            | `TextColumnSection.vue`      | `_text-column.scss`       |
| Our Process            | `OurProcessSection.vue`      | `_our-process.scss`       |
| Hero Interior          | `PageHero.vue`               | `_page-hero.scss`         |
| Testimonial carousel   | `TestimonialCarouselSection.vue` | `_testimonial-carousel.scss` |
| Header                 | `NavBar.vue` (uses `.site-header`) | `_header.scss`    |
| Footer                 | `Footer.vue` (uses `.site-footer`) | `_footer.scss`     |
| Homepage Hero          | `HomeHero.vue`               | `_home-hero.scss`         |
| Request a Quote Form   | `QuoteFormSection.vue`       | `_quote-form.scss`        |
| Teaser Container       | `TeaserContainerSection.vue` | `_teaser-container.scss`  |
| 3 Column               | `ThreeColumnSection.vue`    | `_three-column.scss`       |
| Services Accordion     | `ServicesAccordionSection.vue` | `_services-accordion.scss` |
| Image                  | `ImageSection.vue`           | `_image-section.scss`     |
| Homeowners “How we can help” (2 col + bullets) | `TwoColumnFeaturesSection.vue` | `_two-column-features.scss` |
| Investors 4-col services grid | `FourColumnBulletsSection.vue` | `_four-column-bullets.scss` (Figma `48:3043`) |
| About “What Sets Us Apart” (3 cards on dark) | `WhatSetsUsApartSection.vue` | `_what-sets-us-apart.scss` |

All section styles use the shared design tokens in `src/styles/_variables.scss` and `_mixins.scss`.
