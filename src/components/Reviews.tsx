import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const PlaceholderReview = {
    reviews: [
        {
            review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, voluptatibus sed necessitatibus in officiis error minus voluptates harum assumenda doloremque temporibus inventore nesciunt quibusdam alias cupiditate! Expedita officiis accusantium illum doloribus enim facere minima animi!",
            avatarLink: "https://source.unsplash.com/random/300×300",
            UserInitial: "JD",
            UserName: "John Doe",
        },
        {
            review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, voluptatibus sed necessitatibus in officiis error minus voluptates harum assumenda doloremque temporibus inventore nesciunt quibusdam alias cupiditate! Expedita officiis accusantium illum doloribus enim facere minima animi!",
            avatarLink: "https://source.unsplash.com/random/301×301",
            UserInitial: "MR",
            UserName: "Martha Rogue",
        },
        {
            review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, voluptatibus sed necessitatibus in officiis error minus voluptates harum assumenda doloremque temporibus inventore nesciunt quibusdam alias cupiditate! Expedita officiis accusantium illum doloribus enim facere minima animi!",
            avatarLink: "https://source.unsplash.com/random/302×302",
            UserInitial: "OL",
            UserName: "Owen Lack",
        },
        {
            review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, voluptatibus sed necessitatibus in officiis error minus voluptates harum assumenda doloremque temporibus inventore nesciunt quibusdam alias cupiditate! Expedita officiis accusantium illum doloribus enim facere minima animi!",
            avatarLink: "https://source.unsplash.com/random/303×303",
            UserInitial: "JJ",
            UserName: "John Peter Janson",
        },
        {
            review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, voluptatibus sed necessitatibus in officiis error minus voluptates harum assumenda doloremque temporibus inventore nesciunt quibusdam alias cupiditate! Expedita officiis accusantium illum doloribus enim facere minima animi!",
            avatarLink: "https://source.unsplash.com/random/304×304",
            UserInitial: "JD",
            UserName: "John Doe",
        },
    ],
};

export default function ReviewsComponent() {
    return (
        <Carousel className="relative my-48 flex flex-col [grid-column:_content]">
            <h2 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
                We have tons of positive reviews
            </h2>
            <p className="max-w-[100ch] leading-7 text-accent-foreground [&:not(:first-child)]:mt-6">
                See for your self. People love our product because we forward for creating the best product for them.
            </p>
            <nav className="mb-4 ml-auto mt-16 flex gap-2" aria-label="Slide controls">
                <CarouselPrevious className="relative left-0 top-0 translate-y-0" />
                <CarouselNext className="relative right-0 top-0 translate-y-0" />
            </nav>
            <CarouselContent aria-label="Carousel">
                {PlaceholderReview.reviews.map((content, index) => (
                    <CarouselItem className="sm:basis-1/2 lg:basis-1/3" key={index}>
                        <Card>
                            <CardContent className="mt-6">
                                <q className="line-clamp-3">{content.review}</q>
                            </CardContent>
                            <CardFooter>
                                <address className="flex items-center gap-4">
                                    <Avatar>
                                        <AvatarImage
                                            alt="Avatar Image"
                                            src={content.avatarLink}
                                            className="aspect-square"
                                        />
                                        <AvatarFallback>{content.UserInitial}</AvatarFallback>
                                    </Avatar>
                                    <span rel="author" className="font-semibold">
                                        {content.UserName}
                                    </span>
                                </address>
                            </CardFooter>
                        </Card>
                    </CarouselItem>
                ))}
            </CarouselContent>
        </Carousel>
    );
}
