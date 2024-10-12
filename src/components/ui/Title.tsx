import { cn } from '@/lib/utils'

export default function Title({ title, className }: { title: string, className?: string }) {
  return (
		<h1
			className={cn(
				'text-[4.875rem] leading-[80px] text-primary-blue font-bold mb-[60px]',
				className
			)}
		>
			{title}
		</h1>
	)
}