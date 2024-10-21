import YandexMap from '@/components/shared/YandexMap'
import Title from '@/components/ui/Title'

export default function ContactsHero() {
  return (
		<section className='mt-[140px] md:mt-[180px]'>
			<Title title='Контакты' className='mb-10' />
			<div className='flex flex-col md:flex-row md:justify-between md:items-center gap-y-10'>
				<div className='flex flex-col gap-y-6 md:gap-y-5'>
					<div className='flex flex-col gap-y-2 max-w-[350px]'>
						<h2 className='text-xl md:text-[1.625rem] font-semibold'>
							Телефон:
						</h2>
						<p className='text-xl md:text-[1.625rem] font-normal'>
							+7 (916) 370-72-02
						</p>
					</div>
					<div className='flex flex-col gap-y-2 max-w-[350px]'>
						<h2 className='text-xl md:text-[1.625rem] font-semibold'>Адрес:</h2>
						<p className='text-xl md:text-[1.625rem] font-normal'>
							Балашиха, мкр.Железнодорожный, <br />ул. Пионерская д.33, пом. 13{' '}
						</p>
					</div>
					<div className='flex flex-col gap-y-2 max-w-[350px]'>
						<h2 className='text-xl md:text-[1.625rem] font-semibold'>Почта:</h2>
						<p className='text-xl md:text-[1.625rem] font-normal'>
							mailjob@icloud.com
						</p>
					</div>
				</div>

				<YandexMap />
			</div>
		</section>
	)
}