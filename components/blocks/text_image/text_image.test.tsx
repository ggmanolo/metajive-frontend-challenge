import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import TextImageBlock from './text_image'

// Smoke test proving the Vitest + Testing Library harness works.
// Candidates: add meaningful tests (e.g. the Task C "load more" logic).
describe('TextImageBlock', () => {
  it('renders', () => {
    render(<TextImageBlock />)
    expect(screen.getByText(/text \+ image/i)).toBeInTheDocument()
  })
})
