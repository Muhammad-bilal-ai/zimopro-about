import Image from "next/image";
import React, { useRef } from "react";
import { motion, useInView, ref } from "framer-motion";

function Entry_Ticket() {
  const isInView = useInView({
    triggerOnce: true,
    threshold: 1,
  });
  return (
    <div
      // refs
      className="relative h-screen w-full bg-white bg-cover bg-center"
    >
      <div className="absolute container h-screen flex-row md:flex justify-between itmes-center p-4 md:p-12 space-x-2 md:space-x-8">
        <motion.div
          // initial={{ opacity: 0, x: -200, y: 0 }}
          // animate={
          //   isInView
          //     ? { opacity: 1, x: 0, y: 0 }
          //     : { opacity: 0, x: -200, y: 0 }
          // }
          // transition={{ duration: 2 }}
          className="flex-1 flex flex-col justify-center"
        >
          <Image
            src="/forth_section/zimo_logo.png"
            alt="zimo logo"
            width={565}
            height={0}
            className="w-66 md:w-70 lg:w-78"
          />
          <h1 className="text-3xl text-center md:text-start md:text-4xl text-slate-700 font-sans tracking-widest word-spacing mt-8">
            ONE SOURCE
          </h1>
          <p className="text-2xl text-center md:text-start md:text-4xl font-sans font-semibold text-slate-800 tracking-widest word-spacing py-1 md:py-2">
            ENTRY TICKETS
          </p>
          <p className="text-sm text-center md:text-start md:text-base font-sans text-slate-400 tracking-widest word-spacing py-1 md:py-2">
            FOR ALL PREMIUM LISTINGS
          </p>
        </motion.div>
        <div className="flex-1 flex flex-col justify-center">
          <Image
            className="w-full h-auto"
            src="/forth_section/image_1.png"
            alt="zimo logo"
            width={1083}
            height={718}
          />
          <h1 className="text-2xl md:text-4xl text-slate-700 font-sans tracking-widest word-spacing mt-8 text-center">
            LET YOUR DREAMS FIND YOU
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Entry_Ticket;