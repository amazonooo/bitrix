'use client'

import AnimatedNumber from '@/components/ui/AnimatedNumber'
import { useState } from 'react'

interface IHomeCard {
	procent: number
	desc: string
	border: string
}

export default function HomeCard(card: IHomeCard) {
	const [isHovered, setIsHovered] = useState(false)
	const [isChanged, setIsChanged] = useState(false)

  return (
		<article
			className={`relative overflow-hidden lg:h-[418px] min-h-[309px] pt-11 pb-7 lg:pt-[70px] lg:pb-[90px] flex flex-col justify-center rounded-xl px-7 lg:px-11 lg:group lg:transition-transform lg:duration-500 ${
				isHovered ? 'lg:-translate-y-2' : 'lg:translate-y-2'
			} border border-${card.border} bg-white`}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
		>
			<div
				className={`absolute inset-0 transition-transform duration-500 ${
					isHovered ? 'translate-y-0' : 'translate-y-full'
				} bg-primary-blue z-0`}
			></div>
			<div className={`relative z-10`}>
				<h2
					className={`mb-7 flex items-center gap-x-[0.5px] transition-colors duration-500 ${
						isHovered ? 'text-white' : 'text-primary-blue'
					}`}
				>
					<span className='xl:text-7xl text-5xl md:text-6xl font-bold'>
						<AnimatedNumber end={card.procent} />
					</span>
					<span className='xl:text-7xl text-5xl md:text-6xl font-bold'>%</span>
				</h2>
				<p
					className={`text-sm sm:text-base lg:text-xl font-medium transition-colors duration-500 ${
						isHovered ? 'text-white' : 'text-black'
					}`}
				>
					{card.desc}
				</p>
			</div>
		</article>
	)
}