<template>
  <label :class="rootClasses">
    <input
      type="checkbox"
      :checked="modelValue"
      :name="name"
      :disabled="disabled"
      :required="required"
      class="app-checkbox__control"
      :aria-checked="modelValue"
      :aria-invalid="error ? 'true' : undefined"
      @change="onChange"
    />
    <span v-if="label || $slots.default" class="app-checkbox__label">
      <slot>{{ label }}</slot>
    </span>
  </label>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  modelValue: { type: Boolean, default: false },
  name: { type: String, default: '' },
  label: { type: String, default: '' },
  disabled: { type: Boolean, default: false },
  error: { type: Boolean, default: false },
  required: { type: Boolean, default: false },
})

const emit = defineEmits(['update:modelValue', 'change'])

const rootClasses = computed(() => [
  'app-checkbox',
  props.modelValue && 'is-checked',
  props.disabled && 'is-disabled',
  props.error && 'is-error',
].filter(Boolean))

function onChange(e) {
  emit('update:modelValue', e.target.checked)
  emit('change', e)
}
</script>
