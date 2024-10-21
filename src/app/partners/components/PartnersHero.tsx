import Image from 'next/image'

export default function PartnersHero() {
  return (
		<section className='mt-[140px] lg:mt-[180px]'>
			<div className='w-full bg-primary-blue rounded-xl px-[30px] lg:px-[60px]'>
				<div className='flex flex-col lg:flex-row lg:justify-between'>
					<h1 className='block lg:hidden lg:text-[4.875rem] text-[2rem] sm:text-[2.5rem] md:text-6xl lg:leading-[80px] leading-[38px] font-bold text-white pt-10 text-center mb-3'>
						Наши партнеры
					</h1>
					<div className='lg:flex flex-col hidden pt-20'>
						<h1 className='lg:text-[4.875rem] text-[2rem] sm:text-[2.5rem] md:text-6xl lg:leading-[80px] leading-[38px] font-bold text-white mb-6'>
							Наши партнеры
						</h1>
						<p className='text-base sm:text-lg lg:text-xl font-normal text-white max-w-[412px]'>
							Мы ценим постоянные связи и долгосрочные отношения с нашими
							партнерами, поэтому вы можете подобрать себе специалистов, которые
							предоставляют услуги по рекламе и интеграции сервисов в Bitrix24.
						</p>
					</div>

					<Image
						src={'/digital-contract.png'}
						alt='digital'
						width={545}
						height={545}
					/>
					<p className='text-base sm:text-lg lg:text-xl font-normal text-white block lg:hidden pb-[30px]'>
						Мы ценим постоянные связи и долгосрочные отношения с нашими
						партнерами, поэтому вы можете подобрать себе специалистов, которые
						предоставляют услуги по рекламе и интеграции сервисов в Bitrix24.
					</p>
				</div>
			</div>
		</section>
	)
}