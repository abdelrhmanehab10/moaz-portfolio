import { FC } from "react";
import Image from "next/image";
import OpinionSlider from "@/components/opnion-slider";
import { companies, worksImages } from "@/constant";

interface WorksProps {}

const Works: FC<WorksProps> = ({}) => {
  return (
    <>
      <div className="bg-main rounded-lg p-5 mx-auto my-5 text-white text-2xl w-fit">
        <h1>اعمالي</h1>
      </div>
      <div className="md:grid grid-cols-3 gap-5 justify-center">
        {worksImages.map((img, idx) => (
          <Image
            key={idx}
            className="w-full"
            src={`/works/${img}`}
            width={700}
            height={700}
            alt="work"
          />
        ))}
      </div>
      <div className="md:grid md:grid-cols-3 md:grid-rows-3">
        {companies.map((company, idx) => (
          <div key={idx} className="w-2/3 my-5 mx-auto text-center">
            <Image
              className="w-64 md:w-full md:h-20 md:object-cover mx-auto border-2 border-black rounded-lg p-5 mb-3"
              src={company.img}
              width={700}
              height={700}
              alt="work"
            />
            {company.title}
          </div>
        ))}
      </div>
      <h2 className="text-main font-bold text-center">اراء العملاء</h2>
      <OpinionSlider />
    </>
  );
};

export default Works;
