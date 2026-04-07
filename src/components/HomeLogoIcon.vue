<template>
  <span class="brand-logo" aria-hidden="true">
    <svg
      class="brand-logo__mark"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      fill="none"
      stroke="currentColor"
      stroke-width="3"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path d="M8 26 32 8l24 18" />
      <path d="M16 26v28" />
      <path d="M48 26v28" />
      <rect x="24" y="20" width="16" height="12" rx="6" />
      <rect x="24" y="34" width="16" height="12" rx="6" />
      <path d="M18 54h28" />
    </svg>
    <span class="brand-logo__wordmark">
      <span class="brand-logo__name">Restore8</span>
    </span>
  </span>
</template>

<style scoped lang="scss">
.brand-logo {
  display: inline-flex;
  align-items: center;
  gap: 4px;
}

.brand-logo__mark {
  width: 42px;
  height: 42px;
  flex-shrink: 0;
}

.brand-logo__wordmark {
  display: inline-flex;
  align-items: baseline;
  font-family: 'DM Sans', system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif;
  font-size: 1.3rem;
  font-weight: 700;
  line-height: 1;
  white-space: nowrap;
  letter-spacing: -0.03em;
}

.brand-logo__name {
  font-weight: 700;
}
</style>
