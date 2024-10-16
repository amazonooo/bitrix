'use client'

import { cn } from '@/lib/utils'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

export const InfiniteSertCards = ({
	items,
	direction = 'left',
	speed = 'fast',
	pauseOnHover = false,
	className,
}: {
	items: {
		logo: string
	}[]
	direction?: 'left' | 'right'
	speed?: 'fast' | 'normal' | 'slow'
	pauseOnHover?: boolean
	className?: string
}) => {
	const containerRef = React.useRef<HTMLDivElement>(null)
	const scrollerRef = React.useRef<HTMLUListElement>(null)

	useEffect(() => {
		addAnimation()
	}, [])
	const [start, setStart] = useState(false)
	function addAnimation() {
		if (containerRef.current && scrollerRef.current) {
			const scrollerContent = Array.from(scrollerRef.current.children)

			scrollerContent.forEach(item => {
				const duplicatedItem = item.cloneNode(true)
				if (scrollerRef.current) {
					scrollerRef.current.appendChild(duplicatedItem)
				}
			})

			getDirection()
			getSpeed()
			setStart(true)
		}
	}
	const getDirection = () => {
		if (containerRef.current) {
			if (direction === 'left') {
				containerRef.current.style.setProperty(
					'--animation-direction',
					'forwards'
				)
			} else {
				containerRef.current.style.setProperty(
					'--animation-direction',
					'reverse'
				)
			}
		}
	}
	const getSpeed = () => {
		if (containerRef.current) {
			if (speed === 'fast') {
				containerRef.current.style.setProperty('--animation-duration', '20s')
			} else if (speed === 'normal') {
				containerRef.current.style.setProperty('--animation-duration', '40s')
			} else {
				containerRef.current.style.setProperty('--animation-duration', '80s')
			}
		}
	}
	return (
		<div ref={containerRef} className={cn('scroller relative z-20', className)}>
			<ul
				ref={scrollerRef}
				className={cn(
					' flex gap-x-5 w-max flex-nowrap',
					start && 'animate-scroll ',
					pauseOnHover && 'hover:[animation-play-state:paused]'
				)}
			>
				{items.map((item, idx) => (
					<li
						className='relative rounded-xl bg-sky px-[39px] lg:px-[50px] py-8 lg:py-9 flex items-center justify-center'
						key={item.logo}
					>
						<Image src={item.logo} alt='logo' width={327} height={461} />
					</li>
				))}
			</ul>
		</div>
	)
}
