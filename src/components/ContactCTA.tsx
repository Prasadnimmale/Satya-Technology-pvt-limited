import React from "react";
import Link from "next/link";
import { ArrowRight, Mail, Phone, MapPin } from "lucide-react";
import { COMPANY_INFO } from "@/data/siteData";

export default function ContactCTA() {
  return (
    <section className="py-20 sm:py-24 relative overflow-hidden bg-[#0B2852]">
      <div className="absolute inset-0 orbital-grid opacity-35 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="brochure-frame rounded-3xl bg-gradient-to-r from-[#071B38] via-[#123D70] to-[#0B2852] p-8 sm:p-12 lg:p-14 relative overflow-hidden">
          <div className="absolute -right-20 -top-20 w-96 h-96 rounded-full bg-[#1C6E9C]/35 blur-3xl pointer-events-none" />

          <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-5">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#071B38]/80 border border-[#D8C64B]/45 text-xs font-semibold uppercase tracking-[0.18em] text-[#D8C64B]">
                Mission-Ready Deployment
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
                Ready to Transform Multi-Sensor Space Data into{" "}
                <span className="text-[#D8C64B]">Operational Clarity?</span>
              </h2>
              <p className="text-base sm:text-lg text-[#D4E0EF] leading-relaxed">
                Engage with our SpaceTech scientists, SAR/AI engineers, and mission
                specialists for tailored On-Site, Private Cloud, or SaaS platform
                deployments.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-7 py-4 rounded-xl bg-[#D8C64B] hover:bg-[#e5d45c] text-[#0B2852] font-semibold text-base shadow-[0_0_28px_rgba(216,198,75,0.35)] transition-all hover:-translate-y-0.5"
                >
                  Schedule a Consultation
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="/solutions"
                  className="inline-flex items-center gap-2 px-6 py-4 rounded-xl bg-[#071B38]/80 hover:bg-[#0B2852] border border-[#A9DCEB]/35 text-white font-semibold text-base transition-all"
                >
                  Browse All Solutions
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl bg-[#071B38]/90 border border-[#A9DCEB]/25 p-6 space-y-4">
                <div className="text-xs font-bold uppercase tracking-[0.18em] text-[#D8C64B]">
                  Direct Executive Contact
                </div>
                <div className="text-lg font-bold text-white">
                  {COMPANY_INFO.name}
                </div>

                <div className="space-y-3 text-sm text-[#D4E0EF]">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-[#D8C64B] mt-1 flex-shrink-0" />
                    <span>{COMPANY_INFO.address}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-[#D8C64B] flex-shrink-0" />
                    <a
                      href={`mailto:${COMPANY_INFO.email}`}
                      className="hover:text-[#D8C64B] transition-colors break-all"
                    >
                      {COMPANY_INFO.email}
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
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
