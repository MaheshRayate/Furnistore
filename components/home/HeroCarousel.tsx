import React from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import carousel1 from "./../../public/images/carousel1.jpg";
import carousel2 from "./../../public/images/carousel2.jpg";
import carousel3 from "./../../public/images/carousel3.jpg";
import carousel4 from "./../../public/images/carousel4.jpg";
import carousel5 from "./../../public/images/carousel5.png";

import { Card, CardContent } from "@/components/ui/card";

const carouselImages = [carousel1, carousel2, carousel3, carousel4, carousel5];
function HeroCarousel() {
  return (
    <div className="hidden lg:block">
      <Carousel>
        <CarouselContent>
          {carouselImages.map((image, index) => {
            return (
              <CarouselItem key={index}>
                <Card className="border border-border">
                  <CardContent className="p-2">
                    <Image
                      src={image}
                      alt="hero"
                      className="w-full h-[24rem] rounded-md object-cover"
                    />
                  </CardContent>
                </Card>
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}

export default HeroCarousel;
