import React from "react";
import Image from "next/image";
import Header from "./header";

const Hero = () => {
  return (
    <div
      className="relative h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/hero.png')" }}
    >
      <div>
        <div>
          <Header />
        </div>
        <div className="absolute left-12 pt-48">
          <Image
            src="/hero_section/back_arrow.png"
            alt="icon"
            width={99}
            height={0}
          />
        </div>
        {/* text area hero_section */}
        <div className="absolute text-white py-4 font-sans pt-72 left-12 word-spacing tracking-widest">
          <h1>DISCOVER</h1>{" "}
          <p className="text-5xl sm:text-xs md:text-5xl">A NEW WORLD</p>
          <p className="text-sm py-4 text-slate-600">
            FOR THOSE WHO WISH FOR MORE...
          </p>
        </div>
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-16">
          <p className="text-sm text-slate-600 font-sans tracking-widest">
            BRINGING THE WORLD CLOSER TOGETHER
          </p>
        </div>
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-6">
          <Image
            src="/hero_section/down_path.png"
            alt="down_path"
            width={40}
            height={0}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
