import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
    DropdownMenuCheckboxItem,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
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
        <div className="mb-4 mt-6 flex flex-wrap gap-x-4 gap-y-2">
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
                                        onCheckedChange={(checked) => handleCheckboxChange(category, key, checked)}
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
    );
}
