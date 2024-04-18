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
          clientName="فهد بن نايف"
          opinion="كنت متعطل في جلب الزوار إلى متجري الإلكتروني. تواصلت مع معاذ، وقام بتحسين موقعي بشكل احترافي، والآن أصبح متجري مشهور على الإنترنت. شكرًا جزيلاً يا معاذ!"
        />
      </SwiperSlide>
      <SwiperSlide className="my-2 border border-black rounded-2xl px-10 py-5">
        <OpinionsCard
          clientName="خالد بن مشعل"
          opinion="معاذ ساعدني في حل مشكلة كبيرة كانت تواجه متجري الإلكتروني، وهي قلة الزوار. بعد تحسينه للموقع، زاد عدد الزبائن بشكل ملحوظ، وزادت المبيعات."
        />
      </SwiperSlide>
      <SwiperSlide className="my-2 border border-black rounded-2xl px-10 py-5">
        <OpinionsCard
          clientName="سلطان بن رائد"
          opinion="كنت محتاج خبير لتحسين محركات البحث لموقعي الإلكتروني، سألت أصحابي ورشحوا لي معاذ، والله ما ندمت! حقق لي نتائج خيالية. شكرًا لك يا معاذ!."
        />
      </SwiperSlide>
      <SwiperSlide className="my-2 border border-black rounded-2xl px-10 py-5">
        <OpinionsCard
          clientName="مشعل بن أحمد"
          opinion="معاذ خبير ممتاز في تحسين محركات البحث. ساعدني على تحسين متجري الإلكتروني، والآن أصبح أسهل استخدامًا وجذابًا أكثر للزبائن. شكرًا لك يا معاذ!."
        />
      </SwiperSlide>
      <SwiperSlide className="my-2 border border-black rounded-2xl px-10 py-5">
        <OpinionsCard
          clientName="فاطمة بنت مروان"
          opinion="أشكر معاذ على تحسين موقعي الإلكتروني. لاحظت زيادة رهيبة في عدد الزيارات والمبيعات من وقت ما شغلت مع معاذ. أنصح به بشدة!!."
        />
      </SwiperSlide>
      s
    </Swiper>
  );
};

export default OpinionSlider;
