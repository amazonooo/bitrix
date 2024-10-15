import { cn } from '@/lib/utils'

export default function Title({ title, className }: { title: string, className?: string }) {
  return (
		<h1
			className={cn(
				'lg:text-[4.875rem] text-[2rem] sm:text-[2.5rem] md:text-6xl lg:leading-[80px] leading-[38px] text-primary-blue font-bold mb-10 lg:mb-[60px]',
				className
			)}
		>
			{title}
		</h1>
	)
}