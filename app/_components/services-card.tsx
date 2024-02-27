import { FC } from "react";
import Image from "next/image";
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface ServicesCardProps {
  imgSrc: string;
  title: string;
  content: string;
  item: number;
}

const ServicesCard: FC<ServicesCardProps> = ({
  content,
  imgSrc,
  title,
  item,
}) => {
  return (
    <>
      <AccordionItem
        className="md:hidden bg-main rounded-lg mt-3"
        value={String(item)}
      >
        <AccordionTrigger className="flex flex-col text-white text-xl px-5">
          <Image
            src={imgSrc}
            loading="lazy"
            width={200}
            height={200}
            alt="keyword-image"
            className="mx-auto w-48"
            decoding="async"
            data-nimg="1"
          />
          {title}
        </AccordionTrigger>
        <AccordionContent className="text-white px-4 py-2">
          {content}
        </AccordionContent>
      </AccordionItem>
      <div className="bg-white rounded-lg mt-3 md:flex hidden flex-col text-black text-xl px-5">
        <Image
          src={imgSrc}
          width={200}
          height={200}
          alt="keyword-image"
          className="mx-auto w-48"
        />
        <h2 className="font-bold my-2">{title}</h2>
        <p className="text-sm p-5">{content}</p>
      </div>
    </>
  );
};

export default ServicesCard;
