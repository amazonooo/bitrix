import Title from '@/components/ui/Title'
import { developAdvant } from '@/data/developAdvan'
import DevelopAccordion from './DevelopAccordion'

export default function Advantages() {
  return (
    <section>
      <Title title='Наши преимущества' /> 

      {developAdvant.map((acc) => (
        <DevelopAccordion key={acc.id} id={acc.id} name={acc.name} accord={acc.accord} />
      ))}
    </section>
  )
}