import Image from "next/image";
import React from "react";

function Fifth_Section() {
  return (
    <div
      className="relative h-screen bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: `url("/fifth_section/image_1.png")` }}
    >
      <div className="absolute text-white text-center right-0 p-16 whitespace-nowrap">
        <h1 className="font-semibold text-xl md:text-2xl pb-4 md:text-left">
          PERSONALISED FOR YOU
        </h1>
        <p className="text-slate-400 md:text-left text-xs md:text-base word-spacing tracking-wide">
          DELIVERING THOUSANDS OF PERSONALISED ALERTS
        </p>
        <p className="text-slate-400 md:text-left text-xs md:text-base tracking-wider">
          EVERYDAY, OUR USERS CAN BE FIRST IN LINE WHEN
        </p>
        <p className="text-slate-400 text-xs md:text-base text-left">
          THAT OPPURTUNITY OF A LIFETIME IS HERE
        </p>
      </div>
      <div className="absolute container space-y-16 md:space-y-0 flex flex-col  md:space-x-8 md:flex-row items-center top-1/2 transform -translate-y-1/2 p-4 md:p-12">
        <div className="flex-1 flex md:justify-start w-1/2">
          <Image
            className="w-full h-auto"
            src="/fifth_section/logo.png"
            alt="logo icon"
            width={547.74}
            height={134}
          />
        </div>

        <div className="flex-1 flex md:justify-end space-x-2 text-white word-spacing w-1/2 pt-8">
          <span className="text-sm md:text-base">CREATE USER ID</span>
          <Image
            className="w-fit h-fit"
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
