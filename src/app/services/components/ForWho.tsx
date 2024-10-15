import Title from '@/components/ui/Title'
import { Square, SquareDashed } from 'lucide-react'
import Image from 'next/image'

export default function ForWho() {
  return (
		<section>
			<Title
				title='Для кого наши услуги'
				className='mb-10 max-w-[200px] sm:max-w-full'
			/>

			<div className='flex flex-col lg:flex-row gap-x-16 gap-y-10'>
				<Image src={'/contract.png'} alt='contract' width={514} height={514} />

				<div className='flex flex-col w-full pt-5 gap-y-2.5'>
					<div className='border-b-2 border-b-use-gray py-2.5 lg:py-6 flex items-center gap-x-3.5'>
						<Square
							className='text-primary-blue bg-primary-blue mt-1 lg:mt-1.5 rounded-[1px]'
							size={10}
						/>
						<span className='text-xl font-semibold lg:text-3xl'>
							Производственные компании
						</span>
					</div>
					<div className='border-b-2 border-b-use-gray py-2.5 lg:py-6 flex items-center gap-x-3.5'>
						<Square
							className='text-primary-blue bg-primary-blue mt-1 lg:mt-1.5 rounded-[1px]'
							size={10}
						/>
						<span className='text-xl font-semibold lg:text-3xl'>
							Оптовая торговля
						</span>
					</div>
					<div className='border-b-2 border-b-use-gray py-2.5 lg:py-6 flex items-center gap-x-3.5'>
						<Square
							className='text-primary-blue bg-primary-blue mt-1 lg:mt-1.5 rounded-[1px]'
							size={10}
						/>
						<span className='text-xl font-semibold lg:text-3xl'>
							Сфера услуг
						</span>
					</div>
					<div className='border-b-2 border-b-use-gray py-2.5 lg:py-6 flex items-center gap-x-3.5'>
						<Square
							className='text-primary-blue bg-primary-blue mt-1 lg:mt-1.5 rounded-[1px]'
							size={10}
						/>
						<span className='text-xl font-semibold lg:text-3xl'>
							Кафе и рестораны
						</span>
					</div>
					<div className='border-b-2 border-b-use-gray py-2.5 lg:py-6 flex items-center gap-x-3.5'>
						<Square
							className='text-primary-blue bg-primary-blue mt-1 lg:mt-1.5 rounded-[1px]'
							size={10}
						/>
						<span className='text-xl font-semibold lg:text-3xl'>
							Владельцы бизнеса
						</span>
					</div>
				</div>
			</div>
		</section>
	)
}