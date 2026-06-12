import '@testing-library/jest-dom/vitest'

// IntersectionObserver is not available in jsdom
class MockIntersectionObserver {
  observe() {}
  disconnect() {}
  unobserve() {}
}
Object.defineProperty(globalThis, 'IntersectionObserver', {
  writable: true,
  value: MockIntersectionObserver,
})
