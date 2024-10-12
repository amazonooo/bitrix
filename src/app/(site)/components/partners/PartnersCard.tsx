'use client'

import { motion } from 'framer-motion'

import { partners } from '@/data/partners'
import Image from 'next/image'

export default function PartnersCard() {
  const moveRight = {
		animate: {
			x: ['100%', '-100%'],
		},
		transition: {
			duration: 10,
			repeat: Infinity,
			ease: 'linear',
		},
	}

	const moveLeft = {
		animate: {
			x: ['-100%', '100%'],
		},
		transition: {
			duration: 10,
			repeat: Infinity,
			ease: 'linear',
		},
	}


  return (
		<div className='space-y-8 overflow-hidden'>
			<div className='flex justify-center gap-4'>
				{partners.slice(0, 3).map(partner => (
					<motion.div
						key={partner.id}
						className='bg-sky py-[52px] px-24 flex items-center justify-center rounded-xl'
						{...moveLeft}
					>
						<Image src={partner.logo} alt='logo' width={250} height={60} />
					</motion.div>
				))}
			</div>

			<div className='flex justify-center gap-4'>
				{partners.slice(3, 6).map(partner => (
					<motion.div
						key={partner.id}
						className='bg-sky py-[52px] px-24 flex items-center justify-center rounded-xl'
						{...moveRight}
					>
						<Image src={partner.logo} alt='logo' width={250} height={60} />
					</motion.div>
				))}
			</div>
		</div>
	)
}