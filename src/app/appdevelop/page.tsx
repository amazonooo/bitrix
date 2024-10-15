import Container from '@/components/layout/Container'
import DevelopHero from './components/DevelopHero'
import Advantages from './components/advantages/Advantages'
import Cases from './components/cases/Cases'

export default function DevelopPage() {
  return (
    <Container className='w-full overflow-x-clip flex flex-col gap-y-20 lg:gap-y-[150px]'>
      <DevelopHero />
      <Advantages />
      <Cases />
    </Container>
  )
}