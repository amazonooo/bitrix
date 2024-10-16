import Button from '@/components/ui/Button'

export default function NotFound() {
  return (
		<div className='w-full h-screen bg-primary-blue flex flex-col items-center justify-center'>
			<div className='flex flex-col items-center'>
				<h1 className='text-8xl lg:text-[200px] xl:text-[350px] font-bold mb-4 lg:mb-8 text-white'>
					404
				</h1>
				<h2 className='text-base xl:text-xl font-medium mb-[60px] lg:mb-7 text-white'>
					Эта страница не найдена
				</h2>
			</div>
			<Button
				variant={'blue'}
				link='/'
				className='text-white bg-primary-blue border-2 border-white px-20'
			>
				На главную
			</Button>
		</div>
	)
}