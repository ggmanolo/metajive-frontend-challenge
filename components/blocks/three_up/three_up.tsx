'use client'

import { useEffect, useState, useCallback } from 'react'
import Button from '@/components/generic/button/button'
import PostCard from './post_card'
import { useInView } from '@/hooks/useInView'
import styles from './three_up.module.scss'
import type ThreeUpProps from './three_up.interface'
import type Post from '@/interfaces/post'

const LIMIT = 3

const ThreeUpBlock = ({ headline = 'Other premium large format experiences', initialPosts = [] }: ThreeUpProps) => {
  const [posts, setPosts] = useState<Post[]>(initialPosts)
  const [offset, setOffset] = useState(initialPosts.length)
  const [hasMore, setHasMore] = useState(true)
  const [loading, setLoading] = useState(initialPosts.length === 0)
  const [animatingIds, setAnimatingIds] = useState<Set<number>>(new Set())
  const [ref, inView] = useInView<HTMLElement>()

  const fetchPosts = useCallback(async (currentOffset: number) => {
    setLoading(true)
    try {
      const res = await fetch(`/api/posts?offset=${currentOffset}&limit=${LIMIT}`)
      const data = await res.json()
      setAnimatingIds(new Set(data.posts.map((p: Post) => p.id)))
      setPosts((prev) => [...prev, ...data.posts])
      setOffset(currentOffset + data.posts.length)
      setHasMore(data.hasMore)
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    if (initialPosts.length === 0) fetchPosts(0)
  }, [fetchPosts, initialPosts.length])

  useEffect(() => {
    if (animatingIds.size === 0) return
    const t = setTimeout(() => setAnimatingIds(new Set()), 700)
    return () => clearTimeout(t)
  }, [animatingIds])

  return (
    <section ref={ref} className={`${styles.root} container reveal ${inView ? 'is-visible' : ''}`} aria-labelledby="three-up-heading">
      <div className={styles.header}>
        <h2 id="three-up-heading" className={styles.headline}>
          {headline}
        </h2>
        <p className={`${styles.copy} muted`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris aliquam eleifend dui, at sollicitudin nibh facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <ul className={styles.grid}>
        {posts.map((post, i) => {
          const isNew = animatingIds.has(post.id)
          return (
            <li key={post.id} className={isNew ? styles.cardEnter : undefined} style={isNew ? { animationDelay: `${(i % LIMIT) * 120}ms` } : undefined}>
              <PostCard {...post} />
            </li>
          )
        })}
      </ul>
      {hasMore && (
        <div className={styles.loadMore}>
          <Button
            onClick={(e) => {
              e.preventDefault()
              fetchPosts(offset)
            }}
            disabled={loading}
            size="wide"
          >
            {loading ? 'Loading…' : 'Load more'}
          </Button>
        </div>
      )}
      <hr className={styles.separator} aria-hidden="true" />
    </section>
  )
}

export default ThreeUpBlock
