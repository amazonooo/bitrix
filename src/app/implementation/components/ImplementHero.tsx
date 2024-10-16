import Button from '@/components/ui/Button'
import Image from 'next/image'

export default function ImplementHero() {
  return (
		<section className='mt-[140px] lg:mt-[180px]'>
			<div className='w-full bg-sky lg:pl-20 lg:pt-20 lg:pr-8 rounded-xl'>
				<div className='flex flex-col lg:flex-row justify-between'>
					<div className='flex flex-col lg:order-1 order-2 px-5 lg:px-0'>
						<h1 className='lg:text-[4.875rem] text-[2rem] sm:text-[2.5rem] md:text-6xl lg:leading-[80px] leading-[38px] text-primary-blue font-bold mb-5 lg:mb-6'>
							Внедрение Bitrix24
						</h1>
						<p className='text-xl font-medium mb-5 block lg:hidden'>
							Начните внедрение с бесплатного аудита!
						</p>
						<p className='text-xl font-medium mb-7 lg:mb-[80px] max-w-[460px]'>
							Начните внедрение с бесплатного аудита! Мы изучим ваш отдел
							продаж, найдём проблемные места и расскажем как легко они решаются
							грамотным внедрением Bitrix24
						</p>
						<Button variant='blue' link='/' className='lg:w-[267px] mb-7 lg:mb-0'>
							Внедрить Bitrix24
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