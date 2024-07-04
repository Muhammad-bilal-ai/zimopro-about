import React from "react";

function Global_Section() {
  return (
    <div
      className="relative h-screen w-full bg-cover bg-center flex justify-center items-center"
      style={{ backgroundImage: `url("/sixth_section/global.png")` }}
    >
      <div className="text-center">
        <h1 className="font-semibold text-2xl py-4">GLOBAL VISION</h1>
        <p className="text-slate-600 text-sm py-4 whitespace-nowrap word-spacing tracking-wider">
          WITH A REMOTE CULTURE, DIVERSITY IS NATURALLY IN OUR DNA
        </p>
        <p className="text-slate-600 text-sm">
          BASED ACROSS THE GLOBE, MAKING UP OVER 23 DIFFERENT NATIONALITIES.
        </p>
      </div>
    </div>
  );
}

export default Global_Section;
