import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi, beforeEach } from 'vitest'

vi.mock('./post_card', async () => ({
  default: ({ title, excerpt }: { title: string; excerpt: string }) => (
    <div>
      <h3>{title}</h3>
      <p>{excerpt}</p>
    </div>
  ),
}))

import ThreeUpBlock from './three_up'

const makePosts = (start: number, count: number) =>
  Array.from({ length: count }, (_, i) => ({
    id: start + i,
    title: `Post ${start + i}`,
    excerpt: 'Excerpt',
    date: '2026-01-01T00:00:00.000Z',
    imageUrl: `https://picsum.photos/seed/post-${start + i}/640/360`,
  }))

const mockFetch = (posts: object[], hasMore: boolean) =>
  vi.fn().mockResolvedValue({
    json: () => Promise.resolve({ posts, total: 12, hasMore }),
  })

beforeEach(() => {
  vi.restoreAllMocks()
})

describe('ThreeUpBlock', () => {
  it('fetches and renders initial 3 posts', async () => {
    vi.stubGlobal('fetch', mockFetch(makePosts(1, 3), true))
    render(<ThreeUpBlock />)

    await waitFor(() => {
      expect(screen.getAllByRole('listitem')).toHaveLength(3)
    })
    expect(screen.getByText('Post 1')).toBeInTheDocument()
  })

  it('appends 3 more posts on load more click', async () => {
    vi.stubGlobal('fetch', mockFetch(makePosts(1, 3), true))
    render(<ThreeUpBlock />)

    await waitFor(() => screen.getAllByRole('listitem'))

    vi.stubGlobal('fetch', mockFetch(makePosts(4, 3), true))
    await userEvent.click(screen.getByRole('button', { name: /load more/i }))

    await waitFor(() => {
      expect(screen.getAllByRole('listitem')).toHaveLength(6)
    })
    expect(screen.getByText('Post 4')).toBeInTheDocument()
  })

  it('hides load more button when hasMore is false', async () => {
    vi.stubGlobal('fetch', mockFetch(makePosts(1, 3), true))
    render(<ThreeUpBlock />)

    await waitFor(() => screen.getAllByRole('listitem'))

    vi.stubGlobal('fetch', mockFetch(makePosts(4, 3), false))
    await userEvent.click(screen.getByRole('button', { name: /load more/i }))

    await waitFor(() => {
      expect(screen.queryByRole('button', { name: /load more/i })).not.toBeInTheDocument()
    })
  })

  it('disables button while loading', async () => {
    let resolve: (v: unknown) => void
    const pending = new Promise((r) => {
      resolve = r
    })
    vi.stubGlobal('fetch', vi.fn().mockReturnValue(pending))

    render(<ThreeUpBlock />)

    expect(screen.getByRole('button', { name: /loading/i })).toBeDisabled()

    resolve!({ json: () => Promise.resolve({ posts: makePosts(1, 3), total: 12, hasMore: true }) })
  })
})
