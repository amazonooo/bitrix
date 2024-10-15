import Title from '@/components/ui/Title'
import { setData } from '@/data/setData'
import { Square } from 'lucide-react'

export default function Settings() {
  return (
		<section>
			<Title
				title='Что включает настройка Bitrix24'
				className='max-w-[780px]'
			/>

			<div className='flex flex-col'>
				{setData.map((sd, idx) => (
					<div
						key={idx}
						className='py-10 flex flex-col lg:flex-row gap-x-40 gap-y-5 border-b-2 border-use-gray'
					>
						<div className='flex items-center gap-x-2.5'>
							<Square
								className='text-primary-blue bg-primary-blue mt-1 rounded-[1px]'
								size={10}
							/>{' '}
							<h2 className='text-xl lg:text-[26px] font-semibold min-w-[425px]'>
								{sd.name}
							</h2>
						</div>

						<p className='text-base lg:text-xl font-normal'>{sd.desc}</p>
					</div>
				))}
			</div>
		</section>
	)
}