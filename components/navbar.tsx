"use client";
import { FC } from "react";
import Image from "next/image";

import { Menu } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useSheet } from "@/hooks/use-sheet-store";
import Link from "next/link";

interface NavbarProps {}

const Navbar: FC<NavbarProps> = ({}) => {
  const { onOpen } = useSheet();
  return (
    <nav
      className="
        w-full 
        h-20 
        relative 
        shadow-black/20 
        shadow
        md:flex
        justify-between
        items-center
        px-5
        "
    >
      <Image
        className="mx-auto object-cover md:mx-0 md:my-auto"
        src={"/logo2.png"}
        width={200}
        height={100}
        alt="moaz-logo"
      />
      <DropdownMenu>
        <DropdownMenuTrigger className="md:hidden absolute top-1/2 -translate-y-1/2 left-3">
          <Menu className="text-main w-8 h-8" />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="bg-main ml-3">
          <DropdownMenuItem className="text-white justify-center">
            خدماتي
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem
            onClick={onOpen}
            className="text-white justify-center"
          >
            اعمالي
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem className="text-white justify-center">
            تواصل معي
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem className="text-white justify-center">
            المدونه
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <ul className="md:flex hidden gap-3 text-sm text-main">
        <li className="cursor-pointer hover:text-main/70 transition">
          <Link href="#services">خدماتي</Link>
        </li>
        <li className="cursor-pointer hover:text-main/70 transition">اعمالي</li>
        <li className="cursor-pointer hover:text-main/70 transition">
          تواصل معي
        </li>
        <li className="cursor-pointer hover:text-main/70 transition">
          المدونه
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
