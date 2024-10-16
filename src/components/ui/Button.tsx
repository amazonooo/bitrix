'use client'

import { cn } from '@/lib/utils'
import Link from 'next/link'
import { useState } from 'react'
import Modal from '../shared/Modal'
import BitrixModal from '../shared/BitrixModal'

interface IButton {
	className?: string
	children: React.ReactNode
	variant: 'blue' | 'white' | 'sky'
}

export default function Button(btn: IButton) {
	const [color, setColor] = useState(btn.variant)
	const [isOpen, setIsOpen] = useState(false)


  return (
		<div
			onClick={() => setIsOpen(true)}
			className={cn(
				`cursor-pointer rounded-[10px] bg-primary-blue px-10 py-[15px] flex items-center justify-center font-bold text-base md:text-xl ${
					color === 'blue'
						? 'text-white hover:text-primary-blue hover:bg-white bg-primary-blue transition-all duration-300'
						: ''
				} ${
					color === 'white'
						? 'text-primary-blue hover:text-white hover:bg-primary-blue bg-primary-white transition-all duration-300'
						: ''
				}  ${
					color === 'sky'
						? 'text-white hover:text-primary-blue hover:bg-sky bg-primary-blue transition-all duration-300'
						: ''
				}`,
				btn.className
			)}
		>
			{btn.children}
			{isOpen && (
				<BitrixModal
					isOpen={isOpen}
					onClose={() => setIsOpen(false)}
				></BitrixModal>
			)}
		</div>
	)
}