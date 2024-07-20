import React from "react";
import { useTranslation } from "react-i18next";

function Global_Section() {
  const { t } = useTranslation("translation");
  return (
    <div
      className="relative h-screen w-full bg-cover bg-center flex justify-center items-center overflow-hidden"
      style={{ backgroundImage: `url("/sixth_section/global.png")` }}
    >
      <div className="text-center">
        <h1 className="font-semibold text-2xl py-4">{t("GLOBAL VISION")}</h1>
        <p className="text-slate-600 text-sm py-4 md:word-spacing tracking-tighter md:tracking-wider">
          {t("WITH A REMOTE CULTURE, DIVERSITY IS NATURALLY IN OUR DNA")}
        </p>
        <p className="text-slate-600 text-sm">
          {t(
            "BASED ACROSS THE GLOBE, MAKING UP OVER 23 DIFFERENT NATIONALITIES."
          )}
        </p>
      </div>
    </div>
  );
}

export default Global_Section;
