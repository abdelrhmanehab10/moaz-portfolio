import { FC } from "react";
import Image from "next/image";
import OpinionSlider from "@/components/opnion-slider";

interface WorksProps {}

const Works: FC<WorksProps> = ({}) => {
  return (
    <>
      <div className="bg-main rounded-lg p-5 mx-auto my-5 text-white text-2xl w-fit">
        <h1>اعمالي</h1>
      </div>
      <div className="md:grid grid-cols-3 gap-5 justify-center">
        <Image
          className="w-full"
          src="/work1.jpeg"
          width={700}
          height={700}
          alt="work"
        />
        <Image
          className="w-full"
          src="/work2.jpeg"
          width={700}
          height={700}
          alt="work"
        />
        <Image
          className="w-full"
          src="/work3.jpeg"
          width={700}
          height={700}
          alt="work"
        />
      </div>
      <div className="md:grid md:grid-cols-3 md:grid-rows-3">
        <div className="w-2/3 my-5 mx-auto text-center">
          <Image
            className="w-64 md:w-full md:h-20 md:object-cover mx-auto border-2 border-black rounded-lg p-5 mb-3"
            src="/shortcut.jpeg"
            width={700}
            height={700}
            alt="work"
          />
          ADV - Services
        </div>
        <div className="w-2/3 my-5 mx-auto text-center">
          <Image
            className="w-64 md:w-full md:h-20 md:object-cover mx-auto border-2 border-black rounded-lg p-5 mb-3"
            src="/shortcut.jpeg"
            width={700}
            height={700}
            alt="work"
          />
          Dec - Services
        </div>
        <div className="w-2/3 my-5 mx-auto text-center">
          <Image
            className="w-64 md:w-full md:h-20 md:object-cover mx-auto border-2 border-black rounded-lg p-5 mb-3"
            src="/tapes.jpeg"
            width={700}
            height={700}
            alt="work"
          />
          Tapes - E-commerce
        </div>
        <div className="w-2/3 my-5 mx-auto text-center">
          <Image
            className="w-64 md:w-full md:h-20 md:object-cover mx-auto border-2 border-black rounded-lg p-5 mb-3"
            src="/coffe.png"
            width={700}
            height={700}
            alt="work"
          />
          Coffee - E-commerce
        </div>
        <div className="w-2/3 my-5 mx-auto text-center">
          <Image
            className="w-64 md:w-full md:h-20 md:object-cover mx-auto border-2 border-black rounded-lg p-5 mb-3"
            src="/nhla.png"
            width={700}
            height={700}
            alt="work"
          />
          Hony - E-commerce
        </div>
        <div className="w-2/3 my-5 mx-auto text-center">
          <Image
            className="w-64 md:w-full md:h-20 md:object-cover mx-auto border-2 border-black rounded-lg p-5 mb-3"
            src="/abaya.jpeg"
            width={700}
            height={700}
            alt="work"
          />
          Abaya - E-commerce
        </div>
        <div className="w-2/3 my-5 mx-auto text-center">
          <Image
            className="w-64 md:w-full md:h-20 md:object-cover mx-auto border-2 border-black rounded-lg p-5 mb-3"
            src="/perfums.png"
            width={700}
            height={700}
            alt="work"
          />
          Perfumes - E-commerce
        </div>
        <div className="w-2/3 my-5 mx-auto text-center">
          <Image
            className="w-64 md:w-full md:h-20 md:object-cover mx-auto border-2 border-black rounded-lg p-5 mb-3"
            src="/coffee2.png"
            width={700}
            height={700}
            alt="work"
          />
          Coffee - E-commerce
        </div>
        <div className="w-2/3 my-5 mx-auto text-center">
          <Image
            className="w-64 md:w-full md:h-20 md:object-cover mx-auto border-2 border-black rounded-lg p-5 mb-3"
            src="/fursan.jpeg"
            width={700}
            height={700}
            alt="work"
          />
          Equipment - E-commerce
        </div>
        <div className="w-2/3 my-5 mx-auto text-center">
          <Image
            className="w-64 md:w-full md:h-20 md:object-cover mx-auto border-2 border-black rounded-lg p-5 mb-3"
            src="/dates.png"
            width={700}
            height={700}
            alt="work"
          />
          Dates - E-commerce
        </div>
        <div className="w-2/3 my-5 mx-auto text-center">
          <Image
            className="w-64 md:w-full md:h-20 md:object-cover mx-auto border-2 border-black rounded-lg p-5 mb-3"
            src="/pets.png"
            width={700}
            height={700}
            alt="work"
          />
          Pets - E-commerce
        </div>
      </div>
      <h2 className="text-main font-bold text-center">اراء العملاء</h2>
      <OpinionSlider />
    </>
  );
};

export default Works;
