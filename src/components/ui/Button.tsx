'use client'

import { cn } from '@/lib/utils'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import Modal from '../shared/Modal'
// import BitrixModal from '../shared/BitrixModal'

interface IButton {
	className?: string
	children: React.ReactNode
	variant: 'blue' | 'white' | 'sky'
}

export default function Button(btn: IButton) {
	const [color, setColor] = useState(btn.variant)
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
		if(isFormVisible) {
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
			<div
				onClick={() => setIsFormVisible(!isFormVisible)}
				className={cn(
					`cursor-pointer select-none rounded-[10px] bg-primary-blue px-10 py-[15px] flex items-center justify-center font-bold text-base md:text-xl ${
						color === 'blue'
							? 'text-white hover:text-primary-blue hover:bg-white bg-primary-blue transition-all duration-300'
							: ''
					} ${
						color === 'white'
							? 'text-primary-blue hover:text-white hover:bg-primary-blue bg-primary-white transition-all duration-300'
							: ''
					}  ${
						color === 'sky'
							? 'text-white hover:text-primary-blue hover:bg-sky bg-primary-blue transition-all duration-300'
							: ''
					}`,
					btn.className
				)}
			>
				{btn.children}
			</div>

			{isFormVisible && (
				<div
					onClick={handleClickOutside}
					// id='form-container'
					className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50'
				>
					<div id='form-container' ref={modalRef}></div>
				</div>
			)}
		</>
	)
}