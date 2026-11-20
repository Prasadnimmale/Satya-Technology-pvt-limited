import React from "react";
import Link from "next/link";
import { ArrowRight, Mail, Phone, MapPin } from "lucide-react";
import { COMPANY_INFO } from "@/data/siteData";

export default function ContactCTA() {
  return (
    <section className="py-14 sm:py-24 relative w-full max-w-full overflow-x-clip bg-[#0B2852]">
      <div className="absolute inset-0 orbital-grid opacity-35 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="brochure-frame rounded-2xl sm:rounded-3xl bg-gradient-to-r from-[#071B38] via-[#123D70] to-[#0B2852] p-5 sm:p-10 lg:p-14 relative overflow-hidden">
          <div className="absolute -right-20 -top-20 w-96 h-96 rounded-full bg-[#1C6E9C]/35 blur-3xl pointer-events-none" />

          <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-7 sm:gap-10 items-center">
            <div className="lg:col-span-7 space-y-4 sm:space-y-5 min-w-0">
              <span className="inline-flex max-w-full items-center gap-2 px-3 sm:px-3.5 py-1.5 rounded-full bg-[#071B38]/80 border border-[#D8C64B]/45 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.12em] sm:tracking-[0.18em] text-[#D8C64B]">
                Mission-Ready Deployment
              </span>
              <h2 className="text-2xl sm:text-4xl font-bold text-white leading-snug sm:leading-tight">
                Ready to Transform Multi-Sensor Space Data into{" "}
                <span className="text-[#D8C64B]">Operational Clarity?</span>
              </h2>
              <p className="text-sm sm:text-lg text-[#D4E0EF] leading-relaxed">
                Engage with our SpaceTech scientists, SAR/AI engineers, and mission
                specialists for tailored On-Site, Private Cloud, or SaaS platform
                deployments.
              </p>

              <div className="flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-3 sm:gap-4 pt-1 sm:pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3.5 sm:py-4 rounded-xl bg-[#D8C64B] hover:bg-[#e5d45c] text-[#0B2852] font-semibold text-sm sm:text-base shadow-[0_0_28px_rgba(216,198,75,0.35)] transition-all sm:hover:-translate-y-0.5"
                >
                  Schedule a Consultation
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </Link>
                <Link
                  href="/solutions"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 sm:py-4 rounded-xl bg-[#071B38]/85 hover:bg-[#0B2852] border border-[#A9DCEB]/35 text-white font-semibold text-sm sm:text-base transition-all"
                >
                  Browse All Solutions
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 min-w-0">
              <div className="rounded-2xl bg-[#071B38]/90 border border-[#A9DCEB]/25 p-4 sm:p-6 space-y-3.5 sm:space-y-4">
                <div className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.15em] sm:tracking-[0.18em] text-[#D8C64B]">
                  Direct Executive Contact
                </div>
                <div className="text-base sm:text-lg font-bold text-white leading-snug">
                  {COMPANY_INFO.name}
                </div>

                <div className="space-y-3 text-xs sm:text-sm text-[#D4E0EF]">
                  <div className="flex items-start gap-2.5 sm:gap-3">
                    <MapPin className="w-4 h-4 text-[#D8C64B] mt-0.5 flex-shrink-0" />
                    <span className="leading-relaxed">{COMPANY_INFO.address}</span>
                  </div>
                  <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
                    <Mail className="w-4 h-4 text-[#D8C64B] flex-shrink-0" />
                    <a
                      href={`mailto:${COMPANY_INFO.email}`}
                      className="hover:text-[#D8C64B] transition-colors truncate"
                    >
                      {COMPANY_INFO.email}
                    </a>
                  </div>
                  <div className="flex items-center gap-2.5 sm:gap-3">
                    <Phone className="w-4 h-4 text-[#D8C64B] flex-shrink-0" />
                    <a
                      href={`tel:${COMPANY_INFO.phoneRaw}`}
                      className="hover:text-[#D8C64B] transition-colors font-semibold text-white"
                    >
                      {COMPANY_INFO.phone}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
