import Container from '@/components/layout/Container'
import Title from '@/components/ui/Title'
import Image from 'next/image'

export default function HomeHero() {
  return (
		<Container className='w-full overflow-x-clip'>
			<section className='mt-[140px]'>
				<Title
					className='lg:max-w-[1110px] mb-10 max-w-[286px] sm:max-w-[400px] md:max-w-[800px]'
					title='Автоматизируем процесс продаж на базе Bitrix24'
				/>

				<div className='relative w-full flex flex-col gap-y-[70px] items-center lg:items-start'>
					<div>
						<Image
							src={'/home-hero.png'}
							alt='home-hero'
							width={836}
							height={640}
						/>
					</div>

					<div className='flex flex-col gap-y-10 text-white'>
						<div className='bg-primary-blue px-4 py-3 rounded-[20px] w-[290px] sm:w-[390px] 2xl:absolute 2xl:top-1/4 2xl:-translate-y-1/4 2xl:right-0 text-xl leading-[24px]'>
							Подберём, настроим и адаптируем CRM-систему под ваш бизнес.
						</div>
						<div className='bg-primary-blue px-4 py-3 rotate-1 rounded-[20px] w-[290px] sm:w-[390px] text-xl leading-[24px] 2xl:absolute 2xl:top-1/2 2xl:-translate-y-1/2 2xl:right-5'>
							Подберём, настроим и адаптируем CRM-систему под ваш бизнес.
						</div>
						<div className='bg-primary-blue px-4 py-3 rounded-[20px] w-[290px] sm:w-[390px] text-xl leading-[24px] 2xl:absolute 2xl:top-[75%] 2xl:-translate-y-[75%] 2xl:right-0'>
							Подберём, настроим и адаптируем CRM-систему под ваш бизнес.
						</div>
					</div>
				</div>
			</section>
		</Container>
	)
}