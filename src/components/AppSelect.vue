<template>
  <div :class="rootClasses">
    <label v-if="label || $slots.label" :for="selectId" class="app-select__label">
      <slot name="label">{{ label }}</slot>
    </label>
    <select
      :id="selectId"
      :value="modelValue"
      :name="name"
      :disabled="disabled"
      :required="required"
      class="app-select__field"
      :aria-invalid="error ? 'true' : undefined"
      :aria-describedby="message ? `${selectId}-message` : undefined"
      @change="onChange"
      @focus="emit('focus', $event)"
      @blur="emit('blur', $event)"
    >
      <option v-if="placeholder" value="" disabled>{{ placeholder }}</option>
      <option
        v-for="opt in options"
        :key="opt.value"
        :value="opt.value"
      >
        {{ opt.label }}
      </option>
    </select>
    <span v-if="message || $slots.message" :id="`${selectId}-message`" class="app-select__message">
      <slot name="message">{{ message }}</slot>
    </span>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  modelValue: { type: [String, Number], default: '' },
  name: { type: String, default: '' },
  label: { type: String, default: '' },
  placeholder: { type: String, default: '' },
  disabled: { type: Boolean, default: false },
  error: { type: Boolean, default: false },
  message: { type: String, default: '' },
  required: { type: Boolean, default: false },
  options: {
    type: Array,
    default: () => [],
    validator: (list) => list.every((o) => o && typeof o.value !== 'undefined' && typeof o.label !== 'undefined'),
  },
})

const emit = defineEmits(['update:modelValue', 'focus', 'blur', 'change'])

const selectId = computed(() => `app-select-${Math.random().toString(36).slice(2, 9)}`)

const rootClasses = computed(() => [
  'app-select',
  props.error && 'is-error',
  props.disabled && 'is-disabled',
].filter(Boolean))

function onChange(e) {
  const val = e.target.value
  emit('update:modelValue', props.options.some((o) => String(o.value) === val) ? val : '')
  emit('change', e)
}
</script>
