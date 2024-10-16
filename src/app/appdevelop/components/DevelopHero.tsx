import Button from '@/components/ui/Button'
import Image from 'next/image'

export default function DevelopHero() {
  return (
		<section className='mt-[140px] lg:mt-[180px]'>
			<div className='flex'>
				<div className='bg-primary-blue rounded-xl px-7 md:px-[50px] pt-[60px] -z-20'>
					<h1 className='text-white xl:text-[4.875rem] text-[2rem] sm:text-[2.5rem] md:text-6xl lg:leading-[80px] leading-[32px] xl:leading-[80px] font-bold mb-6 xl:mb-11 max-w-[530px]'>
						Разработка приложений
					</h1>
					<div className='block xl:hidden'>
						<p className='lg:text-xl text-base mb-6 xl:mb-10 max-w-[350px] font-medium xl:text-black text-white'>
							Создаём отраслевые решения с учётом специфики отрасли клиента,
							когда «коробочные решения» не подходят.
						</p>
						<p className='lg:text-xl text-base mb-14 xl:mb-6 max-w-[350px] font-medium xl:text-black text-white'>
							Улучшение сервиса, обучение, повышение лояльности и увеличение
							продаж — эти и другие задачи мы решаем с помощью приложений
						</p>
					</div>
					<div className='mb-14 xl:mb-0'>
						<Image src={'/comp.png'} alt='comp' width={788} height={460} />
					</div>
					<Button
						variant='sky'
						link='/'
						className='xl:w-[215px] bg-white text-primary-blue flex xl:hidden mb-6'
					>
						Разработать приложение
					</Button>
				</div>

				<div className='hidden xl:block rounded-xl pt-60 border border-use-gray px-10'>
					<p className='text-xl mb-10 max-w-[350px] font-medium'>
						Создаём отраслевые решения с учётом специфики отрасли клиента, когда
						«коробочные решения» не подходят.
					</p>
					<p className='text-xl max-w-[350px] font-medium mb-6'>
						Улучшение сервиса, обучение, повышение лояльности и увеличение
						продаж — эти и другие задачи мы решаем с помощью приложений
					</p>
					<Button variant='sky' link='/' className='w-[345px]'>
						Разработать приложение
					</Button>
				</div>
			</div>
		</section>
	)
}