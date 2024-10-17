import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion'

interface IAccordion {
	id: string
	name: string
	accord: string
	count: string
}

export default function DevelopAccordion() {
	return (
		<>
			<Accordion type='single' collapsible className='w-full'>
				<AccordionItem value='item-1'>
					<AccordionTrigger count={3}>Поддержка и развитие </AccordionTrigger>
					<AccordionContent>
						Обеспечиваем бесперебойную работу приложения и добавляем новый
						функционал.
					</AccordionContent>
				</AccordionItem>
			</Accordion>

			<Accordion type='single' collapsible className='w-full'>
				<AccordionItem value='item-1'>
					<AccordionTrigger count={4}>Полный цикл услуг</AccordionTrigger>
					<AccordionContent>
						Поможем вам пройти весь путь от идеи продукта до публикации
						в магазинах.
					</AccordionContent>
				</AccordionItem>
			</Accordion>
			<Accordion type='single' collapsible className='w-full'>
			<AccordionItem value='item-1'>
				<AccordionTrigger count={5}>Всегда вовремя</AccordionTrigger>
				<AccordionContent>Сдаем работу в оговоренные сроки.</AccordionContent>
			</AccordionItem>
			</Accordion>
		</>
	)
}
