<template>
  <section class="projects-teaser-grid">
    <div class="projects-teaser-inner">
      <div class="projects-teaser-grid-wrap">
        <RouterLink
          v-for="(project, index) in projects"
          :key="project.slug"
          :to="{ name: 'project-detail', params: { slug: project.slug } }"
          class="project-teaser-card project-teaser-card--animate"
          :style="{ '--accent-hue': accentHue(index), '--teaser-delay': `${index * 0.08}s` }"
        >
          <div class="project-teaser-media">
            <img
              v-if="project.teaserImage"
              :src="project.teaserImage"
              :alt="project.title"
              class="project-teaser-img"
              loading="lazy"
            />
            <div v-else class="project-teaser-placeholder">
              <span class="project-teaser-initial">{{ project.title.charAt(0) }}</span>
            </div>
            <span class="project-teaser-cta">View project →</span>
          </div>
          <div class="project-teaser-body">
            <h3 class="project-teaser-title">{{ project.title }}</h3>
            <p class="project-teaser-text">{{ teaserText(project) }}</p>
            <p class="project-teaser-tech">{{ project.technologies }}</p>
          </div>
        </RouterLink>
      </div>
    </div>
  </section>
</template>

<script setup>
import { projects } from '@/data/projects'

function teaserText(project) {
  if (!project.description || !project.description.length) return ''
  return project.description[0]
}

function accentHue(index) {
  const hues = [195, 265, 160, 330]
  return hues[index % hues.length]
}
</script>

<style lang="scss" scoped>
@use '../../styles/scss/global/variables' as *;

.projects-teaser-grid {
  background: $gray-bg-alt;
  padding: $space-3xl 1.5rem $space-4xl;
  box-sizing: border-box;
}

.projects-teaser-inner {
  max-width: 1200px;
  margin: 0 auto;
}

.projects-teaser-heading {
  font-family: 'Poppins', sans-serif;
  font-size: clamp(1.5rem, 3vw, 2rem);
  font-weight: 700;
  color: $slate-900;
  margin: 0 0 $space-sm;
}

.projects-teaser-lead {
  font-family: 'Poppins', sans-serif;
  font-size: 0.95rem;
  color: $slate-500;
  margin: 0 0 $space-xl;
  max-width: 540px;
}

.projects-teaser-grid-wrap {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
}

@media (min-width: 640px) {
  .projects-teaser-grid-wrap {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .projects-teaser-grid-wrap {
    grid-template-columns: repeat(3, 1fr);
    gap: 3rem 1.75rem;
  }
}

.project-teaser-card {
  display: flex;
  flex-direction: column;
  text-decoration: none;
  color: inherit;
  background: $white-pure;
  border-radius: 14px;
  overflow: hidden;
  box-shadow: $slate-shadow;
  border: 1px solid $slate-shadow;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.project-teaser-card--animate {
  opacity: 0;
  animation: project-teaser-in 0.5s ease-out forwards;
  animation-delay: var(--teaser-delay, 0s);
}

@keyframes project-teaser-in {
  from {
    opacity: 0;
    transform: translateY(24px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.project-teaser-card:hover {
  transform: translateY(-4px);
  box-shadow: $slate-shadow-hover;
}

.project-teaser-media {
  position: relative;
  aspect-ratio: 16 / 10;
  overflow: hidden;
  background: linear-gradient(
    135deg,
    hsl(var(--accent-hue, 195), 45%, 42%) 0%,
    hsl(calc(var(--accent-hue, 195) + 25), 35%, 28%) 100%
  );
}

.project-teaser-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
  display: block;
}

.project-teaser-placeholder {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.project-teaser-initial {
  font-family: 'Poppins', sans-serif;
  font-size: 3rem;
  font-weight: 700;
  color: $white-highlight;
  text-shadow: 0 2px 16px $black-shadow;
}

.project-teaser-cta {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 0.65rem $space-md;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.9), transparent);
  color: $white-pure;
  font-family: 'Poppins', sans-serif;
  font-size: 0.85rem;
  font-weight: 600;
  opacity: 0;
  transform: translateY(6px);
  transition: opacity 0.2s ease, transform 0.2s ease;
}

.project-teaser-card:hover .project-teaser-cta {
  opacity: 1;
  transform: translateY(0);
}

.project-teaser-body {
  padding: $space-lg 1.25rem $space-lg;
  border-top: 1px solid $slate-border;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: $space-sm;
}

.project-teaser-title {
  font-family: 'Poppins', sans-serif;
  font-size: 1.15rem;
  font-weight: 700;
  color: $slate-900;
  margin: 0;
  line-height: 1.3;
}

.project-teaser-text {
  font-family: 'Poppins', sans-serif;
  font-size: 0.875rem;
  line-height: 1.5;
  color: $slate-600;
  margin: 0;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  flex: 1;
}

.project-teaser-tech {
  font-family: 'Poppins', sans-serif;
  font-size: 0.75rem;
  color: $slate-400;
  margin: $space-xs 0 0;
  line-height: 1.4;
}
</style>
