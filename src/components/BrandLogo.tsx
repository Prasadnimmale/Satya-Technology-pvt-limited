import React from "react";

interface BrandLogoProps {
  compact?: boolean;
  className?: string;
}

export default function BrandLogo({ compact = false, className = "" }: BrandLogoProps) {
  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      {/* Earth + Orbital Ring + Satellite Mark (faithful to official Sathya logo) */}
      <div className="relative flex-shrink-0 w-11 h-11 sm:w-12 sm:h-12">
        <svg
          viewBox="0 0 80 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-[0_0_12px_rgba(169,220,235,0.35)]"
          aria-hidden="true"
        >
          <defs>
            <radialGradient id="sathyaGlobe" cx="38%" cy="32%" r="68%">
              <stop offset="0%" stopColor="#A9DCEB" />
              <stop offset="42%" stopColor="#1C6E9C" />
              <stop offset="82%" stopColor="#123D70" />
              <stop offset="100%" stopColor="#071B38" />
            </radialGradient>
            <linearGradient id="sathyaOrbit" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#1CC4F7" />
              <stop offset="60%" stopColor="#A9DCEB" />
              <stop offset="100%" stopColor="#1C6E9C" stopOpacity="0.2" />
            </linearGradient>
          </defs>

          {/* Outer upper orbital arc */}
          <path
            d="M10 43C15 24 35 14 53 19"
            stroke="#A9DCEB"
            strokeWidth="1.8"
            strokeLinecap="round"
            opacity="0.85"
          />

          {/* Earth Globe */}
          <circle cx="35" cy="46" r="22" fill="url(#sathyaGlobe)" stroke="#A9DCEB" strokeOpacity="0.45" strokeWidth="1" />

          {/* Subtle landmass & graticule lines */}
          <ellipse cx="35" cy="46" rx="11" ry="22" stroke="#A9DCEB" strokeOpacity="0.22" strokeWidth="0.8" />
          <path d="M14 46H56" stroke="#A9DCEB" strokeOpacity="0.22" strokeWidth="0.8" />
          <path
            d="M25 33C29 31 36 31 41 35C44 38 42 43 39 47C37 50 36 53 34 55C32 51 30 47 26 45C23 43 22 37 25 33Z"
            fill="#D4E0EF"
            fillOpacity="0.78"
          />

          {/* Dynamic lower orbital swoosh */}
          <path
            d="M7 55C4 64 21 65 40 56C52 50 61 42 64 35C59 42 47 49 34 53C19 58 10 56 14 47L7 55Z"
            fill="url(#sathyaOrbit)"
          />

          {/* Orbiting Satellite (Top Right) */}
          <g transform="translate(55, 18) rotate(32)">
            {/* Solar Wings */}
            <rect x="-15" y="-3" width="10" height="6" rx="0.8" fill="#123D70" stroke="#A9DCEB" strokeWidth="1" />
            <line x1="-10" y1="-3" x2="-10" y2="3" stroke="#A9DCEB" strokeWidth="0.7" />
            <rect x="5" y="-3" width="10" height="6" rx="0.8" fill="#123D70" stroke="#A9DCEB" strokeWidth="1" />
            <line x1="10" y1="-3" x2="10" y2="3" stroke="#A9DCEB" strokeWidth="0.7" />
            {/* Bus */}
            <rect x="-3.5" y="-4.5" width="7" height="9" rx="1.5" fill="#FFFFFF" stroke="#1C6E9C" strokeWidth="1" />
            <circle cx="0" cy="5.5" r="1.5" fill="#D8C64B" />
          </g>

          {/* Signal Waves from Satellite to Earth */}
          <path d="M46 25C48 27 49 30 48 33" stroke="#A9DCEB" strokeWidth="1.3" strokeLinecap="round" />
          <path d="M43 28C45 30 45.5 32 45 34.5" stroke="#D8C64B" strokeWidth="1.3" strokeLinecap="round" />
        </svg>
      </div>

      {/* Vertical Cyan Divider */}
      <div className="h-9 w-[1.5px] bg-gradient-to-b from-transparent via-[#A9DCEB]/70 to-transparent hidden xs:block sm:block" />

      {/* Wordmark */}
      <div className="flex flex-col leading-none">
        <div className="flex items-baseline tracking-wide">
          <span className="text-xl sm:text-[23px] font-bold text-white tracking-[0.03em]">
            Sathy
          </span>
          {/* Iconic Delta 'A' with Cyan Inner Core */}
          <svg
            viewBox="0 0 24 22"
            className="w-[18px] h-[17px] sm:w-[20px] sm:h-[19px] ml-[1px] inline-block self-baseline translate-y-[1px]"
            fill="none"
            aria-label="a"
          >
            <path
              d="M12 1.5L22.5 20.5H17.6L12 10.2L6.4 20.5H1.5L12 1.5Z"
              fill="#FFFFFF"
            />
            <polygon points="12,12.6 16.2,20.5 7.8,20.5" fill="#29C5F6" />
          </svg>
        </div>

        <span className="text-[10.5px] sm:text-[11.5px] font-medium text-[#D4E0EF] tracking-[0.02em] mt-0.5">
          Technology Services Pvt. Ltd.
        </span>

        {!compact && (
          <div className="flex items-center gap-1.5 mt-1">
            <span className="h-[1px] w-3 bg-[#A9DCEB]/60" />
            <span className="text-[8.5px] sm:text-[9px] font-semibold tracking-[0.2em] text-[#A9DCEB] uppercase">
              SPACE • AI • GEOSPATIAL
            </span>
            <span className="h-[1px] w-3 bg-[#A9DCEB]/60" />
          </div>
        )}
      </div>
    </div>
  );
}
