import React from "react";
import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import Link from "next/link";

type Props = {
  title: string;
  href: string;
  onClose: () => void;
};

const Item = ({ href, title, onClose }: Props) => {
  return (
    <DropdownMenuItem onClick={onClose} className="text-white">
      <Link className="w-full text-center" href={href}>
        {title}
      </Link>
    </DropdownMenuItem>
  );
};

export default Item;
