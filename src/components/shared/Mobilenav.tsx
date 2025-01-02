import React from "react";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Separator } from "@radix-ui/react-separator";
import Image from "next/image";
import NavItems from "./NavItems";

export default function Mobilenav() {
  return (
    <nav className="md:hidden ">
      <Sheet>
        <SheetTrigger className="align-middle">
          <Image
            src="icons/menu.svg"
            alt="menu"
            width={24}
            height={24}
            className="cursor-pointer"
          />
        </SheetTrigger>
        <SheetContent className="flex flex-col gap-6 bg-white">
          <SheetTitle>
            <Image src="images/logo.svg" alt="logo" width={128} height={38} />
          </SheetTitle>
          <Separator className="border border-gray-50" />
          <NavItems />
        </SheetContent>
      </Sheet>
    </nav>
  );
}
