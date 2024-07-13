import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="absolute w-full flex justify-between items-center px-4 sm:px-8 md:px-12 py-4 lg:py-8"
    >
      {/* Left side */}
      <div className="flex items-center space-x-4 md:space-x-6 lg:space-x-8">
        <div className="flex-shrink-0">
          <Image
            src="/hero_section/nav_left_1.png"
            alt="icon"
            width={60}
            height={0}
            className="w-8 md:w-8 lg:w-12"
          />
        </div>
        <div className="flex-shrink-0">
          <Image
            src="/hero_section/zimo_logo_2.png"
            alt="icon"
            width={184}
            height={0}
            className="w-18 md:w-24 lg:w-36"
          />
        </div>
        <div className="text-white font-sans text-xs md:text-base pt-2 md:pt-4">
          ABOUT
        </div>
      </div>

      {/* Center */}
      <div className="hidden md:flex px-4 py-4 flex-shrink-0">
        <Image
          src="/hero_section/center_logo.png"
          alt="icon"
          width={204}
          height={0}
          className="w-32 md:w-40 lg:w-48"
        />
      </div>

      {/* Right side */}
      <div className="flex items-center space-x-6 md:space-x-6 lg:space-x-8">
        <div className="hidden md:flex px-4 py-4 space-x-2">
          <Image
            src="/hero_section/date_time_location.png"
            alt="icon"
            width={292}
            height={0}
            className="w-24 md:w-36 lg:w-44"
          />
          <Image
            src="/hero_section/flag.png"
            alt="icon"
            width={37}
            height={0}
            className="w-4 md:w-6 lg:w-8"
          />
        </div>
        <div className="flex-shrink-0">
          <Image
            src="/hero_section/cart.png"
            alt="icon"
            width={20}
            height={0}
            className="w-4 md:w-4 lg:w-6"
          />
        </div>
        <div className="flex-shrink-0">
          <Image
            src="/hero_section/user.png"
            alt="icon"
            width={20}
            height={0}
            className="w-4 md:w-6 lg:w-6"
          />
        </div>
      </div>
    </motion.header>
  );
}

export default Header;
