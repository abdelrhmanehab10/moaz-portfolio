import Image from "next/image";
import { FC } from "react";

interface FooterProps {}

const Footer: FC<FooterProps> = ({}) => {
  return (
    <div className="w-2/3 md:w-full mx-auto p-3 text-center">
      <div className="bg-main rounded-lg p-5">
        <h1 className="text-2xl text-white">تواصل معي</h1>
        <div className="flex items-center justify-center mt-8 gap-4">
          <Image
            src="/gmail.svg"
            width={300}
            height={300}
            alt="whatsapp"
            className="w-16"
          />
          <Image
            src="/linkedin.svg"
            width={300}
            height={300}
            alt="whatsapp"
            className="w-16"
          />
          <Image
            src="/whatsapp.svg"
            width={300}
            height={300}
            alt="whatsapp"
            className="w-16"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
