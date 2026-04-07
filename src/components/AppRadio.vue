<template>
  <label :class="rootClasses">
    <input
      type="radio"
      :checked="isChecked"
      :name="name"
      :value="value"
      :disabled="disabled"
      :required="required"
      class="app-radio__control"
      :aria-checked="isChecked"
      :aria-invalid="error ? 'true' : undefined"
      @change="onChange"
    />
    <span v-if="label || $slots.default" class="app-radio__label">
      <slot>{{ label }}</slot>
    </span>
  </label>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  modelValue: { type: [String, Number], default: undefined },
  value: { type: [String, Number], required: true },
  name: { type: String, default: '' },
  label: { type: String, default: '' },
  disabled: { type: Boolean, default: false },
  error: { type: Boolean, default: false },
  required: { type: Boolean, default: false },
})

const emit = defineEmits(['update:modelValue', 'change'])

const isChecked = computed(() => props.modelValue === props.value)

const rootClasses = computed(() => [
  'app-radio',
  isChecked.value && 'is-checked',
  props.disabled && 'is-disabled',
  props.error && 'is-error',
].filter(Boolean))

function onChange(e) {
  emit('update:modelValue', props.value)
  emit('change', e)
}
</script>
