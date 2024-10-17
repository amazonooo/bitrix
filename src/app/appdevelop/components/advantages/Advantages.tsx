import Title from '@/components/ui/Title'
import { developAdvant } from '@/data/developAdvan'
import DevelopAccordion from './DevelopAccordion'

export default function Advantages() {
  return (
		<section>
			<Title title='Наши преимущества' />

			<div className='w-full border-b border-b-use-gray'>
				<div className='flex flex-col lg:flex-row lg:items-center lg:gap-x-6'>
					<span className='text-[2.5rem] lg:text-5xl text-primary-blue font-bold mr-2'>
						1
					</span>
					<button className='text-start flex flex-1 items-center justify-between pb-3 lg:py-7 font-bold text-xl transition-all [&[data-state=open]>svg]:rotate-180'>
						Владельцем прав на приложение является заказчик 
					</button>
				</div>
			</div>
			<div className='w-full border-b border-b-use-gray'>
				<div className='flex flex-col lg:flex-row lg:items-center lg:gap-x-6'>
					<span className='text-[2.5rem] lg:text-5xl text-primary-blue font-bold mr-2'>
						2
					</span>
					<button className='text-start flex flex-1 items-center justify-between pb-3 lg:py-7 font-bold text-xl transition-all [&[data-state=open]>svg]:rotate-180'>
						Разрабатываем приложения всех видов{' '}
					</button>
				</div>
			</div>
			<DevelopAccordion />
			<div className='w-full border-b border-b-use-gray'>
				<div className='flex flex-col lg:flex-row lg:items-center lg:gap-x-6'>
					<span className='text-[2.5rem] lg:text-5xl text-primary-blue font-bold mr-2'>
						6
					</span>
					<button className='text-start flex flex-1 items-center justify-between pb-3 lg:py-7 font-bold text-xl transition-all [&[data-state=open]>svg]:rotate-180'>
						Высокий уровень сервиса на всех этапах разработки{' '}
					</button>
				</div>
			</div>
		</section>
	)
}