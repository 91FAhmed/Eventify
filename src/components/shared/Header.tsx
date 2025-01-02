import Link from "next/link";
import React from "react";
import Image from "next/image";
import { SignedOut, SignedIn, UserButton } from "@clerk/nextjs";
import { Button } from "../ui/button";
import NavItems from "./NavItems";
import Mobilenav from "./Mobilenav";

export default function Header() {
  return (
    <header className="w-full border-b font-poppins text-stone-600">
      <div className="wrapper flex items-center justify-between">
        <Link href={"/"} className="w-36">
          <Image
            src="/images/logo.svg"
            width={128}
            height={38}
            alt="Eventify Logo"
          />
        </Link>
        <SignedIn>
          <nav className="md:flex-between hidden w-full max-w-xs">
            <NavItems />
          </nav>
        </SignedIn>
        <div className=" flex w-32 justify-end gap-3">
          <SignedIn>
            <UserButton />
            <Mobilenav />
          </SignedIn>
          <SignedOut>
            <Button
              asChild
              className="rounded-full bg-purple-600 font-semibold"
              size={"lg"}
            >
              <Link href={"/sign-in"}>Login</Link>
            </Button>
          </SignedOut>
        </div>
      </div>
    </header>
  );
}
