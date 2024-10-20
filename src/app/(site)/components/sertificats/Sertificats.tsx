import Title from '@/components/ui/Title'
import SertifCard from './SertifCard'
import Container from '@/components/layout/Container'

export default function Sertificats() {
  return (
		<section className='overflow-hidden'>
			<Container>
				<Title
					title='Сертификаты от партнеров'
					className='max-w-[600px]'
				/>
			</Container>

			<SertifCard />
		</section>
	)
}