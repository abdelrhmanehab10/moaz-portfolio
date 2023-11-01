import { FC } from "react";
import { SwiperSlide } from "swiper/react";
import { UserCircle } from "lucide-react";

interface OpinionsCardProps {
  clientName: string;
  opinion: string;
}

const OpinionsCard: FC<OpinionsCardProps> = ({ clientName, opinion }) => {
  return (
    <>
      <div className="flex items-center gap-4">
        <UserCircle className="w-10 h-10 text-main" />
        <h3>{clientName}</h3>
      </div>
      <p className="p-3">{opinion}</p>
    </>
  );
};

export default OpinionsCard;
