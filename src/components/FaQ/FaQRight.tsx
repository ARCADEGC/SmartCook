import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

export function FaQRight() {
    return (
        <Accordion
            type="single"
            collapsible
            className="mb-4 w-full"
            defaultValue="item-4"
        >
            <AccordionItem value="item-1">
                <AccordionTrigger className="text-left text-xl">
                    What is this about?
                </AccordionTrigger>
                <AccordionContent>
                    In SmartCook you can prepare you meals days upfront. You can
                    filter based on what you have at home and much more.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
                <AccordionTrigger className="text-left text-xl">
                    How do I use it?
                </AccordionTrigger>
                <AccordionContent>
                    Register to our app. Add what you have at home and start
                    adding recipes.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
                <AccordionTrigger className="text-left text-xl">
                    How do the filters work?
                </AccordionTrigger>
                <AccordionContent>
                    Simple. We show you collections of what you could have. Say
                    that you do, don't or never will have. The system will then
                    automatically sort recipes for you.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
                <AccordionTrigger className="text-left text-xl">
                    I'am allergic. Can I use your app?
                </AccordionTrigger>
                <AccordionContent>
                    Although we are not doctors, we have implemented allergens
                    checks and also for vegans and vegetarians. We recommend
                    checking every recipe your self.
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    );
}
