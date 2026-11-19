import React from "react";
import Image from "next/image";

export default function PioneersInfographic() {
  return (
    <div className="relative rounded-3xl bg-[#0B2852] border border-[#A9DCEB]/25 shadow-[0_24px_64px_rgba(4,15,34,0.65),inset_0_1px_0_rgba(169,220,235,0.22)] p-2 sm:p-4 overflow-hidden">
      {/* Subtle Brand Palette Rim Accent */}
      <div className="absolute inset-x-12 top-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#D8C64B]/65 to-transparent pointer-events-none" />
      <div className="absolute inset-x-12 bottom-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#A9DCEB]/45 to-transparent pointer-events-none" />

      <div className="relative rounded-2xl overflow-hidden bg-[#0B2852]">
        <Image
          src="/images/sathya-pioneers-brand.png"
          alt="SATHYA Technology Services: Pioneers in SpaceTech Application Services — Who We Are (Established in 1997, Backed by an Expert Team) and Our Core Expertise"
          width={2048}
          height={1366}
          quality={95}
          sizes="(max-width: 1280px) 100vw, 1240px"
          className="w-full h-auto block object-contain"
        />
      </div>
    </div>
  );
}
