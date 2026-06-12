import type Post from '@/interfaces/post'

const PostCard = ({ title, excerpt }: Post) => (
  <div>
    <h3>{title}</h3>
    <p>{excerpt}</p>
  </div>
)

export default PostCard
