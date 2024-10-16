'use client'

import { partners1, partners2 } from '@/data/partners'
import { InfiniteMovingCards } from '@/components/ui/infinite-moving-cards'
import { sertData } from '@/data/sertData'

export default function SertifCard() {
	return (
		<div className='flex flex-col gap-y-12 items-center justify-center relative'>
			<InfiniteMovingCards items={sertData} direction='left' speed='slow' />
		</div>
	)
}
