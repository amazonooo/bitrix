'use client'

import { useEffect, useState } from 'react'
import { casesData } from '@/data/casesData'
import Image from 'next/image'
import { MoveLeft, MoveRight } from 'lucide-react'

export default function CasesBlocks() {
	const [activeBlock, setActiveBlock] = useState(0)
  const [currentImg, setCurrentImg] = useState(0)

	const { title, subtitle, intervalImgs } = casesData[activeBlock]

	useEffect(() => {
		if(activeBlock === 0) {
			const interval = setInterval(() => {
				setCurrentImg(prevImg => (prevImg === 0 ? 1 : 0))
			}, 5000)

			return () => clearInterval(interval)
		}
	}, [])

	const handleChangeCase = (idx: number) => {
		setActiveBlock(idx)
		setCurrentImg(0)
	}

	const handleNextImg = () => {
		setCurrentImg((prevImg) => (prevImg + 1) % intervalImgs.length)
	}

	const handlePrevImg = () => {
		setCurrentImg((prevImg) => (prevImg - 1) % intervalImgs.length)
	}

  return (
		<div className='bg-sky w-full rounded-xl py-20 px-28 flex flex-col items-center relative mb-[60px]'>
			<h1 className='text-5xl leading-[80px] text-primary-blue font-bold mb-[60px]'>
				{title}
			</h1>

			{activeBlock !== 0 && (
				<div>
					<div className='absolute top-1/2 -translate-y-1/2 right-8 cursor-pointer group'>
						<MoveRight
							size={30}
							onClick={handleNextImg}
							className='text-primary-blue transition-transform duration-300 group-hover:translate-x-1'
						/>
					</div>
					<div className='absolute top-1/2 -translate-y-1/2 left-8 cursor-pointer group'>
						<MoveLeft
							size={30}
							onClick={handlePrevImg}
							className='text-primary-blue transition-transform duration-300 group-hover:-translate-x-1'
						/>
					</div>
				</div>
			)}

			<div className='relative w-[1096px] h-[625px] mb-[60px]'>
				{intervalImgs.map((imgSrc, index) => (
					<Image
						key={index}
						src={imgSrc}
						alt={`Image ${index}`}
						width={1096}
						height={620}
						className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${
							currentImg === index ? 'opacity-100' : 'opacity-0'
						}`}
					/>
				))}
			</div>

			<h2 className='text-3xl font-medium text-primary-blue mb-5'>
				{subtitle}
			</h2>

			<div className='flex gap-x-2.5'>
				{casesData.map((item, idx) => (
					<div
						key={item.id}
						onClick={() => handleChangeCase(idx)}
						className={`w-12 h-2.5 rounded-[10px] cursor-pointer ${
							activeBlock === idx ? 'bg-primary-blue' : 'bg-use-gray'
						}`}
					/>
				))}
			</div>
		</div>
	)
}