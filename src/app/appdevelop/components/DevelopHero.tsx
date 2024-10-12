import Image from 'next/image'

export default function DevelopHero() {
  return (
		<div className='mt-[180px]'>
			<div className='flex'>
				<div className='bg-primary-blue rounded-xl pl-[60px] pt-[60px]'>
					<h1 className='text-white text-[4.875rem] leading-[80px] font-bold mb-11 max-w-[530px]'>
						Разработка приложений
					</h1>
					<div>
						<Image src={'/comp.png'} alt='comp' width={788} height={460} />
					</div>
				</div>

				<div className='rounded-xl pt-60 border border-use-gray px-10'>
					<p className='text-xl mb-10 max-w-[350px] font-medium'>
						Создаём отраслевые решения с учётом специфики отрасли клиента, когда
						«коробочные решения» не подходят.
					</p>
					<p className='text-xl max-w-[350px] font-medium'>
						Улучшение сервиса, обучение, повышение лояльности и увеличение
						продаж — эти и другие задачи мы решаем с помощью приложений
					</p>
				</div>
			</div>
		</div>
	)
}