'use client'

import { ArrowRight, MoveRight } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

interface IWorkCard {
  title: string
  list1: string
  list2: string
  list3: string
  list4: string
  link: string
}

export default function WorkCard(card: IWorkCard) {
  // const [color, setColor] = useState(btn.variant)
  const [isOpen, setIsOpen] = useState(false)

  const [isFormVisible, setIsFormVisible] = useState(false)

  useEffect(() => {
    const formContainer = document.getElementById('form-container')

    if (isFormVisible && formContainer) {
      // Удаляем предыдущий скрипт, если он существует
      const existingScript = formContainer.querySelector('script')
      if (existingScript) {
        formContainer.removeChild(existingScript)
      }

      const script = document.createElement('script')
      script.src =
        'https://cdn-ru.bitrix24.ru/b31346360/crm/form/loader_4.js?' +
        ((Date.now() / 180000) | 0)
      script.async = true
      script.setAttribute('data-b24-form', 'inline/4/fe5o6w')
      script.setAttribute('data-skip-moving', 'true')

      // Вставляем новый скрипт в контейнер
      formContainer.appendChild(script)

      return () => {
        // Удаляем скрипт при закрытии формы
        if (formContainer.contains(script)) {
          formContainer.removeChild(script)
        }
      }
    }
  }, [isFormVisible])

  const modalRef = useRef<HTMLDivElement>(null)

  const handleClickOutside = (e: any) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      setIsFormVisible(false)
    }
  }

  useEffect(() => {
    if (isFormVisible) {
      document.body.classList.add('overflow-hidden')
    } else {
      document.body.classList.remove('overflow-hidden')
    }

    return () => {
      document.body.classList.remove('overflow-hidden')
    }
  }, [isFormVisible])
  return (
		<>
			<article className='rounded-xl bg-sky px-[26px] pt-8 lg:py-0 lg:pt-[60px] lg:px-[59px] relative h-[375px] lg:h-[483px]'>
				<h1 className='text-xl sm:text-2xl lg:text-3xl font-bold mb-6 max-w-[300px] lg:max-w-[380px]'>
					{card.title}
				</h1>
				<ul className='flex flex-col'>
					<li className='text-base md:text-lg lg:text-xl font-normal flex items-start lg:items-center gap-x-1'>
						<div className='w-2 h-0.5 bg-black mt-[12.5px] lg:mt-1'></div>
						{card.list1}
					</li>
					<li className='text-base md:text-lg lg:text-xl font-normal flex items-start lg:items-center gap-x-1'>
						<div className='w-2 h-0.5 bg-black mt-[12.5px] lg:mt-1'></div>
						{card.list2}
					</li>
					<li className='text-base md:text-lg lg:text-xl font-normal flex items-start lg:items-center gap-x-1'>
						<div className='w-2 h-0.5 bg-black mt-[12.5px] lg:mt-1'></div>
						{card.list3}
					</li>
					<li
						dangerouslySetInnerHTML={{ __html: card.list4 }}
						className='relative text-base md:text-lg lg:text-xl font-normal flex items-start lg:items-center gap-x-1 ml-3 before:w-2 before:absolute before:-left-3 before:h-0.5 before:bg-black before:top-[12.5px] before:lg:t-2'
					>
						{/* <div className='w-2 h-0.5 bg-black mt-[12.5px] lg:mt-1'></div> */}
						{/* {card.list4} */}
					</li>
				</ul>
				<button
					onClick={() => setIsFormVisible(!isFormVisible)}
					className='group text-primary-blue flex items-center gap-x-0.5 absolute bottom-6 left-[30px] lg:bottom-[60px] lg:left-[60px]'
				>
					<span className='text-xl'>{card.link}</span>
					<MoveRight className='group-hover:translate-x-2.5 transition-transform duration-300 mt-1.5' />
				</button>
			</article>

			{isFormVisible && (
				<div
					onClick={handleClickOutside}
					// id='form-container'
					className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[500]'
				>
					<div id='form-container' ref={modalRef}></div>
				</div>
			)}
		</>
	)
}