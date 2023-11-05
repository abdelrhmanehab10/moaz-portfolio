"use client";

import { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import OpinionsCard from "@/components/opinions-card";

import "swiper/css";
import "swiper/css/navigation";

interface OpinionSliderProps {}

const OpinionSlider: FC<OpinionSliderProps> = ({}) => {
  return (
    <Swiper
      spaceBetween="50px"
      navigation={true}
      modules={[Navigation]}
      className="md:w-1/2 w-[80%] mx-auto"
    >
      <SwiperSlide className="my-2 border border-black rounded-2xl px-10 py-5">
        <OpinionsCard
          clientName="حمزه علاء"
          opinion="يارتني قابلت م/معاذ من زمان ما تتصوروا شلون غيرت موقعنا من ورا ورا وصاير
      أول صفحة بجوجل شكرا لك على هالمجهود.
      "
        />
      </SwiperSlide>
      <SwiperSlide className="my-2 border border-black rounded-2xl px-10 py-5">
        <OpinionsCard
          clientName="سليمان حمزة"
          opinion="شكرا يا بطل أنا وراعي المشروع ما نفهم شي بالسيو ، بس معاذ فهمنا الصح وسوا شغل رهيب صاير يوميا فيه طلبات جديدة."
        />
      </SwiperSlide>
      <SwiperSlide className="my-2 border border-black rounded-2xl px-10 py-5">
        <OpinionsCard
          clientName="خديجة سلطان"
          opinion="صدقوني هالولد عنده خبرة كان موقعي مختفي في النت ، بس مع السيو اللي سواه بلشت أشوف تحسن سريع ، ممتنة لك."
        />
      </SwiperSlide>
      <SwiperSlide className="my-2 border border-black rounded-2xl px-10 py-5">
        <OpinionsCard
          clientName="محمد صابر"
          opinion="يا جدعان أنا متعامل مع معاذ في سيو ومفيش كلام شغله فصل وجاب نتائج جامدة ، موقعي بقي أول صفحة في جوجل الله يخليك يا وحش."
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default OpinionSlider;
