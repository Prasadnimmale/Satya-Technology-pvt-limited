import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const fallbackSans = Plus_Jakarta_Sans({
  variable: "--font-fallback-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Sathya Technology Services Pvt. Ltd. | Space Technology, AI & Geospatial Intelligence",
    template: "%s | Sathya Technology Services Pvt. Ltd.",
  },
  description:
    "Sathya Technology Services Pvt. Ltd. — Turning Complex Data into Decisive Insight through Space Technology, Multi-Spectral Remote Sensing, AI/ML, Maritime Domain Awareness (Sathya-MDA), and Defense Geospatial Intelligence.",
  keywords: [
    "Sathya Technology Services",
    "Space Technology India",
    "Geospatial Intelligence",
    "Maritime Domain Awareness",
    "Sathya-MDA",
    "Dark Vessel Detection",
    "SathyaSEEMA",
    "Border Security SAR InSAR",
    "Remote Sensing AI ML",
    "Satellite Imagery Consulting",
  ],
  openGraph: {
    title: "Sathya Technology Services Pvt. Ltd. | SpaceTech, AI & Geospatial Intelligence",
    description:
      "Turning Oceans of Data into Insight through AI & ML. AI-enabled turnkey platforms for Defense, Maritime, Border Security, Agriculture, and Water Intelligence.",
    type: "website",
    url: "https://www.sathyatechnologyservices.com/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fallbackSans.variable} antialiased`}>
      <body className="min-h-screen w-full max-w-full overflow-x-clip flex flex-col bg-[#0B2852] text-white selection:bg-[#D8C64B] selection:text-[#0B2852]">
        <Navbar />
        <main className="flex-1 w-full min-w-0 max-w-full overflow-x-clip">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
