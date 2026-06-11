import DevGridToggle from '@/components/generic/dev_grid_toggle/dev_grid_toggle'
import TextImageBlock from '@/components/blocks/text_image/text_image'
import SliderBlock from '@/components/blocks/slider/slider'
import ThreeUpBlock from '@/components/blocks/three_up/three_up'

const HomePage = () => (
  <main>
    {process.env.NODE_ENV === 'development' && <DevGridToggle />}
    <TextImageBlock headline="Book the Freezer" body={`<p>Don't wait to enjoy The FREEZER, an experience unlike any other!</p><p>To schedule a tour or book your private screening, please contact Harkings at Camelview.</p>`} image={{ src: '/A.jpg', alt: 'The Freezer private screening room at Camelview', width: 533, height: 660 }} email="info@camelview.com" phone="(123) 456-7890" />
    <SliderBlock />
    <ThreeUpBlock />
  </main>
)

export default HomePage
