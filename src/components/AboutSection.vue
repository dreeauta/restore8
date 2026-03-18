<template>
  <section class="about-wrapper" id="about">
    <div class="about-container">
        <div class="about-text">
          <p>
            My name is Andreea Uta, and I'm a web developer living in Atlanta, GA. I have worked with a range of clients from
            small startups to enterprise companies providing front end consulting, web development, and web design services. I work with clients to understand business requirements, and build
            creative web solutions centered around improving business value.
          </p>
          <p>
            When I'm not working, I love to make art and hike with my two pitties.
            I enjoy being able to use my passion for art and design to create beautiful, impactful web experiences for users.
          </p>
          <a class="app-btn" :href="resumeUrl" target="_blank" rel="noopener noreferrer">Resume</a>
        </div>
        <img :src="aboutImageUrl" alt="Andreea Uta" />
      </div>
  </section>
</template>

<script setup>
const resumeUrl = '/img/AndreeaUta-resume.pdf'
const aboutImageUrl = '/img/about-me-collage.png'
</script>
