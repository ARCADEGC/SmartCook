const priceMapping: Record<number, string> = {
    1: "cheap",
    2: "medium",
    3: "expensive",
};

export function priceToName(price: number): string {
    return translateValueToName(price, priceMapping);
}

const difficultyMapping: Record<number, string> = {
    1: "simple",
    2: "intermediate",
    3: "hard",
};

export function difficultyToName(difficulty: number): string {
    return translateValueToName(difficulty, difficultyMapping);
}

const recipeCategoryMapping: Record<number, string> = {
    1: "soup",
    2: "meat",
    3: "meat free",
    4: "dessert",
    5: "sauce",
    6: "pasta",
    7: "salad",
    8: "sweet food",
    9: "drink",
};

export function dishCaretogryToName(categoryNumber: number): string {
    return translateValueToName(categoryNumber, recipeCategoryMapping);
}

const toleranceCategoryMapping: Record<number, string> = {
    "1": "vegetarian",
    "2": "vegan",
    "3": "nuts",
    "4": "gluten",
    "5": "lactose",
    "6": "spicy",
    "7": "alcohol",
    "8": "sea food",
    "9": "mushrooms",
};

export function toleranceCaretogryToName(categoryNumber: number): string {
    return translateValueToName(categoryNumber, toleranceCategoryMapping);
}

export function translateValueToName(
    value: number,
    mapping: Record<number, string>,
): string {
    return mapping[value] || "undefined";
}
