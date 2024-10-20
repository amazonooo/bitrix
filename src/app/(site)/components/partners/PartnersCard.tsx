'use client'

import { partners1 } from '@/data/partners'
import { InfiniteMovingCards } from '@/components/ui/infinite-moving-cards'

export default function PartnersCard() {
  return (
		<div className='flex flex-col gap-y-12 items-center justify-center relative'>
			<InfiniteMovingCards
				items={partners1}
				direction='right'
				speed='normal'
			/>
		</div>
	)
}