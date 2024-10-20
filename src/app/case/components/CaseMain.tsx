import Image from 'next/image'

export default function CaseMain() {
  return (
		<section>
			<div className='w-full bg-sky pt-10 lg:pt-20 pb-[30px] lg:pb-[50px] rounded-xl pl-5 lg:pl-[60px]'>
				<div className='flex flex-col gap-y-10 lg:gap-y-[60px]'>
					<div className='flex items-center gap-x-7 lg:gap-x-16'>
						<Image
							className='hidden lg:block'
							src={'/partner-7.svg'}
							alt='avto'
							width={200}
							height={200}
						/>
						<Image
							className='hidden lg:block'
							src={'/voa.png'}
							alt='avto'
							width={200}
							height={200}
						/>
						<Image
							className='block lg:hidden'
							src={'/partner-7.svg'}
							alt='avto'
							width={121}
							height={121}
						/>
						<Image
							className='block lg:hidden'
							src={'/voa.png'}
							alt='avto'
							width={121}
							height={121}
						/>
					</div>

					<div>
						<h1 className='text-xl font-bold md:text-3xl xl:leading-[60px] xl:text-5xl xl:font-semibold mb-4 lg:mb-6 max-w-[660px] text-primary-blue'>
							Сеть автошкол "ВОА" и "АНО ДПО "КУРС"
						</h1>
						<ul className='max-w-[275px] md:max-w-[370px] lg:max-w-[450px] xl:max-w-[700px]'>
							<li className='text-base lg:text-lg xl:text-xl mb-7'>
								К нам обратились две организации-автошколы с одинаковыми 
								<span className='font-bold'>проблемами</span>: полный хаос
								в работе отдела продаж и отсутствие минимальной аналитики
								в работе. 
							</li>
							<li className='text-base lg:text-lg xl:text-xl mb-7'>
								<span className='font-bold'>Решение:</span> после изучения
								деятельности организаций мы выполнили следующую работу:{' '}
							</li>
							<ul className='mb-7'>
								<li className='text-base lg:text-lg xl:text-xl'>
									– разработка плана и ТЗ,
								</li>
								<li className='text-base lg:text-lg xl:text-xl'>
									– внедрение Bitrix24,
								</li>
								<li className='text-base lg:text-lg xl:text-xl'>
									– автоматизация процесса работы (настройка воронки продаж
									и страхования, этапы воронок, автоматические задачи,
									обязательные и дополнительные поля, назначение
									ответственного и др.),
								</li>
								<li className='text-base lg:text-lg xl:text-xl'>
									–подключение определённых виджетов для автошкол, IT-телефонии
									и АТС,
								</li>
								<li className='text-base lg:text-lg xl:text-xl'>
									– интеграция с социальными сетями, раскрутка и продвижение,
								</li>
								<li className='text-base lg:text-lg xl:text-xl'>
									– создание корпоративных сайтов,
								</li>
								<li className='text-base lg:text-lg xl:text-xl'>
									– разработка приложения (в Google Play Store, App Store)
									для одной автошколы. 
								</li>
							</ul>
							<li className='text-base lg:text-lg xl:text-xl mb-7'>
								<span className='font-bold'>Результат:</span> с Bitrix24
								в компаниях появилась чёткая структурированная система.
							</li>
							<li className='text-base lg:text-lg xl:text-xl'>
								Руководители видят динамику и результаты работы своих
								сотрудников. Эта работа позволила добиться прозрачности,
								прогнозируемости и управляемости продаж для компаний.
							</li>
						</ul>
					</div>
				</div>
			</div>
		</section>
	)
}