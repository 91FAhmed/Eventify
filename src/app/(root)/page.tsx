import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

function Home() {
  return (
    <>
      <section className="bg-primary-50 bg-dotted-pattern bg-contain py-5 md:py-10 ">
        <div className="wrapper grid grid-cols-1 md:grid-cols-2 2xl:gap-0">
          <div className="flex flex-col justify-center gap-8 break-words">
            <h1 className="h1-bold ">
              Host,connect,celebrate your Events,Eventify Platform!
            </h1>
            <p className="p-regular-20 md:p-regular-24">
              Book Tickets and Learn from healpful tips from mentors in world
              class companies with global communities
            </p>
            <Button size="lg" asChild className="button w-full sm:w-fit">
              <Link href="#events">Explore</Link>
            </Button>
          </div>
          <Image
            src="/images/hero.png"
            alt="hero"
            width={1000}
            height={1000}
            className="max-h-[70vh] object-contain object-center 2xsl:max-h-[50vh]"
          />
        </div>
      </section>
    </>
  );
}

export default Home;
