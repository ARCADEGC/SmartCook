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
                    Who are you?
                </AccordionTrigger>
                <AccordionContent>
                    We are students from Czechia and Poland.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
                <AccordionTrigger className="text-xl">
                    How did this project begin?
                </AccordionTrigger>
                <AccordionContent>
                    Our schools organized this international project to be
                    possible.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
                <AccordionTrigger className="text-xl">
                    How many people worked on this project?
                </AccordionTrigger>
                <AccordionContent>
                    There was 1 backend developer which did the recipes API. On
                    this branch there are 2 full-stack developers and the
                    community.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
                <AccordionTrigger className="text-xl">
                    What is your goal?
                </AccordionTrigger>
                <AccordionContent>
                    We want to grow with each project and deliver the best
                    possible product to you.
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    );
}
