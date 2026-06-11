import Image from 'next/image'
import styles from './text_image.module.scss'
import Button from '@/components/generic/button/button'
import type TextImageProps from './text_image.interface'

const TextImageBlock = ({ headline, body, image, email, phone }: TextImageProps) => (
  <section className={`${styles.root} container`} aria-labelledby="text-image-heading">
    <div className={styles.inner}>
      <div className={styles.imageWrapper}>
        <Image src={image.src} alt={image.alt} fill className={styles.image} sizes="(min-width: 1268px) 634px, (min-width: 768px) calc(50vw - 70px), 100vw" priority quality={100} />
      </div>
      <div className={styles.content}>
        <h2 id="text-image-heading" className={styles.headlineMargin}>
          {headline}
        </h2>
        <div className={styles.body} dangerouslySetInnerHTML={{ __html: body }} />
        <div className={styles.buttons}>
          <Button href={`mailto:${email}`}>Send Us an Email</Button>
          <Button href={`tel:${phone.replace(/\D/g, '')}`} variant="outline">
            {phone}
          </Button>
        </div>
      </div>
    </div>
  </section>
)

export default TextImageBlock
