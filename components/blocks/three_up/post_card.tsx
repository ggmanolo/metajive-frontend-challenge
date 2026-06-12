import Image from 'next/image'
import styles from './post_card.module.scss'
import type Post from '@/interfaces/post'

const PostCard = ({ title, excerpt, imageUrl }: Post) => (
  <article className={styles.card}>
    <div className={styles.image}>
      <Image src={imageUrl} alt={title} fill className={styles.img} sizes="(min-width: 1268px) 360px, (min-width: 768px) calc(33vw - 60px), calc(100vw - 40px)" />
    </div>
    <div className={styles.body}>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.excerpt}>{excerpt}</p>
    </div>
  </article>
)

export default PostCard
