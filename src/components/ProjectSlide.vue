<template>
  <article class="project-slide">
    <div class="project-slide-media">
      <div v-if="project.videoSrc" class="video-wrap">
        <video
          :ref="(el) => setVideoRef(el)"
          width="320"
          height="240"
          controls
          loop
          @loadedmetadata="onVideoLoaded"
        >
          <source :src="project.videoSrc" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <button
          type="button"
          class="video-play-btn"
          aria-label="Play video"
          @click="playVideo"
        >
          ▶
        </button>
      </div>
      <div v-else class="video-wrap project-slide-image-wrap">
        <img
          :src="project.teaserImage || (project.images && project.images[0])"
          :alt="project.title"
          class="project-slide-img"
          loading="lazy"
        />
      </div>
    </div>
    <div class="project-slide-content">
      <span class="project-slide-tag">{{ project.cms}}</span>
      <h2 class="project-slide-title">{{ project.title }}</h2>
      <p v-for="(para, i) in project.description" :key="i" class="project-slide-desc">{{ para }}</p>
      <p class="project-slide-tech">
        <span class="tech-label">Technologies</span> {{ project.technologies }}
      </p>
      <a
        v-if="project.websiteUrl"
        :href="project.websiteUrl"
        target="_blank"
        rel="noopener noreferrer"
        class="app-btn"
      >
        Visit website
      </a>
    </div>
  </article>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  project: {
    type: Object,
    required: true,
  },
})

const videoEl = ref(null)

function setVideoRef(el) {
  videoEl.value = el
}

function onVideoLoaded(e) {
  const v = e.target
  if (v) v.playbackRate = 1.25
}

function playVideo() {
  if (videoEl.value && videoEl.value.paused) {
    videoEl.value.play()
    const btn = videoEl.value.nextElementSibling
    if (btn) btn.style.display = 'none'
  }
}
</script>

<style lang="scss" scoped>
@use '../../styles/scss/global/variables' as *;

.project-slide {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: $space-3xl;
  align-items: center;
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  padding: $space-xl 0;
  min-height: 380px;
  box-sizing: border-box;
  flex-shrink: 0; /* keep slide content from shrinking so it stays centered */
}

.project-slide-media {
  position: relative;
}

.video-wrap {
  position: relative;
  border-radius: $radius-xl;
  overflow: hidden;
  background: $black-overlay-subtle;
  box-shadow: $shadow-video;
}

.video-wrap video {
  width: 100%;
  height: auto;
  display: block;
  border-radius: $radius-xl;
}

.project-slide-image-wrap {
  display: block;
}

.project-slide-img {
  width: 100%;
  height: auto;
  max-height: 320px;
  display: block;
  border-radius: $radius-xl;
  object-fit: cover;
  object-position: top;
}

.video-play-btn {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 64px;
  height: 64px;
  border-radius: 50%;
  border: none;
  background: $black-overlay-light;
  color: $white-pure;
  font-size: 1.35rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s, transform 0.2s;
}

.video-play-btn:hover {
  background: $black-overlay;
  transform: translate(-50%, -50%) scale(1.08);
}

.project-slide-content {
  padding: 0.5rem 0;
}

.project-slide-tag {
  display: inline-block;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: $teal-ui;
  margin-bottom: $space-sm;
}

.project-slide-title {
  font-family: 'Poppins', sans-serif;
  font-size: clamp(1.5rem, 3vw, 2rem);
  font-weight: 700;
  color: $black;
  margin: 0 0 $space-md;
  letter-spacing: -0.02em;
  line-height: 1.2;
}

.project-slide-desc {
  font-family: 'Poppins', sans-serif;
  font-size: 0.95rem;
  color: $black;
  line-height: 1.65;
  margin: 0 0 $space-sm;
}

.project-slide-tech {
  font-size: 0.875rem;
  color: $black;
  margin: $space-md 0 $space-lg;
}

.tech-label {
  font-weight: 600;
  color: $black;
}

@media (max-width: 900px) {
  .project-slide {
    grid-template-columns: 1fr;
    gap: 2rem;
    padding: 1.5rem 0;
    min-height: auto;
  }

  .project-slide-media {
    order: 1;
  }

  .project-slide-content {
    order: 2;
    padding: 0;
  }

  .video-wrap {
    box-shadow: none;
  }
}
</style>
