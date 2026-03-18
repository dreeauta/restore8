# Styling system refactor – summary

## Goals

1. **Single typography file** – all heading styles (h1–h6) in one place.
2. **Centralized variables** – colors, spacing, radius, shadows in one tokens file.
3. **Components use variables only** – no hardcoded colors; gradients left unchanged.
4. **Preserve current design** – no visual changes beyond using tokens.

---

## 1. Typography file

**File:** `styles/scss/global/_typography.scss`

- **Headings h1–h6:** Each has `font-family`, `font-size`, `font-weight`, `line-height`, `letter-spacing`, and `margin` defined in one place.
- **Font stack:** `$font-primary` (Poppins), `$font-secondary` (Josefin Sans), `$font-body` (Open Sans).
- **Body and paragraphs:** Base body and `p` styles kept for legacy/global use.
- **Usage:** Imported in `styles/styles.scss` via `@import 'scss/global/typography'`, so global styles get these rules. Vue components that use semantic `<h1>`–`<h6>` without a class inherit these styles where the global CSS is loaded.

---

## 2. Variables / design tokens file

**File:** `styles/scss/global/_variables.scss`

**Contents:**

- **Colors:** All palette and UI colors used in the app:
  - Whites (pure, muted, overlay, border, subtle, etc.)
  - Blacks and overlays
  - Grays and slates (backgrounds, text, borders)
  - Teal accent and UI (hero, buttons, carousel)
  - Navy, nav text
  - Legacy palette (tan, green, blue, purple, darkgray, black)
- **Spacing:** `$margin-lg`, `$margin-sm`, `$space-xs` through `$space-4xl`.
- **Border radius:** `$radius-sm` through `$radius-2xl`.
- **Shadows:** `$shadow-sm`, `$shadow-md`, `$shadow-lg`, `$shadow-xl`, `$shadow-card`, `$shadow-card-hover`, `$shadow-nav`, `$shadow-section`, `$shadow-video`, `$shadow-focus`.

**Gradients:** Not moved into variables; all gradient values are left exactly as they were in components (no cleanup or centralization of gradients).

---

## 3. Refactored usages

**Global**

- `styles/styles.scss` – already imports `variables` and `typography`; no change to import order.

**Vue components (each now uses `lang="scss"` and `@use '../../styles/scss/global/variables' as *`):**

- **App.vue** – `.app-main` background, `.app-btn` colors and radius use variables.
- **PageHero.vue** – Text/background colors, spacing, radial overlay; gradient unchanged.
- **Hero.vue** – Teal accent, text light, white variants, hero spot radial; gradient unchanged.
- **ContactSection.vue** – Background overlay, form borders, labels, inputs, shadows, spacing.
- **ProjectsTeaserGrid.vue** – Section background, headings, cards, slate shadows/borders, spacing.
- **NavBar.vue** – Nav text, overlay, mobile link color, shadow; gradient unchanged.
- **ProjectSlide.vue** – Video wrap background/shadow, play button, tag, title/desc/tech colors, spacing/radius.
- **ProjectsCarousel.vue** – Heading color, teal glass/arrows, pagination bullet, shadows; radial gradient unchanged.
- **SkillsLogos.vue** – Title color, card background/border, hover shadow, tech name color, spacing.
- **SkillsSection.vue** – Card background/border, title color, list color, bullet, shadows, spacing.
- **DemoAppsSection.vue** – Section/content colors, card and image background, borders, shadows, spacing.
- **ProjectDetailView.vue** – Padding, radius, gallery shadow, spacing.
- **Footer.vue** – Already used variables; gradient and border unchanged.

**Path for components:** `@use '../../styles/scss/global/variables' as *`  
**Path for App.vue (src root):** `@use '../styles/scss/global/variables' as *`  
**Path for ProjectDetailView (views):** `@use '../../styles/scss/global/variables' as *`

---

## 4. What was not changed

- **Gradients** – All `linear-gradient` and `radial-gradient` values are unchanged; none were moved into variables or simplified.
- **Visual design** – Layout, typography scale, and colors are preserved; only the source of color/spacing/radius/shadow values was centralized.
- **Existing behavior** – No removal or “cleanup” of existing styles beyond replacing literals with variables.

---

## 5. Naming and consistency

- **Variables:** Descriptive names (`$slate-900`, `$teal-ui`, `$white-overlay`, `$shadow-card`, etc.); legacy names (`$white`, `$darkgray`, `$black`, `$margin-lg`) kept.
- **Typography:** Single file for all heading and base text styles; one place to change font sizes, weights, and line heights site-wide.

---

## 6. How to add or change tokens

- **New color:** Add to `_variables.scss`, then use the variable in components.
- **New spacing/radius/shadow:** Add to `_variables.scss` and use in SCSS.
- **Heading style change:** Edit `_typography.scss` (and optionally component-specific classes if they override).
- **Gradients:** Continue to leave as literal values in the component where they are used; do not add gradient definitions to the variables file unless you explicitly choose to.
