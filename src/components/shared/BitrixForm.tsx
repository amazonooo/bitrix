'use client'

import { useEffect, useState } from 'react'

export const BitrixForm = () => {
	const [open, setIsOpen] = useState(true)

	useEffect(() => {
		const script = document.createElement('script')
		script.src =
			'https://cdn-ru.bitrix24.ru/b31346360/crm/form/loader_4.js?' +
			((Date.now() / 60000) | 0)
		script.async = true

		document.body.appendChild(script)

		return () => {
			document.body.removeChild(script)
		}
	}, [open])

	return null
}
