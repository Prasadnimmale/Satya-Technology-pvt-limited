import React from "react";
import { Search, Radio, AlertTriangle, Ship, Anchor, Layers } from "lucide-react";

const trackedVessels = [
  { name: "MT FTM 22", draught: "387m", x: "31%", y: "31%", status: "normal" },
  { name: "PROCADIA TUG 55", draught: "22m", x: "42%", y: "26%", status: "loiter" },
  { name: "LNG CROSS RIVER", draught: "333m", x: "53%", y: "34%", delta: "-6.5m", status: "sts" },
  { name: "JASCON 26", draught: "390m", x: "50%", y: "45%", status: "sts" },
  { name: "AFSS ADRIENNE", draught: "114m", x: "46%", y: "56%", delta: "-10.1m", status: "dark" },
  { name: "PRINCESS AWENI", draught: "80m", x: "67%", y: "36%", status: "sts" },
  { name: "GULF TEAL", draught: "499m", x: "69%", y: "48%", status: "loiter" },
  { name: "SEA HORIZON", draught: "90m", x: "79%", y: "24%", delta: "+4m", status: "normal" },
  { name: "UGBANA", draught: "197m", x: "76%", y: "56%", delta: "+1.3m", status: "loiter" },
  { name: "JUB PIONEER", draught: "171m", x: "60%", y: "60%", status: "normal" },
  { name: "TAHIO VERDE ISLAND", draught: "335m", x: "67%", y: "67%", status: "normal" },
  { name: "USAN FPSO", draught: "156m", x: "58%", y: "79%", delta: "+13.7m / -18.9m", status: "dark" },
  { name: "PLATA NORTH", draught: "489m", x: "33%", y: "55%", status: "normal" },
  { name: "ALFRED TEMILE 10", draught: "397m", x: "36%", y: "69%", status: "normal" },
  { name: "CP FORMIDABLE", draught: "59m", x: "20%", y: "76%", status: "normal" },
  { name: "GUARDIAN 13", draught: "373m", x: "41%", y: "89%", status: "loiter" },
];

export default function MDAOperationalView() {
  return (
    <div className="space-y-5">
      {/* Exact Brochure Heading */}
      <div className="text-center space-y-1.5">
        <h3 className="text-2xl sm:text-3xl font-bold text-[#D8C64B]">
          A View of Sathya-MDA Operational Picture
        </h3>
        <p className="text-sm sm:text-base font-semibold text-[#D8C64B]/95 tracking-wide">
          Showing AIS, Loitering, STS Transfers, Draught Changes &amp; Dark Vessel Activities
        </p>
      </div>

      {/* Framed Maritime Intelligence Visual Panel */}
      <div className="brochure-frame rounded-3xl bg-[#071B38] p-3 sm:p-5 overflow-hidden">
        {/* Top Telemetry Strip */}
        <div className="flex flex-wrap items-center justify-between gap-3 px-4 py-3 rounded-t-2xl bg-[#0B2852] border-b border-[#A9DCEB]/20 text-xs">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#123D70] border border-[#D8C64B]/45 text-[#D8C64B] font-semibold">
              <Radio className="w-3.5 h-3.5" />
              SATHYA-MDA UNIFIED PICTURE
            </span>
            <span className="hidden sm:inline text-[#D4E0EF]">
              Layers: AIS • SAR • Optical • Thermal • ENC • Subsea Pipelines &amp; Cables
            </span>
          </div>

          <div className="flex items-center gap-4 text-[11px] text-[#A9DCEB]">
            <span className="inline-flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#D8C64B]" />
              Loitering / STS Cluster
            </span>
            <span className="inline-flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full border-2 border-[#A9DCEB] bg-[#123D70]" />
              Verified AIS Track
            </span>
            <span className="inline-flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-white shadow-[0_0_8px_#fff]" />
              Dark / Draught Anomaly
            </span>
          </div>
        </div>

        {/* Geospatial Maritime Canvas */}
        <div className="relative w-full h-[460px] sm:h-[540px] lg:h-[600px] rounded-b-2xl bg-[#06152B] overflow-hidden select-none">
          {/* Bathymetry & Ocean Depth Gradients */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(circle at 64% 42%, rgba(216,198,75,0.22) 0%, rgba(28,110,156,0.18) 34%, rgba(6,21,43,0.98) 72%)",
            }}
          />
          <div className="absolute inset-0 orbital-grid opacity-35" />

          {/* SVG Coastal Landmass, ENC Bathymetry Contours, Subsea Cables & Loitering Heat Clusters */}
          <svg
            viewBox="0 0 1000 600"
            preserveAspectRatio="none"
            className="absolute inset-0 w-full h-full"
            aria-hidden="true"
          >
            {/* Coastal Delta Landmass (Top-Left to Top-Center like Brochure Page 2) */}
            <path
              d="M0,0 L620,0 C595,38 552,65 495,72 C442,78 408,112 355,118 C295,125 262,88 212,62 C162,36 92,28 0,18 Z"
              fill="#153B38"
              stroke="#A9DCEB"
              strokeOpacity="0.35"
              strokeWidth="1.5"
            />
            {/* River Tributary Channels */}
            <path
              d="M310,0 C318,38 335,76 355,118 M395,0 C392,42 380,82 365,114 M470,0 C465,30 452,58 442,82"
              stroke="#0B2852"
              strokeWidth="3.5"
              fill="none"
            />

            {/* ENC Bathymetry Contours */}
            <path
              d="M0,110 Q320,210 680,145 T1000,190"
              stroke="#1C6E9C"
              strokeOpacity="0.35"
              strokeWidth="1.2"
              strokeDasharray="6 6"
              fill="none"
            />
            <path
              d="M0,250 Q380,350 740,285 T1000,340"
              stroke="#1C6E9C"
              strokeOpacity="0.28"
              strokeWidth="1.2"
              strokeDasharray="6 6"
              fill="none"
            />

            {/* Subsea Oil & Gas Pipeline + Telecom Cable Corridors */}
            <path
              d="M358,116 L505,265 L585,468 M505,265 L695,285 L810,160"
              stroke="#A9DCEB"
              strokeOpacity="0.4"
              strokeWidth="1.8"
              strokeDasharray="3 5"
              fill="none"
            />

            {/* Yellow Anomaly / Loitering / STS Density Halos (faithful to Brochure Page 2) */}
            <circle cx="535" cy="215" r="56" fill="#D8C64B" fillOpacity="0.22" />
            <circle cx="675" cy="235" r="78" fill="#D8C64B" fillOpacity="0.28" />
            <circle cx="715" cy="275" r="54" fill="#D8C64B" fillOpacity="0.24" />
            <circle cx="585" cy="470" r="46" fill="#D8C64B" fillOpacity="0.24" />
            <circle cx="490" cy="340" r="34" fill="#D8C64B" fillOpacity="0.18" />
          </svg>

          {/* Brochure IMO Search Pill (Visual Representation) */}
          <div className="absolute top-5 left-1/2 -translate-x-1/2 z-20 w-64 sm:w-80 px-4 py-2 rounded-xl bg-white/92 text-[#0B2852] shadow-xl flex items-center justify-between text-xs sm:text-sm font-medium">
            <span className="inline-flex items-center gap-2 text-[#123D70]">
              <Search className="w-4 h-4 text-[#1C6E9C]" />
              IMO / MMSI / Dark Target Correlation
            </span>
            <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-[#0B2852] text-[#D8C64B]">
              LIVE AI
            </span>
          </div>

          {/* Plotted Vessels & Draught Change Telemetry */}
          {trackedVessels.map((v) => {
            const isAlert = v.status === "dark" || v.status === "sts";
            const isLoiter = v.status === "loiter";

            return (
              <div
                key={v.name}
                style={{ left: v.x, top: v.y }}
                className="absolute -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col items-center"
              >
                {/* Draught Change Badge */}
                {v.delta && (
                  <span className="mb-1 px-1.5 py-0.5 rounded bg-[#071B38]/95 border border-[#D8C64B] text-[10px] font-bold text-[#D8C64B] whitespace-nowrap shadow">
                    {v.delta}
                  </span>
                )}

                {/* Circular Vessel Radar Marker */}
                <div
                  className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center border-2 shadow-md ${
                    isAlert
                      ? "bg-[#D8C64B]/30 border-[#D8C64B] shadow-[0_0_16px_rgba(216,198,75,0.65)]"
                      : isLoiter
                      ? "bg-[#1C6E9C]/45 border-[#D8C64B]/80"
                      : "bg-[#0B2852]/85 border-[#A9DCEB]/75"
                  }`}
                >
                  <span
                    className={`w-2 h-2 rounded-full ${
                      isAlert ? "bg-white" : "bg-[#D8C64B]"
                    }`}
                  />
                </div>

                {/* Vessel Callout Label */}
                <div className="mt-1 text-center leading-tight hidden sm:block">
                  <div className="text-[9.5px] font-bold text-white tracking-wider drop-shadow-[0_1px_3px_rgba(0,0,0,0.95)] whitespace-nowrap">
                    {v.name}
                  </div>
                  <div className="text-[9px] font-medium text-[#A9DCEB] drop-shadow-[0_1px_2px_rgba(0,0,0,0.95)]">
                    {v.draught}
                  </div>
                </div>
              </div>
            );
          })}

          {/* Bottom Operational Telemetry Summary Cards */}
          <div className="absolute bottom-3 inset-x-3 sm:bottom-4 sm:inset-x-5 z-20 grid grid-cols-2 lg:grid-cols-4 gap-2.5">
            {[
              {
                icon: Ship,
                label: "AIS & SAR Fusion",
                val: "Multi-Spectral + S-AIS",
              },
              {
                icon: AlertTriangle,
                label: "Dark & STS Detection",
                val: "Draught & RF Verified",
              },
              {
                icon: Anchor,
                label: "Subsea Asset Guard",
                val: "Cables, Rigs & Pipelines",
              },
              {
                icon: Layers,
                label: "Airborne Verification",
                val: "Drone EO/IR + RF SIGINT",
              },
            ].map((stat) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.label}
                  className="rounded-xl bg-[#071B38]/92 backdrop-blur-md border border-[#A9DCEB]/25 px-3 py-2.5 flex items-center gap-2.5"
                >
                  <div className="p-2 rounded-lg bg-[#123D70] text-[#D8C64B] flex-shrink-0">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[10px] uppercase tracking-wider text-[#A9DCEB] truncate">
                      {stat.label}
                    </div>
                    <div className="text-xs font-bold text-white truncate">
                      {stat.val}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
