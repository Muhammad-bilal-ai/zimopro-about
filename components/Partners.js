import Image from "next/image";
import React from "react";

function Partners() {
  return (
    <div className="relative w-screen h-screen bg-cover bg-center bg-white overflow-hidden">
      <div className="absolute inset-0 flex flex-row items-center justify-center left-12 sm:left-16 md:left-12 space-x-64">
        <div className="flex flex-col p-4 m-2">
          <div>
            {" "}
            <Image
              src="/partners/zimo_logo.png"
              alt="zimo_logo"
              width={308.3}
              height={0}
            />
          </div>

          <div>
            <h1 className=" text-slate-500 pt-8 text-6xl word-spacing tracking-wider">
              PARTNERS
            </h1>
          </div>
        </div>
        <div className="flex-1 flex-row left-1/2 top-1/2 p-12 ">
          <Image
            src="/partners/partners.png"
            alt="zimo_logo"
            width={296.81}
            height={120}
          />
        </div>
      </div>
    </div>
  );
}

export default Partners;
