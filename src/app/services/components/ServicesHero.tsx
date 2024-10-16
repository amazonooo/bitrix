import Button from '@/components/ui/Button'
import Image from 'next/image'

export default function ServicesHero() {
	return (
		<section className='mt-[140px] lg:mt-[180px]'>
			<div className='w-full bg-sky lg:pl-20 lg:pt-20 rounded-xl'>
				<div className='flex flex-col lg:flex-row justify-between'>
					<div className='lg:order-1 order-2 px-5 lg:px-0'>
						<h1 className='lg:text-[4.875rem] text-[2rem] sm:text-[2.5rem] md:text-6xl lg:leading-[78px] leading-[38px] text-primary-blue font-bold mb-5 lg:mb-6 max-w-[535px]'>
							Консалтинг для бизнеса
						</h1>
						<p className='text-xl font-medium mb-8 max-w-[460px]'>
							Наш учебный центр «ВОА» оказывает консалтинговые услуги
							предприятиям и организациям, заинтересованным в улучшении
							результативности деятельности через поиск и более эффективных
							методов планирования и организации процессов.
						</p>
						<Button variant='blue'  className='sm:w-[267px] mb-7 xl:mb-0'>
							Связаться с нами
						</Button>
					</div>

					<div className='order-1 lg:order-2 px-12 lg:px-0 mb-10 lg:mb-0'>
						<Image
							src={'/business.png'}
							alt='business'
							width={774}
							height={774}
						/>
					</div>
				</div>
			</div>
		</section>
	)
}
