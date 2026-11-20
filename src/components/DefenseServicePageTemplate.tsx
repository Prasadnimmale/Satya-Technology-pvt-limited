import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  ChevronRight,
  Satellite,
  Radar,
  ShieldCheck,
  Cpu,
  Eye,
  Radio,
  Compass,
  Layers,
  Plane,
  Anchor,
  Activity,
  BellRing,
  Crosshair,
  Globe2,
  Scan,
  Navigation,
  CheckCircle2,
  Server,
} from "lucide-react";
import SectionHeader from "./SectionHeader";
import ScrollReveal from "./ScrollReveal";
import {
  DEFENSE_SERVICES_LIST,
  type DefenseCapability,
  type DefenseServiceDetail,
} from "@/data/defenseServicesData";

const iconMap: Record<
  DefenseCapability["iconName"],
  React.ComponentType<{ className?: string }>
> = {
  satellite: Satellite,
  radar: Radar,
  shield: ShieldCheck,
  cpu: Cpu,
  eye: Eye,
  radio: Radio,
  compass: Compass,
  layers: Layers,
  plane: Plane,
  anchor: Anchor,
  activity: Activity,
  bell: BellRing,
  Crosshair: Crosshair,
  globe: Globe2,
  scan: Scan,
  navigation: Navigation,
};

interface DefenseServicePageTemplateProps {
  service: DefenseServiceDetail;
  extraShowcase?: React.ReactNode;
  sectorLabel?: string;
  sectorShortLabel?: string;
  sectorHref?: string;
  suiteHeading?: string;
  siblingServices?: DefenseServiceDetail[];
}

export default function DefenseServicePageTemplate({
  service,
  extraShowcase,
  sectorLabel = "Defense & Intelligence Sector",
  sectorShortLabel = "Defense & Intelligence",
  sectorHref = "/#defense-intelligence-sector",
  suiteHeading = "Explore All 8 Specialized Defense Services",
  siblingServices = DEFENSE_SERVICES_LIST,
}: DefenseServicePageTemplateProps) {
  const isSeamlessBrandArtwork = Boolean(service.seamlessBrandArtwork);

  return (
    <>
      {/* 1. TOP HEADER BLOCK + SEAMLESS IMAGE BELOW SUBTITLE + INTRO & CTAS */}
      <section className="relative pt-32 lg:pt-36 pb-16 bg-[#0B2852] border-b border-[#A9DCEB]/15 overflow-hidden">
        <div className="absolute inset-0 orbital-grid opacity-30 pointer-events-none" />
        <div className="absolute top-40 left-1/2 -translate-x-1/2 w-[680px] h-[420px] rounded-full bg-[#123D70]/55 blur-[120px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          {/* Breadcrumb Navigation + Back to Sector */}
          <div className="flex flex-wrap items-center justify-between gap-4">
            <nav
              aria-label="Breadcrumb"
              className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-[#D4E0EF]"
            >
              <Link
                href="/"
                className="hover:text-[#D8C64B] transition-colors font-medium"
              >
                Home
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-[#A9DCEB]/60" />
              <Link
                href={sectorHref}
                className="hover:text-[#D8C64B] transition-colors font-medium text-[#A9DCEB]"
              >
                {sectorLabel}
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-[#A9DCEB]/60" />
              <span className="text-[#D8C64B] font-semibold">
                {service.title}
              </span>
            </nav>

            <Link
              href={sectorHref}
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#123D70]/80 hover:bg-[#1C6E9C] border border-[#A9DCEB]/30 hover:border-[#D8C64B]/60 text-xs font-semibold text-white transition-all"
            >
              <ArrowLeft className="w-3.5 h-3.5 text-[#D8C64B]" />
              Back to {sectorShortLabel}
            </Link>
          </div>

          {/* Kicker + Heading + Subtitle FIRST */}
          <div className="max-w-4xl mx-auto text-center space-y-3.5 sm:space-y-4">
            <div className="inline-flex max-w-full items-center justify-center gap-2 px-3 sm:px-4 py-1.5 rounded-2xl sm:rounded-full bg-[#123D70] border border-[#D8C64B]/50">
              <span className="text-xs font-bold text-[#D8C64B] flex-shrink-0">
                {service.indexNumber}
              </span>
              <span className="w-1 h-1 rounded-full bg-[#A9DCEB] flex-shrink-0" />
              <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.11em] sm:tracking-[0.18em] text-[#D8C64B] leading-snug">
                {service.platformTag}
              </span>
            </div>

            <h1 className="text-2xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.16] sm:leading-[1.12]">
              {service.title}
            </h1>

            <p className="text-base sm:text-2xl font-medium text-[#D8C64B] leading-snug max-w-3xl mx-auto">
              {service.subtitle}
            </p>
          </div>

          {/* FEATURE ARTWORK DIRECTLY BELOW THE HEADING & SUBTITLE, BLENDED INTO #0B2852 */}
          {isSeamlessBrandArtwork ? (
            <div className="relative max-w-4xl mx-auto flex justify-center">
              <div className="relative w-full max-w-[780px] rounded-3xl bg-[#0B2852] overflow-hidden">
                <Image
                  src={service.heroImage}
                  alt={service.heroImageAlt}
                  width={1706}
                  height={2048}
                  priority
                  quality={95}
                  sizes="(max-width: 1024px) 100vw, 780px"
                  className="w-full max-h-[680px] h-auto object-contain mx-auto block"
                />
              </div>
            </div>
          ) : (
            <div className="brochure-frame rounded-3xl overflow-hidden bg-[#0B2852] relative max-w-5xl mx-auto shadow-[0_28px_70px_rgba(3,12,28,0.75)]">
              <div className="relative w-full h-[320px] sm:h-[440px] lg:h-[520px] overflow-hidden">
                <Image
                  src={service.heroImage}
                  alt={service.heroImageAlt}
                  fill
                  priority
                  quality={90}
                  sizes="(max-width: 1280px) 100vw, 1024px"
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B2852]/75 via-transparent to-[#0B2852]/25" />
              </div>
            </div>
          )}

          {/* Intro Copy, CTA Buttons & 4 Highlight Cards Directly Below the Image */}
          <ScrollReveal className="max-w-4xl mx-auto text-center space-y-7">
            <p className="text-base sm:text-lg text-[#D4E0EF] leading-relaxed">
              {service.heroIntro}
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="#overview"
                className="inline-flex items-center gap-2.5 px-7 py-4 rounded-xl bg-[#D8C64B] hover:bg-[#e5d45c] text-[#0B2852] font-semibold text-base shadow-[0_0_30px_rgba(216,198,75,0.35)] transition-all hover:-translate-y-0.5"
              >
                Explore Solutions
                <ArrowRight className="w-5 h-5" />
              </a>

              <Link
                href={`/contact?service=${encodeURIComponent(service.title)}`}
                className="inline-flex items-center gap-2.5 px-7 py-4 rounded-xl bg-[#123D70] hover:bg-[#1C6E9C] border border-[#A9DCEB]/40 hover:border-[#D8C64B]/65 text-white font-semibold text-base transition-all hover:-translate-y-0.5"
              >
                Request a Demo
                <ArrowUpRight className="w-4 h-4 text-[#D8C64B]" />
              </Link>
            </div>
          </ScrollReveal>

          <ScrollReveal delayMs={80}>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {service.overviewHighlights.map((hl) => (
                <div
                  key={hl.label}
                  className="glass-card rounded-2xl px-5 py-4 border border-[#A9DCEB]/22 text-center sm:text-left"
                >
                  <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#A9DCEB]">
                    {hl.label}
                  </div>
                  <div className="text-sm sm:text-base font-bold text-[#D8C64B] mt-1">
                    {hl.value}
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 2. SERVICE OVERVIEW + OPERATIONAL ARCHITECTURE */}
      <section
        id="overview"
        className="py-20 sm:py-24 bg-gradient-to-b from-[#071B38] via-[#0B2852] to-[#0B2852] scroll-mt-20 relative"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <ScrollReveal className="lg:col-span-8 space-y-6">
              <SectionHeader
                kicker="Service Overview"
                title={service.overviewHeading}
              />

              <div className="space-y-4 text-base sm:text-lg text-[#D4E0EF] leading-relaxed">
                {service.overviewParagraphs.map((para) => (
                  <p key={para.slice(0, 36)}>{para}</p>
                ))}
              </div>

              <div className="pt-2">
                <Link
                  href={`/contact?service=${encodeURIComponent(service.title)}`}
                  className="inline-flex items-center gap-2 text-sm sm:text-base font-semibold text-[#D8C64B] hover:text-white transition-colors"
                >
                  Schedule a Technical Walkthrough
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </ScrollReveal>

            <ScrollReveal delayMs={100} className="lg:col-span-4">
              <div className="brochure-frame rounded-3xl bg-gradient-to-b from-[#123D70]/80 to-[#071B38] p-7 space-y-5">
                <div className="w-12 h-12 rounded-2xl bg-[#0B2852] border border-[#D8C64B]/50 flex items-center justify-center text-[#D8C64B]">
                  <Server className="w-6 h-6" />
                </div>

                <div className="space-y-2">
                  <div className="text-xs font-bold uppercase tracking-[0.18em] text-[#D8C64B]">
                    Operational Architecture
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    Sovereign &amp; Agile Platform Delivery
                  </h3>
                  <p className="text-sm sm:text-base text-[#D4E0EF] leading-relaxed">
                    Delivered via customizable On-Site, Private Cloud, or
                    SaaS-enabled deployments aligned with mission security
                    requirements.
                  </p>
                </div>

                <ul className="pt-3 border-t border-[#A9DCEB]/20 space-y-2.5 text-xs sm:text-sm text-[#A9DCEB]">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#D8C64B] flex-shrink-0" />
                    <span>Air-Gapped On-Premise Command Centers</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#D8C64B] flex-shrink-0" />
                    <span>Dedicated Sovereign Private Cloud</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#D8C64B] flex-shrink-0" />
                    <span>Scalable Cloud-Native SaaS Access</span>
                  </li>
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* OPTIONAL BROCHURE SHOWCASE (MDA Operational View / Border 4-Layer Shield) */}
      {extraShowcase && (
        <section className="py-16 sm:py-20 bg-[#071B38] border-t border-[#A9DCEB]/15">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal>{extraShowcase}</ScrollReveal>
          </div>
        </section>
      )}

      {/* 3. KEY CAPABILITIES SECTION WITH ICONS */}
      <section className="py-20 sm:py-24 bg-gradient-to-b from-[#071B38] via-[#0B2852] to-[#123D70] border-t border-[#A9DCEB]/15 relative">
        <div className="absolute inset-0 orbital-grid opacity-35 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <ScrollReveal>
            <SectionHeader
              kicker="Key Capabilities"
              title={`Core ${service.title}`}
              highlight="Capabilities"
              subtitle="Engineered to convert multi-sensor orbital, aerial, and geophysical observations into clear, actionable intelligence."
              align="center"
            />
          </ScrollReveal>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.capabilities.map((cap, idx) => {
              const Icon = iconMap[cap.iconName] || ShieldCheck;
              return (
                <ScrollReveal key={cap.title} delayMs={(idx % 3) * 80}>
                  <div className="glass-card glass-card-hover rounded-2xl p-6 h-full flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between gap-3 mb-4">
                        <div className="w-11 h-11 rounded-xl bg-[#123D70] border border-[#D8C64B]/45 flex items-center justify-center text-[#D8C64B]">
                          <Icon className="w-5 h-5" />
                        </div>
                        <span className="text-[11px] font-bold tracking-widest text-[#A9DCEB]/80">
                          0{idx + 1}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-white leading-snug">
                        {cap.title}
                      </h3>
                      <p className="text-sm text-[#D4E0EF] mt-3 leading-relaxed">
                        {cap.description}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. APPLICATIONS SECTION */}
      <section className="py-20 sm:py-24 bg-[#0B2852] border-t border-[#A9DCEB]/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeader
              kicker="Mission & Operational Applications"
              title="Real-World Sector"
              highlight="Applications"
              subtitle={`Practical operational scenarios where ${service.title} enhances situational clarity and response coordination.`}
            />
          </ScrollReveal>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
            {service.applications.map((app, idx) => (
              <ScrollReveal key={app.title} delayMs={(idx % 2) * 90}>
                <div className="brochure-frame rounded-2xl bg-gradient-to-br from-[#071B38] to-[#123D70]/75 p-6 sm:p-7 h-full flex flex-col justify-between space-y-4">
                  <div className="space-y-2.5">
                    <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-[#D8C64B]">
                      <CheckCircle2 className="w-4 h-4" />
                      Application 0{idx + 1}
                    </div>
                    <h3 className="text-xl font-bold text-white">
                      {app.title}
                    </h3>
                    <p className="text-sm text-[#D4E0EF] leading-relaxed">
                      {app.scenario}
                    </p>
                  </div>

                  <div className="pt-3.5 border-t border-[#A9DCEB]/15">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#A9DCEB]">
                      Operational Value:{" "}
                    </span>
                    <span className="text-xs sm:text-sm text-white">
                      {app.impact}
                    </span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 5. TECHNOLOGY & INTELLIGENCE SECTION */}
      <section className="py-20 sm:py-24 bg-gradient-to-b from-[#071B38] via-[#0B2852] to-[#071B38] border-t border-[#A9DCEB]/15 relative">
        <div className="absolute inset-0 orbital-grid opacity-30 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative space-y-12">
          <ScrollReveal>
            <SectionHeader
              kicker="Technology & Intelligence Stack"
              title={service.techHeading}
              subtitle={service.techIntro}
              align="center"
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {service.techLayers.map((tl, idx) => (
              <ScrollReveal key={tl.layer} delayMs={idx * 75}>
                <div
                  className={`rounded-2xl p-6 h-full border flex flex-col justify-between ${
                    idx === 3
                      ? "bg-gradient-to-b from-[#123D70] to-[#0B2852] border-[#D8C64B]"
                      : "glass-card border-[#A9DCEB]/22"
                  }`}
                >
                  <div className="space-y-2.5">
                    <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#D8C64B]">
                      Layer 0{idx + 1}
                    </span>
                    <h3 className="text-lg font-bold text-white leading-snug">
                      {tl.layer}
                    </h3>
                    <div className="text-xs font-semibold text-[#A9DCEB]">
                      {tl.modality}
                    </div>
                    <p className="text-xs sm:text-sm text-[#D4E0EF] pt-1 leading-relaxed">
                      {tl.detail}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 6. SECTOR SERVICES NAVIGATION SWITCHER */}
      <section className="py-16 sm:py-20 bg-[#0B2852] border-t border-[#A9DCEB]/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="rounded-3xl bg-[#071B38]/90 border border-[#A9DCEB]/22 p-6 sm:p-8 space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <div className="text-xs font-bold uppercase tracking-[0.18em] text-[#D8C64B]">
                    {sectorLabel} Suite
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
                    {suiteHeading}
                  </h3>
                </div>
                <Link
                  href={sectorHref}
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#A9DCEB] hover:text-[#D8C64B] transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back to {sectorLabel}
                </Link>
              </div>

              <div
                className={`grid grid-cols-1 sm:grid-cols-2 ${
                  siblingServices.length <= 5 ? "lg:grid-cols-3" : "lg:grid-cols-4"
                } gap-3`}
              >
                {siblingServices.map((item) => {
                  const isCurrent = item.slug === service.slug;
                  return (
                    <Link
                      key={item.slug}
                      href={item.route}
                      className={`p-3.5 rounded-xl border transition-all flex items-center justify-between gap-2 ${
                        isCurrent
                          ? "bg-[#123D70] border-[#D8C64B] text-white shadow-[0_0_20px_rgba(216,198,75,0.2)]"
                          : "bg-[#0B2852]/80 hover:bg-[#123D70]/75 border-[#A9DCEB]/20 hover:border-[#D8C64B]/55 text-[#D4E0EF] hover:text-white"
                      }`}
                    >
                      <div className="flex items-center gap-2.5 min-w-0">
                        <span className="text-xs font-bold text-[#D8C64B] flex-shrink-0">
                          {item.indexNumber}
                        </span>
                        <span className="text-xs sm:text-sm font-semibold truncate">
                          {item.title}
                        </span>
                      </div>
                      <ArrowUpRight className="w-4 h-4 text-[#D8C64B] flex-shrink-0" />
                    </Link>
                  );
                })}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 7. REQUEST A DEMO CTA */}
      <section className="py-14 sm:py-24 bg-[#071B38] border-t border-[#A9DCEB]/20 relative overflow-hidden">
        <div className="absolute inset-0 orbital-grid opacity-30 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="brochure-frame rounded-2xl sm:rounded-3xl bg-gradient-to-r from-[#0B2852] via-[#123D70] to-[#0B2852] p-5 sm:p-12 lg:p-14 relative overflow-hidden">
            <div className="absolute -right-20 -top-20 w-96 h-96 rounded-full bg-[#1C6E9C]/35 blur-3xl pointer-events-none" />

            <div className="relative flex flex-col lg:flex-row lg:items-center justify-between gap-6 sm:gap-8">
              <div className="max-w-2xl space-y-3.5 sm:space-y-4">
                <span className="inline-flex max-w-full items-center gap-2 px-3 sm:px-3.5 py-1.5 rounded-2xl sm:rounded-full bg-[#071B38]/85 border border-[#D8C64B]/45 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.12em] sm:tracking-[0.18em] text-[#D8C64B] leading-snug">
                  {service.platformTag}
                </span>
                <h2 className="text-2xl sm:text-4xl font-bold text-white leading-snug sm:leading-tight">
                  Ready to Experience{" "}
                  <span className="text-[#D8C64B]">{service.title}</span> in
                  Action?
                </h2>
                <p className="text-sm sm:text-lg text-[#D4E0EF] leading-relaxed">
                  Connect with Sathya Technology Services&apos; space scientists
                  and geospatial engineers for a tailored briefing and platform
                  demonstration.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-3.5 sm:gap-4">
                <Link
                  href={`/contact?service=${encodeURIComponent(service.title)}`}
                  className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3.5 sm:py-4 rounded-xl bg-[#D8C64B] hover:bg-[#e5d45c] text-[#0B2852] font-semibold text-sm sm:text-base shadow-[0_0_28px_rgba(216,198,75,0.35)] transition-all sm:hover:-translate-y-0.5"
                >
                  Request a Demo
                  <ArrowRight className="w-5 h-5" />
                </Link>

                <Link
                  href={sectorHref}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 sm:py-4 rounded-xl bg-[#071B38]/85 hover:bg-[#0B2852] border border-[#A9DCEB]/35 text-white font-semibold text-sm sm:text-base transition-all"
                >
                  <ArrowLeft className="w-4 h-4 text-[#D8C64B]" />
                  Back to {sectorShortLabel}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
