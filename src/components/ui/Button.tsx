import { cn } from '@/lib/utils'
import Link from 'next/link'

interface IButton {
  className?: string
  children: React.ReactNode
	link: string
}

export default function Button(btn: IButton) {
  return (
		<Link
			href={btn.link}
			type='submit'
			className={cn(
				'rounded-[10px] bg-primary-blue px-10 py-[15px] flex items-center justify-center font-bold text-xl text-white hover:scale-105 hover:shadow-md transition-all duration-300',
				btn.className
			)}
		>
			{btn.children}
		</Link>
	)
}