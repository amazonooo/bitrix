import Container from '@/components/layout/Container'
import Image from "next/image";
import HomeHero from './components/HomeHero'
import HomeCards from './components/procent-cards/HomeCards'
import HomeAdvantages from './components/advantages/HomeAdvantages'
import FeedbackTop from './components/feedback/FeedbackTop'
import Work from './components/work/Work'
import Partners from './components/partners/Partners'
import FeedbackBottom from './components/feedback/FeedbackBottom'
import DevelopApp from './components/develop/DevelopApp'

export default function Home() {
  return (
    <Container className='w-full overflow-x-clip flex flex-col gap-y-20 lg:gap-y-40'>
      <HomeHero />
      <HomeCards />
      <HomeAdvantages />
      <FeedbackTop />
      <Work />
      <DevelopApp />
      <Partners />
      <FeedbackBottom />
    </Container>
  );
}
