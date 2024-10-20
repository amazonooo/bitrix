import Image from 'next/image'

interface IPartnerCard {
  id: string
  logo: string
  name: string
  desc: string
}

export default function PartnerCard(partner: IPartnerCard) {
  return (
		<article className='flex flex-col max-w-[392px]'>
			<div className='min-h-[169px] max-h-[170px] bg-sky rounded-xl px-[82px] py-[52px] lg:px-[71px] flex items-center justify-center mb-10'>
				<img src={partner.logo} alt='logo' />
			</div>
			<h1 className='text-[28px] leading-[33px] font-semibold lg:text-3xl mb-2.5 lg:mb-4'>
				{partner.name}
			</h1>
			<p
				dangerouslySetInnerHTML={{ __html: partner.desc }}
				className='text-base font-normal md:text-sm lg:text-xl'
			>
			</p>
		</article>
	)
}