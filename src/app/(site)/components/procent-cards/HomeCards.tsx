import { homeCards } from '@/data/homeCards'
import HomeCard from './HomeCard'

export default function HomeCards() {
  return (
    <div className='flex flex-col lg:flex-row gap-x-8 items-center'>
      {homeCards.map((card, idx) => (
        <HomeCard key={idx} procent={card.procent} desc={card.desc} bg={card.bg} text={card.text} descColor={card.descColor} border={card.border} />
      ))}
    </div>
  )
}