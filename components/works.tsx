import { FC } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import OpinionsCard from "./opinions-card";

interface WorksProps {}

const Works: FC<WorksProps> = ({}) => {
  return (
    <>
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
        {/* <div className="w-2/3 my-5 mx-auto text-center">
  <Image
    className="d shadow-black w-64 md:w-full md:h-20 md:object-cover mx-auto border-2 border-black rounded-lg p-5 mb-3"
    src="/fashion.png"
    width={700}
    height={700}
    alt="work"
  />
  Fashion - E-commerce
</div> */}
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
      <h2 className="text-main md:text-white font-bold text-center">
        اراء العملاء
      </h2>
      <Swiper spaceBetween={50} slidesPerView={1}>
        <SwiperSlide className="my-2 w-[80%] mx-auto border border-black rounded-2xl p-5">
          <OpinionsCard
            clientName="حمزه علاء"
            opinion="يارتني قابلت م/معاذ من زمان ما تتصوروا شلون غيرت موقعنا من ورا ورا وصاير
    أول صفحة بجوجل شكرا لك على هالمجهود.
    "
          />
        </SwiperSlide>
        <SwiperSlide className="my-2 w-[80%] mx-auto border border-black rounded-2xl p-5">
          <OpinionsCard
            clientName="سليمان حمزة"
            opinion="شكرا يا بطل أنا وراعي المشروع ما نفهم شي بالسيو ، بس معاذ فهمنا الصح وسوا شغل رهيب صاير يوميا فيه طلبات جديدة."
          />
        </SwiperSlide>
        <SwiperSlide className="my-2 w-[80%] mx-auto border border-black rounded-2xl p-5">
          <OpinionsCard
            clientName="خديجة سلطان"
            opinion="صدقوني هالولد عنده خبرة كان موقعي مختفي في النت ، بس مع السيو اللي سواه بلشت أشوف تحسن سريع ، ممتنة لك."
          />
        </SwiperSlide>
        <SwiperSlide className="my-2 w-[80%] mx-auto border border-black rounded-2xl p-5">
          <OpinionsCard
            clientName="محمد صابر"
            opinion="يا جدعان أنا متعامل مع معاذ في سيو ومفيش كلام شغله فصل وجاب نتائج جامدة ، موقعي بقي أول صفحة في جوجل الله يخليك يا وحش."
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Works;
