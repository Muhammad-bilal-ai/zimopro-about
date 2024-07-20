import Image from "next/image";
import React from "react";
import { useTranslation } from "react-i18next";

function Personalized() {
  const { t } = useTranslation("translation");
  return (
    <div
      className="relative h-screen bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: `url("/fifth_section/image_1.png")` }}
    >
      <div className="absolute text-white text-center right-0 p-16 whitespace-nowrap">
        <h1 className="font-semibold text-xl md:text-2xl pb-4 md:text-left">
          {t("PERSONALISED FOR YOU")}
        </h1>
        <p className="text-slate-400 md:text-left text-xs md:text-base word-spacing tracking-wide">
          {t("DELIVERING THOUSANDS OF PERSONALISED ALERTS")}
        </p>
        <p className="text-slate-400 md:text-left text-xs md:text-base tracking-wider">
          {t("EVERYDAY, OUR USERS CAN BE FIRST IN LINE WHEN")}
        </p>
        <p className="text-slate-400 text-xs md:text-base text-left">
          {t("THAT OPPURTUNITY OF A LIFETIME IS HERE")}
        </p>
      </div>
      <div className="absolute container space-y-16 md:space-y-0 flex flex-col  md:space-x-8 md:flex-row items-center top-1/2 transform -translate-y-1/2 p-4 md:p-12">
        <div className="flex justify-normal md:justify-start w-1/2">
          <Image
            className=""
            src="/fifth_section/logo.png"
            alt="logo icon"
            width={547.74}
            height={134}
          />
        </div>

        <div className="flex justify-normal md:justify-end space-x-2 text-white word-spacing w-1/2 pt-8">
          <span className="text-base md:text-base text-nowrap">
            {t("CREATE USER ID")}
          </span>
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

export default Personalized;
