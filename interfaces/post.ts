/** A blog/news post returned by the /api/posts route (Task C). */
export default interface Post {
  id: number
  title: string
  excerpt: string
  date: string
  imageUrl: string
}
