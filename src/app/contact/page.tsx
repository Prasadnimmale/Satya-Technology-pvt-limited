import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import { MapPin, Mail, Phone, Clock, ShieldCheck } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import ScrollReveal from "@/components/ScrollReveal";
import { COMPANY_INFO } from "@/data/siteData";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact Sathya Technology Services Pvt. Ltd. at 93, Rail Enclave, Sikh Road, Secunderabad 500009, India. Email CEO@sathyatechnologyservices.com or call +91 99898 26684.",
};

export default function ContactPage() {
  return (
    <>
      {/* Contact Hero */}
      <section className="relative pt-32 lg:pt-40 pb-16 overflow-hidden bg-[#071B38] border-b border-[#A9DCEB]/20">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/satellite-dish-ground.jpg"
            alt="Sathya Technology Services corporate & space communications contact"
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#071B38]/92 via-[#0B2852]/95 to-[#0B2852]" />
          <div className="absolute inset-0 orbital-grid opacity-35" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#123D70]/85 border border-[#D8C64B]/45 text-xs font-semibold uppercase tracking-[0.18em] text-[#D8C64B]">
              Corporate &amp; Mission Inquiries
            </span>
            <h1 className="text-3xl sm:text-5xl font-bold text-white leading-tight">
              Get in Touch With{" "}
              <span className="text-[#D8C64B]">Sathya Technology Services</span>
            </h1>
            <p className="text-base sm:text-lg text-[#D4E0EF] leading-relaxed">
              Partner with our Secunderabad headquarters for AI-enabled turnkey
              geospatial platforms, sovereign defense &amp; maritime deployments,
              and global SpaceTech consulting.
            </p>
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-20 sm:py-24 bg-[#0B2852] relative">
        <div className="absolute inset-0 orbital-grid opacity-25 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left Column: Exact Brochure Contact Details */}
            <ScrollReveal className="lg:col-span-5 space-y-6">
              <div className="brochure-frame rounded-3xl bg-gradient-to-b from-[#123D70]/80 to-[#071B38] p-7 sm:p-8 space-y-6">
                <div>
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#D8C64B]">
                    Official Corporate Details
                  </span>
                  <h2 className="text-2xl font-bold text-white mt-2">
                    {COMPANY_INFO.name}
                  </h2>
                  <p className="text-xs text-[#A9DCEB] mt-1">
                    Established in 1997 • SpaceTech • AI • Geospatial Intelligence
                  </p>
                </div>

                <div className="space-y-4 pt-2 border-t border-[#A9DCEB]/20">
                  {/* Address */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#0B2852] border border-[#D8C64B]/45 flex items-center justify-center text-[#D8C64B] flex-shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-bold uppercase tracking-wider text-[#D8C64B]">
                        Registered &amp; Corporate Office
                      </div>
                      <p className="text-sm sm:text-base text-white mt-0.5 leading-relaxed">
                        {COMPANY_INFO.address}
                      </p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#0B2852] border border-[#D8C64B]/45 flex items-center justify-center text-[#D8C64B] flex-shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs font-bold uppercase tracking-wider text-[#D8C64B]">
                        Executive Email
                      </div>
                      <a
                        href={`mailto:${COMPANY_INFO.email}`}
                        className="text-sm sm:text-base font-medium text-white hover:text-[#D8C64B] transition-colors break-all mt-0.5 inline-block"
                      >
                        {COMPANY_INFO.email}
                      </a>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#0B2852] border border-[#D8C64B]/45 flex items-center justify-center text-[#D8C64B] flex-shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-bold uppercase tracking-wider text-[#D8C64B]">
                        Direct Telephone
                      </div>
                      <a
                        href={`tel:${COMPANY_INFO.phoneRaw}`}
                        className="text-base font-bold text-white hover:text-[#D8C64B] transition-colors mt-0.5 inline-block"
                      >
                        {COMPANY_INFO.phone}
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Geospatial HQ Coordinate Card */}
              <div className="glass-card rounded-2xl p-6 space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold uppercase tracking-[0.16em] text-[#D8C64B] inline-flex items-center gap-1.5">
                    <Clock className="w-4 h-4" />
                    Secunderabad SpaceTech Hub
                  </span>
                  <span className="font-mono text-[#A9DCEB]">
                    17.4399° N, 78.4983° E
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-[#D4E0EF] leading-relaxed">
                  Strategically headquartered in Secunderabad / Hyderabad—India&apos;s
                  premier defense electronics, remote sensing, and aerospace
                  corridor.
                </p>
                <div className="pt-2 flex items-center gap-2 text-xs text-[#A9DCEB]">
                  <ShieldCheck className="w-4 h-4 text-[#D8C64B]" />
                  <span>On-Site • Private Cloud • SaaS Global Support</span>
                </div>
              </div>
            </ScrollReveal>

            {/* Right Column: Frontend Contact Form */}
            <ScrollReveal delayMs={120} className="lg:col-span-7">
              <ContactForm />
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
