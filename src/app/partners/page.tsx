import Container from '@/components/layout/Container'
import PartnersHero from './components/PartnersHero'
import PartnersMain from './components/PartnersMain'

export default function PartnersPage() {
  return (
		<Container className='w-full flex flex-col gap-y-20 lg:gap-y-[150px]'>
			<PartnersHero />
      <PartnersMain />
		</Container>
	)
}