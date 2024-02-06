import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
    DropdownMenuCheckboxItem,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const fitersParams = {
    difficulty: ["easy", "medium", "hard"],
    price: ["low", "medium", "high"],
    country: ["cz", "es", "mx", "au"],
    category: [1, 2, 3, 4, 5],
    tolerance: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
};

export default function Filters() {
    return (
        <Card>
            <CardHeader>
                <h2 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
                    Filters
                </h2>
                <p className="max-w-[100ch] leading-7 text-accent-foreground [&:not(:first-child)]:mt-6">
                    Filter what you want!
                </p>
            </CardHeader>
            <Separator />
            <CardContent>
                <form className="mt-4 flex flex-wrap gap-x-4 gap-y-2">
                    {Object.entries(fitersParams).map(([key, values]) => (
                        <DropdownMenu>
                            <DropdownMenuTrigger>
                                <Button variant="outline" tabIndex={-1}>
                                    {key}
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent>
                                <DropdownMenuLabel>
                                    Set the {key}
                                </DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                {values.map((value: string | number) => (
                                    <DropdownMenuCheckboxItem key={value}>
                                        {value}
                                    </DropdownMenuCheckboxItem>
                                ))}
                            </DropdownMenuContent>
                        </DropdownMenu>
                    ))}
                </form>
            </CardContent>
        </Card>
    );
}
