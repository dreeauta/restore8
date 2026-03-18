import { onMounted, onUnmounted } from 'vue'

/**
 * Adds an "in-view" class to the element when it enters the viewport.
 * Use with CSS for scroll-triggered animations (e.g. fade-up).
 * @param {import('vue').Ref<HTMLElement|null>} elRef - Ref to the element to observe
 * @param {Object} options - IntersectionObserver options
 * @param {boolean} options.once - If true, only animate once (default true)
 * @param {number} options.threshold - Visibility threshold 0-1 (default 0.1)
 * @param {string} options.rootMargin - Root margin e.g. "0px 0px -50px 0px"
 */
export function useScrollAnimation(elRef, options = {}) {
  const { once = true, threshold = 0.1, rootMargin = '0px 0px -40px 0px' } = options
  let observer = null

  onMounted(() => {
    const el = elRef.value
    if (!el) return
    observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view')
            if (once) observer?.unobserve(entry.target)
          } else if (!once) {
            entry.target.classList.remove('in-view')
          }
        }
      },
      { threshold, rootMargin }
    )
    observer.observe(el)
  })

  onUnmounted(() => {
    observer?.disconnect()
    observer = null
  })
}
