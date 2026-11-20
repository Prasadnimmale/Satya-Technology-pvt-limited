import React from "react";
import { preload } from "react-dom";
import Link from "next/link";
import { ArrowRight, Radio, Satellite, Cpu, ShieldCheck } from "lucide-react";
import { COMPANY_INFO } from "@/data/siteData";
import HeroAnimatedBackground from "./HeroAnimatedBackground";

export default function HeroSection() {
  // Preload Hero Space+Satellite layers in <head> alongside Navbar so Hero paints at 0ms with zero delay
  preload("/images/hero-v2-poster.webp?v=2", {
    as: "image",
    fetchPriority: "high",
  });
  preload("/images/hero-v2-earth.webp?v=2", {
    as: "image",
    fetchPriority: "high",
  });
  preload("/images/hero-v2-satellite.webp", {
    as: "image",
    fetchPriority: "high",
  });

  return (
    <section className="relative min-h-[92vh] lg:min-h-[94vh] flex flex-col justify-between pt-20 lg:pt-36 pb-10 sm:pb-14 overflow-hidden bg-[#041126]">
      {/* Animated Orbital Satellite & Earth Video-Motion Background */}
      <HeroAnimatedBackground />

      {/* Unobstructed Mobile/Tablet Orbital Sky + Golden Sunrise Stage so Satellite, Sunlight & Earth Horizon Shine Clearly Above Copy */}
      <div
        className="h-[232px] sm:h-[268px] lg:hidden w-full flex-shrink-0 pointer-events-none"
        aria-hidden="true"
      />

      {/* Main Hero Content — Left Aligned so Right Earth & Satellite Remain Unobstructed */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full lg:my-auto py-4 sm:py-6 lg:py-8">
        <div className="max-w-2xl space-y-5 sm:space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full bg-[#0B2852]/85 border border-[#D8C64B]/50 backdrop-blur-md shadow-[0_0_24px_rgba(11,40,82,0.6)]">
            <span className="w-2 h-2 rounded-full bg-[#D8C64B] animate-pulse flex-shrink-0" />
            <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.16em] sm:tracking-[0.2em] text-[#D8C64B]">
              {COMPANY_INFO.heroKicker}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-[58px] font-bold text-white tracking-tight leading-[1.12] lg:leading-[1.09] drop-shadow-[0_4px_24px_rgba(4,14,32,0.75)]">
            Turning Complex Data into{" "}
            <span className="text-[#D8C64B]">Decisive Insight.</span>
          </h1>

          <p className="text-base sm:text-2xl font-medium text-[#A9DCEB] leading-snug drop-shadow-[0_2px_14px_rgba(4,14,32,0.8)]">
            Turning Oceans of Data into Insight through AI &amp; ML.
          </p>

          <p className="text-sm sm:text-base lg:text-lg text-[#D4E0EF] max-w-xl leading-relaxed drop-shadow-[0_2px_12px_rgba(4,14,32,0.85)]">
            Sathya Technology Services Pvt. Ltd. delivers sovereign-grade Space
            Technology, Multi-Spectral Remote Sensing, and AI-enabled Geospatial
            Intelligence platforms across land, sea, air, and subsurface domains.
          </p>

          {/* Primary & Secondary CTA Buttons */}
          <div className="flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-3.5 sm:gap-4 pt-1 sm:pt-2">
            <Link
              href="/solutions"
              className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3.5 sm:py-4 rounded-xl bg-[#D8C64B] hover:bg-[#e5d45c] text-[#0B2852] font-semibold text-sm sm:text-base shadow-[0_0_32px_rgba(216,198,75,0.4)] transition-all hover:-translate-y-0.5"
            >
              Explore Our Solutions
              <ArrowRight className="w-5 h-5" />
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3.5 sm:py-4 rounded-xl bg-[#0B2852]/85 hover:bg-[#123D70] border border-[#A9DCEB]/45 hover:border-[#D8C64B]/65 text-white font-semibold text-sm sm:text-base backdrop-blur-md transition-all hover:-translate-y-0.5"
            >
              Contact Us
              <ArrowRight className="w-5 h-5 text-[#D8C64B]" />
            </Link>
          </div>
        </div>
      </div>

      {/* Sleek Bottom Orbital Telemetry & Heritage Strip (mirrors showcase layout without covering the satellite) */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-6">
        <div className="rounded-2xl bg-[#071B38]/78 backdrop-blur-xl border border-[#A9DCEB]/25 px-5 py-4 shadow-[0_18px_48px_rgba(3,12,28,0.75)] flex flex-col lg:flex-row lg:items-center justify-between gap-5">
          {/* Live Telemetry Pill */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#123D70] border border-[#D8C64B]/45 flex items-center justify-center text-[#D8C64B] flex-shrink-0">
              <Radio className="w-4 h-4 animate-pulse" />
            </div>
            <div>
              <div className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#D8C64B]">
                Live Multi-Sensor Architecture
              </div>
              <div className="text-xs sm:text-sm text-[#D4E0EF]">
                Satellite Imagery → AI Models → Spatial Analytics → Real-Time Command Alerts
              </div>
            </div>
          </div>

          {/* 4 Key Brochure Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 lg:border-l lg:border-[#A9DCEB]/20 lg:pl-6">
            {[
              { icon: ShieldCheck, value: "Est. 1997", label: "28+ Yrs SpaceTech" },
              { icon: Cpu, value: "8 Turnkey", label: "AI Platforms" },
              { icon: Satellite, value: "EO • SAR • RF", label: "24/7 All-Weather" },
              { icon: ArrowRight, value: "Sathya-MDA", label: "Maritime Flagship", href: "/maritime-domain-awareness" },
            ].map((stat) => {
              const content = (
                <div className="group">
                  <div className="text-base sm:text-lg font-bold text-[#D8C64B] group-hover:text-white transition-colors">
                    {stat.value}
                  </div>
                  <div className="text-[11px] sm:text-xs text-[#D4E0EF]">
                    {stat.label}
                  </div>
                </div>
              );
              return stat.href ? (
                <Link key={stat.label} href={stat.href}>
                  {content}
                </Link>
              ) : (
                <div key={stat.label}>{content}</div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
