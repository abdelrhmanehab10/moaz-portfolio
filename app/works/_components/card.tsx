import { Button, buttonVariants } from "@/components/ui/button";
import { CardContent, Card, CardFooter } from "@/components/ui/card";
import { More } from "@/types";
import Link from "next/link";

interface CardsPropsType {
  src: string;
  title: string;
  brief: string;
}

export function WorkCard({ src, brief, title }: CardsPropsType) {
  return (
    <Card className="w-full h-full">
      <div className="aspect-video overflow-hidden rounded-lg rounded-b-none cursor-pointer translate-y-0 translate-x-0 scale-100 hover:scale-105 hover:shadow-2xl transition-transform duration-300 ease-in-out dark:filter-dark-video">
        <img
          alt="Work thumbnail"
          className="object-cover pointer-events-none w-full"
          height={300}
          src={src}
          style={{
            aspectRatio: "500/300",
            objectFit: "cover",
          }}
          width={500}
        />
      </div>
      <CardContent className="p-4">
        <div>
          <h2 className="font-semibold text-lg mb-2">{title}</h2>
          <p className="text-sm text-gray-500">{brief}</p>
        </div>
      </CardContent>
    </Card>
  );
}
