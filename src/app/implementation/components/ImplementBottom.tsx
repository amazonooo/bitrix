import Button from '@/components/ui/Button'
import Title from '@/components/ui/Title'
import Image from 'next/image'

export default function ImplementBottom() {
  return (
		<section>
			<Image
				className='block xl:hidden'
				src={'/crm.png'}
				alt='crm'
				width={735}
				height={419}
			/>

			<Title className='mb-5' title='Хотите настроить Bitrix24 самостоятельно?' />

			<div className='flex xl:justify-between xl:items-center flex-col xl:flex-row gap-y-10'>
				<div>
					<div className='flex flex-col gap-y-6 max-w-[538px] mb-8 xl:mb-10'>
						<p className='text-base md:text-xl font-medium'>
							Внедрение Bitrix24 — это весь спектр возможностей CRM-системы,
							а не только базовый функционал.{' '}
						</p>
						<p className='text-base md:text-xl font-medium'>
							Если вы хотите внедрить Bitrix24 самостоятельно — вам потребуется
							разобраться во всех тонкостях и потратить значительное время.{' '}
						</p>
						<p className='text-base md:text-xl font-medium'>
							Сотрудничество с сертифицированным интегратором — это экономия
							времени и максимальная польза для вашего бизнеса. Мы подскажем
							наилучшие сценарии использования системы, настроим модули, виджеты
							и систему данных по продажам.
						</p>
					</div>
					<Button link='/' className='hidden xl:block w-[265px]'>
						Внедрить Bitrix24
					</Button>
				</div>

				<Image
					className='hidden xl:block'
					src={'/crm.png'}
					alt='crm'
					width={735}
					height={419}
				/>
			</div>
		</section>
	)
}