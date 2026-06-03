import type Post from '@/interfaces/post'

export default interface ThreeUpProps {
  headline?: string
  /** Initial posts rendered on the server (optional). */
  initialPosts?: Post[]
}
