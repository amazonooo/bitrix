import Title from '@/components/ui/Title'
import { servicesData } from '@/data/services'
import ServiceCard from './ServiceCard'

export default function OurServices() {
  return (
		<section>
			<Title title='Наши услуги' />

			<div className='grid grid-cols-1 grid-row-1 lg:grid-cols-3 lg:grid-rows-2 gap-x-9 gap-y-10'>
				{servicesData.map((service, idx) => (
					<ServiceCard
						key={idx}
						logo={service.logo}
						title={service.title}
						desc={service.desc}
					/>
				))}
			</div>
		</section>
	)
}