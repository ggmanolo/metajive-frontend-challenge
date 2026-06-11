'use client'

import { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import type { Swiper as SwiperInstance } from 'swiper'
import Image from 'next/image'
import Arrow from '@/components/generic/arrow/arrow'
import styles from './slider.module.scss'
import type SliderProps from './slider.interface'

const SliderBlock = ({ headline, copy, slides }: SliderProps) => {
  const [swiper, setSwiper] = useState<SwiperInstance | null>(null)

  return (
    <section className={styles.root} aria-labelledby="slider-heading">
      <div className={styles.header}>
        <h2 id="slider-heading" className={styles.headline}>
          {headline}
        </h2>
        <p className={`${styles.copy} muted`}>{copy}</p>
      </div>
      <div className={styles.swiperWrapper} role="region" aria-label="Image gallery" aria-roledescription="carousel">
        <Swiper modules={[Autoplay]} loop autoplay={{ delay: 5000, disableOnInteraction: true }} slidesPerView="auto" centeredSlides spaceBetween={16} onSwiper={setSwiper} className={styles.swiper}>
          {[...slides, ...slides, ...slides].map((slide, i) => (
            <SwiperSlide key={`${slide.src}-${i}`} className={styles.slide} aria-roledescription="slide">
              <Image src={slide.src} alt={slide.alt} fill className={styles.slideImage} sizes="(min-width: 1268px) 1128px, (min-width: 768px) calc(100vw - 140px), calc(100vw - 40px)" quality={100} />
              {slide.caption && <p className={styles.caption}>{slide.caption}</p>}
            </SwiperSlide>
          ))}
        </Swiper>
        <div className={styles.nav}>
          <button className={styles.navBtn} aria-label="Next slide" onClick={() => swiper?.slideNext()}>
            <Arrow className={styles.arrowIcon} />
          </button>
          <button className={styles.navBtn} aria-label="Previous slide" onClick={() => swiper?.slidePrev()}>
            <Arrow className={`${styles.arrowIcon} ${styles.arrowFlip}`} />
          </button>
        </div>
      </div>
    </section>
  )
}

export default SliderBlock
