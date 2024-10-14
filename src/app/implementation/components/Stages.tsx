import Title from '@/components/ui/Title'
import { stagesData } from '@/data/stagesData'

export default function Stages() {
  return (
		<section>
			<Title className='mb-20 max-w-[780px]' title='Этапы внедрения Bitrix24' />

			<div className='w-full h-[5px] relative bg-primary-blue ml-24'>
				<div className='absolute w-[70px] h-[70px] flex items-center justify-center rounded-full bg-primary-blue text-[2.5rem] font-bold text-white -left-8 top-1/2 -translate-y-1/2'>
					1
				</div>
				<h2 className='text-[2rem] leading-[38px] text-center font-medium absolute max-w-[268px] top-14 -left-[105px]'>Оценка бизнес-процессов</h2>
			</div>
		</section>
	)
}