'use client'

import { navItems } from '@/data/navItems'
import { useScrollDirection } from '@/hooks/useScrollDirection'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { useMediaQuery } from 'react-responsive'

export default function Header() {
  const scrollDirection = useScrollDirection()
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (scrollDirection === 'up') {
      setIsVisible(true)
    } else if (scrollDirection === 'down') {
      setIsVisible(false)
    }
  }, [scrollDirection])

	const isDesktop = useMediaQuery({ minWidth: 769 })

	const [isOpen, setIsOpen] = useState(false)

	const pathname = usePathname()
	const isNotFound = pathname !== '/' && pathname !== '/appdevelop'

	if (isNotFound) return null

  return (
		<>
			{isDesktop && (
				<header
					className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300 shadow-md bg-white ${
						isVisible ? 'translate-y-0' : '-translate-y-full'
					}`}
				>
					<nav className='pl-[3.75rem] 2xl:pl-0 2xl:max-w-[1328.5px] 2xl:ml-auto 2xl:mr-auto py-[1.875rem] flex items-center'>
						<Link
							href={'/'}
							className='text-2xl font-extrabold uppercase text-primary-blue mr-14'
						>
							УМЦ ВОА
						</Link>
						<ul className='flex gap-x-10'>
							{navItems.map(item => (
								<li
									key={item.id}
									className='relative text-lg font-medium after:w-0 after:h-0.5 after:absolute after:bg-black after:top-full after:left-0 hover:after:w-full after:transition-all after:duration-300'
								>
									<Link href={item.href}>{item.name}</Link>
								</li>
							))}
						</ul>
					</nav>
				</header>
			)}

			{!isDesktop && (
				<header className='fixed top-0 left-0 w-full py-5 px-5 sm:px-10 bg-white shadow-md z-50'>
					<nav className='flex items-center justify-between h-full'>
						<Link
							href={'/'}
							className='text-2xl font-extrabold uppercase text-primary-blue z-[1000]'
						>
							УМЦ ВОА
						</Link>
						<label className='flex flex-col gap-2 w-8 z-[1000] cursor-pointer'>
							<input
								className='peer hidden'
								type='checkbox'
								onClick={() => setIsOpen(!isOpen)}
							/>
							<div
								className={`rounded-2xl h-[3px] w-1/2 bg-black duration-500 origin-right ${
									isOpen
										? 'rotate-[225deg] -translate-x-[12px] -translate-y-[1px]'
										: ''
								}`}
							></div>
							<div
								className={`rounded-2xl h-[3px] w-full bg-black duration-500 ${
									isOpen ? '-rotate-45' : ''
								}`}
							></div>
							<div
								className={`rounded-2xl h-[3px] w-1/2 bg-black duration-500 place-self-end origin-left ${
									isOpen
										? 'rotate-[225deg] translate-x-[12px] translate-y-[1px]'
										: ''
								}`}
							></div>
						</label>
					</nav>
				</header>
			)}
		</>
	)
}