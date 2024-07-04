import Image from "next/image";
import React from "react";

function Forth_section() {
  return (
    <div className="relative h-screen w-full bg-white bg-cover bg-center">
      <div className="absolute h-screen flex justify-between itmes-center left-12 right-12">
        <div className="flex-1 flex flex-col justify-center">
          <Image
            src="/Forth_section/zimo_logo.png"
            alt="zimo logo"
            width={565.7}
            height={152.98}
          />
          <h1 className="text-4xl text-slate-700 font-sans tracking-widest word-spacing mt-8">
            ONE SOURCE
          </h1>
          <p className="text-4xl font-sans font-semibold text-slate-800 tracking-widest word-spacing py-2">
            ENTRY TICKETS
          </p>
          <p className="text-sm font-sans text-slate-400 tracking-widest word-spacing py-2">
            FOR ALL PREMIUM LISTINGS
          </p>
        </div>
        <div className="flex-1 flex flex-col justify-center">
          <Image
            src="/Forth_section/image_1.png"
            alt="zimo logo"
            width={1083}
            height={0}
          />
          <h1 className="text-4xl text-slate-700 font-sans tracking-widest word-spacing mt-8 text-center">
            LET YOUR DREAMS FIND YOU
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Forth_section;
