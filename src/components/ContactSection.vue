<template>
  <section class="er-contact" id="contact" aria-labelledby="contact-heading">
    <div class="er-contact-inner">
      <div class="er-contact-text">
        <h2 id="contact-heading" class="er-contact-title">Let's Talk About Your Project</h2>
        <p>
          We're a family-owned company dedicated to bringing your vision to life. Share your ideas with us and we'll work with you every step of the way.
        </p>
        <p>
          With decades of experience in residential remodeling across the Greater Atlanta area, we combine European craftsmanship with personalized service.
        </p>
        <p>
          Tell us about your project below and we'll get back to you promptly to discuss next steps.
        </p>
      </div>
      <form
        class="er-contact-form"
        action="https://formspree.io/f/xjvnpqyz"
        method="POST"
        @submit="onSubmit"
      >
        <div class="er-form-row">
          <div class="er-form-group">
            <label for="er-name">Name</label>
            <input
              id="er-name"
              v-model="form.name"
              type="text"
              name="name"
              placeholder="Your name"
              class="er-form-input"
            />
          </div>
          <div class="er-form-group">
            <label for="er-email">E-mail</label>
            <input
              id="er-email"
              v-model="form.email"
              type="email"
              name="email"
              placeholder="you@example.com"
              class="er-form-input"
              required
            />
          </div>
        </div>
        <div class="er-form-group">
          <label for="er-phone">Phone Number</label>
          <input
            id="er-phone"
            v-model="form.phone"
            type="tel"
            name="phone"
            placeholder="(555) 000-0000"
            class="er-form-input"
          />
        </div>
        <div class="er-form-group">
          <label for="er-project">Tell Me About Your Project</label>
          <textarea
            id="er-project"
            v-model="form.message"
            name="message"
            placeholder="Describe your project..."
            class="er-form-input er-form-textarea"
            rows="5"
            required
          ></textarea>
        </div>
        <button type="submit" class="er-form-submit">Submit</button>
      </form>
    </div>
  </section>
</template>

<script setup>
import { reactive } from 'vue'

const form = reactive({
  name: '',
  email: '',
  phone: '',
  message: '',
})

function onSubmit(e) {
  const email = form.email
  if (!email || email.length < 5 || !email.includes('@') || !email.includes('.')) {
    e.preventDefault()
    return
  }
  if (form.message.length < 5) {
    e.preventDefault()
    return
  }
}
</script>

<style lang="scss" scoped>
@use '../../styles/scss/global/variables' as *;

.er-contact {
  background: $er-beige;
  padding: clamp(3rem, 6vw, 5rem) 1.5rem;
  border-radius: 120px 0 0 0;
  margin-top: 2rem;
}

.er-contact-inner {
  max-width: 1100px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: clamp(2rem, 4vw, 3.5rem);
  align-items: start;
}

.er-contact-title {
  font-family: 'Cormorant Garamond', serif;
  font-size: clamp(1.5rem, 2.5vw, 2rem);
  font-weight: 700;
  color: $er-accent;
  margin: 0 0 1.25rem;
  line-height: 1.25;
}

.er-contact-text p {
  font-family: 'Inter', sans-serif;
  font-size: 0.95rem;
  line-height: 1.7;
  color: $er-text;
  margin: 0 0 1rem;
}

.er-contact-form {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  background: $er-white;
  padding: 1.75rem;
  border-radius: 12px;
  border: 1px solid $er-border;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
}

.er-form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.25rem;
}

.er-form-group {
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
}

.er-form-group label {
  font-family: 'Inter', sans-serif;
  font-size: 0.875rem;
  font-weight: 500;
  color: $er-text;
}

.er-form-input {
  font-family: 'Inter', sans-serif;
  font-size: 0.95rem;
  padding: 0.7rem 0.9rem;
  border: 1px solid $er-border;
  border-radius: 6px;
  background: $er-white;
  color: $er-text;
  transition: border-color 0.2s;
}

.er-form-input::placeholder {
  color: $er-text-muted;
  opacity: 0.8;
}

.er-form-input:focus {
  outline: none;
  border-color: $er-accent;
}

.er-form-textarea {
  resize: vertical;
  min-height: 120px;
}

.er-form-submit {
  font-family: 'Inter', sans-serif;
  font-size: 0.95rem;
  font-weight: 600;
  color: $er-white;
  background: $er-accent;
  border: none;
  padding: 0.85rem 1.5rem;
  border-radius: 6px;
  cursor: pointer;
  transition: background 0.2s, transform 0.15s;
  margin-top: 0.25rem;
}

.er-form-submit:hover {
  background: $er-accent-hover;
  transform: translateY(-2px);
}

@media (max-width: 768px) {
  .er-contact-inner {
    grid-template-columns: 1fr;
  }
  .er-form-row {
    grid-template-columns: 1fr;
  }
}
</style>
