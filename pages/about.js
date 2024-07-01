import React from "react";
import Image from "next/image";

function about() {
  return (
    <div
      className="relative min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url('/2023-01-19_22-48-19.png')` }}
    >
      <div className="absolute top-[68px] left-[60px] w-[66px] h-[7px] bg-transparent bg-no-repeat">
        <Image src="/Rectangle 178.png" alt="Icon" width={50} height={50} />
      </div>
      <div className="absolute top-[85px] left-[60px] w-[66px] h-[17px] bg-transparent bg-no-repeat">
        <Image src="/Group 3054.png" alt="Icon" width={50} height={50} />
      </div>
      <div className="absolute top-[111px] left-[60px] w-[66px] h-[7px] bg-transparent bg-no-repeat">
        <Image src="/Rectangle 178.png" alt="Icon" width={50} height={50} />
      </div>
      <div className="absolute top-[68px] left-[165px] w-[118px] h-[50px] bg-transparent bg-no-repeat">
        <Image src="/Group 3285.png" alt="icon" width={78} height={128} />
      </div>
      <div className="absolute top-[62px] left-[245px] w-[61px] h-[50px] bg-transparent bg-no-repeat">
        <Image src="/Path 7808.png" alt="icon" width={50} height={60} />
      </div>
      <div className="absolute top-[104px] left-[380px] w-[80px] h-[15px] bg-transparent">
        <Image src="/Path 27304.png" alt="icon" width={80} height={14} />
      </div>
      <div>
        <Image src="/Path 1.png" alt="icon" width={63} height={50} />
      </div>
    </div>
  );
}
export default about;
