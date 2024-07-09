import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="absolute w-full flex justify-between items-center px-12 sm:px-8 md:px-12 lg:px-12 pt-8 sm:pt-10 md:pt-12 lg:pt-12 xl:pt-12"
    >
      {/* left side */}
      <div className="flex items-center justify-between space-x-8 md:space-x-6 lg:space-x-8 ">
        <div>
          <Image
            src="/hero_section/nav_left_1.png"
            alt="icon"
            width={80}
            height={0}
          />
        </div>
        <div>
          <Image
            src="/hero_section/zimo_logo_2.png"
            alt="icon"
            width={184.9}
            height={0}
          />
        </div>
        <div className="hidden md:flex text-white font-sans text-base sm:text-xs md:text-base pt-8">
          ABOUT
        </div>
      </div>
      {/* center  */}
      <div>
        <Image
          src="/hero_section/center_logo.png"
          alt="icon"
          width={204.38}
          height={0}
        />
      </div>
      {/* right  */}
      <div className="hidden md:flex justify-between items-center space-x-8">
        <div>
          <Image
            src="/hero_section/date_time_location.png"
            alt="icon"
            width={292}
            height={0}
          />
        </div>
        <div>
          <Image
            src="/hero_section/flag.png"
            alt="icon"
            width={37.31}
            height={0}
          />
        </div>
        <div>
          <Image
            src="/hero_section/cart.png"
            alt="icon"
            width={20.89}
            height={0}
          />
        </div>
        <div>
          <Image
            src="/hero_section/user.png"
            alt="icon"
            width={20.59}
            height={0}
          />
        </div>
      </div>
    </motion.header>
  );
}

export default Header;
