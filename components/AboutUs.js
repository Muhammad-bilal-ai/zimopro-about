import React, { forwardRef, useRef, useState } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useTranslation } from "react-i18next";
const AboutUs = forwardRef(({ scrollToCategories }, ref) => {
  const { t } = useTranslation("common");
  const [isHovered, setIsHovered] = useState(false);
  const aboutUsRef = useRef(null);
  const isInView = useInView(aboutUsRef, {
    triggerOnce: true,
    treshold: 0.1,
  });
  return (
    <div
      ref={(node) => {
        aboutUsRef.current = node;
        ref.current = node;
      }}
      className="relative flex h-screen w-full bg-white overflow-hidden"
    >
      {/* top text */}
      <div className="absolute text-sm text-center md:word-spacing md:tracking-wider md:text-lg left-1/2 transform -translate-x-1/2 -transalte-y-1/2 text-slate-700 font-sans mt-4 md:mt-8 overflow-hidden">
        {t("A REAL ESTATE AND PROPERTY PLATFORM THAT IS CHANGING THE WORLD")}
      </div>
      {/* first aside in the left */}
      <motion.aside
        initial={{ opacity: 0, x: -200, y: -200 }}
        animate={
          isInView
            ? { opacity: 1, x: 0, y: 0 }
            : { opacity: 0, x: -200, y: -200 }
        }
        transition={{ duration: 2 }}
        className="absolute top-1/4 flex flex-col justify-between left-16  md:left-12 py-2 text-slate-700 font-sans font-semibold tracking-wider text-center md:text-left"
      >
        <div>
          <p className="text-sm md:text-xl word-spacing">
            {t("A REVOLUTIONARY PLATFORM")}
          </p>
        </div>
        <div className="text-sm md:text-4xl md:tracking-normal word-spacing">
          {t("ENTRIES - SELLERS")}
        </div>
        <div className="text-xl md:text-5xl md:word-spacing tracking-widest md:tracking-wider">
          {t("WORLDWIDE")}
        </div>
      </motion.aside>
      {/* 2nd aside in the right */}
      <motion.aside
        initial={{ opacity: 0, x: 200, y: 200 }}
        animate={
          isInView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, x: 200, y: 200 }
        }
        transition={{ duration: 2 }}
        className="absolute top-1/3 right-0 px-8 pb-16 py-16 md:py-0"
      >
        <div className="">
          <Image
            src="/AboutUs_Section/logo_4.png"
            alt="down_path"
            width={589.6}
            height={0}
            className="w-48 md:w-96"
          />
        </div>
        <div className="text-slate-700 font-sans font-semibold mt-2 md:mt-8 md:word-spacing text-center text-xs md:text-lg md:block sm:mt-16">
          <p className="mt-1 md:mt-2">
            {t("CONNECTING USERS FROM ACROSS THE GLOBE")}
          </p>
          <p className="mt-1 md:mt-2">
            {t("TO FACILITATE LIFE'S MOST IMPORTANT")}
          </p>
          <p className="mt-1 md:mt-2">{t("PERSONAL TRANSACTIONS")}</p>
        </div>
      </motion.aside>
      {/* 3rd aside in the left */}
      <motion.aside
        initial={{ opacity: 0, x: -200, y: -200 }}
        animate={
          isInView
            ? { opacity: 1, x: 0, y: 0 }
            : { opacity: 0, x: -200, y: -200 }
        }
        transition={{ duration: 2 }}
        className="absolute  top-1/2 left-4 md:left-12 pt-24 md:pt-48 text-center md:text-left text-slate-700 font-sans font-semibold word-spacing tracking-wider"
      >
        <div>
          <p className="text-sm md:text-xl">{t("THE BEST OF THE BEST")}</p>
          <p className="text-xs md:text-sm">
            {t(
              "A COMBINATION OF AUTOMATION AND MANUAL CURATION OUR PRO AGENTS AND"
            )}
          </p>
          <p className="text-xs md:text-sm">
            {t(
              "MODURATION TEAM SELECTS THE HIGHEST QUALITY LISTINGS ON THE MARKET"
            )}
          </p>
          <p className="text-xs md:text-sm">{t("FROM ACCROSS THE WORLD")}</p>
        </div>
      </motion.aside>
      <motion.div
        initial={{ y: 0 }}
        animate={isHovered ? { y: 0 } : { y: [0, 10, 0] }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        onClick={scrollToCategories}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "easeOut",
        }}
        className="absolute bottom-0 left-1/2 transform translate-x-1/2 mb-4 "
      >
        <Image
          src="/AboutUs_Section/down_b.png"
          alt="down_path"
          width={40}
          height={80}
        />
      </motion.div>
    </div>
  );
});

export default AboutUs;
