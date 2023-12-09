import { FC } from "react";
import { Accordion } from "@/components/ui/accordion";
import ServicesCard from "./services-card";
import { services } from "@/constant";

interface ServicesProps {}

const Services: FC<ServicesProps> = ({}) => {
  return (
    <section id="services" className="md:bg-main pt-8 text-center">
      <h2 className="text-main md:text-white font-bold">
        خدماتي في تحسين محركات البحث
      </h2>
      <div className="w-2/3 mx-auto p-3 text-center my-5">
        <Accordion type="single" collapsible>
          {services.map((service, idx) => (
            <ServicesCard
              key={idx}
              item={idx}
              imgSrc={service.image}
              title={service.title}
              content={service.description}
            />
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default Services;
