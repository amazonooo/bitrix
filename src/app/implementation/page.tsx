import Container from '@/components/layout/Container'
import ImplementHero from './components/ImplementHero'
import Settings from './components/Settings'
import Stages from './components/Stages'

export default function implementationPage() {
	return (
		<Container className='w-full overflow-x-clip flex flex-col gap-y-16 lg:gap-y-40'>
			<ImplementHero />
			<Settings />
			<Stages />
		</Container>
	)
}