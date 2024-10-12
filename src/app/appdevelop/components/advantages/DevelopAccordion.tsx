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
}

export default function DevelopAccordion(accord: IAccordion) {
	return (
		<Accordion type='single' collapsible className='w-full'>
			<AccordionItem value='item-1'>
				<AccordionTrigger>{accord.name}</AccordionTrigger>
				<AccordionContent>
					{accord.accord}
				</AccordionContent>
			</AccordionItem>
		</Accordion>
	)
}
