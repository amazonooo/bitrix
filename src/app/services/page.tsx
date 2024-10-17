import Container from '@/components/layout/Container'
import ServicesHero from './components/ServicesHero'
import ForWho from './components/ForWho'
import OurServices from './components/OurServices'
import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Консалтинговые услуги',
	description: 'Консалтинг для бизнеса, наши услуги и кому они подходят.',
}

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