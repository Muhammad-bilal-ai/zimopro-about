import React from "react";
import Image from "next/image";

function Yacht_Section() {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      <Image
        src="/final_section/image.png"
        alt="A descriptive alt text for the yacht section image"
        fill
        style={{ objectFit: "cover" }}
        quality={100}
        priority={true}
      />
    </div>
  );
}

export default Yacht_Section;
