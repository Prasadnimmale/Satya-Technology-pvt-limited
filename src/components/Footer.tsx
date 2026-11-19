import React from "react";
import Link from "next/link";
import { MapPin, Mail, Phone, ShieldCheck } from "lucide-react";
import BrandLogo from "./BrandLogo";
import { COMPANY_INFO, TURNKEY_PLATFORMS } from "@/data/siteData";

export default function Footer() {
  return (
    <footer className="relative bg-[#071B38] border-t border-[#A9DCEB]/20 text-white overflow-hidden">
      {/* Subtle orbital grid backdrop */}
      <div className="absolute inset-0 orbital-grid opacity-45 pointer-events-none" />
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[780px] h-48 bg-[#1C6E9C]/20 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#A9DCEB]/15">
          {/* Column 1: Company Identity */}
          <div className="lg:col-span-4 space-y-5">
            <Link href="/" className="inline-block">
              <BrandLogo />
            </Link>

            <p className="text-sm text-[#D4E0EF] leading-relaxed">
              {COMPANY_INFO.tagline}. Delivering mission-critical Space Technology,
              Artificial Intelligence, and Geospatial Intelligence platforms to
              sovereign defense, maritime, and enterprise organizations worldwide
              since 1997.
            </p>

            <div className="inline-flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-[#123D70]/70 border border-[#D8C64B]/35">
              <ShieldCheck className="w-4 h-4 text-[#D8C64B] flex-shrink-0" />
              <span className="text-xs font-medium text-[#D4E0EF]">
                On-Site Air-Gapped • Private Cloud • SaaS Platforms
              </span>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-[#D8C64B]">
              Navigation
            </h3>
            <ul className="space-y-2.5 text-sm text-[#D4E0EF]">
              {[
                { label: "Home", href: "/" },
                { label: "About Us", href: "/about" },
                { label: "Solutions", href: "/solutions" },
                { label: "MDA Platform", href: "/maritime-domain-awareness" },
                { label: "Industries", href: "/industries" },
                { label: "Technology", href: "/technology" },
                { label: "News & Media", href: "/news-media" },
                { label: "Contact Us", href: "/contact" },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="hover:text-[#D8C64B] transition-colors inline-flex items-center gap-1"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Turnkey Platforms */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-[#D8C64B]">
              AI Turnkey Platforms
            </h3>
            <ul className="space-y-2.5 text-sm text-[#D4E0EF]">
              {TURNKEY_PLATFORMS.map((p) => (
                <li key={p.id}>
                  <Link
                    href={p.href}
                    className="hover:text-[#D8C64B] transition-colors flex items-center justify-between group pr-2"
                  >
                    <span>
                      <strong className="font-semibold text-white group-hover:text-[#D8C64B]">
                        {p.code}
                      </strong>{" "}
                      <span className="text-xs text-[#A9DCEB]">— {p.name}</span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Official Brochure Contact Details */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-[#D8C64B]">
              Corporate Headquarters
            </h3>
            <div className="space-y-3.5 text-sm text-[#D4E0EF]">
              <p className="font-semibold text-white">{COMPANY_INFO.name}</p>

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
                  className="hover:text-[#D8C64B] transition-colors font-medium"
                >
                  {COMPANY_INFO.phone}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Integrated Stack Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#D4E0EF]/85">
          <p>
            © {new Date().getFullYear()} {COMPANY_INFO.name} All rights reserved.
          </p>
          <p className="text-[#A9DCEB] tracking-wide text-center sm:text-right">
            SpaceTech • AI/ML • Remote Sensing • Geospatial & Defense Intelligence
          </p>
        </div>
      </div>
    </footer>
  );
}
