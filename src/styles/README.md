# Design system styles (single source)

All global styling for the Vue app lives under **`src/styles/`**.

## Entry

- **`index.scss`** – imported from `src/main.js`. Loads tokens, globals, typography, primitives, and section partials in a deliberate order.

## Page layout spacing

- **`_globals.scss`** – `.page-content` uses **`gap: var(--page-section-gap)`** from **`$space-page-section-gap-mobile`** / **`$space-page-section-gap-desktop`** (even spacing between direct children). **`footer.site-footer`** uses **`margin-top: calc(-1 * var(--page-section-gap))`** so the last section (usually the quote form) sits flush against the footer with no extra gap. **`$space-section-inner-y-*`** on section **`__inner`** remains for internal padding; the quote form moves bottom spacing to **`.quote-form__form`** so the section background meets the footer edge.

## Tokens (why there is only one variables file now)

- **`_variables.scss`** – design tokens (colors, spacing, typography scale, radii, etc.). This is the **only** Sass variables file the app should use.
- The old duplicate at **`styles/scss/global/_variables.scss`** (repo root) was part of a **legacy** stack (`styles/styles.scss`) that is **no longer imported** and has been **removed** to avoid two conflicting “sources of truth”.

## How to use tokens in new SCSS

```scss
@use './variables' as v;

.example {
  color: v.$color-text-primary;
}
```

## How to use tokens in Vue SFC `<style lang="scss">`

Prefer styling via **global BEM classes** in `src/styles/_*.scss` rather than pulling variables into many components. If you must:

```scss
@use '../styles/variables' as v;
```

(path relative to the `.vue` file under `src/components/`)
