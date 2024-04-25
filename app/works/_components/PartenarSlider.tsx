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
import { Button } from "@/components/ui/button";

interface Company {
  title: string;
  href: string;
  src: string;
  description: string;
}

type Props = { description?: React.ReactNode; COMPANIES: Company[] };

const PartenarSlider = ({ description, COMPANIES }: Props) => {
  return (
    <div className="flex flex-col justify-center items-center md:w-1/2">
      {description}
      <Carousel
        opts={{ direction: "rtl", loop: true }}
        plugins={[Autoplay({ delay: 2000 })]}
        className="w-full max-w-sm mx-auto my-5"
      >
        <CarouselContent className="-ml-1">
          {COMPANIES.map((company, idx) => (
            <CarouselItem key={idx} className="pl-1 md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <Card className="relative group cursor-pointer">
                  <CardContent className="flex aspect-square items-center justify-center">
                    <Image
                      src={`/companies/${company.src}.png`}
                      width={800}
                      height={800}
                      className="object-cover w-full h-full rounded-xl"
                      alt={"company"}
                    />
                  </CardContent>
                  <div className="absolute inset-0 bg-main opacity-0 rounded-xl transition-opacity group-hover:opacity-100 text-center text-white flex flex-col justify-center gap-1">
                    <h3 className="text-xs">{company.title}</h3>
                    <p className="text-[8px] font-light">
                      {company.description}
                    </p>
                    <Button className="w-[80%] text-xs p-1 bg-white text-main mx-auto border border-white hover:bg-transparent hover:text-white">
                      <a href={company.href}>اكتشفها</a>
                    </Button>
                  </div>
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
