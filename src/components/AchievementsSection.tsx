"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Award, X, Maximize2 } from "lucide-react";
import SectionHeader from "./SectionHeader";
import { ACHIEVEMENTS_DATA, type AchievementItem } from "@/data/siteData";

export default function AchievementsSection() {
  const trackRef = useRef<HTMLDivElement>(null);
  const groupARef = useRef<HTMLDivElement>(null);

  const offsetRef = useRef(0);
  const boostRemainingRef = useRef(0);
  const hoveredRef = useRef(false);
  const touchLastXRef = useRef<number | null>(null);

  const [lightboxItem, setLightboxItem] = useState<AchievementItem | null>(
    null
  );

  // Continuous 60fps smooth horizontal glide (strictly GPU-contained inside viewport, never causes horizontal page overflow!)
  useEffect(() => {
    let rafId = 0;
    let prevTime = performance.now();

    const tick = (now: number) => {
      const dt = Math.min(0.05, (now - prevTime) / 1000);
      prevTime = now;

      const groupEl = groupARef.current;
      const trackEl = trackRef.current;

      if (groupEl && trackEl && !lightboxItem) {
        const loopWidth = groupEl.offsetWidth;
        if (loopWidth > 0) {
          const isTouching = touchLastXRef.current !== null;
          const baseSpeed = isTouching ? 0 : hoveredRef.current ? 22 : 48;
          let delta = baseSpeed * dt;

          if (Math.abs(boostRemainingRef.current) > 0.5) {
            const step = boostRemainingRef.current * Math.min(1, dt * 8.5);
            delta += step;
            boostRemainingRef.current -= step;
          } else {
            boostRemainingRef.current = 0;
          }

          let next = offsetRef.current + delta;
          if (next >= loopWidth) {
            next %= loopWidth;
          } else if (next < 0) {
            next = (next % loopWidth) + loopWidth;
          }

          offsetRef.current = next;
          trackEl.style.transform = `translate3d(-${next.toFixed(2)}px, 0, 0)`;
        }
      }

      rafId = window.requestAnimationFrame(tick);
    };

    rafId = window.requestAnimationFrame(tick);
    return () => window.cancelAnimationFrame(rafId);
  }, [lightboxItem]);

  const nudgeSlide = (dir: 1 | -1) => {
    const stepPx = typeof window !== "undefined" && window.innerWidth < 640 ? 275 : 380;
    boostRemainingRef.current += dir * stepPx;
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    touchLastXRef.current = e.touches[0]?.clientX ?? null;
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (touchLastXRef.current === null) return;
    const curX = e.touches[0]?.clientX ?? touchLastXRef.current;
    const dx = touchLastXRef.current - curX;
    touchLastXRef.current = curX;
    offsetRef.current += dx;
  };

  const handleTouchEnd = () => {
    touchLastXRef.current = null;
  };

  const renderCard = (item: AchievementItem, keySuffix: string) => (
    <article
      key={`${item.id}-${keySuffix}`}
      onClick={() => setLightboxItem(item)}
      className="group w-[262px] sm:w-[350px] lg:w-[400px] flex-shrink-0 rounded-2xl sm:rounded-3xl overflow-hidden bg-gradient-to-b from-[#123D70]/90 to-[#0B2852] border border-[#A9DCEB]/28 hover:border-[#D8C64B] shadow-[0_14px_34px_rgba(4,15,34,0.72)] hover:shadow-[0_22px_55px_rgba(4,15,34,0.9),0_0_24px_rgba(216,198,75,0.22)] flex flex-col cursor-pointer transition-all duration-300 sm:hover:-translate-y-1"
    >
      {/* Full-Bleed 4:3 Smart-Framed Photograph */}
      <div className="relative aspect-[4/3] w-full bg-[#071B38] overflow-hidden">
        <Image
          src={item.image}
          alt={item.title}
          fill
          quality={92}
          sizes="(max-width: 640px) 262px, (max-width: 1024px) 350px, 400px"
          className="object-cover object-center transition-transform duration-500 sm:group-hover:scale-[1.04]"
        />

        <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-[#0B2852]/70 to-transparent pointer-events-none" />

        <span className="absolute top-3 right-3 w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-[#071B38]/85 backdrop-blur-md border border-[#A9DCEB]/35 text-[#D8C64B] sm:opacity-0 sm:group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
          <Maximize2 className="w-3.5 h-3.5" />
        </span>
      </div>

      {/* Clean Compact Mobile-Friendly Caption Body */}
      <div className="p-4 sm:p-6 flex-1 flex flex-col justify-between">
        <div className="space-y-1.5 sm:space-y-2">
          <span className="inline-flex max-w-full items-center gap-1.5 px-2.5 py-0.5 sm:py-1 rounded-full bg-[#071B38]/90 border border-[#D8C64B]/45 text-[9.5px] sm:text-[10px] font-bold uppercase tracking-[0.1em] sm:tracking-[0.14em] text-[#D8C64B]">
            <Award className="w-3 h-3 flex-shrink-0" />
            <span className="truncate">{item.badge}</span>
          </span>

          <h3 className="text-sm sm:text-lg font-bold text-white group-hover:text-[#D8C64B] transition-colors leading-snug">
            {item.title}
          </h3>

          <p className="text-xs sm:text-sm text-[#D4E0EF] leading-relaxed line-clamp-2 sm:line-clamp-none">
            {item.subtitle}
          </p>
        </div>
      </div>
    </article>
  );

  return (
    <section
      id="achievements"
      className="py-14 sm:py-24 relative w-full max-w-full overflow-x-clip bg-gradient-to-b from-[#071B38] via-[#0B2852] to-[#071B38] border-t border-[#A9DCEB]/15"
    >
      <div className="absolute inset-0 orbital-grid opacity-35 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header + Controls */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 sm:gap-6 mb-7 sm:mb-12">
          <SectionHeader
            kicker="Achievements & Strategic Milestones"
            title="Institutional Partnerships, MoUs &"
            highlight="National Recognition"
            subtitle="Forging high-impact collaborations across premier Indian institutes, government summits, and international SpaceTech forums."
          />

          <div className="flex items-center justify-between sm:justify-end gap-3 pt-1 sm:pt-0">
            <span className="text-[11px] font-medium text-[#A9DCEB]/85 sm:hidden">
              Tap photo to view full size
            </span>
            <div className="flex items-center gap-2.5">
              <button
                type="button"
                onClick={() => nudgeSlide(-1)}
                aria-label="Scroll achievements left"
                className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-[#123D70]/85 hover:bg-[#1C6E9C] border border-[#A9DCEB]/30 hover:border-[#D8C64B] text-white flex items-center justify-center transition-all cursor-pointer"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={() => nudgeSlide(1)}
                aria-label="Scroll achievements right"
                className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-[#D8C64B] hover:bg-[#e5d45c] text-[#0B2852] flex items-center justify-center shadow-[0_0_20px_rgba(216,198,75,0.3)] transition-all cursor-pointer"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Strictly Contained Continuous Smooth-Moving Animated Ribbon */}
      <div
        onMouseEnter={() => {
          hoveredRef.current = true;
        }}
        onMouseLeave={() => {
          hoveredRef.current = false;
        }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        style={{ contain: "paint" }}
        className="relative w-full max-w-full overflow-hidden py-2 sm:py-3 pl-4 sm:pl-0"
      >
        {/* Soft Left & Right Edge Vignettes */}
        <div className="pointer-events-none hidden sm:block absolute inset-y-0 left-0 w-16 z-10 bg-gradient-to-r from-[#081F42] to-transparent" />
        <div className="pointer-events-none hidden sm:block absolute inset-y-0 right-0 w-16 z-10 bg-gradient-to-l from-[#081F42] to-transparent" />

        <div
          ref={trackRef}
          className="flex w-max items-stretch will-change-transform select-none"
        >
          {/* Set A */}
          <div
            ref={groupARef}
            className="flex items-stretch gap-4 sm:gap-6 pr-4 sm:pr-6 flex-shrink-0"
          >
            {ACHIEVEMENTS_DATA.map((item) => renderCard(item, "a"))}
          </div>

          {/* Set B (Seamless Clone for Infinite Continuous Loop) */}
          <div
            aria-hidden="true"
            className="flex items-stretch gap-4 sm:gap-6 pr-4 sm:pr-6 flex-shrink-0"
          >
            {ACHIEVEMENTS_DATA.map((item) => renderCard(item, "b"))}
          </div>
        </div>
      </div>

      {/* Full-Resolution Lightbox Modal on Click */}
      {lightboxItem && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={() => setLightboxItem(null)}
          className="fixed inset-0 z-50 bg-[#041024]/92 backdrop-blur-xl flex items-center justify-center p-3 sm:p-8"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl w-full rounded-2xl sm:rounded-3xl bg-[#0B2852] border border-[#D8C64B]/50 shadow-2xl overflow-hidden"
          >
            <button
              type="button"
              onClick={() => setLightboxItem(null)}
              aria-label="Close preview"
              className="absolute top-3 right-3 sm:top-4 sm:right-4 z-20 w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#071B38]/90 border border-[#A9DCEB]/30 text-white hover:text-[#D8C64B] flex items-center justify-center cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative h-[52vh] sm:h-[68vh] bg-[#061631]">
              <Image
                src={lightboxItem.fullImage || lightboxItem.image}
                alt={lightboxItem.title}
                fill
                quality={95}
                sizes="95vw"
                className="object-contain p-2.5 sm:p-5"
              />
            </div>

            <div className="p-4 sm:p-6 bg-[#071B38] border-t border-[#A9DCEB]/20">
              <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.14em] sm:tracking-[0.18em] text-[#D8C64B]">
                {lightboxItem.badge}
              </span>
              <h3 className="text-base sm:text-xl font-bold text-white mt-1">
                {lightboxItem.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#D4E0EF] mt-1 leading-relaxed">
                {lightboxItem.subtitle}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
