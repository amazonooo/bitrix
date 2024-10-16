import Container from '@/components/layout/Container'
import CaseHero from './components/CaseHero'

export default function CasPage() {
  return (
    <Container className='w-full overflow-x-clip flex flex-col gap-y-20 lg:gap-y-[150px]'>
      <CaseHero />
    </Container>
  )
}