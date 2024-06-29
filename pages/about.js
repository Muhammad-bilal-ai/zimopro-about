import React from "react";
import Image from "next/image";

function about() {
  return (
    <div
      className="relative min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url('/2023-01-19_22-48-19.png')` }}
    >
      <div className="absolute top-16 left-16 w-16 h-2">
        <Image src="/Rectangle 178.png" alt="Icon" width={50} height={50} />
      </div>
    </div>
  );
}
export default about;
