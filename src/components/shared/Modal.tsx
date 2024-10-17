'use client'

import { cn } from '@/lib/utils'
import { m, LazyMotion, domAnimation } from 'framer-motion'
import { CircleX, LucideIcon, X } from 'lucide-react'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

export default function Modal({
	isOpen,
	onClose,
	imgSrc
}: {
	isOpen: boolean
	onClose: any
	imgSrc: string
}) {
	useEffect(() => {
		if (isOpen) {
			document.body.classList.add('overflow-hidden')
		} else {
			document.body.classList.remove('overflow-hidden')
		}

		return () => {
			document.body.classList.remove('overflow-hidden')
		}
	}, [isOpen])

	if (!isOpen) return null

	const modalRef = useRef<HTMLDivElement>(null)

	const handleClickOutside = (e: any) => {
		if (modalRef.current && !modalRef.current.contains(e.target)) {
			onClose(false)
		}
	}

	return (
		<LazyMotion features={domAnimation}>
			<div
				onClick={handleClickOutside}
				className='bg-[rgba(0,0,0,0.7)] w-full h-screen flex items-center justify-center fixed inset-0 z-[500] overflow-hidden'
			>
				<m.div
					ref={modalRef}
					initial={{ opacity: 0, scale: 0.9 }}
					animate={{ opacity: 1, scale: 1 }}
					exit={{ opacity: 0, scale: 0.9 }}
					transition={{ duration: 0.3 }}
					className='relative pt-7 lg:pt-6 bg-white rounded-[10px] overflow-hidden w-[340px] h-auto sm:w-[600px] md:w-[600px] lg:w-[900px] xl:w-[1100px] 2xl:w-[1200px]'
				>
					<button
						className='absolute top-1.5 lg:top-2 right-2 text-gray-700 hover:text-primary-blue transition-colors duration-300'
						onClick={onClose}
					>
						<CircleX className='w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7' />
					</button>
					<Image
						width={1096}
						height={620}
						src={imgSrc}
						alt='img'
						className='pointer-events-none select-none'
					/>
				</m.div>
			</div>
		</LazyMotion>
	)
}
