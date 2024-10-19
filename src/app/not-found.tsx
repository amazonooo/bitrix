import Button from '@/components/ui/Button'
import Link from 'next/link'

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
			<Link
				href={'/'}
				className='rounded-[10px] text-white hover:text-primary-blue hover:bg-white bg-primary-blue transition-all duration-300 border-2 border-white px-20 py-[15px] flex items-center justify-center font-bold text-base md:text-xl'
			>
				На главную
			</Link>
		</div>
	)
}