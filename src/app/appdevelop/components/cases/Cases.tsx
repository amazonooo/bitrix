'use client'

import Title from '@/components/ui/Title'
import CasesBlocks from './CasesBlocks'
import Button from '@/components/ui/Button'
import { useMediaQuery } from 'react-responsive'
import CasesMobile from './CasesMobile'

export default function Cases() {
	const isDesktop = useMediaQuery({ minWidth: 769 })

  return (
		<section>
			<Title title='Кейсы' />
			{isDesktop && <CasesBlocks />}

			{!isDesktop && <CasesMobile />}

			<div className='max-w-[873px] mt-10 lg:mt-[60px]'>
				<p className='text-xl font-normal mb-6'>
					Мы разработали дополнение к CRM-системе в виде личных кабинетов
					(администратора, инструктора и ученика) и приложения для автошколы
					«ВОА», которое можно скачать в App Store и Google Play.{' '}
				</p>
				<p className='text-xl font-normal mb-6'>
					Приложение включает в себя личный кабинет ученика автошколы,
					теоретическую часть обучения с видео-материалом, лекциями и тестами,
					билетами ПДД, онлайн-чат с технической поддержкой.
				</p>
				<p className='text-xl	font-normal mb-10'>
					Личный кабинет был разработан для администраторов и инструкторов
					автошколы «ВОА» для облегчения работы, где есть самая необходимая
					и важная информация и документы, и улучшения сервиса.
				</p>

				<Button variant='sky' className='w-[300px]'>
					Создать приложение
				</Button>
			</div>
		</section>
	)
}