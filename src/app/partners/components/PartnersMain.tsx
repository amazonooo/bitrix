import { partnersData } from '@/data/partners'
import PartnerCard from './PartnerCard'

export default function PartnersMain() {
  return (
    <section>
      <div className='md:grid flex flex-col items-center md:items-start md:grid-cols-2 lg:grid-cols-3 lg:gap-y-20 gap-y-[60px] gap-x-[4.5rem]'>
        {partnersData.map((partner) => (
          <PartnerCard key={partner.id} id={partner.id} logo={partner.logo} name={partner.name} desc={partner.desc} />
        ))}
      </div>
    </section>
  )
}