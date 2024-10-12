import Button from '@/components/ui/Button'
import Image from 'next/image'

export default function FeedbackBottom() {
	return (
		<div className='w-full bg-sky pl-20 pt-20 pr-8 rounded-xl'>
			<div className='flex flex-col lg:flex-row justify-between'>
				<div className='flex flex-col'>
					<h1 className='text-[2.5rem] font-bold pb-6'>
						Выведем ваш бизнес на новый уровень!
					</h1>
					<p className='text-xl font-normal mb-[60px] max-w-[460px]'>
						Оставьте свой номер телефона, и мы свяжемся с вами, чтобы обсудить
						развитие вашего бизнеса.
					</p>
					<form className='flex flex-col'>
						<div className='flex items-center gap-x-5 mb-5'>
							<input
								type='tel'
								className='bg-white outline-none border-none rounded-[10px] pl-7 py-4 placeholder:text-use-gray focus:outline focus:outline-primary-blue transition-all duration-300'
								placeholder='+7 (254) 973-88-02'
							/>
							<Button link='/' className='w-[240px]'>Получить аудит</Button>
						</div>
					</form>
				</div>

				<div>
					<Image
						src={'/feedback-2.png'}
						alt='feedback'
						width={556}
						height={556}
					/>
				</div>
			</div>
		</div>
	)
}
