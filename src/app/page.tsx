import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Satellite,
  Cpu,
  Radar,
  Globe2,
  ShieldCheck,
  Layers,
  Sparkles,
  Compass,
  Server,
  Award,
} from "lucide-react";
import HeroSection from "@/components/HeroSection";
import SectionHeader from "@/components/SectionHeader";
import ScrollReveal from "@/components/ScrollReveal";
import PioneersInfographic from "@/components/PioneersInfographic";
import PlatformCard from "@/components/PlatformCard";
import AchievementsSection from "@/components/AchievementsSection";
import ContactCTA from "@/components/ContactCTA";
import {
  COMPANY_INFO,
  CORE_OFFERINGS,
  EXPERTISE_CARDS,
  TURNKEY_PLATFORMS,
  SECTOR_QUADRANTS,
  TECHNOLOGY_PILLARS,
  STRATEGIC_PILLARS,
} from "@/data/siteData";

const offeringIcons = [
  Globe2,
  Satellite,
  Cpu,
  Compass,
  Radar,
  ShieldCheck,
  Layers,
  Sparkles,
  Server,
  Award,
];

export default function HomePage() {
  return (
    <>
      {/* 1. HERO SECTION */}
      <HeroSection />

      {/* 2. COMPANY INTRODUCTION */}
      <section className="py-20 sm:py-24 relative bg-[#0B2852] border-t border-[#A9DCEB]/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <ScrollReveal className="lg:col-span-6 space-y-6">
              <SectionHeader
                kicker="Company Introduction • Est. 1997"
                title="Sathya Technology Services Pvt. Ltd."
                subtitle={COMPANY_INFO.introParagraph}
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="glass-card rounded-2xl p-4 border-l-4 border-l-[#D8C64B]">
                  <div className="text-sm font-bold text-[#D8C64B]">
                    Flexible Deployment Models
                  </div>
                  <p className="text-xs sm:text-sm text-[#D4E0EF] mt-1">
                    Delivered via Sovereign Air-Gapped On-Site, Private Cloud, or
                    Scalable SaaS-enabled Platforms.
                  </p>
                </div>
                <div className="glass-card rounded-2xl p-4 border-l-4 border-l-[#A9DCEB]">
                  <div className="text-sm font-bold text-white">
                    Global Satellite Ecosystem
                  </div>
                  <p className="text-xs sm:text-sm text-[#D4E0EF] mt-1">
                    Decades of international representation across premier Optical,
                    SAR, InSAR &amp; Thermal constellations.
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#D8C64B] hover:bg-[#e5d45c] text-[#0B2852] font-semibold text-sm sm:text-base shadow-[0_0_28px_rgba(216,198,75,0.32)] transition-all hover:-translate-y-0.5"
                >
                  Discover Our Heritage &amp; Leadership
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </ScrollReveal>

            <ScrollReveal delayMs={120} className="lg:col-span-6">
              <div className="relative rounded-3xl overflow-hidden brochure-frame bg-[#071B38]">
                <div className="relative h-80 sm:h-96">
                  <Image
                    src="/images/satellite-dish-ground.jpg"
                    alt="Deep-space and satellite telemetry ground antenna infrastructure"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#071B38] via-[#071B38]/25 to-transparent" />
                </div>
                <div className="p-6 bg-[#071B38]/95 border-t border-[#A9DCEB]/20 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <div className="text-xs font-bold uppercase tracking-[0.18em] text-[#D8C64B]">
                      Pioneers in SpaceTech Consulting
                    </div>
                    <div className="text-base font-bold text-white mt-0.5">
                      Built for Complex Environments. Designed for Operational Clarity.
                    </div>
                  </div>
                  <Link
                    href="/technology"
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#123D70] hover:bg-[#1C6E9C] text-xs font-semibold text-white whitespace-nowrap transition-colors"
                  >
                    Our Tech Stack
                    <ArrowUpRight className="w-4 h-4 text-[#D8C64B]" />
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 3. CORE OFFERINGS */}
      <section className="py-20 sm:py-24 relative bg-gradient-to-b from-[#071B38] via-[#0B2852] to-[#123D70] border-t border-[#A9DCEB]/15">
        <div className="absolute inset-0 orbital-grid opacity-35 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <ScrollReveal>
            <SectionHeader
              kicker="Our Core Offerings"
              title="Mission-Critical Space, AI & Geospatial"
              highlight="Capabilities"
              subtitle="Comprehensive end-to-end capabilities engineered for national security, maritime surveillance, defense intelligence, and enterprise spatial analytics."
              align="center"
            />
          </ScrollReveal>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5">
            {CORE_OFFERINGS.map((offering, index) => {
              const Icon = offeringIcons[index % offeringIcons.length];
              return (
                <ScrollReveal key={offering.title} delayMs={(index % 5) * 60}>
                  <div className="glass-card glass-card-hover rounded-2xl p-5 h-full flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-4">
                        <div className="w-10 h-10 rounded-xl bg-[#123D70] border border-[#D8C64B]/40 flex items-center justify-center text-[#D8C64B]">
                          <Icon className="w-5 h-5" />
                        </div>
                        <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#071B38]/80 text-[#A9DCEB] border border-[#A9DCEB]/20">
                          {offering.category}
                        </span>
                      </div>
                      <h3 className="text-base font-bold text-white leading-snug">
                        {offering.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#D4E0EF] mt-2.5 leading-relaxed">
                        {offering.description}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. ABOUT OUR EXPERTISE */}
      <section className="py-20 sm:py-24 relative bg-[#0B2852] border-t border-[#A9DCEB]/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
          <ScrollReveal>
            <SectionHeader
              kicker="About Our Expertise"
              title="Proven SpaceTech Authority &"
              highlight="Operational Depth"
              subtitle="Combining nearly three decades of Earth observation domain mastery with modern deep-learning computer vision and multi-sensor data fusion."
            />
          </ScrollReveal>

          {/* 4 Premium Expertise Visual Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {EXPERTISE_CARDS.map((card, i) => (
              <ScrollReveal key={card.title} delayMs={i * 75}>
                <div className="glass-card glass-card-hover rounded-2xl p-6 h-full flex flex-col justify-between">
                  <div className="space-y-3">
                    <span className="inline-block text-[11px] font-bold uppercase tracking-[0.16em] text-[#D8C64B]">
                      {card.badge}
                    </span>
                    <h3 className="text-lg font-bold text-white leading-snug">
                      {card.title}
                    </h3>
                    <p className="text-sm text-[#D4E0EF] leading-relaxed">
                      {card.description}
                    </p>
                  </div>

                  <ul className="mt-5 pt-4 border-t border-[#A9DCEB]/15 space-y-2">
                    {card.highlights.map((h) => (
                      <li
                        key={h}
                        className="flex items-center gap-2 text-xs font-medium text-[#A9DCEB]"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#D8C64B] flex-shrink-0" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Brochure Page 1 Framed Pioneers Showcase */}
          <ScrollReveal>
            <PioneersInfographic />
          </ScrollReveal>
        </div>
      </section>

      {/* 5. AI-ENABLED TURNKEY PLATFORMS (ALL 8 PLATFORMS) */}
      <section className="py-20 sm:py-24 relative bg-gradient-to-b from-[#071B38] via-[#0B2852] to-[#071B38] border-t border-[#A9DCEB]/15">
        <div className="absolute inset-0 orbital-grid opacity-35 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
            <ScrollReveal>
              <SectionHeader
                kicker="AI-Enabled Turnkey Platforms"
                title="Built for Complex Environments."
                highlight="Designed for Operational Clarity."
                subtitle="Eight specialized, sector-specific intelligence platforms fusing orbital, aerial, ground, and RF data into decisive mission workflows."
              />
            </ScrollReveal>

            <ScrollReveal>
              <Link
                href="/solutions"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#123D70] hover:bg-[#1C6E9C] border border-[#D8C64B]/45 text-sm font-semibold text-white transition-colors"
              >
                Compare All Platforms
                <ArrowRight className="w-4 h-4 text-[#D8C64B]" />
              </Link>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {TURNKEY_PLATFORMS.map((platform, idx) => (
              <ScrollReveal key={platform.id} delayMs={(idx % 4) * 70}>
                <PlatformCard platform={platform} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 6. SECTOR-WISE SOLUTIONS (BROCHURE PAGE 4 QUADRANTS) */}
      <section className="py-20 sm:py-24 relative bg-[#0B2852] border-t border-[#A9DCEB]/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeader
              kicker="Sector-Wise Solutions Offered"
              title="Domain-Engineered Geospatial &"
              highlight="AI Solutions"
              subtitle="Tailored multi-sensor intelligence matrices addressing sovereign defense, ecological stewardship, smart energy infrastructure, and financial resilience."
              align="center"
            />
          </ScrollReveal>

          <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-8">
            {SECTOR_QUADRANTS.map((sector, idx) => (
              <ScrollReveal key={sector.id} delayMs={idx * 80}>
                <div
                  id={sector.id}
                  className="scroll-mt-28 brochure-frame rounded-3xl bg-gradient-to-b from-[#123D70]/75 to-[#071B38]/95 overflow-hidden flex flex-col h-full"
                >
                  {/* Sector Visual Banner */}
                  <div className="relative h-52 overflow-hidden">
                    <Image
                      src={sector.image}
                      alt={sector.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#071B38] via-[#071B38]/55 to-transparent" />
                    <div className="absolute bottom-4 left-6 right-6">
                      <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#D8C64B]">
                        {sector.motto}
                      </span>
                      <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
                        {sector.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#A9DCEB] mt-0.5">
                        {sector.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Numbered Brochure Solution Items */}
                  <div className="p-6 flex-1 flex flex-col justify-between space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {sector.items.map((item, itemIdx) => {
                        const targetHref = sector.itemLinks?.[item];

                        if (targetHref) {
                          return (
                            <Link
                              key={item}
                              href={targetHref}
                              className="group rounded-xl bg-[#0B2852]/85 hover:bg-[#123D70] border border-[#A9DCEB]/22 hover:border-[#D8C64B] p-3 flex items-start justify-between gap-2.5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_24px_rgba(4,15,34,0.65)]"
                            >
                              <div className="flex items-start gap-2.5">
                                <span className="w-5 h-5 rounded-md bg-[#123D70] group-hover:bg-[#D8C64B] border border-[#D8C64B]/50 text-[#D8C64B] group-hover:text-[#0B2852] text-[11px] font-bold flex items-center justify-center flex-shrink-0 mt-0.5 transition-colors">
                                  {itemIdx + 1}
                                </span>
                                <span className="text-xs sm:text-sm font-medium text-white group-hover:text-[#D8C64B] leading-snug transition-colors">
                                  {item}
                                </span>
                              </div>
                              <ArrowUpRight className="w-4 h-4 text-[#A9DCEB]/70 group-hover:text-[#D8C64B] flex-shrink-0 mt-0.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                            </Link>
                          );
                        }

                        return (
                          <div
                            key={item}
                            className="rounded-xl bg-[#0B2852]/85 border border-[#A9DCEB]/18 p-3 flex items-start gap-2.5"
                          >
                            <span className="w-5 h-5 rounded-md bg-[#123D70] border border-[#D8C64B]/50 text-[#D8C64B] text-[11px] font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                              {itemIdx + 1}
                            </span>
                            <span className="text-xs sm:text-sm font-medium text-white leading-snug">
                              {item}
                            </span>
                          </div>
                        );
                      })}
                    </div>

                    {/* Brochure Bottom Capabilities Strip */}
                    <div className="pt-4 border-t border-[#A9DCEB]/15 flex flex-wrap items-center gap-2">
                      {sector.capabilitiesBar.map((cap) => (
                        <span
                          key={cap}
                          className="px-2.5 py-1 rounded-full bg-[#071B38] border border-[#A9DCEB]/25 text-[11px] font-medium text-[#A9DCEB]"
                        >
                          {cap}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 7. TECHNOLOGY & INNOVATION */}
      <section className="py-20 sm:py-24 relative bg-gradient-to-b from-[#071B38] via-[#123D70]/55 to-[#0B2852] border-t border-[#A9DCEB]/15">
        <div className="absolute inset-0 orbital-grid opacity-35 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative space-y-14">
          <ScrollReveal>
            <SectionHeader
              kicker="Technology & Innovation"
              title="The SATHYA Integrated"
              highlight="Intelligence Stack"
              subtitle="Converging multi-spectral orbital physics, heterogeneous sensor fusion, and explainable deep learning to turn petabytes of telemetry into command decisions."
              align="center"
            />
          </ScrollReveal>

          {/* Brochure Page 4 Integrated Intelligence Stack Box */}
          <ScrollReveal>
            <div className="brochure-frame rounded-3xl bg-[#071B38]/90 p-6 sm:p-8 lg:p-10">
              <div className="text-xs font-bold uppercase tracking-[0.2em] text-[#D8C64B] mb-4 text-center">
                SATHYA Integrated Intelligence Stack
              </div>

              {/* Pipeline Steps */}
              <div className="grid grid-cols-1 sm:grid-cols-5 gap-3 items-center">
                {[
                  { step: "01", name: "Satellite Imagery", sub: "Optical • SAR • InSAR • Thermal" },
                  { step: "02", name: "AI & ML Models", sub: "Vision & Anomaly Detection" },
                  { step: "03", name: "Spatial Analytics", sub: "Multi-Sensor & GIS Fusion" },
                  { step: "04", name: "Real-Time Alerts", sub: "Automated Risk Scoring" },
                  { step: "05", name: "Command Decisions", sub: "Sovereign Operational Action" },
                ].map((node, i) => (
                  <div
                    key={node.name}
                    className={`rounded-2xl p-4 border text-center relative ${
                      i === 4
                        ? "bg-[#123D70] border-[#D8C64B]"
                        : "bg-[#0B2852]/90 border-[#A9DCEB]/25"
                    }`}
                  >
                    <span className="text-[10px] font-bold text-[#D8C64B] tracking-widest">
                      STAGE {node.step}
                    </span>
                    <div className="text-sm sm:text-base font-bold text-white mt-1">
                      {node.name}
                    </div>
                    <div className="text-[11px] text-[#A9DCEB] mt-0.5">{node.sub}</div>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-5 border-t border-[#A9DCEB]/15 flex flex-wrap items-center justify-center gap-3 text-xs sm:text-sm text-[#D4E0EF]">
                <span className="font-bold text-[#D8C64B]">Active Domains:</span>
                {["Defense", "Maritime", "Border", "Air", "Agriculture", "Water", "Finance"].map(
                  (d) => (
                    <span
                      key={d}
                      className="px-3 py-1 rounded-full bg-[#123D70]/70 border border-[#A9DCEB]/25 text-white font-medium"
                    >
                      {d}
                    </span>
                  )
                )}
              </div>
            </div>
          </ScrollReveal>

          {/* 7 Core Technology Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {TECHNOLOGY_PILLARS.map((tech, idx) => (
              <ScrollReveal
                key={tech.title}
                delayMs={(idx % 4) * 70}
                className={idx === 6 ? "lg:col-span-2" : ""}
              >
                <div className="glass-card glass-card-hover rounded-2xl p-6 h-full flex flex-col justify-between">
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#D8C64B]">
                      0{idx + 1} • Core Pillar
                    </span>
                    <h3 className="text-lg font-bold text-white mt-2">{tech.title}</h3>
                    <p className="text-xs font-medium text-[#A9DCEB] mt-0.5">
                      {tech.subtitle}
                    </p>
                    <p className="text-sm text-[#D4E0EF] mt-3 leading-relaxed">
                      {tech.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}

            {/* Link Card to Full Technology Page */}
            <ScrollReveal delayMs={200} className="lg:col-span-2">
              <div className="rounded-2xl bg-gradient-to-br from-[#123D70] to-[#071B38] border border-[#D8C64B]/50 p-6 h-full flex flex-col justify-between">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#D8C64B]">
                    Architectural Deep-Dive
                  </span>
                  <h3 className="text-xl font-bold text-white mt-2">
                    Explore Our Full Multi-Sensor &amp; AI Engineering Architecture
                  </h3>
                  <p className="text-sm text-[#D4E0EF] mt-2 leading-relaxed">
                    Discover how Sathya fuses SAR/InSAR, Optical, Thermal, UAV EO/IR,
                    RF spectrum monitoring, and ground GPR into sovereign platforms.
                  </p>
                </div>
                <div className="mt-5">
                  <Link
                    href="/technology"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#D8C64B] text-[#0B2852] font-semibold text-sm hover:bg-[#e5d45c] transition-colors"
                  >
                    Explore Technology Page
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 8. WHY CHOOSE SATHYA (CONSULTANCY, GLOBAL PARTNERS & ATMANIRBHAR BHARAT) */}
      <section className="py-20 sm:py-24 relative bg-[#0B2852] border-t border-[#A9DCEB]/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <ScrollReveal>
            <SectionHeader
              kicker="Why Choose Sathya"
              title="Unmatched Global Space Pedigree &"
              highlight="Sovereign Execution"
              subtitle="Trusted by government agencies, armed forces, international space OEMs, and commercial enterprises since 1997."
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {STRATEGIC_PILLARS.map((pillar, idx) => (
              <ScrollReveal key={pillar.title} delayMs={idx * 90}>
                <div className="glass-card glass-card-hover rounded-2xl p-7 h-full border-t-4 border-t-[#D8C64B] flex flex-col justify-between">
                  <div className="space-y-3">
                    <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#D8C64B]">
                      {pillar.kicker}
                    </span>
                    <h3 className="text-xl font-bold text-white leading-snug">
                      {pillar.title}
                    </h3>
                    <p className="text-sm sm:text-base text-[#D4E0EF] leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* 4 Differentiation Highlights */}
          <ScrollReveal>
            <div className="rounded-3xl bg-[#071B38]/85 border border-[#A9DCEB]/20 p-6 sm:p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "28+ Years SpaceTech DNA",
                  desc: "Established in 1997 with deep institutional mastery in satellite remote sensing and GIS.",
                },
                {
                  title: "Multi-Sensor False-Alarm Reduction",
                  desc: "Longitudinal probabilistic fusion across Space, Air, Ground, and RF eliminates isolated sensor noise.",
                },
                {
                  title: "Agile Deployment Sovereignty",
                  desc: "Deploy On-Site in air-gapped defense networks, Private Cloud, or scalable SaaS.",
                },
                {
                  title: "Turnkey Domain Platforms",
                  desc: "8 mission-ready platforms purpose-built for Maritime, Border, Defense, Air, Crops & Water.",
                },
              ].map((adv) => (
                <div key={adv.title} className="space-y-2">
                  <div className="flex items-center gap-2 text-[#D8C64B] font-bold text-sm">
                    <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                    <span>{adv.title}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#D4E0EF] leading-relaxed">
                    {adv.desc}
                  </p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 9. ACHIEVEMENTS, STRATEGIC MOUS & INSTITUTIONAL RECOGNITION */}
      <AchievementsSection />

      {/* 10. CONTACT CTA SECTION */}
      <ContactCTA />
    </>
  );
}
