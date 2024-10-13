'use client'

import { FC } from 'react'
import CountUp from 'react-countup'

interface IAnimatedNumber {
  end: number
  duration?: number
}

const AnimatedNumber: FC<IAnimatedNumber> = ({ end, duration = 2.5 }) => {
	return (
		<div className='font-bold xl:text-7xl text-5xl md:text-6xl'>
			<CountUp end={end} duration={duration} enableScrollSpy />
		</div>
	)
}

export default AnimatedNumber