import Container from '@/components/layout/Container'
import CaseHero from './components/CaseHero'
import CaseMain from './components/CaseMain'
import CaseBottom from './components/CaseBottom'
import AboutUs from './components/AboutUs'
import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Кейсы',
	description: 'Наши клиенты о нас, проблемы, которые мы решаем',
}

export default function CasPage() {
  return (
    <Container className='w-full overflow-x-clip flex flex-col gap-y-20 lg:gap-y-[150px]'>
      <CaseHero />
      <CaseMain />
      <CaseBottom />
      <AboutUs />
    </Container>
  )
}