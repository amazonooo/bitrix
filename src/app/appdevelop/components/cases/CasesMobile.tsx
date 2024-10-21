'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import { Pagination } from 'swiper/modules'
import Image from 'next/image'
import { casesData } from '@/data/casesData'
import { useState } from 'react'
import Modal from '@/components/shared/Modal'

export default function CasesMobile() {
	const [isOpen, setIsOpen] = useState(false)
	const [currentCase, setCurrentCase] = useState(0)
	const [currentImg, setCurrentImg] = useState(0)

	const handleCaseChange = (swiper: any) => {
		setCurrentCase(swiper.realIndex)
	}

	const openModal = (imgIndex: number) => {
		setCurrentImg(imgIndex)
		setIsOpen(true)
	}

	return (
		<div className='w-full'>
			<h1 className='text-3xl leading-[40px] text-primary-blue font-bold mb-4 text-center'>
				{casesData[currentCase].title}
			</h1>

			<Swiper
				spaceBetween={10}
				slidesPerView={1}
				pagination={{ clickable: true }}
				onSlideChange={handleCaseChange}
			>
				{casesData.map((caseItem, caseIndex) => (
					<SwiperSlide key={caseIndex}>
						<Swiper
							spaceBetween={10}
							slidesPerView={1.2}
							className='inner-swiper'
							pagination={{ clickable: true }}
						>
							{caseItem.intervalImgs.map((imgSrc, imgIndex) => (
								<SwiperSlide key={imgIndex}>
									<div
										className='cursor-pointer'
										onClick={() => openModal(imgIndex)}
									>
										<Image
											src={imgSrc}
											alt={`Image ${imgIndex + 1}`}
											width={1096}
											height={620}
											className='w-full h-full object-cover select-none'
										/>
									</div>
								</SwiperSlide>
							))}
						</Swiper>
					</SwiperSlide>
				))}
			</Swiper>

			<h2 className='text-3xl font-medium text-primary-blue mt-8 select-none text-center'>
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
