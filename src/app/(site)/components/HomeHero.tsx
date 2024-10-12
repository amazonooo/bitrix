import Title from '@/components/ui/Title'
import Image from 'next/image'

export default function HomeHero() {
  return (
		<div className='mt-[180px]'>
			<Title
				className='max-w-[1110px] mb-10'
				title='Автоматизируем процесс продаж на базе Bitrix24'
			/>

			<div className='relative w-full'>
				<div>
					<Image
						src={'/home-hero.png'}
						alt='home-hero'
						width={836}
						height={640}
					/>
				</div>

				<div className='flex flex-col gap-y-10 text-white'>
					<div className='bg-primary-blue px-4 py-3 rounded-[20px] w-[390px] absolute top-1/4 -translate-y-1/4 right-0 text-xl leading-[24px]'>
						Подберём, настроим и адаптируем CRM-систему под ваш бизнес.
					</div>
					<div className='bg-primary-blue px-4 py-3 rotate-1 rounded-[20px] w-[390px] text-xl leading-[24px] absolute top-1/2 -translate-y-1/2 right-5'>
						Подберём, настроим и адаптируем CRM-систему под ваш бизнес.
					</div>
					<div className='bg-primary-blue px-4 py-3 rounded-[20px] w-[390px] text-xl leading-[24px] absolute top-[75%] -translate-y-[75%] right-0'>
						Подберём, настроим и адаптируем CRM-систему под ваш бизнес.
					</div>
				</div>
			</div>
		</div>
	)
}