<template>
  <div :class="rootClasses">
    <label v-if="label || $slots.label" :for="inputId" class="app-input__label">
      <slot name="label">{{ label }}</slot>
    </label>
    <component
      :is="multiline ? 'textarea' : 'input'"
      :id="inputId"
      :value="modelValue"
      :type="multiline ? undefined : type"
      :name="name"
      :placeholder="placeholder"
      :disabled="disabled"
      :required="required"
      :rows="multiline ? 4 : undefined"
      class="app-input__field"
      :aria-invalid="error ? 'true' : undefined"
      :aria-describedby="message ? `${inputId}-message` : undefined"
      @input="onInput"
      @focus="emit('focus', $event)"
      @blur="emit('blur', $event)"
    />
    <span v-if="message || $slots.message" :id="`${inputId}-message`" class="app-input__message">
      <slot name="message">{{ message }}</slot>
    </span>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  modelValue: { type: [String, Number], default: '' },
  type: { type: String, default: 'text' },
  name: { type: String, default: '' },
  label: { type: String, default: '' },
  placeholder: { type: String, default: '' },
  disabled: { type: Boolean, default: false },
  error: { type: Boolean, default: false },
  message: { type: String, default: '' },
  multiline: { type: Boolean, default: false },
  required: { type: Boolean, default: false },
})

const emit = defineEmits(['update:modelValue', 'focus', 'blur', 'input'])

const inputId = computed(() => `app-input-${Math.random().toString(36).slice(2, 9)}`)

const rootClasses = computed(() => [
  'app-input',
  props.error && 'is-error',
  props.disabled && 'is-disabled',
  props.multiline && 'app-input--multiline',
].filter(Boolean))

function onInput(e) {
  emit('update:modelValue', e.target.value)
  emit('input', e)
}
</script>
