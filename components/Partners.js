import Image from "next/image";
import React from "react";
import { useTranslation } from "react-i18next";

function Partners() {
  const { t } = useTranslation("translation");
  return (
    <div className="relative w-screen h-screen bg-cover bg-center bg-white">
      <div className="absolute inset-0 flex flex-col md:flex-row space-y-6 md:space-x-6 p-6 justify-center items-center w-full h-screen top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="flex flex-col items-center">
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
              {t("PARTNERS")}
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
