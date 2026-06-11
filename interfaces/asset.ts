/** A media asset exported from the Figma file. */
export default interface Asset {
  src: string
  alt: string
  width: number
  height: number
  caption?: string
}
