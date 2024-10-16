'use client'

import AnimatedNumber from '@/components/ui/AnimatedNumber'
import { useState } from 'react'

interface IHomeCard {
	procent: number
	desc: string
	bg: string
	text: string
	descColor: string
	border: string
}

export default function HomeCard(card: IHomeCard) {
	const [isHovered, setIsHovered] = useState(false)

  return (
		<article
			className={`lg:h-[418px] min-h-[309px] pt-11 pb-7 lg:pt-[70px] lg:pb-[90px] flex flex-col justify-center rounded-xl px-7 lg:px-11 lg:group lg:transition-transform lg:duration-300 ${
				isHovered ? 'lg:-translate-y-2' : 'lg:translate-y-2'
			} bg-${card.bg} border border-${card.border}`}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
		>
			<h2 className={`mb-7 flex items-center gap-x-[0.5px] text-${card.text}`}>
				<span className='xl:text-7xl text-5xl md:text-6xl font-bold'>
					<AnimatedNumber end={card.procent} />
				</span>
				<span className='xl:text-7xl text-5xl md:text-6xl font-bold'>%</span>
			</h2>
			<p className={`text-sm sm:text-base lg:text-xl font-medium text-${card.descColor}`}>
				{card.desc}
			</p>
		</article>
	)
}