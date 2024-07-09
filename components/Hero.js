import Image from "next/image";
import Header from "./header";
import { color, motion } from "framer-motion";
import { useState } from "react";

const Hero = ({ scrollToAboutUs }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className="relative h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/hero.png')" }}
    >
      <div>
        <div>
          <Header />
        </div>
        <motion.div
          initial={{ initial: 0, x: -100, y: -50 }}
          animate={{ initial: 1, x: 0, y: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute left-12 sm:left-1 md:left-12 sm:pt-18 md:pt-48"
        >
          <button>
            {" "}
            <Image
              src="/hero_section/back_arrow.png"
              alt="icon"
              width={99}
              height={0}
            />
          </button>
        </motion.div>
        {/* text area hero_section */}
        <motion.div
          initial={{ initial: 0, x: -100, y: -50 }}
          animate={{ initial: 1, x: 0, y: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute flex flex-col justify-center items-start text-white font-sans top-1/2 transform -translate-y-1/2 left-12 sm:left-2 md:left-12 word-spacing tracking-widest mb-8"
        >
          <h1 className="sm:text-sm: md:text-lg word-spacing tracking-widest">
            DISCOVER
          </h1>{" "}
          <p className="sm:text-sm md:text-5xl word-spacing tracking-widest py-4">
            A NEW WORLD
          </p>
          <p className="text-sm md:text-sm py-4" style={{ color: "#707070" }}>
            FOR THOSE WHO WISH FOR MORE...
          </p>
        </motion.div>
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-16">
          <p
            className="text-sm font-sans tracking-widest"
            style={{ color: "#707070" }}
          >
            BRINGING THE WORLD CLOSER TOGETHER
          </p>
        </div>
        <motion.div
          initial={{ y: 0 }}
          animate={isHovered ? { y: 0 } : { y: [0, 10, 0] }}
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
          onClick={scrollToAboutUs}
          transition={{ duration: 1, repeat: Infinity, ease: "easeOut" }}
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-6"
        >
          <Image
            src="/hero_section/down_path.png"
            alt="down_path"
            width={40}
            height={0}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
