import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Newspaper,
  Calendar,
  MapPin,
  Tv,
  Rocket,
  Compass,
  ShieldAlert,
  ArrowUpRight,
} from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import ScrollReveal from "@/components/ScrollReveal";
import NewsVideosGrid from "@/components/NewsVideosGrid";
import AchievementsSection from "@/components/AchievementsSection";
import ContactCTA from "@/components/ContactCTA";

export const metadata: Metadata = {
  title: "News & Media | CII Partnership Summit 2026 & Achievements",
  description:
    "Latest news, broadcast coverage, summit videos, and strategic milestones of Sathya Technology Services Pvt. Ltd., including the 31st CII Partnership Summit 2026 in Visakhapatnam, Andhra Pradesh.",
};

export default function NewsMediaPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="relative pt-32 lg:pt-40 pb-16 overflow-hidden bg-[#071B38] border-b border-[#A9DCEB]/20">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/achievements/achievement-2.jpg"
            alt="Sathya Technology Services at the 31st CII Partnership Summit 2026 in Visakhapatnam"
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#071B38] via-[#0B2852]/94 to-[#123D70]/85" />
          <div className="absolute inset-0 orbital-grid opacity-35" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#123D70]/90 border border-[#D8C64B]/50">
              <Newspaper className="w-3.5 h-3.5 text-[#D8C64B]" />
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#D8C64B]">
                News &amp; Media Center
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-bold text-white leading-tight">
              Latest News, Summit Videos &amp;{" "}
              <span className="text-[#D8C64B]">Media Coverage</span>
            </h1>

            <p className="text-base sm:text-lg text-[#D4E0EF] leading-relaxed">
              Official announcements, national television broadcasts, summit
              interactions, and institutional partnerships shaping India&apos;s
              SpaceTech, AI, and Geospatial Intelligence ecosystem.
            </p>
          </div>
        </div>
      </section>

      {/* 1. LATEST NEWS EDITORIAL FEATURE */}
      <section className="py-20 sm:py-24 bg-[#0B2852] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <ScrollReveal>
            <SectionHeader
              kicker="Latest News"
              title="Featured Summit &"
              highlight="Broadcast Dispatch"
            />
          </ScrollReveal>

          <ScrollReveal delayMs={80}>
            <article className="brochure-frame rounded-3xl bg-gradient-to-br from-[#071B38] via-[#0B2852] to-[#123D70] p-6 sm:p-10 lg:p-12 relative overflow-hidden">
              <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[#1C6E9C]/25 blur-3xl pointer-events-none" />

              <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
                {/* Main News Story Column */}
                <div className="lg:col-span-8 space-y-6">
                  {/* Meta Badges */}
                  <div className="flex flex-wrap items-center gap-3 text-xs font-semibold">
                    <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#D8C64B] text-[#0B2852] uppercase tracking-wider font-bold">
                      Latest News
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#123D70] border border-[#A9DCEB]/30 text-[#A9DCEB]">
                      <MapPin className="w-3.5 h-3.5 text-[#D8C64B]" />
                      Visakhapatnam, Andhra Pradesh
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#123D70] border border-[#A9DCEB]/30 text-[#A9DCEB]">
                      <Calendar className="w-3.5 h-3.5 text-[#D8C64B]" />
                      12–13 November 2026
                    </span>
                  </div>

                  {/* Headline */}
                  <h2 className="text-2xl sm:text-4xl font-bold text-white leading-tight">
                    Sathya Technology Services at the{" "}
                    <span className="text-[#D8C64B]">
                      CII Partnership Summit 2026
                    </span>
                  </h2>

                  <div className="text-sm sm:text-base font-semibold text-[#A9DCEB]">
                    Visakhapatnam, Andhra Pradesh, 12–13 November 2026
                  </div>

                  {/* Exact News Matter */}
                  <div className="space-y-4 text-base sm:text-lg text-[#D4E0EF] leading-relaxed">
                    <p>
                      At the 31st CII Partnership Summit in Visakhapatnam, the
                      Sathya Technology Services team met Andhra Pradesh Chief
                      Minister N. Chandrababu Naidu. At the summit, the state
                      signed new space-sector investments for its planned space
                      cities.
                    </p>
                    <p>
                      Under its Space Policy 4.0 (2025–30), Andhra Pradesh is
                      developing two space cities, at Lepakshi and near
                      Tirupati, with a target of ₹25,000 crore in space-sector
                      investment. Sathya&apos;s AI and satellite intelligence
                      platforms,{" "}
                      <strong className="text-white">SATHYA-MDA</strong> for
                      maritime domain awareness and{" "}
                      <strong className="text-white">
                        SATHYA-BORDER SECURITY
                      </strong>
                      , bring Earth-observation analytics to this growing
                      ecosystem.
                    </p>
                  </div>

                  {/* Broadcast Attribution Callout */}
                  <div className="pt-2">
                    <div className="inline-flex items-center gap-3 px-5 py-3.5 rounded-2xl bg-[#071B38]/90 border border-[#D8C64B]/55 shadow-[0_0_28px_rgba(216,198,75,0.18)]">
                      <Tv className="w-5 h-5 text-[#D8C64B] flex-shrink-0" />
                      <span className="text-sm sm:text-base font-semibold text-[#D8C64B]">
                        As featured on ETV Telugu News, 13 November 2026.
                      </span>
                    </div>
                  </div>
                </div>

                {/* Right Summit Ecosystem Key Highlights Card */}
                <div className="lg:col-span-4 space-y-4">
                  <div className="rounded-2xl bg-[#071B38]/90 border border-[#A9DCEB]/25 p-6 space-y-4">
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-[#D8C64B]">
                      <Rocket className="w-4 h-4" />
                      Summit Key Highlights
                    </div>

                    <div className="space-y-3.5 text-sm">
                      <div className="pb-3 border-b border-[#A9DCEB]/15">
                        <div className="text-xs uppercase tracking-wider text-[#A9DCEB]">
                          Policy Framework
                        </div>
                        <div className="font-bold text-white mt-0.5">
                          AP Space Policy 4.0 (2025–30)
                        </div>
                      </div>

                      <div className="pb-3 border-b border-[#A9DCEB]/15">
                        <div className="text-xs uppercase tracking-wider text-[#A9DCEB]">
                          Planned Space Cities
                        </div>
                        <div className="font-bold text-white mt-0.5">
                          Lepakshi &amp; Near Tirupati
                        </div>
                      </div>

                      <div className="pb-3 border-b border-[#A9DCEB]/15">
                        <div className="text-xs uppercase tracking-wider text-[#A9DCEB]">
                          Sector Investment Target
                        </div>
                        <div className="text-xl font-bold text-[#D8C64B] mt-0.5">
                          ₹25,000 Crore
                        </div>
                      </div>

                      <div className="space-y-2 pt-1">
                        <div className="text-xs uppercase tracking-wider text-[#A9DCEB]">
                          Featured Sathya Platforms
                        </div>
                        <Link
                          href="/maritime-domain-awareness"
                          className="flex items-center justify-between p-2.5 rounded-xl bg-[#123D70]/70 hover:bg-[#1C6E9C] border border-[#A9DCEB]/20 text-xs font-semibold text-white transition-colors"
                        >
                          <span className="inline-flex items-center gap-2">
                            <Compass className="w-4 h-4 text-[#D8C64B]" />
                            SATHYA-MDA
                          </span>
                          <ArrowUpRight className="w-3.5 h-3.5 text-[#D8C64B]" />
                        </Link>
                        <Link
                          href="/solutions#border-security"
                          className="flex items-center justify-between p-2.5 rounded-xl bg-[#123D70]/70 hover:bg-[#1C6E9C] border border-[#A9DCEB]/20 text-xs font-semibold text-white transition-colors"
                        >
                          <span className="inline-flex items-center gap-2">
                            <ShieldAlert className="w-4 h-4 text-[#D8C64B]" />
                            SATHYA-BORDER SECURITY
                          </span>
                          <ArrowUpRight className="w-3.5 h-3.5 text-[#D8C64B]" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </ScrollReveal>
        </div>
      </section>

      {/* 2. SUMMIT & BROADCAST VIDEOS SECTION (DIRECTLY BELOW NEWS MATTER) */}
      <section className="py-20 sm:py-24 bg-gradient-to-b from-[#071B38] via-[#0B2852] to-[#0B2852] border-t border-[#A9DCEB]/15 relative">
        <div className="absolute inset-0 orbital-grid opacity-30 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative space-y-12">
          <ScrollReveal>
            <SectionHeader
              kicker="Video Coverage & Broadcasts"
              title="CII Partnership Summit &"
              highlight="Media Videos"
              subtitle="Watch our exclusive media interview, leadership interaction with Hon'ble Chief Minister N. Chandrababu Naidu, and live IIT Tirupati MoU signing ceremony."
            />
          </ScrollReveal>

          <ScrollReveal delayMs={100}>
            <NewsVideosGrid />
          </ScrollReveal>
        </div>
      </section>

      {/* 3. ACHIEVEMENTS & SUMMIT PHOTO SLIDER (DIRECTLY BELOW VIDEOS) */}
      <AchievementsSection />

      {/* 4. CONTACT CTA */}
      <ContactCTA />
    </>
  );
}
