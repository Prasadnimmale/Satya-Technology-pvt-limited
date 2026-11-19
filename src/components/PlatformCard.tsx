import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import type { TurnkeyPlatform } from "@/data/siteData";

export default function PlatformCard({ platform }: { platform: TurnkeyPlatform }) {
  return (
    <article className="glass-card glass-card-hover rounded-2xl overflow-hidden flex flex-col h-full group">
      {/* Top Real-World Domain Image */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={platform.image}
          alt={`${platform.code} — ${platform.name}`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B2852] via-[#0B2852]/35 to-transparent" />

        <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-[#071B38]/90 border border-[#D8C64B]/45 text-[10px] font-bold tracking-[0.14em] uppercase text-[#D8C64B]">
          {platform.badge}
        </div>

        <div className="absolute bottom-3 left-4 right-4">
          <div className="text-lg font-bold text-[#D8C64B] leading-tight">
            {platform.code}
          </div>
          <div className="text-sm font-semibold text-white">{platform.name}</div>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-3">
          <p className="text-xs font-medium uppercase tracking-wider text-[#A9DCEB]">
            {platform.domain}
          </p>
          <p className="text-sm text-[#D4E0EF] leading-relaxed">
            {platform.summary}
          </p>

          <ul className="space-y-1.5 pt-1">
            {platform.capabilities.map((cap) => (
              <li
                key={cap}
                className="flex items-center gap-2 text-xs text-white/95"
              >
                <CheckCircle2 className="w-3.5 h-3.5 text-[#D8C64B] flex-shrink-0" />
                <span>{cap}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="pt-3 border-t border-[#A9DCEB]/15">
          <Link
            href={platform.href}
            className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#D8C64B] hover:bg-[#e5d45c] text-[#0B2852] font-semibold text-sm shadow-[0_0_20px_rgba(216,198,75,0.28)] transition-all hover:-translate-y-0.5"
          >
            Explore Platform
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </div>
    </article>
  );
}
