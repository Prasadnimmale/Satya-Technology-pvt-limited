"use client";

import React, { useRef, useState } from "react";
import { Play, Tv, Handshake, Users } from "lucide-react";

interface NewsVideoItem {
  id: string;
  badge: string;
  title: string;
  dateLocation: string;
  description: string;
  src: string;
  orientation: "portrait" | "landscape";
  featured?: boolean;
  icon: React.ComponentType<{ className?: string }>;
}

const NEWS_VIDEOS: NewsVideoItem[] = [
  {
    id: "video-interview",
    badge: "TELEVISION BROADCAST INTERVIEW",
    title: "Exclusive Media Interview — SpaceTech, Quantum AI & Satellite Manufacturing Vision",
    dateLocation: "31st CII Partnership Summit • Visakhapatnam",
    description:
      "Dr. Saritha outlines Sathya Technology Services' roadmap for an AI & Quantum Satellite Data Processing Center and indigenous satellite manufacturing aligned with Andhra Pradesh Space Policy 4.0.",
    src: "/videos/news-video-3.mp4",
    orientation: "landscape",
    featured: true,
    icon: Tv,
  },
  {
    id: "video-cm-meet",
    badge: "LEADERSHIP INTERACTION",
    title: "Meeting Hon'ble Chief Minister Shri N. Chandrababu Naidu",
    dateLocation: "12–13 November 2026 • Visakhapatnam",
    description:
      "Sathya Technology Services leadership briefing Andhra Pradesh Chief Minister N. Chandrababu Naidu on AI, Quantum, and SpaceTech capabilities at the 31st CII Partnership Summit.",
    src: "/videos/news-video-1.mp4",
    orientation: "portrait",
    icon: Users,
  },
  {
    id: "video-mou-signing",
    badge: "OFFICIAL MOU SIGNING CEREMONY",
    title: "Live MoU Signing with IIT Tirupati at Andhra Pradesh Pavilion",
    dateLocation: "CII Partnership Summit 2026 • Andhra Pradesh",
    description:
      "Formal signing of the strategic SpaceTech, Remote Sensing, and Geospatial AI collaboration agreement at the Andhra Pradesh 'India's Sunrise State' pavilion.",
    src: "/videos/news-video-2.mp4",
    orientation: "landscape",
    icon: Handshake,
  },
];

export default function NewsVideosGrid() {
  const videoRefs = useRef<Record<string, HTMLVideoElement | null>>({});
  const [playingId, setPlayingId] = useState<string | null>(null);

  // Automatically pause other videos when one starts playing so audio never overlaps
  const handlePlay = (activeId: string) => {
    setPlayingId(activeId);
    Object.entries(videoRefs.current).forEach(([id, el]) => {
      if (id !== activeId && el && !el.paused) {
        el.pause();
      }
    });
  };

  const triggerPlay = (id: string) => {
    const el = videoRefs.current[id];
    if (!el) return;
    if (el.paused) {
      el.play();
    } else {
      el.pause();
    }
  };

  return (
    <div className="space-y-8">
      {/* Featured Wide Broadcast Video + Side Summit Videos */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-7 items-stretch">
        {NEWS_VIDEOS.map((vid) => {
          const Icon = vid.icon;
          const isPlaying = playingId === vid.id;
          const colSpan = vid.featured ? "lg:col-span-12" : "lg:col-span-6";

          return (
            <article
              key={vid.id}
              className={`${colSpan} brochure-frame rounded-3xl bg-gradient-to-b from-[#123D70]/80 via-[#0B2852] to-[#071B38] overflow-hidden flex flex-col justify-between`}
            >
              {/* Video Stage */}
              <div
                className={`relative w-full bg-[#040E21] flex items-center justify-center overflow-hidden ${
                  vid.featured
                    ? "h-[260px] sm:h-[420px] lg:h-[480px]"
                    : "h-[300px] sm:h-[360px]"
                }`}
              >
                <div className="absolute inset-0 orbital-grid opacity-25 pointer-events-none" />

                <video
                  ref={(el) => {
                    videoRefs.current[vid.id] = el;
                  }}
                  src={`${vid.src}#t=0.5`}
                  controls
                  playsInline
                  preload="metadata"
                  onPlay={() => handlePlay(vid.id)}
                  onPause={() => {
                    if (playingId === vid.id) setPlayingId(null);
                  }}
                  onEnded={() => {
                    if (playingId === vid.id) setPlayingId(null);
                  }}
                  className="relative z-10 w-full h-full object-contain bg-[#040E21]"
                />

                {/* Sleek Play Overlay Badge before playback */}
                {!isPlaying && (
                  <button
                    type="button"
                    onClick={() => triggerPlay(vid.id)}
                    aria-label={`Play ${vid.title}`}
                    className="absolute inset-0 z-20 flex items-center justify-center bg-[#071B38]/30 hover:bg-[#071B38]/15 transition-colors group cursor-pointer"
                  >
                    <span className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#D8C64B] group-hover:bg-[#e5d45c] text-[#0B2852] flex items-center justify-center shadow-[0_0_36px_rgba(216,198,75,0.55)] transition-transform duration-300 group-hover:scale-110">
                      <Play className="w-7 h-7 sm:w-8 sm:h-8 fill-[#0B2852] ml-1" />
                    </span>
                  </button>
                )}

                {/* Top Category Pill */}
                <div className="absolute top-4 left-4 z-20 pointer-events-none">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#071B38]/90 backdrop-blur-md border border-[#D8C64B]/50 text-[10.5px] font-bold uppercase tracking-[0.15em] text-[#D8C64B]">
                    <Icon className="w-3.5 h-3.5" />
                    {vid.badge}
                  </span>
                </div>
              </div>

              {/* Video Metadata & Description */}
              <div className="p-6 sm:p-7 border-t border-[#A9DCEB]/20 space-y-2.5">
                <div className="text-xs font-semibold uppercase tracking-wider text-[#A9DCEB]">
                  {vid.dateLocation}
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white leading-snug">
                  {vid.title}
                </h3>
                <p className="text-sm sm:text-base text-[#D4E0EF] leading-relaxed">
                  {vid.description}
                </p>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
