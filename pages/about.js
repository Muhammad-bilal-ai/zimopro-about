import React from "react";
import Image from "next/image";
import Header from "@/components/header";

function about() {
  return (
    <>
      <Header />
      <div className="relative w-full h-screen lg:h-[140vh] 2xl:h-[120vh] 3xl:h-[110vh] overflow-hidden">
        <Image
          src="/2023-01-19_22-48-19.png"
          alt="background image"
          width={1921}
          height={1080}
        />
      </div>
    </>
  );
}
export default about;
