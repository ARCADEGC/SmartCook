import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
    DropdownMenuCheckboxItem,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

import * as React from "react";

const fitersParams = {
    difficulty: ["easy", "medium", "hard"],
    price: ["low", "medium", "high"],
    country: ["cz", "es", "mx", "au"],
    category: [1, 2, 3, 4, 5],
    tolerance: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
};

export default function Filters() {
    const [filterStates, setFilterStates] = React.useState<{
        [key: string]: { [key: string]: boolean };
    }>({
        difficulty: {},
        price: {},
        country: {},
        category: {},
        tolerance: {},
    });

    const handleCheckboxChange = (category: string, key: string, checked: boolean) => {
        setFilterStates((prevState) => ({
            ...prevState,
            [category]: {
                ...prevState[category],
                [key]: checked,
            },
        }));
    };

    return (
        <Card>
            <CardHeader>
                <h2 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">Filters</h2>
                <p className="max-w-[100ch] leading-7 text-accent-foreground [&:not(:first-child)]:mt-6">
                    Filter what you want!
                </p>
            </CardHeader>
            <Separator />
            <CardContent>
                <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2">
                    {Object.keys(fitersParams).map((category) => {
                        const categoryValues = fitersParams[category as keyof typeof fitersParams];
                        return (
                            <DropdownMenu key={category}>
                                <DropdownMenuTrigger asChild>
                                    <Button variant="outline" className="capitalize tracking-wide">
                                        {category}
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent>
                                    <DropdownMenuLabel>Set the {category}</DropdownMenuLabel>
                                    <DropdownMenuSeparator />
                                    {categoryValues.map((value: string | number) => {
                                        const key = `${category}-${value}`;
                                        return (
                                            <DropdownMenuCheckboxItem
                                                checked={filterStates[category][key]}
                                                onCheckedChange={(checked) =>
                                                    handleCheckboxChange(category, key, checked)
                                                }
                                                key={key}
                                            >
                                                {value}
                                            </DropdownMenuCheckboxItem>
                                        );
                                    })}
                                </DropdownMenuContent>
                            </DropdownMenu>
                        );
                    })}
                </div>
            </CardContent>
        </Card>
    );
}
