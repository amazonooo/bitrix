import Title from '@/components/ui/Title'
import AdvantagesCard from './AdvantagesCard'
import { advantCards } from '@/data/advantCards'
import Container from '@/components/layout/Container'

export default function HomeAdvantages() {
  return (
    <Container className='w-full overflow-x-clip'>
    <Title title='Преимущества работы с нами' className='max-w-[920px]' />

    <div className='grid grid-cols-1 grid-row-1 lg:grid-cols-3 lg:grid-rows-2 gap-x-9 gap-y-10'>
      {advantCards.map((card, idx) => (
        <AdvantagesCard key={idx} logo={card.logo} title={card.title} desc={card.desc} />
      ))}
    </div>
    </Container>
  )
}