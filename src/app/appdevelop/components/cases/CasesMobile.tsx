'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Pagination, Navigation } from 'swiper/modules'
import Image from 'next/image'
import { casesData } from '@/data/casesData'
import { useState } from 'react'
import Modal from '@/components/shared/Modal'

export default function CasesMobile() {
	const [isOpen, setIsOpen] = useState(false)
	const [currentCase, setCurrentCase] = useState(0)
  const [currentImg, setCurrentImg] = useState(0)

  const handleSwipe = (direction: 'next' | 'prev') => {
		if (direction === 'next') {
			if (currentImg < casesData[currentCase].intervalImgs.length - 1) {
				setCurrentImg(currentImg + 1)
			} else if (currentCase < casesData.length - 1) {
				setCurrentImg(0)
				setCurrentCase(currentCase + 1)
			}
		} else {
			if (currentImg > 0) {
				setCurrentImg(currentImg - 1)
			} else if (currentCase > 0) {
				setCurrentCase(currentCase - 1)
				setCurrentImg(casesData[currentCase - 1].intervalImgs.length - 1)
			}
		}
	}

	return (
		<div className='w-full'>
			<h1 className='text-3xl leading-[40px] text-primary-blue font-bold mb-4 text-center'>
				{casesData[currentCase].title}{' '}
			</h1>

			<Swiper
				spaceBetween={10}
				slidesPerView={1.2}
				className='mb-6 lg:mb-[50px]'
				onSlideChange={swiper => setCurrentCase(swiper.realIndex)}
				onSwiper={swiper => {
					swiper.on('slideNextTransitionStart', () => handleSwipe('next'))
					swiper.on('slidePrevTransitionStart', () => handleSwipe('prev'))
				}}
			>
				{casesData.map((caseItem, index) => (
					<SwiperSlide key={index}>
						<div className='cursor-pointer' onClick={() => setIsOpen(true)}>
							<Image
								src={casesData[currentCase].intervalImgs[currentImg]}
								alt='img'
								width={1096}
								height={620}
								className='w-full h-full object-cover select-none'
							/>
						</div>
					</SwiperSlide>
				))}
			</Swiper>

			<h2 className='text-3xl font-medium text-primary-blue mt-8 select-none text-center'>
				{casesData[currentCase].subtitle}
			</h2>

			{isOpen && (
				<Modal
					isOpen={isOpen}
					imgSrc={casesData[currentCase].intervalImgs[0]}
					onClose={() => setIsOpen(false)}
				/>
			)}
		</div>
	)
}
