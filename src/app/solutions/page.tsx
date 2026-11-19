import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Layers } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import ScrollReveal from "@/components/ScrollReveal";
import BorderSecurityShield from "@/components/BorderSecurityShield";
import ContactCTA from "@/components/ContactCTA";
import { SOLUTIONS_DETAILS } from "@/data/siteData";

export const metadata: Metadata = {
  title: "Solutions & AI Turnkey Platforms",
  description:
    "Explore Sathya Technology Services solutions across Maritime Domain Awareness (Sathya-MDA), Border Security (SathyaSEEMA), Defense & Intelligence, Air Intelligence, Agriculture, Water Resources, and Groundwater Intelligence.",
};

export default function SolutionsPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="relative pt-32 lg:pt-40 pb-16 overflow-hidden bg-[#071B38] border-b border-[#A9DCEB]/20">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/satellite-space.jpg"
            alt="Orbital satellite conducting multi-spectral Earth observation"
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#071B38]/90 via-[#0B2852]/92 to-[#0B2852]" />
          <div className="absolute inset-0 orbital-grid opacity-35" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#123D70]/85 border border-[#D8C64B]/45">
              <Layers className="w-3.5 h-3.5 text-[#D8C64B]" />
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#D8C64B]">
                AI-Enabled Turnkey Solutions
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-bold text-white leading-tight">
              Sector-Specific Space, AI &amp;{" "}
              <span className="text-[#D8C64B]">Geospatial Solutions</span>
            </h1>

            <p className="text-base sm:text-lg text-[#D4E0EF] leading-relaxed">
              Built for complex operational environments and engineered for
              decisive clarity—from sovereign maritime EEZs and subterranean
              border perimeters to continental watersheds and agricultural grids.
            </p>
          </div>

          {/* Quick Anchor Navigation Pills */}
          <div className="mt-10 flex flex-wrap gap-2.5">
            {SOLUTIONS_DETAILS.map((sol) => (
              <a
                key={sol.id}
                href={`#${sol.id}`}
                className="px-4 py-2 rounded-xl bg-[#123D70]/75 hover:bg-[#1C6E9C] border border-[#A9DCEB]/25 hover:border-[#D8C64B]/60 text-xs sm:text-sm font-medium text-white transition-all"
              >
                <span className="text-[#D8C64B] font-bold mr-1.5">
                  {sol.platformCode.split(" ")[0]}
                </span>
                {sol.title.split("(")[0].trim()}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Solution Sections */}
      <div className="divide-y divide-[#A9DCEB]/15">
        {SOLUTIONS_DETAILS.map((solution, idx) => {
          const isReversed = idx % 2 === 1;
          const isBorder = solution.id === "border-security";

          return (
            <section
              key={solution.id}
              id={solution.id}
              className={`py-20 sm:py-24 scroll-mt-24 relative ${
                idx % 2 === 0
                  ? "bg-[#0B2852]"
                  : "bg-gradient-to-b from-[#071B38] via-[#0B2852] to-[#071B38]"
              }`}
            >
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                  {/* Text & Capabilities Column */}
                  <ScrollReveal
                    className={`lg:col-span-7 space-y-6 ${
                      isReversed ? "lg:order-2" : "lg:order-1"
                    }`}
                  >
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#123D70] border border-[#D8C64B]/45">
                      <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#D8C64B]">
                        {solution.kicker}
                      </span>
                    </div>

                    <div>
                      <div className="text-sm font-bold text-[#A9DCEB] uppercase tracking-wider mb-1">
                        Platform: {solution.platformCode}
                      </div>
                      <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
                        {solution.title}
                      </h2>
                      <p className="text-lg font-medium text-[#D8C64B] mt-2">
                        {solution.subtitle}
                      </p>
                    </div>

                    <div className="space-y-4 text-base text-[#D4E0EF] leading-relaxed">
                      {solution.description.map((para) => (
                        <p key={para.slice(0, 32)}>{para}</p>
                      ))}
                    </div>

                    {/* Key Capabilities Grid */}
                    <div className="pt-2">
                      <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-[#D8C64B] mb-3.5">
                        Key Capabilities
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {solution.capabilities.map((cap) => (
                          <div
                            key={cap}
                            className="rounded-xl bg-[#071B38]/80 border border-[#A9DCEB]/18 px-3.5 py-2.5 flex items-start gap-2.5"
                          >
                            <CheckCircle2 className="w-4 h-4 text-[#D8C64B] mt-0.5 flex-shrink-0" />
                            <span className="text-xs sm:text-sm font-medium text-white">
                              {cap}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Learn More CTA */}
                    <div className="pt-3 flex flex-wrap items-center gap-4">
                      <Link
                        href={solution.ctaHref}
                        className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#D8C64B] hover:bg-[#e5d45c] text-[#0B2852] font-semibold text-sm shadow-[0_0_24px_rgba(216,198,75,0.3)] transition-all hover:-translate-y-0.5"
                      >
                        Learn More — {solution.platformCode.split(" ")[0]}
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </ScrollReveal>

                  {/* Image & Core Features Column */}
                  <ScrollReveal
                    delayMs={120}
                    className={`lg:col-span-5 space-y-6 ${
                      isReversed ? "lg:order-1" : "lg:order-2"
                    }`}
                  >
                    <div className="brochure-frame rounded-3xl overflow-hidden bg-[#071B38]">
                      <div className="relative h-64 sm:h-72">
                        <Image
                          src={solution.image}
                          alt={solution.title}
                          fill
                          sizes="(max-width: 1024px) 100vw, 42vw"
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#071B38] via-transparent to-transparent" />
                        <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#071B38]/90 border border-[#D8C64B]/45 text-xs font-bold text-[#D8C64B]">
                          {solution.platformCode}
                        </div>
                      </div>
                      <div className="px-5 py-3.5 bg-[#071B38] border-t border-[#A9DCEB]/20 text-xs text-[#A9DCEB]">
                        {solution.imageCaption}
                      </div>
                    </div>

                    {/* Features Breakdown */}
                    <div className="space-y-3">
                      <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-[#D8C64B]">
                        Platform Features
                      </h3>
                      {solution.features.map((feat) => (
                        <div
                          key={feat.title}
                          className="glass-card rounded-2xl p-4 space-y-1"
                        >
                          <div className="text-sm font-bold text-white">
                            {feat.title}
                          </div>
                          <p className="text-xs sm:text-sm text-[#D4E0EF] leading-relaxed">
                            {feat.detail}
                          </p>
                        </div>
                      ))}
                    </div>
                  </ScrollReveal>
                </div>

                {/* Brochure Page 3 Underground Threat Shield Diagram inside Border Security */}
                {isBorder && (
                  <ScrollReveal>
                    <BorderSecurityShield />
                  </ScrollReveal>
                )}
              </div>
            </section>
          );
        })}
      </div>

      {/* Deployment Flexibility Banner */}
      <section className="py-16 bg-[#071B38] border-t border-[#A9DCEB]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            kicker="Customizable Agile Deployment"
            title="Deploy Across Any Sovereign or Enterprise"
            highlight="Environment"
            subtitle="Every Sathya intelligence platform supports flexible deployment topologies tailored to mission classification and operational scale."
            align="center"
          />

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                mode: "On-Site Sovereign Deployment",
                desc: "Air-gapped, high-security installation inside defense command centers and national data centers with zero external network dependency.",
              },
              {
                mode: "Dedicated Private Cloud",
                desc: "Isolated virtual private cloud architecture supporting OGC/STAC standards, encrypted satellite downlinks, and sovereign governance.",
              },
              {
                mode: "Scalable SaaS Platform",
                desc: "Rapidly provisioned cloud-native operational access with continuous AI model updates, global AIS/EO feeds, and automated alerts.",
              },
            ].map((item) => (
              <div
                key={item.mode}
                className="glass-card rounded-2xl p-6 border-t-2 border-t-[#D8C64B]"
              >
                <h3 className="text-lg font-bold text-white">{item.mode}</h3>
                <p className="text-sm text-[#D4E0EF] mt-2 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
