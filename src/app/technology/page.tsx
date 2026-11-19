import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import {
  Cpu,
  Satellite,
  Radar,
  Layers,
  Sparkles,
  Server,
  Radio,
  CheckCircle2,
} from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import ScrollReveal from "@/components/ScrollReveal";
import BorderSecurityShield from "@/components/BorderSecurityShield";
import ContactCTA from "@/components/ContactCTA";
import { TECHNOLOGY_PILLARS } from "@/data/siteData";

export const metadata: Metadata = {
  title: "Technology & Integrated Intelligence Stack",
  description:
    "Explore the SATHYA Integrated Intelligence Stack: Artificial Intelligence, Machine Learning, Optical/SAR/InSAR/Thermal Satellite Imagery, Remote Sensing, Geospatial Analytics, and Multi-Sensor Data Fusion.",
};

const techIcons = [Cpu, Sparkles, Satellite, Radar, Layers, Radio, Server];

export default function TechnologyPage() {
  return (
    <>
      {/* Technology Hero */}
      <section className="relative pt-32 lg:pt-40 pb-20 overflow-hidden bg-[#071B38] border-b border-[#A9DCEB]/20">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/nasa-aquifer-hydrology.jpg"
            alt="NASA-ISRO Synthetic Aperture Radar remote sensing backscatter visualization"
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#071B38] via-[#0B2852]/95 to-[#123D70]/80" />
          <div className="absolute inset-0 orbital-grid opacity-35" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#123D70]/85 border border-[#D8C64B]/45">
              <Cpu className="w-3.5 h-3.5 text-[#D8C64B]" />
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#D8C64B]">
                SATHYA Integrated Intelligence Stack
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-bold text-white leading-tight">
              Multi-Sensor Orbital Physics Meets{" "}
              <span className="text-[#D8C64B]">Deep-Learning AI</span>
            </h1>

            <p className="text-base sm:text-lg text-[#D4E0EF] leading-relaxed">
              Our core technological advantage lies not in any isolated sensor,
              but in longitudinal correlation and probabilistic AI fusion across
              Spaceborne SAR/InSAR, Optical, Thermal, RF Spectrum, Aerial UAV,
              and Ground Geophysical streams.
            </p>
          </div>
        </div>
      </section>

      {/* End-to-End Intelligence Pipeline */}
      <section className="py-20 sm:py-24 bg-[#0B2852]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
          <ScrollReveal>
            <SectionHeader
              kicker="From Raw Photons & Radar Echoes to Action"
              title="Five-Stage Operational"
              highlight="Decision Pipeline"
              subtitle="Engineered for petabyte-scale Earth observation ingestion, low-latency anomaly inference, and interoperable C4ISR / enterprise delivery."
              align="center"
            />
          </ScrollReveal>

          <ScrollReveal>
            <div className="brochure-frame rounded-3xl bg-[#071B38]/90 p-6 sm:p-10">
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                {[
                  {
                    step: "01",
                    title: "Multi-Modal Ingestion",
                    items: ["VHR Optical & Multispectral", "X / C / L-Band SAR & InSAR", "Thermal Infrared (TIR)", "AIS & Space-Based RF"],
                  },
                  {
                    step: "02",
                    title: "Radiometric & Geometric Prep",
                    items: ["Orthorectification & DEM", "InSAR Phase Unwrapping", "Atmospheric Calibration", "Spatio-Temporal Co-Registration"],
                  },
                  {
                    step: "03",
                    title: "AI & ML Inference Core",
                    items: ["Vision Transformers & ATR", "Dark Vessel & Wake Detection", "Crop & Hydrological Models", "Longitudinal Change AI"],
                  },
                  {
                    step: "04",
                    title: "Probabilistic Sensor Fusion",
                    items: ["Space + Drone EO/IR + GPR", "Seismic & Resistivity Correlation", "False-Alarm Suppression", "Behavioral Risk Scoring"],
                  },
                  {
                    step: "05",
                    title: "Command Decisions",
                    items: ["Real-Time Automated Alerts", "ENC & 3D GIS Overlays", "OGC / STAC / API Feeds", "Air-Gapped or SaaS Delivery"],
                  },
                ].map((stage, idx) => (
                  <div
                    key={stage.step}
                    className={`rounded-2xl p-5 border flex flex-col justify-between ${
                      idx === 4
                        ? "bg-gradient-to-b from-[#123D70] to-[#0B2852] border-[#D8C64B]"
                        : "bg-[#0B2852]/85 border-[#A9DCEB]/20"
                    }`}
                  >
                    <div>
                      <span className="text-xs font-bold text-[#D8C64B] tracking-widest">
                        STAGE {stage.step}
                      </span>
                      <h3 className="text-base font-bold text-white mt-1.5 mb-3">
                        {stage.title}
                      </h3>
                      <ul className="space-y-2">
                        {stage.items.map((it) => (
                          <li
                            key={it}
                            className="flex items-start gap-2 text-xs text-[#D4E0EF]"
                          >
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#D8C64B] mt-0.5 flex-shrink-0" />
                            <span>{it}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 7 Technology Pillars Detailed Grid */}
      <section className="py-20 sm:py-24 bg-gradient-to-b from-[#071B38] via-[#0B2852] to-[#123D70] border-t border-[#A9DCEB]/15 relative">
        <div className="absolute inset-0 orbital-grid opacity-35 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <ScrollReveal>
            <SectionHeader
              kicker="Core Technological Disciplines"
              title="Seven Pillars of"
              highlight="Sathya Innovation"
              subtitle="Deep scientific rigor across electromagnetic remote sensing, geospatial systems engineering, and mission-focused artificial intelligence."
            />
          </ScrollReveal>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TECHNOLOGY_PILLARS.map((pillar, idx) => {
              const Icon = techIcons[idx % techIcons.length];
              return (
                <ScrollReveal
                  key={pillar.title}
                  delayMs={(idx % 3) * 80}
                  className={idx === 6 ? "md:col-span-2 lg:col-span-3" : ""}
                >
                  <div className="glass-card glass-card-hover rounded-2xl p-7 h-full">
                    <div className="flex items-center gap-3.5 mb-4">
                      <div className="w-11 h-11 rounded-xl bg-[#123D70] border border-[#D8C64B]/45 flex items-center justify-center text-[#D8C64B]">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#D8C64B]">
                          Technology 0{idx + 1}
                        </span>
                        <h3 className="text-xl font-bold text-white">
                          {pillar.title}
                        </h3>
                      </div>
                    </div>
                    <div className="text-xs font-semibold uppercase tracking-wider text-[#A9DCEB] mb-2">
                      {pillar.subtitle}
                    </div>
                    <p className="text-sm sm:text-base text-[#D4E0EF] leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Multi-Sensor Subsurface & Perimeter Fusion Reference */}
      <section className="py-20 sm:py-24 bg-[#0B2852] border-t border-[#A9DCEB]/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <BorderSecurityShield />
          </ScrollReveal>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
