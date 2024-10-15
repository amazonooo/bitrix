'use client'

import { MapPin, Phone } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

export default function Footer() {
  const [isHovered, setIsHovered] = useState(false)

	const pathname = usePathname()
	const isNotFound =
		pathname !== '/' &&
		pathname !== '/appdevelop' &&
		pathname !== '/implementation' &&
		pathname !== '/contacts'

	if (isNotFound) return null

  return (
		<footer className='lg:mt-[150px] mt-24 shadow-black shadow-2xl bg-white'>
			<nav className='lg:pl-[3.75rem] pl-0 2xl:pl-0 2xl:max-w-[1328.5px] 2xl:ml-auto 2xl:mr-auto py-[1.875rem] flex flex-col lg:flex-row items-center justify-between'>
				<div className='flex flex-col'>
					<Link
						href={'/'}
						className='text-2xl font-extrabold uppercase text-primary-blue mr-5'
					>
						УМЦ ВОА
					</Link>
					<span className='mb-6 lg:mb-0 text-sm lg:text-base font-normal'>
						Учебный центр ВОА
					</span>
				</div>

				<div className='flex flex-col lg:flex-row items-center lg:items-start gap-x-10'>
					<div className='flex items-center gap-x-1.5 lg:order-1 order-2'>
						<MapPin className='text-primary-blue' />
						<span className='text-xl font-medium'>
							г. Балашиха, ул. Пионерская, д. 33
						</span>
					</div>

					<div className={`flex items-center gap-x-1.5 group mt-1.5 lg:mt-0 order-1 lg:order-2`}>
						<Phone
							className={`text-primary-blue transition-transform duration-300 ${
								isHovered ? '-translate-y-0.5' : 'translate-y-0.5'
							}`}
							onMouseEnter={() => setIsHovered(true)}
							onMouseLeave={() => setIsHovered(false)}
						/>
						<span className='text-xl font-medium'>+7 (916) 370-72-02</span>
					</div>
				</div>
			</nav>
		</footer>
	)
}