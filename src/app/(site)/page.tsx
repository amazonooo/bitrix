import Container from '@/components/layout/Container'
import Image from "next/image";
import HomeHero from './components/HomeHero'
import HomeCards from './components/percent-cards/HomeCards'
import HomeAdvantages from './components/advantages/HomeAdvantages'
import FeedbackTop from './components/feedback/FeedbackTop'
import Work from './components/work/Work'
import Partners from './components/partners/Partners'
import FeedbackBottom from './components/feedback/FeedbackBottom'
import DevelopApp from './components/develop/DevelopApp'
import Sertificats from './components/sertificats/Sertificats'

export default function Home() {
  return (
		<div className='flex flex-col gap-y-20 lg:gap-y-40'>
			<HomeHero />
			<HomeCards />
			<HomeAdvantages />
			<FeedbackTop />
			<Work />
			<DevelopApp />
			<Partners />
			<Sertificats />
			<FeedbackBottom />
		</div>
	)
}
