import { ArrowRight, MoveRight } from 'lucide-react'

interface IWorkCard {
  title: string
  list1: string
  list2: string
  list3: string
  list4: string
  link: string
}

export default function WorkCard(card: IWorkCard) {
  return (
    <article className='rounded-xl bg-sky px-[30px] pt-8 lg:py-0 lg:pt-[60px] lg:px-[60px] relative h-[375px] lg:h-[483px]'>
      <h1 className='text-xl sm:text-2xl lg:text-3xl font-bold mb-6 max-w-[300px] lg:max-w-[380px]'>
        {card.title}
      </h1>
      <ul className='flex flex-col'>
        <li className='text-base sm:text-lg lg:text-xl font-normal flex items-center gap-x-1'>
          <div className='w-1 h-1 bg-black rounded-full mt-1'></div>
          {card.list1}
        </li>
        <li className='text-base sm:text-lg lg:text-xl font-normal flex items-center gap-x-1'>
          <div className='w-1 h-1 bg-black rounded-full mt-1'></div>
          {card.list2}
        </li>
        <li className='text-base sm:text-lg lg:text-xl font-normal flex items-center gap-x-1'>
          <div className='w-1 h-1 bg-black rounded-full mt-1'></div>
          {card.list3}
        </li>
        <li className='text-base sm:text-lg lg:text-xl font-normal flex items-center gap-x-1'>
          <div className='w-1 h-1 bg-black rounded-full mt-1'></div>
          {card.list4}
        </li>
      </ul>
      <button className='group text-primary-blue flex items-center gap-x-0.5 absolute bottom-6 left-[30px] lg:bottom-[60px] lg:left-[60px]'>
        <span className='text-xl'>{card.link}</span>
        <MoveRight className='group-hover:translate-x-2.5 transition-transform duration-300 mt-1.5' />
      </button>
    </article>
  )
}