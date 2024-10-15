import Title from '@/components/ui/Title'
import { setData, setData2 } from '@/data/setData'

export default function SecondSettings() {
	return (
		<section>
			<Title
				title='Что вы получаете, обращаясь к нам'
				className='max-w-[780px]'
			/>

			<div className='flex flex-col'>
				{setData2.map((sd, idx) => (
					<div
						key={idx}
						className='py-10 flex flex-col lg:flex-row gap-x-40 gap-y-5 border-b-2 border-use-gray'
					>
						<div className='flex items-center gap-x-2.5'>
							<div className='lg:w-2.5 lg:h-2.5 w-3 h-3 bg-primary-blue rounded-[1px] hidden lg:block' />
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
