/**
 *  Project: store-ts
 *  File: HeroCarousel.tsx
 *  Created: 8:57 SA, 07/09/2024
 *  Author: Mai Tran Tuan Kiet
 *  "Family is where life begins and love never ends."
 */

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import hero1 from "../../public/hero1.webp";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import hero2 from "../../public/hero2.webp";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import hero3 from "../../public/hero3.webp";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import hero4 from "../../public/hero4.webp";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel.tsx";
import { Card, CardContent } from "@/components/ui/card.tsx";

const carouselImgs = [hero1, hero2, hero3, hero4];

function HeroCarousel() {
  return (
    <div className="hidden w-[90%] md:block">
      <Carousel>
        <CarouselContent>
          {carouselImgs.map((img, i) => (
            <CarouselItem key={i}>
              <Card className="border-0 bg-transparent outline-0">
                <CardContent className="p-2">
                  <img
                    src={img}
                    alt="Hero image"
                    className="h-[24rem] w-full rounded-md object-cover"
                  />
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}

export default HeroCarousel;
