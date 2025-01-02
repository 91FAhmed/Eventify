import Link from "next/link";
import React from "react";
import Image from "next/image";

function Footer() {
  return (
    <footer className="border-t">
      <div className="flex-center wrapper  flex-between flex-col p-5 text-center sm:flex-row ">
        <Link href={"/"}>
          <Image src="/images/logo.svg" alt="logo" width={128} height={36} />
        </Link>
        <p>©️ Eventlify 2025,All rights reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
