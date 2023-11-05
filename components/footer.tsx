import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

interface FooterProps {}

const Footer: FC<FooterProps> = ({}) => {
  return (
    <div className="w-2/3 md:w-full mx-auto p-3 text-center">
      <div className="bg-main rounded-lg p-5">
        <h1 className="text-2xl text-white">تواصل معي</h1>
        <div className="flex items-center justify-center mt-8 gap-4">
          <Link href="mailto:moaza3950@gmail.com">
            <Image
              src="/gmail.svg"
              width={300}
              height={300}
              alt="whatsapp"
              className="w-16"
            />
          </Link>
          <Link href="https://www.linkedin.com/in/moaz-ayman-929423247">
            <Image
              src="/linkedin.svg"
              width={300}
              height={300}
              alt="whatsapp"
              className="w-16"
            />
          </Link>
          <Link
            target="_blank"
            href="https://wa.me/+201023251138?text=السلام%20عليكم"
          >
            <Image
              src="/whatsapp.svg"
              width={300}
              height={300}
              alt="whatsapp"
              className="w-16"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
