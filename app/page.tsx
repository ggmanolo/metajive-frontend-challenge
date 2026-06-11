import DevGridToggle from '@/components/generic/dev_grid_toggle/dev_grid_toggle'
import TextImageBlock from '@/components/blocks/text_image/text_image'
import SliderBlock from '@/components/blocks/slider/slider'
import ThreeUpBlock from '@/components/blocks/three_up/three_up'

const HomePage = () => (
  <main>
    {process.env.NODE_ENV === 'development' && <DevGridToggle />}
    <TextImageBlock headline="Book the Freezer" body={`<p>Don't wait to enjoy The FREEZER, an experience unlike any other!</p><p class="muted">To schedule a tour or book your private screening, please contact Harkings at Camelview.</p>`} image={{ src: '/A.jpg', alt: 'The Freezer private screening room at Camelview', width: 533, height: 660 }} email="info@camelview.com" phone="(123) 456-7890" />
    <SliderBlock
      headline="Book the freezer, sample headline"
      copy="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris aliquam eleifend dui, at sollicitudin nibh facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      slides={[
        { src: '/B-1.jpg', alt: 'The Freezer screening room', width: 1920, height: 810, caption: 'Lorem ipsum dolor sit amet,' },
        { src: '/B-2.jpg', alt: 'The Freezer lounge area', width: 1920, height: 810, caption: 'Lorem ipsum dolor sit amet,' },
        { src: '/B-3.jpg', alt: 'The Freezer bar', width: 1920, height: 810, caption: 'Lorem ipsum dolor sit amet,' },
      ]}
    />
    <ThreeUpBlock />
  </main>
)

export default HomePage
