import { NextResponse } from 'next/server'
import type Post from '@/interfaces/post'

/**
 * Mock data source for Task C. Replaces the original "hardcoded array +
 * slice" with a real paginated endpoint so candidates exercise async
 * fetching, loading and "end of results" states.
 *
 * GET /api/posts?offset=0&limit=3
 *   -> { posts: Post[], total: number, hasMore: boolean }
 */
const POSTS: Post[] = Array.from({ length: 12 }, (_, i) => {
  const id = i + 1
  return {
    id,
    title: `Sample blog post ${id}`,
    excerpt:
      'A short summary of the post used to demonstrate the load-more pattern in the three-up block.',
    date: new Date(2026, 0, id).toISOString(),
    imageUrl: `https://picsum.photos/seed/post-${id}/640/360`,
  }
})

export function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const offset = Math.max(0, Number(searchParams.get('offset') ?? 0) || 0)
  const limit = Math.max(1, Number(searchParams.get('limit') ?? 3) || 3)

  const posts = POSTS.slice(offset, offset + limit)

  return NextResponse.json({
    posts,
    total: POSTS.length,
    hasMore: offset + limit < POSTS.length,
  })
}
