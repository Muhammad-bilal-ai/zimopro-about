import Image from "next/image";
import React from "react";

function Fifth_Section() {
  return (
    <div
      className="relative h-screen bg-cover bg-center"
      style={{ backgroundImage: `url("/fifth_section/image_1.png")` }}
    >
      <div className="absolute text-white text-center right-0 p-16 word-spacing tracking-widest whitespace-nowrap">
        <h1 className="font-semibold text-2xl pb-4">PERSONALISED FOR YOU</h1>
        <p className="text-slate-400">
          DELIVERING THOUSANDS OF PERSONALISED ALERTS
        </p>
        <p className="text-slate-400">
          EVERYDAY, OUR USERS CAN BE FIRST IN LINE WHEN
        </p>
        <p className="text-slate-400">THAT OPPURTUNITY OF A LIFETIME IS HERE</p>
      </div>
      <div className="absolute flex w-full items-center justify-center top-1/2 transform -translate-y-1/2">
        <div className="flex-1 flex justify-center">
          <Image
            src="/fifth_section/logo.png"
            alt="logo icon"
            width={547.74}
            height={134}
          />
        </div>
        <div className="flex-1 flex items-center justify-center space-x-2 text-white word-spacing whitespace-nowrap">
          <span>CREATE USER ID</span>
          <Image
            src="/fifth_section/arrow.png"
            alt="logo icon"
            width={44.87}
            height={18.7}
          />
        </div>
      </div>
    </div>
  );
}

export default Fifth_Section;
