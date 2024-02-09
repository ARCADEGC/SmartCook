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

import { recipeCaretogryToName, toleranceCaretogryToName, dishCaretogryToName } from "./translateObjectToNames";

const fitersParams = {
    author: ["ja", "ty"],
    dish_category: [
        dishCaretogryToName(1),
        dishCaretogryToName(2),
        dishCaretogryToName(3),
        dishCaretogryToName(4),
        dishCaretogryToName(5),
    ],
    recipe_category: [
        recipeCaretogryToName(1),
        recipeCaretogryToName(2),
        recipeCaretogryToName(3),
        recipeCaretogryToName(4),
        recipeCaretogryToName(5),
        recipeCaretogryToName(6),
        recipeCaretogryToName(7),
        recipeCaretogryToName(8),
        recipeCaretogryToName(9),
    ],
    difficulty: ["easy", "medium", "hard"],
    price: ["low", "medium", "high"],
    tolerance: [
        toleranceCaretogryToName(1),
        toleranceCaretogryToName(2),
        toleranceCaretogryToName(3),
        toleranceCaretogryToName(4),
        toleranceCaretogryToName(5),
        toleranceCaretogryToName(6),
        toleranceCaretogryToName(7),
        toleranceCaretogryToName(8),
        toleranceCaretogryToName(9),
    ],
};

export default function Filters() {
    const [filterStates, setFilterStates] = React.useState<{
        [key: string]: number[] | string[];
    }>({
        author: [],
        dish_category: [],
        recipe_category: [],
        difficulty: [],
        price: [],
        tolerance: [],
    });

    const handleCheckboxChange = (category: string, key: string) => {
        setFilterStates((prevState) => {
            const prevCategoryArray = prevState[category] || [];
            let updatedCategory = [...prevCategoryArray] as string[];

            const index = updatedCategory.indexOf(key);

            index !== -1 ? updatedCategory.splice(index, 1) : updatedCategory.push(key);

            return {
                ...prevState,
                [category]: updatedCategory,
            };
        });
    };

    React.useEffect(() => {
        console.log(filterStates);
    }, [filterStates]);

    return (
        <div className="mb-4 mt-6 flex flex-wrap gap-x-4 gap-y-2">
            {Object.keys(fitersParams).map((category) => {
                const categoryValues = fitersParams[category as keyof typeof fitersParams];
                return (
                    <DropdownMenu key={category}>
                        <DropdownMenuTrigger asChild>
                            <Button variant="outline" className="capitalize tracking-wide">
                                {category
                                    .split("")
                                    .map((char) => (char === "_" ? " " : char))
                                    .join("")}
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuLabel>
                                Set the{" "}
                                {category
                                    .split("")
                                    .map((char) => (char === "_" ? " " : char))
                                    .join("")}
                            </DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            {categoryValues.map((value: string | number) => {
                                const key: string = `${value}`;
                                return (
                                    <DropdownMenuCheckboxItem
                                        checked={(filterStates[category] as string[]).includes(key)}
                                        onCheckedChange={() => handleCheckboxChange(category, key)}
                                        key={key}
                                        className="capitalize"
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
