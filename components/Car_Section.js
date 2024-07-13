import Image from "next/image";
import React from "react";

function Car_Section() {
  return (
    <div className="relative bg-white h-screen w-full bg-cover bg-center ">
      <div className="absolute flex flex-col md:flex-row justify-between items-center h-screen -top-1/2">
        <div className="flex p-16 m-8">
          <Image src="/final_section/car.png" width={519} height={0} />
        </div>
        <div className="flex-1 p-16 m-8">
          <Image src="/final_section/logo.png" width={519} height={0} />
        </div>
      </div>
    </div>
  );
}

export default Car_Section;
