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
    <article className='rounded-xl bg-sky pt-[60px] px-[60px] relative h-[483px]'>
      <h1 className='text-3xl font-bold mb-6 max-w-[380px]'>
        {card.title}
      </h1>
      <ul className='flex flex-col list-disc'>
        <li className='text-xl font-normal'>{card.list1}</li>
        <li className='text-xl font-normal'>{card.list2}</li>
        <li className='text-xl font-normal'>{card.list3}</li>
        <li className='text-xl font-normal'>{card.list4}</li>
      </ul>
      <button className='group text-primary-blue flex items-center gap-x-0.5 absolute bottom-[60px] left-[60px]'>
        <span className='text-xl'>{card.link}</span>
        <MoveRight className='group-hover:translate-x-1 transition-transform duration-300' />
      </button>
    </article>
  )
}