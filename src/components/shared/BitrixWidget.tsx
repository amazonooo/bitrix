'use client'

import { useEffect } from 'react'

const BitrixWidget = () => {
	useEffect(() => {
		const script = document.createElement('script')
		script.src =
			'https://cdn-ru.bitrix24.ru/b31346360/crm/site_button/loader_2_dwhn0n.js?' +
			((Date.now() / 60000) | 0)
		script.async = true

		document.body.appendChild(script)

		return () => {
			document.body.removeChild(script)
		}
	}, [])

	return null
}

export default BitrixWidget
