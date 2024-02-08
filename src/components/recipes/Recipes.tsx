import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
    priceToName,
    difficultyToName,
    dishCaretogryToName,
    toleranceCaretogryToName,
} from "./translateObjectToNames.ts";
import Filters from "./Filters";
import { Separator } from "@/components/ui/separator";
import { Suspense } from "react";
import Loader from "../Loading.tsx";

export default function Recipes() {
    return (
        <Suspense fallback={<Loader />}>
            <div className="mb-48 mt-20 [grid-column:_content]">
                <h2 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">Recipes</h2>

                <Filters />
                <Separator />

                <div className="mt-4 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {recipes.map((recipe, recipeIndex) => {
                        return (
                            <Card key={recipeIndex} className="flex flex-col pb-6">
                                <CardHeader>
                                    <div className="flex flex-wrap gap-2">
                                        {recipe.tolerance.includes(2) && (
                                            <Badge variant="default" className="w-fit gap-2">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 24 24"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    className="lucide lucide-vegan w-4 fill-none stroke-current stroke-2"
                                                >
                                                    <path d="M2 2a26.6 26.6 0 0 1 10 20c.9-6.82 1.5-9.5 4-14" />
                                                    <path d="M16 8c4 0 6-2 6-6-4 0-6 2-6 6" />
                                                    <path d="M17.41 3.6a10 10 0 1 0 3 3" />
                                                </svg>
                                                Vegan
                                            </Badge>
                                        )}
                                        {recipe.tolerance.includes(1) && !recipe.tolerance.includes(2) && (
                                            <Badge variant="secondary" className="w-fit gap-2">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 24 24"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    className="lucide lucide-salad w-4 fill-none stroke-current stroke-2"
                                                >
                                                    <path d="M7 21h10" />
                                                    <path d="M12 21a9 9 0 0 0 9-9H3a9 9 0 0 0 9 9Z" />
                                                    <path d="M11.38 12a2.4 2.4 0 0 1-.4-4.77 2.4 2.4 0 0 1 3.2-2.77 2.4 2.4 0 0 1 3.47-.63 2.4 2.4 0 0 1 3.37 3.37 2.4 2.4 0 0 1-1.1 3.7 2.51 2.51 0 0 1 .03 1.1" />
                                                    <path d="m13 12 4-4" />
                                                    <path d="M10.9 7.25A3.99 3.99 0 0 0 4 10c0 .73.2 1.41.54 2" />
                                                </svg>
                                                Vegeterian
                                            </Badge>
                                        )}
                                        {!recipe.tolerance.includes(1) && !recipe.tolerance.includes(2) && (
                                            <Badge variant="outline" className="w-fit gap-2">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 24 24"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    className="lucide lucide-beef w-4 fill-none stroke-current stroke-2"
                                                >
                                                    <circle cx="12.5" cy="8.5" r="2.5" />
                                                    <path d="M12.5 2a6.5 6.5 0 0 0-6.22 4.6c-1.1 3.13-.78 3.9-3.18 6.08A3 3 0 0 0 5 18c4 0 8.4-1.8 11.4-4.3A6.5 6.5 0 0 0 12.5 2Z" />
                                                    <path d="m18.5 6 2.19 4.5a6.48 6.48 0 0 1 .31 2 6.49 6.49 0 0 1-2.6 5.2C15.4 20.2 11 22 7 22a3 3 0 0 1-2.68-1.66L2.4 16.5" />
                                                </svg>
                                                Meat
                                            </Badge>
                                        )}

                                        {recipe.price && (
                                            <Badge
                                                variant="outline"
                                                className="w-fit gap-2 capitalize text-muted-foreground"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 24 24"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    className="lucide lucide-coins w-4 fill-none stroke-current stroke-2"
                                                >
                                                    <circle cx="8" cy="8" r="6" />
                                                    <path d="M18.09 10.37A6 6 0 1 1 10.34 18" />
                                                    <path d="M7 6h1v4" />
                                                    <path d="m16.71 13.88.7.71-2.82 2.82" />
                                                </svg>
                                                {priceToName(recipe.price)}
                                            </Badge>
                                        )}

                                        {recipe.difficulty && (
                                            <Badge
                                                variant="outline"
                                                className="w-fit gap-2 capitalize text-muted-foreground"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 24 24"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    className="lucide lucide-construction w-4 fill-none stroke-current stroke-2"
                                                >
                                                    <rect x="2" y="6" width="20" height="8" rx="1" />
                                                    <path d="M17 14v7" />
                                                    <path d="M7 14v7" />
                                                    <path d="M17 3v3" />
                                                    <path d="M7 3v3" />
                                                    <path d="M10 14 2.3 6.3" />
                                                    <path d="m14 6 7.7 7.7" />
                                                    <path d="m8 6 8 8" />
                                                </svg>
                                                {difficultyToName(recipe.difficulty)}
                                            </Badge>
                                        )}

                                        {recipe.country && (
                                            <Badge
                                                variant="outline"
                                                className="w-fit gap-2 uppercase text-muted-foreground"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 24 24"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    className="lucide lucide-globe-2 w-4 fill-none stroke-current stroke-2"
                                                >
                                                    <path d="M21.54 15H17a2 2 0 0 0-2 2v4.54" />
                                                    <path d="M7 3.34V5a3 3 0 0 0 3 3v0a2 2 0 0 1 2 2v0c0 1.1.9 2 2 2v0a2 2 0 0 0 2-2v0c0-1.1.9-2 2-2h3.17" />
                                                    <path d="M11 21.95V18a2 2 0 0 0-2-2v0a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05" />
                                                    <circle cx="12" cy="12" r="10" />
                                                </svg>
                                                {recipe.country}
                                            </Badge>
                                        )}
                                    </div>
                                    <CardTitle className="mt-2 scroll-m-20 text-2xl font-semibold tracking-tight">
                                        {recipe.name}
                                    </CardTitle>
                                    <CardDescription className="line-clamp-3 text-justify">
                                        {recipe.description}
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="grid gap-1">
                                    {recipe.duration && (
                                        <div className="flex items-center gap-2">
                                            <small className="flex items-center gap-1 text-sm font-medium leading-none">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 24 24"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    className="lucide lucide-clock w-4 fill-none stroke-current stroke-2"
                                                >
                                                    <circle cx="12" cy="12" r="10" />
                                                    <polyline points="12 6 12 12 16 14" />
                                                </svg>
                                                Duration:{" "}
                                            </small>
                                            {recipe.duration} minutes
                                        </div>
                                    )}

                                    {recipe.dish_category && (
                                        <span className="flex flex-wrap items-baseline gap-x-2 capitalize ">
                                            <small className="flex items-center gap-1 text-sm font-medium">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 24 24"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    className="lucide lucide-utensils w-4 fill-none stroke-current stroke-2"
                                                >
                                                    <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" />
                                                    <path d="M7 2v20" />
                                                    <path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7" />
                                                </svg>
                                                Category:{" "}
                                            </small>
                                            <div className="flex flex-wrap gap-x-2">
                                                {recipe.dish_category.map((category) => (
                                                    <span key={`${recipeIndex}-${dishCaretogryToName(category)}`}>
                                                        {dishCaretogryToName(category)}
                                                    </span>
                                                ))}
                                            </div>
                                        </span>
                                    )}

                                    {recipe.tolerance.some((num) => [3, 4, 5, 6, 7, 8, 9].includes(num)) && (
                                        <span className="flex flex-wrap items-baseline gap-x-2 capitalize">
                                            <small className="flex items-center gap-1 text-sm font-medium">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 24 24"
                                                    strokeLinejoin="round"
                                                    strokeLinecap="round"
                                                    className="lucide lucide-wheat w-4 fill-none stroke-current stroke-2"
                                                >
                                                    <path d="M2 22 16 8" />
                                                    <path d="M3.47 12.53 5 11l1.53 1.53a3.5 3.5 0 0 1 0 4.94L5 19l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z" />
                                                    <path d="M7.47 8.53 9 7l1.53 1.53a3.5 3.5 0 0 1 0 4.94L9 15l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z" />
                                                    <path d="M11.47 4.53 13 3l1.53 1.53a3.5 3.5 0 0 1 0 4.94L13 11l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z" />
                                                    <path d="M20 2h2v2a4 4 0 0 1-4 4h-2V6a4 4 0 0 1 4-4Z" />
                                                    <path d="M11.47 17.47 13 19l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L5 19l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z" />
                                                    <path d="M15.47 13.47 17 15l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L9 15l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z" />
                                                    <path d="M19.47 9.47 21 11l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L13 11l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z" />
                                                </svg>
                                                Tolerance:{" "}
                                            </small>
                                            <div className="flex flex-wrap gap-x-2">
                                                {Array.from(new Set(recipe.tolerance))
                                                    .filter((category) => category !== 1 && category !== 2)
                                                    .map((category) => (
                                                        <span
                                                            key={`${recipeIndex}-${toleranceCaretogryToName(category)}`}
                                                        >
                                                            {toleranceCaretogryToName(category)}
                                                        </span>
                                                    ))}
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
            </div>
        </Suspense>
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
