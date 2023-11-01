"use client";
import Hero from "./_components/hero";
import { ArrowLeftCircle } from "lucide-react";
import Services from "./_components/services";
import { useSheet } from "@/hooks/use-sheet-store";
import Works from "@/components/works";

export default function Home() {
  const { onOpen } = useSheet();
  return (
    <>
      <Hero />
      <Services />
      <div className="w-2/3 mx-auto p-3">
        <div
          onClick={onOpen}
          className="md:hidden cursor-pointer bg-main rounded-lg p-5 text-center text-white text-2xl"
        >
          الاعمال
          <ArrowLeftCircle className="mx-auto mt-3" />
        </div>
        <div className="md:block hidden">
          <Works />
        </div>
      </div>
    </>
  );
}
