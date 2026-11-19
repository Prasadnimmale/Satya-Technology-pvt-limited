import React from "react";

interface SectionHeaderProps {
  kicker: string;
  title: string;
  highlight?: string;
  subtitle?: string;
  align?: "left" | "center";
  goldHeading?: boolean;
}

export default function SectionHeader({
  kicker,
  title,
  highlight,
  subtitle,
  align = "left",
  goldHeading = false,
}: SectionHeaderProps) {
  const isCenter = align === "center";

  return (
    <div className={`max-w-3xl ${isCenter ? "mx-auto text-center" : ""}`}>
      <div
        className={`inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#123D70]/80 border border-[#D8C64B]/35 mb-4 ${
          isCenter ? "justify-center" : ""
        }`}
      >
        <span className="w-2 h-2 rounded-full bg-[#D8C64B] shadow-[0_0_8px_#D8C64B]" />
        <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.18em] text-[#D8C64B]">
          {kicker}
        </span>
      </div>

      <h2
        className={`text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight leading-[1.18] ${
          goldHeading ? "text-[#D8C64B]" : "text-white"
        }`}
      >
        {title}{" "}
        {highlight && <span className="text-[#D8C64B]">{highlight}</span>}
      </h2>

      {subtitle && (
        <p className="mt-4 text-base sm:text-lg text-[#D4E0EF] leading-relaxed font-normal">
          {subtitle}
        </p>
      )}
    </div>
  );
}
