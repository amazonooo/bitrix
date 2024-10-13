import { homeCards } from '@/data/homeCards'
import HomeCard from './HomeCard'
import Container from '@/components/layout/Container'

export default function HomeCards() {
  return (
    <Container className='w-full overflow-x-clip'>
      <div className='flex flex-col lg:flex-row gap-x-8 gap-y-10 items-center'>
        {homeCards.map((card, idx) => (
          <HomeCard key={idx} procent={card.procent} desc={card.desc} bg={card.bg} text={card.text} descColor={card.descColor} border={card.border} />
        ))}
      </div>
    </Container>

  )
}