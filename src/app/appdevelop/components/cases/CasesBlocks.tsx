'use client'

import Modal from '@/components/shared/Modal'
import { casesData } from '@/data/casesData'
import { ArrowLeft, ArrowRight, CircleX } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'

export default function CasesBlocks() {
	const [currentCase, setCurrentCase] = useState(0)
	const [currentImg, setCurrentImg] = useState(0)
	const [isOpen, setIsOpen] = useState(false)

	const nextImage = () => {
		if (currentImg === 0) {
			setCurrentImg(1)
		} else if (currentCase < casesData.length - 1) {
			setCurrentImg(0)
			setCurrentCase(currentCase + 1)
		}
	}

	const prevImage = () => {
		if (currentImg === 1) {
			setCurrentImg(0)
		} else if (currentCase > 0) {
			setCurrentCase(currentCase - 1)
			setCurrentImg(1)
		}
	}

	return (
		<div className='bg-sky w-full rounded-xl py-20 px-28 flex flex-col items-center relative mb-[60px]'>
			<h1 className='text-5xl leading-[80px] text-primary-blue font-bold mb-[60px]'>
				{casesData[currentCase].title}
			</h1>

			<button
				className={`absolute top-1/2 left-7 -translate-y-1/2 w-[50px] h-[50px] rounded-[10px] bg-primary-blue flex items-center justify-center transition-all duration-300 ${
					currentCase === 0 && currentImg === 0
						? 'bg-sky border border-use-gray cursor-default text-use-gray'
						: 'hover:bg-primary-blue/70 text-white'
				}`}
				onClick={prevImage}
				disabled={currentCase === 0 && currentImg === 0}
			>
				<ArrowLeft />
			</button>

			<button
				className={`absolute top-1/2 right-7 -translate-y-1/2 w-[50px] h-[50px] rounded-[10px] bg-primary-blue flex items-center justify-center transition-all duration-300 ${
					currentCase === casesData.length - 1 && currentImg === 1
						? 'bg-sky border border-use-gray cursor-default text-use-gray'
						: 'hover:bg-primary-blue/70 text-white'
				}`}
				onClick={nextImage}
				disabled={currentCase === casesData.length - 1 && currentImg === 1}
			>
				<ArrowRight />
			</button>

			<div className='cursor-pointer' onClick={() => setIsOpen(true)}>
				<Image
					src={casesData[currentCase].intervalImgs[currentImg]}
					alt='img'
					width={1096}
					height={620}
					className='w-full h-full object-cover select-none'
				/>
			</div>

			<h2 className='text-3xl font-medium text-primary-blue mt-8 select-none'>
				{casesData[currentCase].subtitle}
			</h2>

			{isOpen && (
				<Modal
					isOpen={isOpen}
					imgSrc={casesData[currentCase].intervalImgs[currentImg]}
					onClose={() => setIsOpen(false)}
				/>
			)}
		</div>
	)
}
