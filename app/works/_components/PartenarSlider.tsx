"use client";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";

type Props = { description: React.ReactNode; COMPANIES: string[] };

const PartenarSlider = ({ description, COMPANIES }: Props) => {
  return (
    <div className="flex flex-col justify-center items-center md:w-1/2">
      {description}
      <Carousel
        opts={{ direction: "rtl", loop: true }}
        plugins={[Autoplay({ delay: 1000 })]}
        className="w-full max-w-sm mx-auto my-5"
      >
        <CarouselContent className="-ml-1">
          {COMPANIES.map((company, idx) => (
            <CarouselItem key={idx} className="pl-1 md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <Card className="h-64 md:h-28 overflow-hidden">
                  <CardContent className="flex aspect-square items-center justify-center md:p-6">
                    <Image
                      src={`/companies/${company}.jpeg`}
                      width={500}
                      height={500}
                      className="object-cover"
                      alt={"company"}
                    />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default PartenarSlider;
