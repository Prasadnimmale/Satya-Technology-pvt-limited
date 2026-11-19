import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Globe2 } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import ScrollReveal from "@/components/ScrollReveal";
import ContactCTA from "@/components/ContactCTA";
import { INDUSTRIES_DATA } from "@/data/siteData";

export const metadata: Metadata = {
  title: "Industries We Serve",
  description:
    "Sathya Technology Services delivers specialized SpaceTech, AI, and Geospatial Intelligence platforms across Defense, Maritime, Agriculture, Environment, Energy, Finance, and Natural Resources.",
};

export default function IndustriesPage() {
  return (
    <>
      {/* Industries Hero */}
      <section className="relative pt-32 lg:pt-40 pb-16 overflow-hidden bg-[#071B38] border-b border-[#A9DCEB]/20">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-earth-orbit.jpg"
            alt="Global industries connected by orbital Earth observation"
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#071B38]/90 via-[#0B2852]/92 to-[#0B2852]" />
          <div className="absolute inset-0 orbital-grid opacity-35" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#123D70]/85 border border-[#D8C64B]/45">
              <Globe2 className="w-3.5 h-3.5 text-[#D8C64B]" />
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#D8C64B]">
                Sector-Specific Spatial Intelligence
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-bold text-white leading-tight">
              Industries Transformed by{" "}
              <span className="text-[#D8C64B]">SpaceTech &amp; AI</span>
            </h1>

            <p className="text-base sm:text-lg text-[#D4E0EF] leading-relaxed">
              Delivering sovereign defense superiority, maritime security, climate
              resilience, sustainable infrastructure, and data-driven financial
              trust across seven critical global industries.
            </p>
          </div>

          {/* Industry Quick-Jump Bar */}
          <div className="mt-10 flex flex-wrap gap-2.5">
            {INDUSTRIES_DATA.map((ind) => (
              <a
                key={ind.id}
                href={`#${ind.id}`}
                className="px-4 py-2 rounded-xl bg-[#123D70]/75 hover:bg-[#1C6E9C] border border-[#A9DCEB]/25 hover:border-[#D8C64B]/60 text-xs sm:text-sm font-medium text-white transition-all"
              >
                {ind.name}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 7 Industry Deep-Dive Cards */}
      <section className="py-20 sm:py-24 bg-[#0B2852]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {INDUSTRIES_DATA.map((industry, idx) => {
            const reverse = idx % 2 === 1;
            return (
              <ScrollReveal key={industry.id}>
                <article
                  id={industry.id}
                  className="scroll-mt-28 brochure-frame rounded-3xl bg-gradient-to-br from-[#071B38] via-[#0B2852] to-[#123D70]/85 overflow-hidden"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12">
                    {/* Image Column */}
                    <div
                      className={`lg:col-span-5 relative min-h-[280px] sm:min-h-[340px] ${
                        reverse ? "lg:order-2" : "lg:order-1"
                      }`}
                    >
                      <Image
                        src={industry.image}
                        alt={industry.name}
                        fill
                        sizes="(max-width: 1024px) 100vw, 42vw"
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#071B38] via-[#071B38]/25 to-transparent" />

                      <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#071B38]/90 border border-[#D8C64B]/45 text-[11px] font-bold uppercase tracking-wider text-[#D8C64B]">
                        {industry.kicker}
                      </div>

                      <div className="absolute bottom-4 left-4 right-4 grid grid-cols-2 gap-2.5">
                        {industry.metrics.map((m) => (
                          <div
                            key={m.label}
                            className="rounded-xl bg-[#071B38]/90 backdrop-blur-md border border-[#A9DCEB]/25 p-2.5"
                          >
                            <div className="text-[10px] uppercase tracking-wider text-[#A9DCEB]">
                              {m.label}
                            </div>
                            <div className="text-xs font-bold text-[#D8C64B] mt-0.5">
                              {m.value}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Industry Copy & Use Cases */}
                    <div
                      className={`lg:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-between space-y-6 ${
                        reverse ? "lg:order-1" : "lg:order-2"
                      }`}
                    >
                      <div className="space-y-4">
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#D8C64B]">
                            0{idx + 1} • {industry.name}
                          </span>
                          <div className="flex flex-wrap gap-1.5">
                            {industry.platformsUsed.map((plat) => (
                              <span
                                key={plat}
                                className="px-2.5 py-0.5 rounded-full bg-[#123D70] border border-[#A9DCEB]/30 text-[11px] font-semibold text-white"
                              >
                                {plat}
                              </span>
                            ))}
                          </div>
                        </div>

                        <h2 className="text-2xl sm:text-3xl font-bold text-white leading-snug">
                          {industry.headline}
                        </h2>

                        <p className="text-sm sm:text-base text-[#D4E0EF] leading-relaxed">
                          {industry.description}
                        </p>

                        <div className="pt-2">
                          <h3 className="text-xs font-bold uppercase tracking-[0.16em] text-[#A9DCEB] mb-3">
                            Mission &amp; Enterprise Use Cases
                          </h3>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                            {industry.useCases.map((uc) => (
                              <div
                                key={uc}
                                className="rounded-xl bg-[#071B38]/70 border border-[#A9DCEB]/15 p-3 flex items-start gap-2"
                              >
                                <CheckCircle2 className="w-4 h-4 text-[#D8C64B] mt-0.5 flex-shrink-0" />
                                <span className="text-xs sm:text-sm text-white leading-snug">
                                  {uc}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="pt-4 border-t border-[#A9DCEB]/15 flex flex-wrap items-center justify-between gap-4">
                        <Link
                          href={
                            industry.id === "maritime"
                              ? "/maritime-domain-awareness"
                              : "/solutions"
                          }
                          className="inline-flex items-center gap-2 text-sm font-semibold text-[#D8C64B] hover:text-white transition-colors"
                        >
                          View Applicable Platforms
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                        <Link
                          href={`/contact?industry=${encodeURIComponent(industry.name)}`}
                          className="text-xs font-semibold text-[#A9DCEB] hover:text-[#D8C64B] transition-colors"
                        >
                          Discuss {industry.name} Deployment →
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              </ScrollReveal>
            );
          })}
        </div>
      </section>

      {/* Special Highlight: Before/After Satellite Insurance & Financial Verification */}
      <section className="py-16 bg-[#071B38] border-t border-[#A9DCEB]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            kicker="Cross-Sector Value Realization"
            title="Reducing Risk. Improving Decisions."
            highlight="Building Trust."
            subtitle="Across public governance and commercial enterprise, Sathya turns multi-sensor orbital archives and live telemetry into auditable ground truth."
            align="center"
          />
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
