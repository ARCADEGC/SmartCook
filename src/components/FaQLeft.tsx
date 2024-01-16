import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

export function FaQLeft() {
    return (
        <Accordion
            type="single"
            collapsible
            className="mb-4 w-full"
            defaultValue="item-1"
        >
            <AccordionItem value="item-1">
                <AccordionTrigger className="text-xl">
                    This is a left question?
                </AccordionTrigger>
                <AccordionContent>
                    Yes. This is a answer to the queston which was asked above.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
                <AccordionTrigger className="text-xl">
                    This is a left question?
                </AccordionTrigger>
                <AccordionContent>
                    Yes. This is a answer to the queston which was asked above.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
                <AccordionTrigger className="text-xl">
                    This is a left question?
                </AccordionTrigger>
                <AccordionContent>
                    Yes. This is a answer to the queston which was asked above.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
                <AccordionTrigger className="text-xl">
                    This is a left question?
                </AccordionTrigger>
                <AccordionContent>
                    Yes. This is a answer to the queston which was asked above.
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    );
}
