import styles from './text_image.module.scss'

/**
 * Task A — Text + Image
 *
 * Left: image. Right: headline, WYSIWYG copy, and two buttons wired to
 * `mailto:` and `tel:`. Match the Figma spacing, breakpoints and type.
 *
 * This is a server component. Content may be hardcoded for the challenge.
 */
const TextImageBlock = () => (
  <section className={`${styles.root} container`}>Text + Image block</section>
)

export default TextImageBlock
