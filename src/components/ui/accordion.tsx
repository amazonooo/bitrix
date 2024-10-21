'use client'

import * as React from 'react'
import * as AccordionPrimitive from '@radix-ui/react-accordion'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

const Accordion = AccordionPrimitive.Root

const AccordionItem = React.forwardRef<
	React.ElementRef<typeof AccordionPrimitive.Item>,
	React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
	<AccordionPrimitive.Item
		ref={ref}
		className={cn('border-b border-b-use-gray py-[30px] lg:py-0', className)}
		{...props}
	/>
))
AccordionItem.displayName = 'AccordionItem'

const AccordionTrigger = React.forwardRef<
	React.ElementRef<typeof AccordionPrimitive.Trigger>,
	React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger> & {
		count?: number
	} // Добавляем проп count
>(({ className, children, count, ...props }, ref) => (
	<AccordionPrimitive.Header className='flex flex-col lg:flex-row lg:items-center lg:gap-x-6'>
		{/* Если count передан, отображаем его в span */}
		{count !== undefined && (
			<span className='text-[2.5rem] lg:text-5xl text-primary-blue font-bold mr-2'>
				{count}
			</span>
		)}
		<AccordionPrimitive.Trigger
			ref={ref}
			className={cn(
				'flex gap-x-1 flex-1 items-center lg:pb-0 lg:py-7 font-bold text-xl transition-all [&[data-state=open]>svg]:rotate-180',
				className
			)}
			{...props}
		>
			{children}
			<ChevronDown className='h-4 w-[18px] shrink-0 transition-transform duration-200 text-primary-blue mt-1.5' />
		</AccordionPrimitive.Trigger>
	</AccordionPrimitive.Header>
))
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName

const AccordionContent = React.forwardRef<
	React.ElementRef<typeof AccordionPrimitive.Content>,
	React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
	<AccordionPrimitive.Content
		ref={ref}
		className='overflow-hidden text-base lg:text-xl font-normal transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down lg:pl-[60px]'
		{...props}
	>
		<div className={cn('pb-4 pt-0', className)}>{children}</div>
	</AccordionPrimitive.Content>
))

AccordionContent.displayName = AccordionPrimitive.Content.displayName

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
