import React from "react";
import Image from "next/image";

function about() {
  return (
    <div className="relative top-[0px] left-[0px] w-[1920px] h-[1080px] min-h-screen bg-cover bg-center">
      <Image
        src="/2023-01-19_22-48-19.png"
        alt="background image"
        layout="fill"
      />
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
      <div className="absolute top-[104px] left-[380px] w-[80px] h-[15px] bg-transparent bg-no-repeat">
        <Image src="/Path 27304.png" alt="icon" width={80} height={14} />
      </div>
      <div className="absolute top-[68px] left-[858px] w-[63px] h-[50px] bg-transparent bg-no-repeat">
        <Image src="/Path 1.png" alt="icon" width={63} height={50} />
      </div>
      <div className="absolute top-[68px] left-[910px] w-[63px] h-[50px] bg-transparent bg-no-repeat">
        <Image src="/Path 2.png" alt="icon" width={63} height={50} />
      </div>
      <div className="absolute top-[68px] left-[947px] w-[63px] h-[50px] bg-transparent bg-no-repeat">
        <Image src="/Path 3.png" alt="icon" width={63} height={50} />
      </div>
      <div className="absolute top-[68px] left-[999px] w-[63px] h-[50px] bg-transparent bg-no-repeat">
        <Image src="/Path 4.png" alt="icon" width={63} height={50} />
      </div>
      <div className="absolute top-[73px] left-[1284px] w-[292px] h-[39px] bg-transparent bg-no-repeat">
        <Image src="/Group 4560.png" alt="icon" width={292} height={39} />
      </div>
      <div className="absolute top-[80px] left-[1596px] w-[37px] h-[25px] bg-transparent bg-no-repeat">
        <Image src="/Group 3035.png" alt="icon" width={37} height={25} />
      </div>
      <div className="absolute top-[80px] left-[1724px] w-[21px] h-[25px] bg-transparent bg-no-repeat">
        <Image src="/Path 7582.png" alt="icon" width={21} height={25} />
      </div>
    </div>
  );
}
export default about;
