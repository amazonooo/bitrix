'use client'

import { homeCards } from '@/data/homeCards'
import HomeCard from './HomeCard'
import Container from '@/components/layout/Container'
import { useMediaQuery } from 'react-responsive'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';

export default function HomeCards() {
  const isDesktop = useMediaQuery({ minWidth: 769 })

  return (
		<>
			<Container className='w-full overflow-x-clip hidden lg:block'>
				{isDesktop && (
					<section className='flex flex-col lg:flex-row gap-x-8 gap-y-10 items-center'>
						{homeCards.map((card, idx) => (
							<HomeCard
								key={idx}
								procent={card.procent}
								desc={card.desc}
								bg={card.bg}
								text={card.text}
								descColor={card.descColor}
								border={card.border}
							/>
						))}
					</section>
				)}
			</Container>

			{!isDesktop && (
				<section className='pl-5 sm:pl-10 block lg:hidden'>
					<Swiper spaceBetween={21} slidesPerView={1.2}>
						{homeCards.map((card, idx) => (
							<SwiperSlide key={idx}>
								<HomeCard
									procent={card.procent}
									desc={card.desc}
									bg={card.bg}
									text={card.text}
									descColor={card.descColor}
									border={card.border}
								/>
							</SwiperSlide>
						))}
					</Swiper>
				</section>
			)}
		</>
	)
}