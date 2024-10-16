import { X } from 'lucide-react'
import { FC, useEffect, useRef, useState } from 'react'

interface IModal {
	isOpen: boolean
	onClose: any
	children?: React.ReactNode
	className?: string
}

const BitrixModal: FC<IModal> = ({ isOpen, onClose, children, className }) => {
	// const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
		if (isOpen) {
			document.body.classList.add('overflow-hidden')
		} else {
			document.body.classList.remove('overflow-hidden')
		}

		return () => {
			document.body.classList.remove('overflow-hidden')
		}
	}, [isOpen])

	if (!isOpen) return null

	useEffect(() => {
		if (isOpen) {
			document.body.classList.add('overflow-hidden')
		} else {
			document.body.classList.remove('overflow-hidden')
		}

		return () => {
			document.body.classList.remove('overflow-hidden')
		}
	}, [isOpen])

	if (!isOpen) return null

  const modalRef = useRef<HTMLDivElement>(null)

  const handleClickOutside = (e: any) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      onClose(false)
    }
  }

	return (
		<div
			onClick={handleClickOutside}
			className='bg-[rgba(0,0,0,0.7)] w-full h-screen flex items-center justify-center fixed inset-0 z-[20] overflow-hidden'
		>
			<div
				ref={modalRef}
				className='bg-main-black border border-white/[0.2] w-[320px] h-auto sm:w-[400px] rounded-lg overflow-hidden'
			>
				<div className='fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50'>
					<div className='bg-white rounded-lg p-8 relative w-96'>
						<X
							className='cursor-pointer hover:text-primary-pink duration-300 transition-colors'
							onClick={onClose}
						/>
						<div id='b24-form-container' className='mt-4'>
							<div id='b24-form' />
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default BitrixModal
