"use client";

import Hero from "./_components/hero";
import { ArrowLeftCircle } from "lucide-react";
import Services from "./_components/services";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <>
      <Hero />
      <Services />
      <div className="w-2/3 mx-auto p-3">
        <div
          onClick={() => router.push("/works")}
          className="md:hidden cursor-pointer bg-main rounded-lg p-5 text-center text-white text-2xl flex flex-col"
        >
          الاعمال
          <ArrowLeftCircle className="mx-auto mt-3" />
        </div>
      </div>
    </>
  );
}
