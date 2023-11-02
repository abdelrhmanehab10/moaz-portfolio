import { FC } from "react";
import Image from "next/image";

interface HeroProps {}

const Hero: FC<HeroProps> = ({}) => {
  return (
    <div
      className="
        py-1
        lg:w-[80%]
        lg:mx-auto
        md:flex
        md:flex-row-reverse
        md:justify-between
        md:items-center
        md:bg-none
        md:relative
        bg-[url('/moaz.jpeg')] 
        bg-center 
        bg-cover 
        text-white 
        h-[70vh] 
        w-full 
        flex 
        flex-col 
        justify-end
        "
    >
      <Image
        className="w-full h-full md:block hidden"
        src={"/moaz.jpeg"}
        width={300}
        height={300}
        alt="moaz"
      />
      <div>
        <div className="md:p-8 p-10 md:text-teal-950">
          <div className="md:hidden w-10 h-1 mb-3 bg-main " />
          <h3 className="mb-3 md:text-red-500 md:drop-shadow-none drop-shadow-[0_10px_25px_rgba(0,0,0,1)]">
            اهلا بيك..
          </h3>
          <h1 className="font-semibold mb-3 md:drop-shadow-none drop-shadow-[0_10px_25px_rgba(0,0,0,1)]">
            انا معاذ ايمن
          </h1>
          <p className="mb-3 md:drop-shadow-none drop-shadow-[0_10px_25px_rgba(0,0,0,1)]">
            متخصص في تحسين محركات البحث (SEO)، لدي خبرة واسعة في تحسين ترتيب
            المتاجر الالكترونية و مواقع الخدمات من خلال تحسين تجربة المستخدم
            ومعدلات التحويل (CTR) إذا كنت تبحث عن شريك يتمتع بالخبرة والنهج
            الاستراتيجي لتعزيز تواجدك الرقمي، فأنا هنا لمساعدتك.
          </p>
        </div>
        <div className="md:absolute md:bottom-0 w-full flex justify-around pb-5 px-5 gap-2">
          <div className="bg-white rounded-xl px-5 py-2 shadow-black/40 shadow-md">
            <Image src={"/zid.png"} width={100} height={100} alt="zid-logo" />
          </div>
          <div className="bg-white rounded-xl px-5 py-2 shadow-black/40 shadow-md">
            <Image
              src={"/shopify.png"}
              width={100}
              height={100}
              alt="zid-logo"
            />
          </div>
          <div className="bg-white rounded-xl px-5 py-2 shadow-black/40 shadow-md">
            <Image
              src={"/wordpress.png"}
              width={100}
              height={100}
              alt="zid-logo"
            />
          </div>
          <div className="bg-white rounded-xl px-5 py-2 shadow-black/40 shadow-md">
            <Image src={"/sala.png"} width={100} height={100} alt="zid-logo" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;