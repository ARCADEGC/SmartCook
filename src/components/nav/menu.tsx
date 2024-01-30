import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";

import { Button } from "@/components/ui/button";

export default function MobileMenu() {
    return (
        <Sheet>
            <SheetTrigger className="md:hidden">
                <Button variant="outline" size="icon" aria-label="Menu Navbar">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="lucide lucide-menu"
                    >
                        <line x1="4" x2="20" y1="12" y2="12"></line>
                        <line x1="4" x2="20" y1="6" y2="6"></line>
                        <line x1="4" x2="20" y1="18" y2="18"></line>
                    </svg>
                </Button>
            </SheetTrigger>
            <SheetContent side="left">
                <SheetHeader>
                    <SheetTitle>Navigation</SheetTitle>
                    <SheetDescription>
                        <nav>
                            <ul className="grid gap-2">
                                <li>
                                    <Button variant="link">Home</Button>
                                </li>
                                <li>
                                    <Button variant="link">Recipes</Button>
                                </li>
                                <li>
                                    <Button variant="link">Fridge</Button>
                                </li>
                            </ul>
                        </nav>
                    </SheetDescription>
                </SheetHeader>
            </SheetContent>
        </Sheet>
    );
}
