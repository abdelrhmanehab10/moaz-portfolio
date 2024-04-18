import { FC } from "react";
import Image from "next/image";
import OpinionSlider from "@/components/opnion-slider";
import PartenarSlider from "./_components/PartenarSlider";
import EmblaCarousel from "./_components/embla-carousel";
import { EmblaOptionsType } from "embla-carousel";
import "./_css/embla.css";
import "./_css/base.css";

interface WorksProps {}

const OPTIONS: EmblaOptionsType = { loop: true, direction: "rtl" };
const SLIDE_COUNT = 9;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());
const Works: FC<WorksProps> = ({}) => {
  return (
    <>
      <div className="bg-main mx-auto rounded-lg p-5 m-5 text-white w-fit">
        <h1 className="text-2xl">اعمالي</h1>
      </div>
      <EmblaCarousel slides={SLIDES} options={OPTIONS} />
      <div className="md:flex items-end justify-center mt-3">
        <PartenarSlider
          description={
            <p>
              شاهد نتائج تحسين محركات البحث المُذهلة! <br /> صور تُظهر كيف
              ساعدتُ عملائي على تحقيق أرباحٍ مُضاعفة! <br /> بيانات مُقنعة -
              تحسينات ملموسة - نجاح مُثبت
            </p>
          }
          COMPANIES={["9", "10", "11", "12", "13"]}
        />
        <PartenarSlider
          description={
            <p>
              انشاء متاجر إلكترونية! <br /> خبرة واسعة في إنشاء متاجر تُحقق
              أرباحًا.
            </p>
          }
          COMPANIES={["1", "2", "3", "4", "5", "6", "7", "8"]}
        />
      </div>
      <h2 className="text-main font-bold text-center mt-3">اراء العملاء</h2>
      <p className="text-main text-xs text-light text-center mt-3">
        لا تأخذ كلامنا فقط، إليك ما يقوله عملاؤنا: آراء حقيقية من عملاء سابقين!
      </p>
      <OpinionSlider />
    </>
  );
};

export default Works;
