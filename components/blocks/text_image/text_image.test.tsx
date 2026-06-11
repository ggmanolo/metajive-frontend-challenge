import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import TextImageBlock from './text_image'

const props = {
  headline: 'Book the Freezer',
  body: '<p>Lead copy.</p><p>Body copy.</p>',
  image: { src: '/A.jpg', alt: 'Test image', width: 533, height: 660 },
  email: 'info@example.com',
  phone: '(123) 456-7890',
}

describe('TextImageBlock', () => {
  it('renders the headline', () => {
    render(<TextImageBlock {...props} />)
    expect(screen.getByRole('heading', { name: /book the freezer/i })).toBeInTheDocument()
  })

  it('renders the mailto link', () => {
    render(<TextImageBlock {...props} />)
    expect(screen.getByRole('link', { name: /send us an email/i })).toHaveAttribute('href', 'mailto:info@example.com')
  })

  it('renders the tel link', () => {
    render(<TextImageBlock {...props} />)
    const link = screen.getByRole('link', { name: '(123) 456-7890' })
    expect(link).toHaveAttribute('href', 'tel:1234567890')
  })
})
