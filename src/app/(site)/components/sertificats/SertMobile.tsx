import Image from 'next/image'

interface ISertifCard {
	id: string
	logo: string
}

export default function SertMobile({ id, logo }: ISertifCard) {
	return (
		<article
			className='relative rounded-xl bg-sky px-[39px] lg:px-[50px] py-8 lg:py-9 flex items-center justify-center'
			key={logo}
		>
			<Image src={logo} alt='logo' width={327} height={460} />
		</article>
	)
}