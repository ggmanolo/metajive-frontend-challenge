'use client'

import styles from './three_up.module.scss'

/**
 * Task C — Blog Posts ("load more")
 *
 * Render 3 posts by default. A button below loads 3 more each click and
 * appends them. Fetch from the local `/api/posts` route (supports
 * `?offset=` & `?limit=`); handle loading and "no more results" states.
 *
 * Marked `'use client'` because it manages fetch + pagination state.
 */
const ThreeUpBlock = () => (
  <section className={`${styles.root} container`}>Blog posts block</section>
)

export default ThreeUpBlock
