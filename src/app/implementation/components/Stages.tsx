import Title from '@/components/ui/Title'
import Image from 'next/image'
import StagesCard from './StagesCard'

export default function Stages() {
	return (
		<section>
			<Title className='lg:mb-24 max-w-[780px]' title='Этапы внедрения Bitrix24' />

			<StagesCard />			
		</section>
	)
}