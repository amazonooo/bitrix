'use client'

import { partners1, partners2 } from '@/data/partners'
import { InfiniteMovingCards } from '@/components/ui/infinite-moving-cards'
import { sertData } from '@/data/sertData'
import { InfiniteSertCards } from '@/components/ui/infinite-sert-cards'

export default function SertifCard() {
	return (
		<div className='flex flex-col gap-y-12 items-center justify-center relative'>
			<InfiniteSertCards items={sertData} direction='left' speed='slow' />
		</div>
	)
}
