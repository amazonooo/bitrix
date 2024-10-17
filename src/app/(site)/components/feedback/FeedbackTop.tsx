import Container from '@/components/layout/Container'
import Button from '@/components/ui/Button'
import Image from 'next/image'

export default function FeedbackTop() {
  return (
		<Container className='w-full overflow-x-clip'>
			<section className='w-full bg-sky lg:pl-20 lg:pt-8 lg:pr-8 rounded-xl'>
				<div className='flex flex-col lg:flex-row justify-between items-center'>
					<div className='flex flex-col lg:order-1 order-2 px-5 lg:px-0'>
						<h1 className='lg:text-[2.5rem] text-3xl leading-[34px] font-bold mb-5 lg:mb-6'>
							Дарим аудит по Bitrix24
						</h1>
						<p className='text-xl font-medium lg:font-normal mb-7 lg:mb-[60px] max-w-[460px]'>
							Настроим ваш отдел продаж, выявим любые проблемные моменты.
							Оставьте ваш номер телефона, и наши менеджеры свяжутся с вами!
						</p>
						<Button  variant='blue' className='lg:w-[240px] mb-7'>
							Получить аудит
						</Button>
					</div>

					<div className='order-1 lg:order-2 px-12 lg:px-0 mb-10 lg:mb-0'>
						<Image
							src={'/feedback-1.png'}
							alt='feedback'
							width={556}
							height={556}
						/>
					</div>
				</div>
			</section>
		</Container>
	)
}