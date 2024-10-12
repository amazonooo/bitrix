'use client'

import Title from '@/components/ui/Title'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function CasesBlocks() {
  const [currentImg, setCurrentImg] = useState(0)

  const images = [
    '/avto-1.png',
    '/avto-2.png',
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImg((prevImg) => (prevImg + 1) % images.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [images.length])

  return (
		<div className='bg-sky w-full rounded-xl py-20 px-28 flex flex-col items-center'>
			<Title title='Автошкола «ВОА»' />

			<motion.img
				key={currentImg}
				src={images[currentImg]}
				alt='img'
				initial={{ opacity: 0, scale: 0.9 }}
				animate={{ opacity: 1, scale: 1 }}
				transition={{ duration: 0.8 }}
				className='w-full h-full object-cover mb-[60px]'
			/>
		</div>
	)
}