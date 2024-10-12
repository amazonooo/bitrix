import Image from 'next/image'

interface IAdvantagesCard {
  logo: string
  title: string
  desc: string
}

export default function AdvantagesCard(card: IAdvantagesCard) {
  return (
		<article className='h-[395px] px-10 pt-10 flex flex-col border border-use-gray rounded-xl group hover:border-transparent hover:bg-sky transition-all duration-300'>
			<div className='bg-primary-blue p-4 flex items-center justify-center rounded-[20px] mb-10 w-20 h-20'>
				<Image src={card.logo} alt='img' width={50} height={50} />
			</div>
      <h2 className='text-3xl font-semibold mb-4'>
        {card.title}
      </h2>
      <p className='text-xl font-medium'>
        {card.desc}
      </p>
		</article>
	)
}