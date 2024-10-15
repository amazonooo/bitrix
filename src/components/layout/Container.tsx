import { cn } from '@/lib/utils'

export default function Container({ children, className }: {
  children: React.ReactNode,
  className?: string
}) {
  return (
		<div
			className={cn(
				'ml-auto mr-auto xl:px-[60px] px-5 sm:px-10 2xl:max-w-[1400px] 2xl:px-[2rem] overflow-x-clip',
				className
			)}
		>
			{children}
		</div>
	)
}