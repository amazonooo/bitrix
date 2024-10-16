import Title from '@/components/ui/Title'
import { workCards } from '@/data/workCards'
import WorkCard from './WorkCard'
import Image from 'next/image'
import Link from 'next/link'
import Container from '@/components/layout/Container'

export default function Work() {
	return (
		<Container className='w-full overflow-x-clip'>
			<section>
				<Title title='Трансформируем отдел продаж' className='max-w-[800px]' />
				<div className='flex flex-col items-center justify-center'>
					<div className='grid grid-cols-1 grid-rows-1 lg:grid-cols-2 lg:grid-rows-2 gap-x-[50px] gap-y-10'>
						{workCards.map((card, idx) => (
							<WorkCard
								key={idx}
								title={card.title}
								link={card.link}
								list1={card.list1}
								list2={card.list2}
								list3={card.list3}
								list4={card.list4}
							/>
						))}
						<Image src={'/man-laptop.png'} alt='man' width={535} height={535} />
					</div>
					<Link
						href={'/'}
						className='inline-flex rounded-[10px] bg-primary-blue px-10 py-[15px] items-center justify-center font-bold text-xl text-white hover:text-primary-blue hover:bg-sky transition-all duration-300'
					>
						Работать с нами
					</Link>
				</div>
			</section>
		</Container>
	)
}