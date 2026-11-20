"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  ChevronDown,
  ArrowUpRight,
  Compass,
  ShieldAlert,
  Radar,
  Plane,
  Sprout,
  Droplets,
  Layers,
} from "lucide-react";
import BrandLogo from "./BrandLogo";

const solutionSubLinks = [
  {
    name: "Maritime Domain Awareness — Sathya-MDA",
    desc: "AIS, Optical/SAR/Thermal & Dark Vessel AI",
    href: "/maritime-domain-awareness",
    icon: Compass,
    featured: true,
  },
  {
    name: "Border Surveillance — SathyaSEEMA",
    desc: "Intrusion tunnel detection & SAR/RF fusion",
    href: "/border-surveillance",
    icon: ShieldAlert,
  },
  {
    name: "Defense & Intelligence — SathyaRAKSHA",
    desc: "Multi-sensor threat analytics & strategic insight",
    href: "/defense-intelligence",
    icon: Radar,
  },
  {
    name: "Air Domain Awareness — SathyaPAVAN",
    desc: "Satellite, UAV EO/IR & RF spectrum intelligence",
    href: "/air-domain-awareness",
    icon: Plane,
  },
  {
    name: "Agriculture & Crops — SathyaSASYAVED",
    desc: "Crop health, SAR/NDVI & yield estimation",
    href: "/agriculture-crop-monitoring",
    icon: Sprout,
  },
  {
    name: "Water Resources — SathyaJAL",
    desc: "Hydrology, irrigation & watershed governance",
    href: "/water-resources-monitoring",
    icon: Droplets,
  },
  {
    name: "Groundwater — SathyaANTARJAL",
    desc: "Aquifer mapping, depletion & recharge siting",
    href: "/water-resources-monitoring",
    icon: Layers,
  },
];

const defenseServicePaths = [
  "/defense-intelligence",
  "/air-domain-awareness",
  "/battlefield-intelligence",
  "/border-surveillance",
  "/navy-maritime-security",
  "/maritime-domain-awareness",
  "/drug-smuggling-detection",
  "/dome-support",
  "/agriculture-crop-monitoring",
  "/forest-mapping-fire-monitoring",
  "/water-resources-monitoring",
  "/environmental-hotspot-monitoring",
  "/illegal-fishing-detection",
  "/urban-development-monitoring",
  "/hazardous-waste-site-monitoring",
  "/energy-critical-infrastructure-security",
  "/energy-generation-distribution",
  "/nuclear-site-selection-risk-assessment",
  "/banking-asset-monitoring-valuation",
  "/geospatial-credit-risk-fraud-prevention",
  "/regulatory-compliance-branch-optimization",
  "/insurance-claims-satellite-verification",
  "/catastrophe-crop-damage-analytics",
];

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Solutions", href: "/solutions", hasDropdown: true },
  { label: "Industries", href: "/industries" },
  { label: "Technology", href: "/technology" },
  { label: "News & Media", href: "/news-media" },
  { label: "Contact Us", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenus = () => {
    setMobileOpen(false);
    setMobileSolutionsOpen(false);
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#071B38]/95 backdrop-blur-xl border-b border-[#A9DCEB]/20 shadow-[0_12px_36px_rgba(4,14,32,0.65)]"
          : "bg-[#0B2852]/82 backdrop-blur-md border-b border-[#A9DCEB]/12"
      }`}
    >
      {/* Subtle Top Orbital Telemetry Bar — Visible on Mobile, Tablet & Desktop */}
      <div className="block bg-[#071B38]/95 border-b border-[#A9DCEB]/12">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 py-1.5 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-0.5 sm:gap-1 lg:gap-4 text-[9.5px] sm:text-[11px] text-[#D4E0EF]">
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-0.5 sm:gap-2.5 lg:gap-4 text-center sm:text-left min-w-0">
            <span className="inline-flex items-center justify-center sm:justify-start gap-1.5 text-[#D8C64B] font-semibold sm:font-medium tracking-[0.06em] sm:tracking-wider uppercase leading-tight">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D8C64B] flex-shrink-0" />
              <span>Est. 1997 • Pioneers in SpaceTech Consulting</span>
            </span>
            <span className="hidden sm:inline text-[#A9DCEB]/40">|</span>
            <span className="text-[#D4E0EF]/95 leading-tight">
              Space Technology • Artificial Intelligence • Geospatial Intelligence
            </span>
          </div>
          <div className="hidden lg:flex items-center gap-5 flex-shrink-0">
            <a
              href="mailto:CEO@sathyatechnologyservices.com"
              className="hover:text-[#D8C64B] transition-colors"
            >
              CEO@sathyatechnologyservices.com
            </a>
            <span className="text-[#A9DCEB]/40">|</span>
            <a
              href="tel:+919989826684"
              className="hover:text-[#D8C64B] transition-colors font-medium"
            >
              +91 99898 26684
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Row */}
      <nav
        aria-label="Primary Navigation"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between gap-4"
      >
        <Link href="/" onClick={closeMenus} className="focus:outline-none">
          <BrandLogo />
        </Link>

        {/* Desktop Links */}
        <div className="hidden xl:flex items-center gap-1">
          {navLinks.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : item.href === "/solutions"
                ? pathname.startsWith("/solutions") ||
                  defenseServicePaths.some((p) => pathname.startsWith(p))
                : pathname.startsWith(item.href);

            if (item.hasDropdown) {
              return (
                <div key={item.label} className="relative group">
                  <Link
                    href={item.href}
                    className={`inline-flex items-center gap-1 px-3 py-2 rounded-lg text-[14px] whitespace-nowrap font-medium transition-colors ${
                      isActive
                        ? "text-[#D8C64B] bg-[#123D70]/70"
                        : "text-white hover:text-[#D8C64B] hover:bg-[#123D70]/45"
                    }`}
                  >
                    {item.label}
                    <ChevronDown className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180 text-[#A9DCEB]" />
                  </Link>

                  {/* Hover Dropdown */}
                  <div className="invisible opacity-0 translate-y-2 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200 absolute left-0 top-full pt-3 w-[420px]">
                    <div className="rounded-2xl bg-[#071B38]/98 backdrop-blur-2xl border border-[#A9DCEB]/25 shadow-[0_24px_60px_rgba(3,12,28,0.9)] p-3">
                      <div className="px-3 py-2 flex items-center justify-between border-b border-[#A9DCEB]/15 mb-2">
                        <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#D8C64B]">
                          AI-Enabled Turnkey Solutions
                        </span>
                        <Link
                          href="/solutions"
                          className="text-xs font-medium text-[#A9DCEB] hover:text-[#D8C64B] inline-flex items-center gap-1"
                        >
                          View All
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>

                      <div className="space-y-1">
                        {solutionSubLinks.map((sub) => {
                          const Icon = sub.icon;
                          return (
                            <Link
                              key={sub.name}
                              href={sub.href}
                              className={`flex items-start gap-3 p-2.5 rounded-xl transition-colors ${
                                sub.featured
                                  ? "bg-[#123D70]/85 border border-[#D8C64B]/40 hover:border-[#D8C64B]"
                                  : "hover:bg-[#123D70]/55"
                              }`}
                            >
                              <div
                                className={`p-2 rounded-lg mt-0.5 ${
                                  sub.featured
                                    ? "bg-[#D8C64B] text-[#0B2852]"
                                    : "bg-[#123D70] text-[#A9DCEB]"
                                }`}
                              >
                                <Icon className="w-4 h-4" />
                              </div>
                              <div>
                                <div className="text-sm font-semibold text-white flex items-center gap-1.5">
                                  {sub.name}
                                </div>
                                <p className="text-xs text-[#D4E0EF] mt-0.5">
                                  {sub.desc}
                                </p>
                              </div>
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <Link
                key={item.label}
                href={item.href}
                className={`px-3 py-2 rounded-lg text-[14px] whitespace-nowrap font-medium transition-colors ${
                  isActive
                    ? "text-[#D8C64B] bg-[#123D70]/70"
                    : "text-white hover:text-[#D8C64B] hover:bg-[#123D70]/45"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        {/* Desktop CTA Button */}
        <div className="hidden xl:flex items-center gap-3">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#D8C64B] hover:bg-[#e5d45c] text-[#0B2852] font-semibold text-sm shadow-[0_0_24px_rgba(216,198,75,0.3)] transition-all hover:-translate-y-0.5"
          >
            Request Demo
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          type="button"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={mobileOpen}
          className="xl:hidden p-2.5 rounded-xl bg-[#123D70]/80 border border-[#A9DCEB]/25 text-white hover:text-[#D8C64B] transition-colors"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="xl:hidden bg-[#071B38]/98 backdrop-blur-2xl border-b border-[#A9DCEB]/25 max-h-[calc(100vh-5rem)] overflow-y-auto">
          <div className="px-4 pt-3 pb-6 space-y-1.5">
            {navLinks.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);

              if (item.hasDropdown) {
                return (
                  <div key={item.label} className="rounded-xl overflow-hidden">
                    <div className="flex items-center justify-between">
                      <Link
                        href={item.href}
                        onClick={closeMenus}
                        className={`flex-1 px-4 py-3 text-base font-medium ${
                          isActive ? "text-[#D8C64B]" : "text-white"
                        }`}
                      >
                        {item.label}
                      </Link>
                      <button
                        type="button"
                        onClick={() => setMobileSolutionsOpen((p) => !p)}
                        aria-label="Toggle solutions submenu"
                        className="px-4 py-3 text-[#A9DCEB]"
                      >
                        <ChevronDown
                          className={`w-5 h-5 transition-transform ${
                            mobileSolutionsOpen ? "rotate-180 text-[#D8C64B]" : ""
                          }`}
                        />
                      </button>
                    </div>

                    {mobileSolutionsOpen && (
                      <div className="pl-4 pr-2 pb-3 space-y-1.5 border-l-2 border-[#D8C64B]/40 ml-4">
                        {solutionSubLinks.map((sub) => (
                          <Link
                            key={sub.name}
                            href={sub.href}
                            onClick={closeMenus}
                            className="block px-3 py-2 rounded-lg hover:bg-[#123D70]/60"
                          >
                            <div className="text-sm font-semibold text-white">
                              {sub.name}
                            </div>
                            <div className="text-xs text-[#D4E0EF]">
                              {sub.desc}
                            </div>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={closeMenus}
                  className={`block px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                    isActive
                      ? "bg-[#123D70]/80 text-[#D8C64B] border border-[#D8C64B]/30"
                      : "text-white hover:bg-[#123D70]/40"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}

            <div className="pt-4 border-t border-[#A9DCEB]/15 flex flex-col gap-3">
              <Link
                href="/contact"
                onClick={closeMenus}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-[#D8C64B] text-[#0B2852] font-semibold text-base shadow-lg"
              >
                Request Demo
                <ArrowUpRight className="w-4 h-4" />
              </Link>
              <div className="text-xs text-[#D4E0EF] px-2 space-y-1">
                <p>Email: CEO@sathyatechnologyservices.com</p>
                <p>Phone: +91 99898 26684</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
