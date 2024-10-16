import Container from '@/components/layout/Container'
import ServicesHero from './components/ServicesHero'
import ForWho from './components/ForWho'
import OurServices from './components/OurServices'
import Benefit from './components/Benefit'

export default function page() {
  return (
		<Container className='w-full flex flex-col gap-y-20 lg:gap-y-[150px]'>
			<ServicesHero />
			<ForWho />
      <OurServices />
      {/* <Benefit /> */}
		</Container>
	)
}