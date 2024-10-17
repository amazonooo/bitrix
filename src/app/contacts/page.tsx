import Container from '@/components/layout/Container'
import ContactsHero from './components/ContactsHero'
import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Контакты',
	description: 'Наши контакты, расположения на картах.',
}

export default function ContactsPage() {
  return (
    <Container>
      <ContactsHero />
    </Container>
  )
}