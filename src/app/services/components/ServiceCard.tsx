import Image from 'next/image'

interface IServiceCard {
	logo: string
	title: string
	desc: string
}

export default function ServiceCard(card: IServiceCard) {
	return (
		<article className='h-auto md:h-[415px] md:px-10 md:pt-10 flex flex-col md:border md:border-use-gray rounded-xl group hover:lg:border-transparent hover:lg:bg-sky lg:transition-all lg:duration-300'>
			<div className='bg-primary-blue p-4 flex items-center justify-center rounded-[20px] mb-5 md:mb-10 md:w-20 md:h-20 w-14 h-14'>
				<Image src={card.logo} alt='img' width={50} height={50} />
			</div>
			<h2 className='text-xl md:text-3xl font-semibold mb-2 md:mb-4'>
				{card.title}
			</h2>
			<p className='text-base md:text-xl font-medium'>{card.desc}</p>
		</article>
	)
}
