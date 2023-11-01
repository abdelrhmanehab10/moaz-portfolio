import { FC } from "react";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { useSheet } from "@/hooks/use-sheet-store";
import Works from "./works";
import "swiper/css";

interface WorkSheetProps {}

const WorkSheet: FC<WorkSheetProps> = ({}) => {
  const { isOpen, onClose } = useSheet();
  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent
        side="left"
        className="w-full sm:max-w-full overflow-y-scroll scroll-0"
      >
        <Works />
      </SheetContent>
    </Sheet>
  );
};

export default WorkSheet;
