'use client'

import { useEffect, useState, useCallback } from 'react'
import Button from '@/components/generic/button/button'
import PostCard from './post_card'
import styles from './three_up.module.scss'
import type ThreeUpProps from './three_up.interface'
import type Post from '@/interfaces/post'

const LIMIT = 3

const ThreeUpBlock = ({ headline = 'Other premium large format experiences', initialPosts = [] }: ThreeUpProps) => {
  const [posts, setPosts] = useState<Post[]>(initialPosts)
  const [offset, setOffset] = useState(initialPosts.length)
  const [hasMore, setHasMore] = useState(true)
  const [loading, setLoading] = useState(initialPosts.length === 0)

  const fetchPosts = useCallback(async (currentOffset: number) => {
    setLoading(true)
    try {
      const res = await fetch(`/api/posts?offset=${currentOffset}&limit=${LIMIT}`)
      const data = await res.json()
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

  return (
    <section className={`${styles.root} container`} aria-labelledby="three-up-heading">
      <div className={styles.header}>
        <h2 id="three-up-heading" className={styles.headline}>
          {headline}
        </h2>
        <p className={`${styles.copy} muted`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris aliquam eleifend dui, at sollicitudin nibh facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <ul className={styles.grid}>
        {posts.map((post) => (
          <li key={post.id}>
            <PostCard {...post} />
          </li>
        ))}
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
