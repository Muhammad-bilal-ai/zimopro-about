import React from "react";
import Image from "next/image";

function AboutUs() {
  return (
    <div className="relative h-screen w-full bg-white">
      {/* top text */}
      <div className="absolute left-1/2 transform -translate-x-1/2 text-slate-700 font-sans text-base font-semibold mt-8">
        A REAL ESTATE AND PROPERTY PLATFORM THAT IS CHANGING THE WORLD
      </div>
      {/* first aside in the left */}
      <aside className="absolute top-1/4 flex flex-col justify-between left-8 py-2 text-slate-700 font-sans font-semibold tracking-wider">
        <div>
          <p className="text-xl">A REVOLUTIONARY PLATFORM</p>
        </div>
        <div className="text-4xl">ENTRIES - SELLERS</div>
        <div className="text-5xl">WORLDWIDE</div>
      </aside>
      {/* 2nd aside in the right */}
      <aside className="absolute top-1/3 right-0 px-8 pb-16">
        <div>
          <Image
            src="/AboutUs_Section/logo_4.png"
            alt="down_path"
            width={589.6}
            height={0}
          />
        </div>
        <div className="text-slate-700 font-sans text-base font-semibold mt-8 text-center">
          <p className="mt-2">CONNECTING USERS FROM ACROSS THE GLOBE</p>
          <p className="mt-2">TO FACILITATE LIFE'S MOST IMPORTANT</p>
          <p className="mt-2">PERSONAL TRANSACTIONS</p>
        </div>
      </aside>
      {/* 3rd aside in the left */}
      <aside className="absolute top-1/2 left-8 pt-48  text-slate-700 font-sans font-semibold word-spacing tracking-wider">
        <div>
          <p className="text-xl">THE BEST OF THE BEST</p>
          <p className="text-sm">
            A COMBINATION OF AUTOMATION AND MANUAL CURATION OUR PRO AGENTS AND
          </p>
          <p className="text-sm">
            MODURATION TEAM SELECTS THE HIGHEST QUALITY LISTINGS ON THE MARKET
          </p>
          <p className="text-sm">FROM ACCROSS THE WORLD</p>
        </div>
      </aside>
      <div className="absolute bottom-0 left-1/2 transform translate-x-1/2 mb-4 ">
        <Image
          src="/AboutUs_Section/down_b.png"
          alt="down_path"
          width={40}
          height={80}
        />
      </div>
    </div>
  );
}

export default AboutUs;
