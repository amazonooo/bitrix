import Container from '@/components/layout/Container'
import ImplementHero from './components/ImplementHero'
import Settings from './components/Settings'
import Stages from './components/Stages'
import SecondSettings from './components/SecondSettings'
import ImplementBottom from './components/ImplementBottom'
import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Внедрение',
	description: 'Внедрение с бесплатного аудита, настройка bitrix24 и этапы внедрения.',
}

export default function implementationPage() {
	return (
		<Container className='w-full overflow-x-clip flex flex-col gap-y-20 lg:gap-y-[150px]'>
			<ImplementHero />
			<Settings />
			<Stages />
			<SecondSettings />
			<ImplementBottom />
		</Container>
	)
}