"use client";

import Image from "next/image";

import { Menu } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Item from "./item";
import { useDropdown } from "@/hooks/use-dropdown";

const routes = [
  { title: "الرئيسية", href: "/" },
  { title: "اعمالي", href: "/works" },
];

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = ({}) => {
  const router = useRouter();
  const { isOpen, onClose, onOpen } = useDropdown();

  function onLogoClick() {
    router.push("/");
  }

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
        onClick={onLogoClick}
        className="cursor-pointer w-fit object-cover md:mx-0 md:my-auto"
        src={"/logo2.png"}
        width={500}
        height={500}
        alt="moaz-logo"
      />
      <DropdownMenu open={isOpen} onOpenChange={onClose}>
        <DropdownMenuTrigger
          onClick={onOpen}
          className="md:hidden absolute top-1/2 -translate-y-1/2 left-3"
        >
          <Menu className="text-main w-8 h-8" />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="bg-main ml-3">
          {routes.map((route, idx) => (
            <Item
              key={idx}
              href={route.href}
              title={route.title}
              onClose={onClose}
            />
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
      <ul className="md:flex hidden gap-3 text-sm text-main">
        {routes.map((route, idx) => (
          <li
            key={idx}
            className="cursor-pointer hover:text-main/70 transition"
          >
            <Link href={route.href}>{route.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
