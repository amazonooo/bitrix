import Container from '@/components/layout/Container'
import PartnersHero from './components/PartnersHero'
import PartnersMain from './components/PartnersMain'
import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Партнеры',
	description: 'Наши партнеры и их описания.',
}

export default function PartnersPage() {
  return (
		<Container className='w-full flex flex-col gap-y-20 lg:gap-y-[150px]'>
			<PartnersHero />
      <PartnersMain />
		</Container>
	)
}