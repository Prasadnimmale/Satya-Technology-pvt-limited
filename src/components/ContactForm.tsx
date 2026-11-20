"use client";

import React, { useState } from "react";
import { Send, CheckCircle2, ShieldCheck } from "lucide-react";
import { TURNKEY_PLATFORMS } from "@/data/siteData";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    organization: "",
    email: "",
    phone: "",
    platform: "",
    deployment: "Scalable SaaS Platform",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="brochure-frame rounded-3xl bg-[#071B38]/95 p-8 sm:p-10 text-center space-y-5">
        <div className="w-16 h-16 rounded-2xl bg-[#123D70] border-2 border-[#D8C64B] mx-auto flex items-center justify-center text-[#D8C64B] shadow-[0_0_28px_rgba(216,198,75,0.3)]">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-[#D8C64B]">
          Briefing Request Prepared
        </span>
        <h3 className="text-2xl sm:text-3xl font-bold text-white">
          Thank You, {formData.fullName || "Partner"}
        </h3>
        <p className="text-sm sm:text-base text-[#D4E0EF] max-w-lg mx-auto leading-relaxed">
          Your inquiry regarding{" "}
          <strong className="text-white">
            {formData.platform || "SpaceTech & Geospatial Solutions"}
          </strong>{" "}
          ({formData.deployment}) has been formatted. Connect directly with our
          executive team at{" "}
          <a
            href="mailto:CEO@sathyatechnologyservices.com"
            className="text-[#D8C64B] font-semibold underline"
          >
            CEO@sathyatechnologyservices.com
          </a>{" "}
          or call <strong className="text-white">+91 99898 26684</strong> for
          priority scheduling.
        </p>

        <div className="pt-3 flex flex-wrap items-center justify-center gap-3">
          <a
            href={`mailto:CEO@sathyatechnologyservices.com?subject=${encodeURIComponent(
              `Platform Briefing Inquiry: ${
                formData.platform || "SpaceTech & Geospatial Solutions"
              } — ${formData.organization}`
            )}&body=${encodeURIComponent(
              `Name: ${formData.fullName}\nOrganization: ${formData.organization}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nPlatform of Interest: ${
                formData.platform || "SpaceTech & Geospatial Solutions"
              }\nPreferred Deployment: ${formData.deployment}\n\nMission Requirements:\n${formData.message}`
            )}`}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#D8C64B] text-[#0B2852] font-semibold text-sm hover:bg-[#e5d45c] transition-colors"
          >
            Open in Email Client
            <Send className="w-4 h-4" />
          </a>

          <button
            type="button"
            onClick={() => setSubmitted(false)}
            className="px-5 py-3 rounded-xl bg-[#123D70] text-white text-sm font-medium hover:bg-[#1C6E9C] transition-colors"
          >
            Edit Inquiry
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="brochure-frame rounded-3xl bg-[#071B38]/92 p-6 sm:p-8 lg:p-10 space-y-5"
    >
      <div className="space-y-1.5 pb-3 border-b border-[#A9DCEB]/15">
        <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#D8C64B]">
          Consultation &amp; Platform Inquiry
        </span>
        <h2 className="text-2xl font-bold text-white">
          Connect With Our SpaceTech &amp; AI Team
        </h2>
        <p className="text-xs sm:text-sm text-[#D4E0EF]">
          Complete the form below to request a technical briefing, platform
          overview, or SpaceTech consulting engagement.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <label
            htmlFor="fullName"
            className="block text-xs font-semibold uppercase tracking-wider text-[#A9DCEB]"
          >
            Full Name *
          </label>
          <input
            id="fullName"
            type="text"
            required
            placeholder="e.g., Cdr. Rajesh Sharma"
            value={formData.fullName}
            onChange={(e) =>
              setFormData({ ...formData, fullName: e.target.value })
            }
            className="w-full px-4 py-3 rounded-xl bg-[#0B2852] border border-[#A9DCEB]/25 text-white placeholder-[#D4E0EF]/45 text-sm focus:outline-none focus:border-[#D8C64B]"
          />
        </div>

        <div className="space-y-1.5">
          <label
            htmlFor="organization"
            className="block text-xs font-semibold uppercase tracking-wider text-[#A9DCEB]"
          >
            Organization / Agency *
          </label>
          <input
            id="organization"
            type="text"
            required
            placeholder="Ministry, Defense Wing, or Enterprise"
            value={formData.organization}
            onChange={(e) =>
              setFormData({ ...formData, organization: e.target.value })
            }
            className="w-full px-4 py-3 rounded-xl bg-[#0B2852] border border-[#A9DCEB]/25 text-white placeholder-[#D4E0EF]/45 text-sm focus:outline-none focus:border-[#D8C64B]"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <label
            htmlFor="email"
            className="block text-xs font-semibold uppercase tracking-wider text-[#A9DCEB]"
          >
            Official Email *
          </label>
          <input
            id="email"
            type="email"
            required
            placeholder="name@organization.gov / .com"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            className="w-full px-4 py-3 rounded-xl bg-[#0B2852] border border-[#A9DCEB]/25 text-white placeholder-[#D4E0EF]/45 text-sm focus:outline-none focus:border-[#D8C64B]"
          />
        </div>

        <div className="space-y-1.5">
          <label
            htmlFor="phone"
            className="block text-xs font-semibold uppercase tracking-wider text-[#A9DCEB]"
          >
            Phone / Direct Line
          </label>
          <input
            id="phone"
            type="tel"
            placeholder="+91 ..."
            value={formData.phone}
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value })
            }
            className="w-full px-4 py-3 rounded-xl bg-[#0B2852] border border-[#A9DCEB]/25 text-white placeholder-[#D4E0EF]/45 text-sm focus:outline-none focus:border-[#D8C64B]"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <label
            htmlFor="platform"
            className="block text-xs font-semibold uppercase tracking-wider text-[#A9DCEB]"
          >
            Platform / Solution of Interest
          </label>
          <select
            id="platform"
            value={formData.platform}
            onChange={(e) =>
              setFormData({ ...formData, platform: e.target.value })
            }
            className={`w-full px-4 py-3 rounded-xl bg-[#0B2852] border border-[#A9DCEB]/25 text-sm focus:outline-none focus:border-[#D8C64B] ${
              formData.platform ? "text-white" : "text-[#D4E0EF]/60"
            }`}
          >
            <option value="" disabled className="bg-[#071B38] text-[#D4E0EF]/60">
              Select Platform
            </option>
            {TURNKEY_PLATFORMS.map((p) => (
              <option
                key={p.id}
                value={`${p.code} (${p.name})`}
                className="bg-[#0B2852] text-white"
              >
                {p.code} — {p.name}
              </option>
            ))}
            <option
              value="SpaceTech Consulting & OEM Manufacturing"
              className="bg-[#0B2852] text-white"
            >
              SpaceTech Consulting &amp; Atmanirbhar Bharat OEM
            </option>
            <option
              value="Satellite Imagery & Multi-Sensor Analytics"
              className="bg-[#0B2852] text-white"
            >
              Satellite Imagery &amp; Multi-Sensor Analytics
            </option>
          </select>
        </div>

        <div className="space-y-1.5">
          <label
            htmlFor="deployment"
            className="block text-xs font-semibold uppercase tracking-wider text-[#A9DCEB]"
          >
            Preferred Deployment Model
          </label>
          <select
            id="deployment"
            value={formData.deployment}
            onChange={(e) =>
              setFormData({ ...formData, deployment: e.target.value })
            }
            className="w-full px-4 py-3 rounded-xl bg-[#0B2852] border border-[#A9DCEB]/25 text-white text-sm focus:outline-none focus:border-[#D8C64B]"
          >
            <option value="Scalable SaaS Platform">Scalable SaaS Platform</option>
            <option value="Sovereign Air-Gapped On-Site">
              Sovereign Air-Gapped On-Site
            </option>
            <option value="Dedicated Private Cloud">
              Dedicated Private Cloud
            </option>
            <option value="Consulting / Advisory">Consulting / Advisory</option>
          </select>
        </div>
      </div>

      <div className="space-y-1.5">
        <label
          htmlFor="message"
          className="block text-xs font-semibold uppercase tracking-wider text-[#A9DCEB]"
        >
          Operational Scope &amp; Requirements *
        </label>
        <textarea
          id="message"
          rows={4}
          required
          placeholder="Describe your region of interest, sensor requirements (Optical, SAR, AIS, RF, Hydrology), or mission timeline..."
          value={formData.message}
          onChange={(e) =>
            setFormData({ ...formData, message: e.target.value })
          }
          className="w-full px-4 py-3 rounded-xl bg-[#0B2852] border border-[#A9DCEB]/25 text-white placeholder-[#D4E0EF]/45 text-sm focus:outline-none focus:border-[#D8C64B]"
        />
      </div>

      <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="inline-flex items-center gap-2 text-xs text-[#A9DCEB]">
          <ShieldCheck className="w-4 h-4 text-[#D8C64B] flex-shrink-0" />
          <span>Confidential enterprise &amp; defense inquiry handling</span>
        </div>

        <button
          type="submit"
          className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-[#D8C64B] hover:bg-[#e5d45c] text-[#0B2852] font-semibold text-sm shadow-[0_0_24px_rgba(216,198,75,0.3)] transition-all hover:-translate-y-0.5 cursor-pointer"
        >
          Send Inquiry
          <Send className="w-4 h-4" />
        </button>
      </div>
    </form>
  );
}
