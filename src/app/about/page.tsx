import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import { Award, Compass, Globe2, Rocket, ShieldCheck, Users } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import ScrollReveal from "@/components/ScrollReveal";
import PioneersInfographic from "@/components/PioneersInfographic";
import AchievementsSection from "@/components/AchievementsSection";
import ContactCTA from "@/components/ContactCTA";
import { COMPANY_INFO, STRATEGIC_PILLARS } from "@/data/siteData";

export const metadata: Metadata = {
  title: "About Us | Pioneers in SpaceTech Consulting Since 1997",
  description:
    "Established in 1997 in Secunderabad, India, Sathya Technology Services Pvt. Ltd. pioneers Space Technology, Remote Sensing, AI/ML, and Geospatial Intelligence solutions worldwide.",
};

export default function AboutPage() {
  return (
    <>
      {/* About Hero */}
      <section className="relative pt-32 lg:pt-40 pb-20 overflow-hidden bg-[#071B38] border-b border-[#A9DCEB]/20">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/satellite-dish-ground.jpg"
            alt="Sathya SpaceTech telemetry antenna infrastructure"
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#071B38] via-[#0B2852]/92 to-[#123D70]/75" />
          <div className="absolute inset-0 orbital-grid opacity-35" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#123D70]/85 border border-[#D8C64B]/45">
              <Award className="w-3.5 h-3.5 text-[#D8C64B]" />
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#D8C64B]">
                Established in 1997 • Secunderabad, India
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-bold text-white leading-tight">
              Pioneers in SpaceTech, AI &amp;{" "}
              <span className="text-[#D8C64B]">Geospatial Intelligence</span>
            </h1>

            <p className="text-base sm:text-lg text-[#D4E0EF] leading-relaxed">
              {COMPANY_INFO.introParagraph}
            </p>
          </div>
        </div>
      </section>

      {/* Mission, Vision & Institutional Pillars */}
      <section className="py-20 sm:py-24 bg-[#0B2852]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: Compass,
                kicker: "OUR MISSION",
                title: "Turning Complex Data into Decisive Insight",
                desc: "To empower sovereign defense, maritime, resource, and enterprise leaders with high-confidence operational clarity fused from space, air, ground, and RF sensors.",
              },
              {
                icon: Rocket,
                kicker: "OUR VISION",
                title: "Global Benchmark in Sovereign SpaceTech & AI",
                desc: "To bridge world-class orbital remote sensing constellations with indigenous AI engineering and turnkey operational platforms across emerging and global markets.",
              },
              {
                icon: Users,
                kicker: "OUR PEOPLE",
                title: "Scientists, Engineers & Space Veterans",
                desc: "Led by seasoned space scientists, SAR/InSAR specialists, deep-learning researchers, defense domain analysts, and international space executives.",
              },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <ScrollReveal key={item.title} delayMs={i * 80}>
                  <div className="glass-card glass-card-hover rounded-2xl p-7 h-full space-y-3">
                    <div className="w-11 h-11 rounded-xl bg-[#123D70] border border-[#D8C64B]/45 flex items-center justify-center text-[#D8C64B]">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="text-xs font-bold uppercase tracking-[0.18em] text-[#D8C64B]">
                      {item.kicker}
                    </div>
                    <h2 className="text-xl font-bold text-white">{item.title}</h2>
                    <p className="text-sm text-[#D4E0EF] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>

          <ScrollReveal>
            <PioneersInfographic />
          </ScrollReveal>
        </div>
      </section>

      {/* Global Satellite Representation, Consultancy & Atmanirbhar Bharat */}
      <section className="py-20 sm:py-24 bg-gradient-to-b from-[#071B38] via-[#0B2852] to-[#123D70] border-t border-[#A9DCEB]/15 relative">
        <div className="absolute inset-0 orbital-grid opacity-35 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative space-y-14">
          <ScrollReveal>
            <SectionHeader
              kicker="Global Ecosystem & Sovereign Initiatives"
              title="Three Decades Connecting International Space"
              highlight="Innovation with India"
              subtitle="From representing legendary Earth observation constellations to advising new-space ventures and advancing indigenous satellite manufacturing."
              align="center"
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {STRATEGIC_PILLARS.map((p, idx) => (
              <ScrollReveal key={p.title} delayMs={idx * 90}>
                <div className="brochure-frame rounded-2xl bg-[#071B38]/90 p-7 h-full space-y-3">
                  <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#D8C64B]">
                    {p.kicker}
                  </span>
                  <h3 className="text-xl font-bold text-white leading-snug">
                    {p.title}
                  </h3>
                  <p className="text-sm sm:text-base text-[#D4E0EF] leading-relaxed">
                    {p.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Global Remote Sensing Constellations Represented */}
          <ScrollReveal>
            <div className="glass-card rounded-3xl p-6 sm:p-8 text-center space-y-5">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#D8C64B]">
                <Globe2 className="w-4 h-4" />
                International Remote Sensing Heritage
              </div>
              <p className="text-sm sm:text-base text-[#D4E0EF] max-w-3xl mx-auto">
                SATHYA has served as international marketing representative for
                globally renowned Earth observation and remote sensing providers:
              </p>
              <div className="flex flex-wrap items-center justify-center gap-3 pt-1">
                {[
                  "Space Imaging",
                  "GeoEye",
                  "DigitalGlobe (Maxar / VANTOR)",
                  "UrtheCast",
                  "Deimos Imaging",
                  "GeoSat",
                  "Hydrosat",
                ].map((partner) => (
                  <span
                    key={partner}
                    className="px-4 py-2 rounded-xl bg-[#071B38] border border-[#A9DCEB]/30 text-xs sm:text-sm font-semibold text-white"
                  >
                    {partner}
                  </span>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Sovereign Security & Deployment Banner */}
          <ScrollReveal>
            <div className="rounded-2xl bg-[#071B38]/85 border border-[#D8C64B]/35 p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-start gap-3.5">
                <ShieldCheck className="w-6 h-6 text-[#D8C64B] flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-base font-bold text-white">
                    Customizable Agile Platform Deployment
                  </h4>
                  <p className="text-sm text-[#D4E0EF] mt-0.5">
                    Every Sathya platform is engineered for On-Site Air-Gapped
                    Command Centers, Sovereign Private Cloud, or Scalable SaaS.
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Achievements & Strategic MoUs */}
      <AchievementsSection />

      <ContactCTA />
    </>
  );
}
