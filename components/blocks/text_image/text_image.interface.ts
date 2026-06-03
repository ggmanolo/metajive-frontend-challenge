import type Asset from '@/interfaces/asset'

export default interface TextImageProps {
  headline: string
  /** Rich text / WYSIWYG copy (may contain inline markup). */
  body: string
  image: Asset
  email: string
  phone: string
}
