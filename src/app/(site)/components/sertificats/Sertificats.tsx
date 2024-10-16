import Container from '@/components/layout/Container'
import Title from '@/components/ui/Title'
import SertifCard from './SertifCard'

export default function Sertificats() {
  return (
		<section className='overflow-hidden'>
			<Title
				title='Сертификаты от партнеров'
				className='max-w-[600px] ml-auto mr-auto xl:px-[60px] px-5 sm:px-10 2xl:max-w-[1400px] 2xl:px-[2rem]'
			/>

			<SertifCard />
		</section>
	)
}