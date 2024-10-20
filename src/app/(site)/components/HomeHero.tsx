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

					<div className='2xl:hidden flex flex-col gap-y-[30px]'>
						<Image src={'/mes-1.png'} alt='mes' width={320} height={86} />
						<Image src={'/mes-2.png'} alt='mes' width={320} height={86} />
						<Image src={'/mes-3.png'} alt='mes' width={320} height={86} />
					</div>

					<div className='flex-col gap-y-10 text-white hidden 2x:block 2xl:flex'>
						<div className='bg-primary-blue px-4 py-3 rounded-[20px] w-[290px] sm:w-[390px] 2xl:absolute 2xl:top-1/4 2xl:-translate-y-1/4 2xl:right-0 text-xl leading-[24px]'>
							<div className=''>
								<Image
									src={'/polygon.png'}
									alt='pol'
									width={26}
									height={26}
									className='hidden 2xl:block 2xl:absolute 2xl:top-[52%] 2xl:-translate-y-1/4 2xl:right-[380px]'
								/>
							</div>
							Подберём, настроим и адаптируем CRM-систему под ваш бизнес.
						</div>
						<div className='bg-primary-blue px-4 py-3 rotate-1 rounded-[20px] w-[290px] sm:w-[390px] text-xl leading-[24px] 2xl:absolute 2xl:top-1/2 2xl:-translate-y-1/2 2xl:right-5'>
							<div>
								<Image
									src={'/polygon.png'}
									alt='pol'
									width={26}
									height={26}
									className='hidden 2xl:block 2xl:absolute 2xl:top-[52%] 2xl:-translate-y-1/4 2xl:right-[380px]'
								/>
							</div>
							Научим пользоваться, анализировать и получать результат.{' '}
						</div>
						<div className='bg-primary-blue px-4 py-3 rounded-[20px] w-[290px] sm:w-[390px] text-xl leading-[24px] 2xl:absolute 2xl:top-[75%] 2xl:-translate-y-[75%] 2xl:right-0'>
							<div>
								<Image
									src={'/polygon.png'}
									alt='pol'
									width={26}
									height={26}
									className='hidden 2xl:block 2xl:absolute 2xl:top-[52%] 2xl:-translate-y-1/4 2xl:right-[380px]'
								/>
							</div>
							Изучим ваш отдел продаж, найдем проблемные места и расскажем как
							легко они решаются.{' '}
						</div>
					</div>
				</div>
			</section>
		</Container>
	)
}