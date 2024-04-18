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
      <div className="bg-main mx-auto text-center rounded-lg p-5 m-5 text-white w-fit">
        <h1 className="text-2xl">اعمالي</h1>
        <p className="text-xs font-light mt-2">
          شاهد نتائج تحسين محركات البحث المُذهلة! صور تُظهر كيف ساعدتُ عملائي
          على تحقيق أرباحٍ مُضاعفة! بيانات مُقنعة - تحسينات ملموسة - نجاح مُثبت
        </p>
      </div>
      <div className="overflow-hidden">
        <EmblaCarousel slides={SLIDES} options={OPTIONS} />
      </div>
      <div className="md:flex items-end justify-center mt-3">
        <PartenarSlider
          description={
            <p className="text-center text-main">
              عملاء سابقين! <br />
              ساعدتهم بخدماتي في مضاعفة النتائج الخاصه بهم.
            </p>
          }
          COMPANIES={[
            {
              src: "9",
              description: "Nuts / E-commerce",
              title: "Nahr Elgoud",
              href: "https://nahraljoud.com/",
            },
            {
              src: "10",
              description: "Blog  E-commerce",
              title: "Samel Blog",
              href: "https://blog.samelstore.com/",
            },
            {
              src: "11",
              description: "Sports / E-commerce",
              title: "Alaalm Elriady",
              href: "https://alalamsport.com/",
            },
            {
              src: "12",
              description: "Care / E-commerce",
              title: "Magstic care",
              href: "https://majesticcaresa.com/ar",
            },
            {
              src: "13",
              description: "Detergents / E-commerce",
              title: "Litro",
              href: "https://litro.com.sa/",
            },
          ]}
        />
        <PartenarSlider
          description={
            <p className="text-center text-main">
              انشاء متاجر إلكترونية! <br /> خبرة واسعة في إنشاء متاجر تُحقق
              أرباحًا.
            </p>
          }
          COMPANIES={[
            {
              src: "1",
              title: "Half Beauty",
              description: "Care / E-commerce",
              href: "https://halfbeauty.com/",
            },
            {
              src: "2",
              title: "Ta3ttr",
              description: "Perfume / E-commerce",
              href: "https://ta3ttar.com/",
            },
            {
              src: "3",
              title: "Bsht W Shal",
              description: "Bsht / E-commerce",
              href: "https://bshtwshal.com/",
            },
            {
              src: "4",
              title: "Bazid Acadimy",
              description: "Learning / Educational",
              href: "https://bazaidacademy.net/",
            },
            {
              src: "5",
              title: "Koora",
              description: "Sport / E-commerce",
              href: "https://koorah.shop/",
            },
            {
              src: "6",
              title: "Cyan",
              description: "Pharmacy / E-commerce",
              href: "https://cyan-pharmacy.com/",
            },
            {
              src: "7",
              title: "Kassaro",
              description: "Perfums / E-commerce",
              href: "https://kassaroperfumes.com/",
            },
            {
              src: "8",
              title: "Lamsat Gariba",
              description: "Car accessories / E-commerce",
              href: "https://lamsatgariba.com/",
            },
          ]}
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
