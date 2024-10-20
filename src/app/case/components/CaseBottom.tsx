import Image from 'next/image'

export default function CaseBottom() {
  return (
		<section>
			<div className='w-full bg-sky pt-10 lg:pt-20 pb-[30px] lg:pb-[50px] rounded-xl pl-5 lg:pl-[60px]'>
				<div className='flex flex-col gap-y-0 lg:gap-y-3'>
					<Image
						className='hidden lg:block'
						src={'/repair.png'}
						alt='avto'
						width={250}
						height={250}
					/>
					<Image
						className='block lg:hidden'
						src={'/repair.png'}
						alt='avto'
						width={160}
						height={160}
					/>

					<div>
						<h1 className='text-xl font-bold md:text-3xl xl:leading-[60px] xl:text-5xl xl:font-semibold mb-4 lg:mb-6 max-w-[660px] text-primary-blue'>
							Корпорация ремонта
						</h1>
						<ul className='max-w-[275px] md:max-w-[370px] lg:max-w-[450px] xl:max-w-[700px]'>
							<li className='text-base lg:text-lg xl:text-xl mb-7'>
								<span className='font-bold'>Проблема:</span> менеджеры работали
								в блокнотах, Excel и Word. Периодически забывали звонить
								клиентам, низкая результативность и эффективность работы. 
							</li>
							<ul className='mb-7'>
								<li className='font-bold text-base lg:text-lg xl:text-xl'>
									Решение: 
								</li>
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
								<span className='font-bold'>Результат:</span> с Bitrix24
								в компаниях появилась чёткая структурированная система.
							</li>
							<li className='text-base lg:text-lg xl:text-xl'>
								<span className='font-bold'>Результат:</span> существенная часть
								идей начала конвертироваться в задачи и доводиться до успешного
								результата, коммуникации стали быстрее и проще, выстроенные
								воронки помогают менеджеру поддерживать клиента на каждом этапе,
								максимально качественно с ним работать.
							</li>
						</ul>
					</div>
				</div>
			</div>
		</section>
	)
}