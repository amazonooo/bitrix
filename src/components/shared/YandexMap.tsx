'use client'

import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps'
import React from 'react'

const YandexMap: React.FC = () => {
	const mapState = {
		center: [55.707005, 37.677544],
		zoom: 16.5,
	}

	return (
		<YMaps>
			<div className='sm:block flex justify-center items-center'>
				<div className='w-[335px] lg:w-[762px] h-[242px] lg:h-[293px]'>
					<Map state={mapState} width='100%' height='100%'>
						<Placemark geometry={[55.707005, 37.677544]} />
					</Map>
				</div>
			</div>
		</YMaps>
	)
}

export default YandexMap
