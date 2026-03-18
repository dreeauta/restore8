<template>
  <section class="skills-modern">
    <div class="skills-grid">
      <article
        v-for="(category, idx) in categories"
        :key="category.title"
        class="skill-column"
        :class="`skill-column--${idx}`"
      >
        <div class="skill-column-header">
          <span class="skill-column-num" aria-hidden="true">{{ String(idx + 1).padStart(2, '0') }}</span>
          <h3 class="skill-column-title">{{ category.title }}</h3>
        </div>
        <ul class="skill-list">
          <li v-for="(item, i) in category.items" :key="i">{{ item }}</li>
        </ul>
      </article>
    </div>
  </section>
</template>

<script setup>
const categories = [
  {
    title: 'Development',
    items: [
      'Responsive websites with HTML, SCSS, JavaScript, Vue.js, and React',
      'Pixel-perfect UI implementation from design mockups',
      'Reusable component libraries and modular architecture',
      'Cross-browser testing and QA across breakpoints',
      'Accessibility best practices (WCAG, semantic HTML)',
      'Front-end performance optimization',
      'CMS component development (AEM, Sitecore, Kentico, Optimizely)',
    ],
  },
  {
    title: 'Design',
    items: [
      'UI/UX prototyping in Figma, Adobe XD, Photoshop, and Sketch',
      'Design mockups translated into scalable front-end code',
      'UI component creation aligned with brand guidelines',
      'Design systems and maintainable style guides',
      'Designer–developer collaboration for improved UX',
      'Iterative design improvements through feedback and testing',
    ],
  },
  {
    title: 'Tools',
    items: [
      'CMS platforms: AEM, Sitecore, Kentico, Optimizely',
      'Marketing integrations: Marketo, Salesforce Marketing Cloud',
      'Version control: Git, GitHub, Bitbucket',
      'Project management: Jira, Confluence',
      'Accessibility & performance: Axe, Lighthouse, WAVE',
      'Cross-browser testing: BrowserStack',
    ],
  },
]
</script>

<style lang="scss" scoped>
@use '../../styles/scss/global/variables' as *;

.skills-modern {
  padding: $space-4xl 1.5rem;
  max-width: 1200px;
  margin: 50px auto 0;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: $space-xl;
  align-items: stretch;
}

.skill-column {
  background: $white-pure;
  border-radius: $radius-xl;
  padding: $space-2xl $space-xl;
  border: 1px solid $gray-border-alt;
  box-shadow: $shadow-sm;
  transition: box-shadow 0.25s ease, border-color 0.25s ease, transform 0.25s ease;
}

.skill-column:hover {
  box-shadow: $shadow-md;
  border-color: rgba(93, 212, 208, 0.25);
  transform: translateY(-2px);
}

.skill-column-header {
  display: flex;
  align-items: baseline;
  gap: $space-md;
  margin-bottom: $space-xl;
  padding-bottom: $space-lg;
  border-bottom: 2px solid $teal-ui;
}

.skill-column-num {
  font-family: 'Poppins', sans-serif;
  font-size: 0.875rem;
  font-weight: 700;
  color: $teal-ui;
  letter-spacing: 0.02em;
  flex-shrink: 0;
}

.skill-column-title {
  font-family: 'Poppins', sans-serif;
  font-size: 1.125rem;
  font-weight: 700;
  color: $slate-800;
  margin: 0;
  letter-spacing: 0.02em;
}

.skill-list {
  list-style: none;
  margin: 0;
  padding: 0;
}

.skill-list li {
  font-family: 'Poppins', sans-serif;
  font-size: 0.9375rem;
  color: $slate-600;
  line-height: 1.7;
  margin-bottom: $space-md;
  padding-left: 1.25rem;
  position: relative;
  transition: color 0.2s ease;
}

.skill-list li:last-child {
  margin-bottom: 0;
}

.skill-list li:hover {
  color: $slate-800;
}

.skill-list li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0.6em;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: $teal-ui;
  opacity: 0.8;
  transition: opacity 0.2s ease;
}

.skill-list li:hover::before {
  opacity: 1;
}

@media (max-width: 768px) {
  .skills-grid {
    grid-template-columns: 1fr;
    gap: $space-lg;
  }

  .skill-column {
    padding: $space-xl $space-lg;
  }
}

@media (max-width: 640px) {
  .skills-modern {
    padding: 2rem 1rem 3rem;
  }

  .skill-column-header {
    flex-wrap: wrap;
    margin-bottom: $space-lg;
    padding-bottom: $space-md;
  }
}
</style>
