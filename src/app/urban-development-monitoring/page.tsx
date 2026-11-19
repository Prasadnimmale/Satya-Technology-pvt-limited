import React from "react";
import type { Metadata } from "next";
import DefenseServicePageTemplate from "@/components/DefenseServicePageTemplate";
import {
  URBAN_ENERGY_SERVICES_BY_SLUG,
  URBAN_ENERGY_SERVICES_LIST,
} from "@/data/urbanEnergyServicesData";

const service = URBAN_ENERGY_SERVICES_BY_SLUG["urban-development-monitoring"];

export const metadata: Metadata = {
  title: `${service.title} | Urban & Energy Sector`,
  description: service.heroIntro,
};

export default function UrbanDevelopmentMonitoringPage() {
  return (
    <DefenseServicePageTemplate
      service={service}
      sectorLabel="Urban & Energy Sector"
      sectorShortLabel="Urban & Energy"
      sectorHref="/#urban-energy-sector"
      suiteHeading="Explore All 5 Urban & Energy Sector Services"
      siblingServices={URBAN_ENERGY_SERVICES_LIST}
    />
  );
}
