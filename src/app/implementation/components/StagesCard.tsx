'use client'

import { stagesData } from '@/data/stagesData'
import Image from 'next/image'
import { useMediaQuery } from 'react-responsive'

export default function StagesCard() {
  const isDesktop = useMediaQuery({ minWidth: 500 })

  return (
		<>
			{isDesktop && (
				<Image src={'/stages.png'} alt='stages' width={1320} height={528} />
			)}
			{!isDesktop && (
				<div className='flex flex-col items-center justify-center gap-y-[60px]'>
					{stagesData.map(stage => (
						<div key={stage.id} className='flex flex-col items-center'>
							<div className='w-[70px] h-[70px] flex items-center justify-center rounded-full bg-primary-blue mb-5'>
								<span className='text-white font-bold text-[2.5rem]'>{stage.id}</span>
							</div>
              <h2 className='text-xl font-semibold text-center'>
                {stage.text}
              </h2>
						</div>
					))}
				</div>
			)}
		</>
	)
}