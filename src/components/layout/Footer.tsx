'use client'

import { MapPin, Phone } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

export default function Footer() {
  const [isHovered, setIsHovered] = useState(false)

  return (
		<footer className='mt-[150px] shadow-black shadow-2xl bg-white'>
			<nav className='pl-[3.75rem] 2xl:pl-0 2xl:max-w-[1328.5px] 2xl:ml-auto 2xl:mr-auto py-[1.875rem] flex items-center justify-between'>
				<div className='flex'>
					<Link
						href={'/'}
						className='text-2xl font-extrabold uppercase text-primary-blue mr-5'
					>
						УЦ ВОА
					</Link>
					<div className='flex items-center gap-x-1.5'>
						<MapPin className='text-primary-blue' />
						<span className='text-xl font-medium'>
							г. Балашиха, ул. Пионерская, д. 33
						</span>
					</div>
				</div>

				<div
					className={`flex items-center gap-x-1.5 group`}
				>
					<Phone
            className={`text-primary-blue transition-transform duration-300 ${
						  isHovered ? '-translate-y-0.5' : 'translate-y-0.5'
					  }`} 
            onMouseEnter={() => setIsHovered(true)}
					  onMouseLeave={() => setIsHovered(false)}
          />
					<span className='text-xl font-medium'>+7 (916) 370-72-02</span>
				</div>
			</nav>
		</footer>
	)
}