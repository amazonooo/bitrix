import Container from '@/components/layout/Container'
import Button from '@/components/ui/Button'
import Image from 'next/image'

export default function FeedbackTop() {
  return (
		<Container className='w-full overflow-x-clip'>
			<div className='w-full bg-sky lg:pl-20 lg:pt-20 lg:pr-8 rounded-xl'>
				<div className='flex flex-col lg:flex-row justify-between'>
					<div className='flex flex-col lg:order-1 order-2 px-5 lg:px-0'>
						<h1 className='lg:text-[2.5rem] text-3xl leading-[34px] font-bold mb-5 lg:mb-6'>
							Дарим аудит по Bitrix24
						</h1>
						<p className='text-xl font-medium lg:font-normal mb-7 lg:mb-[60px] max-w-[460px]'>
							Настроим ваш отдел продаж, выявим любые проблемные моменты.
							Оставьте ваш номер телефона, и наши менеджеры свяжутся с вами!
						</p>
						<form className='flex flex-col'>
							<div className='flex flex-col lg:flex-row lg:items-center gap-5 mb-5'>
								<input
									type='text'
									className='bg-white outline-none border-none rounded-[10px] pl-7 py-4 placeholder:text-use-gray focus:outline focus:outline-primary-blue transition-all duration-300'
									placeholder='Ваше имя'
								/>
								<input
									type='tel'
									className='bg-white outline-none border-none rounded-[10px] pl-7 py-4 placeholder:text-use-gray focus:outline focus:outline-primary-blue transition-all duration-300'
									placeholder='+7 (254) 973-88-02'
								/>
							</div>

							<Button link='/' className='lg:w-[240px] mb-7'>
								Получить аудит
							</Button>
						</form>
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
			</div>
		</Container>
	)
}