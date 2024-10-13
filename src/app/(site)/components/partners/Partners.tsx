import Title from '@/components/ui/Title'
import PartnersCard from './PartnersCard'

export default function Partners() {
  return (
		<div>
			<Title
				className='ml-auto mr-auto xl:px-[60px] px-5 sm:px-10 2xl:max-w-[1400px] 2xl:px-[2rem]'
				title='Наши партнеры'
			/>

			<PartnersCard />
		</div>
	)
}