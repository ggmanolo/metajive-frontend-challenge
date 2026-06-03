import DevGrid from '@/components/generic/dev_grid/dev_grid'
import TextImageBlock from '@/components/blocks/text_image/text_image'
import SliderBlock from '@/components/blocks/slider/slider'
import ThreeUpBlock from '@/components/blocks/three_up/three_up'

const HomePage = () => (
  <main>
    {process.env.NODE_ENV === 'development' && <DevGrid />}
    <TextImageBlock />
    <SliderBlock />
    <ThreeUpBlock />
  </main>
)

export default HomePage
