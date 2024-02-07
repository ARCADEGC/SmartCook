import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

import {
    priceToName,
    difficultyToName,
    dishCaretogryToName,
    toleranceCaretogryToName,
} from "../../pages/recipes/translateObjectToNames";

export default function Recipes() {
    return (
        <>
            <h2 className="mt-16 scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">Recipes</h2>

            <div className=" mt-4 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {recipes.map((recipe) => {
                    return (
                        <Card key={recipe.id} className="flex flex-col pb-6">
                            <CardHeader>
                                {recipe.tolerance.includes(2) && (
                                    <Badge variant="default" className="w-fit">
                                        Vegan
                                    </Badge>
                                )}
                                {recipe.tolerance.includes(1) && !recipe.tolerance.includes(2) && (
                                    <Badge variant="secondary" className="w-fit">
                                        Vegeterian
                                    </Badge>
                                )}
                                {!recipe.tolerance.includes(1) && !recipe.tolerance.includes(2) && (
                                    <Badge variant="outline" className="w-fit">
                                        Meat
                                    </Badge>
                                )}
                                <CardTitle className="mt-2 scroll-m-20 text-2xl font-semibold tracking-tight">
                                    {recipe.name}
                                </CardTitle>
                                <CardDescription>
                                    <p className="line-clamp-3 text-justify">{recipe.description}</p>
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="grid gap-1">
                                {recipe.price && (
                                    <span className="capitalize">
                                        <small className="text-sm font-medium leading-none">Price: </small>
                                        {priceToName(recipe.price)}
                                    </span>
                                )}

                                {recipe.duration && (
                                    <span>
                                        <small className="text-sm font-medium leading-none">Duration: </small>
                                        {recipe.duration} minutes
                                    </span>
                                )}

                                {recipe.difficulty && (
                                    <span className="capitalize">
                                        <small className="text-sm font-medium leading-none">Difficulty: </small>
                                        {difficultyToName(recipe.difficulty)}
                                    </span>
                                )}

                                {recipe.country && (
                                    <span>
                                        <small className="text-sm font-medium leading-none">Country: </small>
                                        {recipe.country.toUpperCase()}
                                    </span>
                                )}

                                {recipe.dish_category && (
                                    <span className="capitalize">
                                        <small className="text-sm font-medium">Category: </small>
                                        <div className="flex flex-wrap gap-x-2">
                                            {recipe.dish_category.map((category) => (
                                                <span>{dishCaretogryToName(category)}</span>
                                            ))}
                                        </div>
                                    </span>
                                )}

                                {recipe.tolerance.some((num) => [3, 4, 5, 6, 7, 8, 9].includes(num)) && (
                                    <span className="flex flex-wrap items-baseline gap-x-2 capitalize">
                                        <small className="text-sm font-medium">Tolerance: </small>
                                        <div className="flex flex-wrap gap-x-2">
                                            {recipe.tolerance.map((category) => {
                                                if (category === 1 || category === 2) return;

                                                return <span>{toleranceCaretogryToName(category)}</span>;
                                            })}
                                        </div>
                                    </span>
                                )}
                            </CardContent>
                            <CardFooter className="mt-auto grid pb-0">
                                <address className="flex items-center gap-4">
                                    <Avatar>
                                        <AvatarImage alt="Avatar Image" src="" />
                                        <AvatarFallback>{getUserAvatarInitials(recipe.author)}</AvatarFallback>
                                    </Avatar>
                                    <span rel="author" className="font-semibold">
                                        {recipe.author ? recipe.author : "Anonymous"}
                                    </span>
                                </address>

                                <Button variant="outline" className="mt-4">
                                    Open
                                </Button>
                            </CardFooter>
                        </Card>
                    );
                })}
            </div>
        </>
    );
}

function getUserAvatarInitials(fullName: string): string {
    if (!fullName || fullName.trim() === "") return "A";

    const namePart = fullName.split(" ");
    return namePart.length === 1 ?
            fullName.charAt(0).toUpperCase()
        :   `${fullName.charAt(0).toUpperCase()}${namePart[namePart.length - 1].charAt(0).toUpperCase()}`;
}

const recipes = [
    {
        id: "",
        name: "Pad Thai",
        difficulty: 2,
        duration: "20",
        price: 2,
        description:
            "Place noodles in a large bowl, pour over plenty of boiling water. Soak for 5 minutes, then drain in a colander and quickly rinse under cold water. Don’t leave them sitting around for more than 5–10 minutes. Mix Sauce in small bowl. Heat 2 tbsp oil in a large non stick pan (or well-seasoned skillet) over high heat. Add garlic and onion, cook for 30 seconds. Add chicken and cook for 1 1/2 minutes until mostly cooked through. Push to one side of the pan, pour egg in on the other side. Scramble using the wooden spoon (add a touch of extra oil if the pan is too dry), then mix into chicken. Add bean sprouts, tofu, noodles then Sauce. Toss gently for about 1 1/2 minutes until Sauce is absorbed by the noodles. Add garlic chives and half the peanuts. Toss through quickly then remove from heat. Serve immediately, sprinkled with remaining peanuts and lime wedges on the side, with a sprinkle of chilli and a handful of extra beansprouts on the side if desired (this is the Thai way!). Squeeze over lime juice to taste before eating.",
        country: "th",
        dish_category: [1, 2, 3, 4, 5],
        recipe_category: [1, 2, 3, 4, 5, 6, 7, 8, 9],
        tolerance: [1, 2, 3, 4, 5, 6, 7, 8, 9],
        ingredient: [
            {
                id: "",
                name: "Chang’s Pad Thai dried rice sticks",
                quantity: 125,
                unit: "g",
                necessary: "1",
                comment: "Note: You can use other brands of rice sticks.",
            },
            {
                id: "",
                name: "tamarind puree",
                quantity: 0.022,
                unit: "l",
                necessary: "1",
                comment: "Note: Ensure it's puree, not concentrate.",
            },
            {
                id: "",
                name: "brown sugar",
                quantity: 0.045,
                unit: "l",
                necessary: "1",
                comment: "Packed",
            },
            {
                id: "",
                name: "fish sauce",
                quantity: 0.03,
                unit: "l",
                necessary: "1",
            },
            {
                id: "",
                name: "oyster sauce",
                quantity: 0.022,
                unit: "l",
                necessary: "1",
            },
            {
                id: "",
                name: "vegetable or canola oil",
                quantity: 0.03,
                unit: "l",
                necessary: "1",
            },
            {
                id: "",
                name: "onion",
                quantity: 0.5,
                unit: "pc",
                necessary: "1",
                comment: "Sliced (brown, yellow)",
            },
            {
                id: "",
                name: "garlic cloves",
                quantity: 2,
                unit: "pc",
                necessary: "1",
                comment: "Finely chopped",
            },
            {
                id: "",
                name: "chicken breast (or thigh)",
                quantity: 150,
                unit: "g",
                necessary: "1",
                comment: "Thinly sliced",
            },
            {
                id: "",
                name: "eggs",
                quantity: 2,
                unit: "pc",
                necessary: "1",
                comment: "Lightly whisked",
            },
            {
                id: "",
                name: "beansprouts",
                quantity: 0.35,
                unit: "l",
                necessary: "1",
            },
            {
                id: "",
                name: "firm tofu",
                quantity: 0.12,
                unit: "l",
                necessary: "1",
                comment: "Cut into 3cm batons",
            },
            {
                id: "",
                name: "garlic chives",
                quantity: 0.06,
                unit: "l",
                necessary: "1",
                comment: "Cut into 3cm pieces",
            },
            {
                id: "",
                name: "peanuts",
                quantity: 30,
                unit: "g",
                necessary: "1",
                comment: "Finely chopped",
            },
        ],
        author: "",
    },
    {
        id: "",
        name: "Caesar Salad",
        difficulty: 1,
        duration: "30",
        price: 1,
        description:
            "To prepare the dressing, whisk together mayonnaise, grated Parmesan cheese, fresh lemon juice, Dijon mustard, minced garlic, Worcestershire sauce, salt, and black pepper in a bowl. Adjust the seasoning according to your taste. When assembling the salad, take a large salad bowl and combine the chopped Romaine lettuce and croutons. Afterward, pour the Caesar dressing over the lettuce and croutons, ensuring a gentle toss to evenly coat the salad. For the finishing touch, add shaved or grated Parmesan cheese on top of the salad. If desired, you can further enhance the presentation by garnishing the salad with anchovy fillets and halved cherry tomatoes. Before serving, give the salad one final toss to ensure that all the ingredients are well-coated. Serve immediately for a delightful dining experience.",
        country: "mx",
        dish_category: [1, 5],
        recipe_category: [7],
        tolerance: [1, 2, 4, 5],
        ingredient: [
            {
                id: "",
                name: "Romaine lettuce",
                quantity: 1,
                unit: "pc",
                necessary: "1",
            },
            {
                id: "",
                name: "Croutons",
                quantity: 0.25,
                unit: "l",
                necessary: "1",
            },
            {
                id: "",
                name: "Parmesan cheese",
                quantity: 0.12,
                unit: "l",
                necessary: "1",
            },
            {
                id: "",
                name: "Mayonnaise",
                quantity: 0.12,
                unit: "l",
                necessary: "1",
            },
            {
                id: "",
                name: "Lemon juice",
                quantity: 0.015,
                unit: "l",
                necessary: "1",
            },
            {
                id: "",
                name: "Dijon mustard",
                quantity: 0.01,
                unit: "l",
                necessary: "1",
            },
            {
                id: "",
                name: "Garlic",
                quantity: 2,
                unit: "pc",
                necessary: "1",
            },
            {
                id: "",
                name: "Worcestershire sauce",
                quantity: 0.005,
                unit: "l",
                necessary: "1",
            },
            {
                id: "",
                name: "Salt",
                quantity: 5,
                unit: "g",
                necessary: "1",
            },
            {
                id: "",
                name: "Black pepper",
                quantity: 5,
                unit: "g",
                necessary: "1",
            },
        ],
        author: "Jaromír",
    },
    {
        id: "",
        name: "Garlic Soup",
        difficulty: 2,
        duration: 45,
        price: 1,
        description:
            "This garlic soup is prepared by sautéing 8 cloves of garlic in 0.03 liters of olive oil. Add 1 diced onion and cook until softened. Stir in 300g of potatoes, cut into chunks, and cook for a few minutes. Pour in 1 liter of vegetable broth, add 0.01 liters of thyme, 2 bay leaves, 5 grams of salt and black pepper. Simmer until the potatoes are tender. Serve hot, garnished with a sprinkle of parsley on top.",
        country: "es",
        dish_category: [2],
        recipe_category: [1],
        tolerance: [1, 2],
        ingredient: [
            {
                id: "",
                name: "Garlic cloves",
                quantity: 8,
                unit: "pc",
                necessary: "1",
            },
            {
                id: "",
                name: "Olive oil",
                quantity: 0.03,
                unit: "l",
                necessary: "1",
            },
            {
                id: "",
                name: "Onion",
                quantity: 1,
                unit: "pc",
                necessary: "1",
            },
            {
                id: "",
                name: "Potatoes",
                quantity: 300,
                unit: "g",
                necessary: "1",
            },
            {
                id: "",
                name: "Vegetable broth",
                quantity: 1,
                unit: "l",
                necessary: "1",
            },
            {
                id: "",
                name: "Thyme",
                quantity: 0.01,
                unit: "l",
                necessary: "1",
            },
            {
                id: "",
                name: "Bay leaves",
                quantity: 2,
                unit: "pc",
                necessary: "1",
            },
            {
                id: "",
                name: "Salt",
                quantity: 5,
                unit: "g",
                necessary: "1",
            },
            {
                id: "",
                name: "Black pepper",
                quantity: 5,
                unit: "g",
                necessary: "1",
            },
        ],
        author: "Jaromír Trnka",
    },
    {
        id: "",
        name: "Pavlova",
        difficulty: 3,
        duration: 120,
        price: 2,
        description:
            "Pavlova is a delightful meringue-based dessert with a crisp shell and a soft, marshmallow-like interior. To make it, start by preheating your oven to 150°C and lining a baking tray with parchment paper. In a clean, dry bowl, whisk egg whites until stiff peaks form. Gradually add caster sugar, continuing to whisk until the mixture is glossy and holds its shape. Fold in cornstarch, white vinegar and vanilla extract. Spoon the meringue onto the prepared tray, forming a circular shape. Bake in the preheated oven for about 1 hour and 30 minutes or until the pavlova is crisp on the outside. Once done, let it cool completely. Whip whipping cream until thick and spread it over the cooled pavlova. Top with fresh berries to taste. Serve and enjoy this elegant and delicious Pavlova, a perfect treat for any special occasion.",
        country: "nz",
        dish_category: [4],
        recipe_category: [9],
        tolerance: [1, 5],
        ingredient: [
            {
                id: "",
                name: "egg whites",
                quantity: 250,
                unit: "g",
                necessary: "1",
            },
            {
                id: "",
                name: "caster sugar",
                quantity: 250,
                unit: "g",
                necessary: "1",
            },
            {
                id: "",
                name: "cornstarch",
                quantity: 0.005,
                unit: "l",
                necessary: "1",
            },
            {
                id: "",
                name: "white vinegar",
                quantity: 0.005,
                unit: "l",
                necessary: "1",
            },
            {
                id: "",
                name: "vanilla extract",
                quantity: 0.005,
                unit: "l",
                necessary: "1",
            },
            {
                id: "",
                name: "whipping cream",
                quantity: 0.3,
                unit: "l",
                necessary: "1",
            },
            {
                id: "",
                name: "fresh berries",
                quantity: "25",
                unit: "pc",
                necessary: "1",
            },
        ],
        author: "Jaromír Trnka",
    },
    {
        id: "",
        name: "Musli with White Chocolate and Strawberries in Milk",
        difficulty: 1,
        duration: "3",
        price: 1,
        description:
            "Begin with placing musli into a bowl. Next, add white chocolate, finely chopped, to the musli. Wash and hull fresh strawberries, then slice them and add to the bowl. Pour milk over the musli mixture. Stir gently to combine all the ingredients. Allow the musli to soak in the milk for a few minutes, letting the flavors meld together. Once done, your musli with white chocolate and strawberries in milk is ready to be enjoyed. This easy recipe is a perfect balance of flavors and textures, creating a delicious and nutritious breakfast option.",
        country: "ch",
        dish_category: [1, 5],
        recipe_category: [8],
        tolerance: [1, 4, 5],
        ingredient: [
            {
                id: "",
                name: "Musli",
                quantity: 0.25,
                unit: "g",
                necessary: "1",
            },
            {
                id: "",
                name: "White Chocolate",
                quantity: 30,
                unit: "g",
                necessary: "1",
            },
            {
                id: "",
                name: "Strawberries",
                quantity: 100,
                unit: "g",
                necessary: "1",
            },
            {
                id: "",
                name: "Milk",
                quantity: 0.25,
                unit: "l",
                necessary: "1",
            },
        ],
        author: "Jaromír Trnka",
    },
];
