import Title from '@/components/ui/Title'
import Image from 'next/image'

export default function AboutUs() {
  return (
		<section>
			<Title title='Наши клиенты о нас' />

			<div className='flex flex-col lg:flex-row gap-y-10 items-center lg:items-baseline gap-x-8'>
				<div className='bg-white border-2 border-use-gray px-5 lg:px-[30px] py-10 rounded-xl'>
					<Image
						src={'/voa.png'}
						alt='voa'
						width={120}
						height={120}
						className='mb-6'
					/>
					<div className='max-w-[357px]'>
						<h1 className='font-bold lg:text-[26px] lg:leading-[26px] max-w-[285px] mb-2 text-xl'>
							Всероссийское общество автомобилистов
						</h1>
						<h2 className='text-[#5B5B5B] text-sm lg:text-base mb-6 font-normal'>
							Александр, председатель автошколы
						</h2>
						<p className='text-base lg:text-xl font-normal mb-7'>
							Когда мы внедрили такую систему, объём замечаний и нарушений
							сократился почти в 10 раз.
						</p>
						<p className='text-base lg:text-xl font-normal'>
							Самое главное, что помог решить контроль качества — претензии
							к отделу продаж перестали быть голословными. Если менеджер
							действительно не прав, это легко подтвердить. Замечания сошли
							на «нет». Это очень приятная динамика.
						</p>
					</div>
				</div>

				<div className='bg-white border-2 border-use-gray px-5 lg:px-[30px] py-10 rounded-xl'>
					<Image
						src={'/partner-7.svg'}
						alt='voa'
						width={120}
						height={120}
						className='mb-6'
					/>
					<div className='max-w-[357px]'>
						<h1 className='font-bold lg:text-[26px] lg:leading-[26px] max-w-[285px] mb-2 text-xl'>
							АНО ДПО "КУРС"
						</h1>
						<h2 className='text-[#5B5B5B] text-sm lg:text-base mb-6 font-normal'>
							Светлана, генеральный директор
						</h2>
						<p className='text-base lg:text-xl font-normal mb-7'>
							Очень понравился подход сотрудников УЦ «ВОА». Тот случай, когда
							понимание задач есть с полуслова.
						</p>
						<p className='text-base lg:text-xl font-normal'>
							Работа была сдана в срок, без надрывов и любых проявлений
							отрицательных эмоций. Вам желаю таких же партнёров!
						</p>
					</div>
				</div>
			</div>
		</section>
	)
}