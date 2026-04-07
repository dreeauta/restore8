<template>
  <component
    :is="tag"
    :type="tag === 'button' ? type : undefined"
    :href="tag === 'a' ? href : undefined"
    :to="tag === 'router-link' ? to : undefined"
    :disabled="tag === 'button' && (disabled || loading)"
    :aria-disabled="disabled"
    :aria-busy="loading"
    :class="buttonClasses"
    @click="onClick"
  >
    <slot />
  </component>
</template>

<script setup>
import { computed } from 'vue'
import { RouterLink } from 'vue-router'

const props = defineProps({
  variant: {
    type: String,
    default: 'primary',
    validator: (v) => ['primary', 'secondary', 'text', 'dark'].includes(v),
  },
  type: {
    type: String,
    default: 'button',
    validator: (v) => ['button', 'submit', 'reset'].includes(v),
  },
  href: {
    type: String,
    default: '',
  },
  to: {
    type: [String, Object],
    default: '',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  loading: {
    type: Boolean,
    default: false,
  },
  fullWidth: {
    type: Boolean,
    default: false,
  },
})

const emit = defineEmits(['click'])

const tag = computed(() => {
  if (props.to) return RouterLink
  if (props.href) return 'a'
  return 'button'
})

const buttonClasses = computed(() => [
  'app-button',
  `app-button--${props.variant}`,
  props.fullWidth && 'app-button--full-width',
  props.disabled && 'is-disabled',
  props.loading && 'is-loading',
].filter(Boolean))

function onClick(e) {
  if (props.disabled || props.loading) return
  emit('click', e)
}
</script>
