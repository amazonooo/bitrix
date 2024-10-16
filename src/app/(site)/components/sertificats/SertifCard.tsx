'use client'

import { sertData } from '@/data/sertData'
import { InfiniteSertCards } from '@/components/ui/infinite-sert-cards'
import { useMediaQuery } from 'react-responsive'
import Image from 'next/image'
import SertMobile from './SertMobile'
import Container from '@/components/layout/Container'


export default function SertifCard() {
	const isDesktop = useMediaQuery({ minWidth: 769 })

	return (
		<>
			{isDesktop && (
				<div className='flex flex-col gap-y-12 items-center justify-center relative'>
					<InfiniteSertCards items={sertData} direction='left' speed='slow' />
				</div>
			)}
			{!isDesktop && (
				<Container>
					<div className='flex flex-col gap-y-10'>
						{sertData.map(card => (
							<SertMobile id={card.id} logo={card.logo} />
						))}
					</div>
				</Container>
			)}
		</>
	)
}
