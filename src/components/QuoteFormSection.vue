<template>
  <section
    class="quote-form"
    :id="id"
    :class="{ 'quote-form--request-page': variant === 'request-page' }"
    :aria-labelledby="headingId"
  >
    <div class="quote-form__inner">
      <div class="quote-form__content">
        <h2
          :id="headingId"
          class="quote-form__title"
          :class="{ 'quote-form__title--sr-only': variant === 'request-page' }"
        >
          {{ title }}
        </h2>
        <p v-if="intro" class="quote-form__text">{{ intro }}</p>
        <p v-if="intro2" class="quote-form__text">{{ intro2 }}</p>
        <p v-if="intro3" class="quote-form__text">{{ intro3 }}</p>
      </div>
      <form
        class="quote-form__form"
        :action="formAction"
        method="POST"
        @submit="onSubmit"
      >
        <input
          type="hidden"
          name="_subject"
          value="New Restore8 website form submission"
        >
        <input
          type="hidden"
          name="_template"
          value="table"
        >
        <AppInput
          v-model="form.name"
          name="name"
          label="Name"
          :placeholder="variant === 'request-page' ? '' : 'Your name'"
        />
        <AppInput
          v-model="form.email"
          type="email"
          name="email"
          label="E-mail"
          :placeholder="variant === 'request-page' ? '' : 'you@example.com'"
          :required="true"
          :error="!!errors.email"
          :message="errors.email"
        />
        <AppInput
          v-model="form.phone"
          type="tel"
          name="phone"
          label="Phone Number"
          :placeholder="variant === 'request-page' ? '' : '(555) 000-0000'"
        />

        <template v-if="variant === 'request-page'">
          <AppSelect
            v-model="form.projectType"
            name="projectType"
            label="Project Type"
            :options="projectTypeOptions"
          />
          <AppSelect
            v-model="form.propertyType"
            name="propertyType"
            label="Property Type"
            :options="propertyTypeOptions"
          />
          <AppSelect
            v-model="form.priceRange"
            name="priceRange"
            label="Price Range"
            :options="priceRangeOptions"
          />
          <AppSelect
            v-model="form.projectScope"
            name="projectScope"
            label="Project Scope"
            :options="projectScopeOptions"
          />
          <AppSelect
            v-model="form.timeline"
            name="timeline"
            label="Timeline"
            :options="timelineOptions"
          />
          <AppInput
            v-model="form.message"
            name="message"
            label="Tell Us About Your Project"
            :placeholder="''"
            :multiline="true"
            :required="true"
            :error="!!errors.message"
            :message="errors.message"
          />
        </template>

        <template v-else>
          <AppInput
            v-model="form.message"
            name="message"
            :label="messageLabel"
            placeholder="Describe your project..."
            :multiline="true"
            :required="true"
            :error="!!errors.message"
            :message="errors.message"
          />
        </template>
        <AppButton
          type="submit"
          variant="dark"
          class="quote-form__submit"
        >
          {{ submitLabel }}
        </AppButton>
      </form>
    </div>
  </section>
</template>

<script setup>
import { reactive, computed } from 'vue'
import AppInput from '@er/components/AppInput.vue'
import AppButton from '@er/components/AppButton.vue'
import AppSelect from '@er/components/AppSelect.vue'

defineProps({
  id: { type: String, default: 'contact' },
  title: { type: String, default: "Let's Talk About Your Project" },
  intro: { type: String, default: '' },
  intro2: { type: String, default: '' },
  intro3: { type: String, default: '' },
  variant: {
    type: String,
    default: 'tan',
    validator: (v) => v === 'tan' || v === 'request-page',
  },
  formAction: { type: String, default: 'https://formsubmit.co/utaflo72@gmail.com' },
  submitLabel: { type: String, default: 'Submit' },
  /** Label for the message textarea (tan / default variant). */
  messageLabel: { type: String, default: 'Tell Me About Your Project' },
})

const headingId = computed(() => `${String(Math.random()).slice(2)}-quote-form-heading`)

const form = reactive({
  name: '',
  email: '',
  phone: '',
  projectType: '',
  propertyType: '',
  priceRange: '',
  projectScope: '',
  timeline: '',
  message: '',
})

const errors = reactive({
  email: '',
  message: '',
})

function onSubmit(e) {
  errors.email = ''
  errors.message = ''
  const email = form.email?.trim() || ''
  if (!email || email.length < 5 || !email.includes('@') || !email.includes('.')) {
    e.preventDefault()
    errors.email = 'Please enter a valid email address.'
    return
  }
  const message = form.message?.trim() || ''
  if (message.length < 5) {
    e.preventDefault()
    errors.message = 'Please describe your project (at least a few words).'
    return
  }
}

// The dropdowns need at least one empty option so the initial state matches the Figma mockups.
const projectTypeOptions = [
  { value: '', label: '' },
  { value: 'Exterior Repair', label: 'Exterior Repair' },
  { value: 'Basement Finishing', label: 'Basement Finishing' },
  { value: 'Basement Remodeling', label: 'Basement Remodeling' },
]

const propertyTypeOptions = [
  { value: '', label: '' },
  { value: 'Homeowner', label: 'Homeowner' },
  { value: 'Property Owner', label: 'Property Owner' },
]

const priceRangeOptions = [
  { value: '', label: '' },
  { value: '$10k-$25k', label: '$10k-$25k' },
  { value: '$25k-$75k', label: '$25k-$75k' },
  { value: '$75k+', label: '$75k+' },
]

const projectScopeOptions = [
  { value: '', label: '' },
  { value: 'Repair', label: 'Repair' },
  { value: 'Replacement', label: 'Replacement' },
  { value: 'Build-Out', label: 'Build-Out' },
]

const timelineOptions = [
  { value: '', label: '' },
  { value: 'ASAP', label: 'ASAP' },
  { value: '1-3 Months', label: '1-3 Months' },
  { value: '3-6 Months', label: '3-6 Months' },
]
</script>
