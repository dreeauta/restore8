import { inject, provide, unref } from 'vue'

export const REMODELING_LINK_PREFIX_KEY = Symbol('remodelingLinkPrefix')

/**
 * Call from the portfolio app so remodeling RouterLinks resolve under
 * `/european-remodeling/*` instead of the portfolio root (`/about`, etc.).
 * Can pass a string or a ref/computed (use `unref` in consumers).
 */
export function provideRemodelingLinkPrefix(prefix) {
  provide(REMODELING_LINK_PREFIX_KEY, prefix)
}

/**
 * Prefixes absolute paths when embedded in the portfolio; standalone app leaves paths unchanged.
 */
export function useRemodelingLink() {
  const prefix = inject(REMODELING_LINK_PREFIX_KEY, null)

  function to(path) {
    const pfx = unref(prefix)
    if (path == null || path === '') return path
    // Hash-only links stay on the current route (e.g. #contact)
    if (typeof path === 'string' && path.startsWith('#')) return path
    if (!pfx) return path
    if (path === '/') return pfx
    const p = path.startsWith('/') ? path : `/${path}`
    return `${pfx}${p}`
  }

  return { to, prefix }
}
