import React from "react";
import { Satellite, Plane, Activity, Cpu, AlertCircle, ShieldCheck } from "lucide-react";

export default function BorderSecurityShield() {
  return (
    <div className="brochure-frame rounded-3xl bg-gradient-to-br from-[#071B38] via-[#0B2852] to-[#123D70] p-6 sm:p-8 lg:p-10 relative overflow-hidden">
      <div className="absolute inset-0 orbital-grid opacity-40 pointer-events-none" />

      {/* Brochure Page 3 Title Banner */}
      <div className="relative text-center max-w-3xl mx-auto mb-8 pb-6 border-b border-[#A9DCEB]/20">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#D8C64B]">
          SathyaSEEMA • Multi-Sensor Subsurface Fusion
        </span>
        <h3 className="text-2xl sm:text-3xl font-bold text-white mt-2">
          Sathya-BorderSecurity:{" "}
          <span className="text-[#D8C64B]">An AI Shield Against Underground Threats</span>
        </h3>
      </div>

      <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Left Column: The Challenge */}
        <div className="lg:col-span-5 flex flex-col justify-between rounded-2xl bg-[#071B38]/85 border border-[#A9DCEB]/20 p-6 space-y-5">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-[#A9DCEB] mb-4">
              <AlertCircle className="w-4 h-4 text-[#D8C64B]" />
              The Challenge: Detecting Invisible Threats
            </div>

            <div className="space-y-4">
              {[
                {
                  title: "Sophisticated Underground Tunnels",
                  desc: "Engineered cross-border structures built deep beneath the detection threshold of conventional surface surveillance systems.",
                },
                {
                  title: "Weak & Ambiguous Signals",
                  desc: "Subsurface excavation creates subtle micro-disturbances easily mistaken for routine environmental or agricultural activity.",
                },
                {
                  title: "High False Alarm Rates",
                  desc: "Isolated, single-sensor detection methods are episodic and struggle to separate genuine covert tunneling from background noise.",
                },
              ].map((item, idx) => (
                <div
                  key={item.title}
                  className="rounded-xl bg-[#0B2852]/80 border border-[#A9DCEB]/15 p-4"
                >
                  <div className="flex items-center gap-2.5">
                    <span className="w-6 h-6 rounded-full bg-[#123D70] border border-[#D8C64B]/50 text-[#D8C64B] text-xs font-bold flex items-center justify-center flex-shrink-0">
                      0{idx + 1}
                    </span>
                    <h4 className="text-sm sm:text-base font-bold text-white">
                      {item.title}
                    </h4>
                  </div>
                  <p className="text-xs sm:text-sm text-[#D4E0EF] mt-2 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-xl bg-[#123D70]/60 border border-[#A9DCEB]/20 px-4 py-3 text-xs text-[#D4E0EF]">
            <strong className="text-[#D8C64B]">Core Innovation:</strong> Longitudinal
            correlation &amp; probabilistic fusion across heterogeneous signals over time.
          </div>
        </div>

        {/* Right Column: The 4-Layer Integrated AI Solution */}
        <div className="lg:col-span-7 rounded-2xl bg-[#071B38]/85 border border-[#D8C64B]/35 p-6 space-y-5">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-[#D8C64B]">
            <ShieldCheck className="w-4 h-4 text-[#D8C64B]" />
            The Solution: An Integrated AI-Powered 4-Layer System
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                layer: "SPACE LAYER",
                subtitle: "The Watchful Eye",
                icon: Satellite,
                desc: "SAR & InSAR satellites provide wide-area monitoring, detecting millimeter-scale ground deformation, thermal anomalies, and VHF/UHF/L-Band satellite phone RF signals.",
              },
              {
                layer: "AIR LAYER",
                subtitle: "The Rapid Responder",
                icon: Plane,
                desc: "Autonomous & tactical drones are dispatched to visually confirm alerts using high-resolution Electro-Optical, Infrared (EO/IR), and airborne GPR payloads.",
              },
              {
                layer: "GROUND LAYER",
                subtitle: "The Listening Ear",
                icon: Activity,
                desc: "Ground-based seismic arrays, soil resistivity sensors, and Ground Penetration Radar (GPR) capture localized subsurface vibrations and cavity signatures.",
              },
              {
                layer: "THE AI CORE",
                subtitle: "Connecting the Dots",
                icon: Cpu,
                desc: "Probabilistic AI engine fuses space, air, ground, and RF streams—correlating weak indicators longitudinally to disambiguate noise and issue high-confidence alerts.",
                highlight: true,
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.layer}
                  className={`rounded-2xl p-5 flex flex-col justify-between border ${
                    item.highlight
                      ? "bg-gradient-to-br from-[#123D70] to-[#0B2852] border-[#D8C64B]"
                      : "bg-[#0B2852]/85 border-[#A9DCEB]/20"
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="text-[11px] font-bold tracking-[0.16em] text-[#D8C64B] uppercase">
                        {item.layer}
                      </span>
                      <div className="p-2 rounded-lg bg-[#071B38] text-[#A9DCEB] border border-[#A9DCEB]/25">
                        <Icon className="w-4 h-4 text-[#D8C64B]" />
                      </div>
                    </div>
                    <h4 className="text-base font-bold text-white">{item.subtitle}</h4>
                    <p className="text-xs sm:text-sm text-[#D4E0EF] mt-2 leading-relaxed">
                      {item.desc}
                    </p>
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
