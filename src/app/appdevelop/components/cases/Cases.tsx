import Title from '@/components/ui/Title'
import CasesBlocks from './CasesBlocks'
import Button from '@/components/ui/Button'

export default function Cases() {
  return (
		<section>
			<Title title='Кейсы' />

			<CasesBlocks />

			<div className='max-w-[873px]'>
				<p className='text-xl font-normal mb-6'>
					Мы разработали дополнение к CRM-системе в виде личных кабинетов
					(администратора, инструктора и ученика) и приложения для автошколы
					«ВОА», которое можно скачать в App Store и Google Play.{' '}
				</p>
				<p
					className='text-xl font-normal mb-6'>
					Приложение включает в себя личный кабинет ученика автошколы,
					теоретическую часть обучения с видео-материалом, лекциями и тестами,
					билетами ПДД, онлайн-чат с технической поддержкой.
				</p>
				<p className='text-xl	font-normal mb-10'>
					Личный кабинет был разработан для администраторов и инструкторов
					автошколы «ВОА» для облегчения работы, где есть самая необходимая
					и важная информация и документы, и улучшения сервиса.
				</p>

				<Button link='/' className='w-[300px]'>Создать приложение</Button>
			</div>
		</section>
	)
}