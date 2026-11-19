import React from "react";
import type { Metadata } from "next";
import DefenseServicePageTemplate from "@/components/DefenseServicePageTemplate";
import {
  NATURAL_RESOURCES_SERVICES_BY_SLUG,
  NATURAL_RESOURCES_SERVICES_LIST,
} from "@/data/naturalResourcesServicesData";

const service =
  NATURAL_RESOURCES_SERVICES_BY_SLUG["environmental-hotspot-monitoring"];

export const metadata: Metadata = {
  title: `${service.title} | Natural Resources & Environment Sector`,
  description: service.heroIntro,
};

export default function EnvironmentalHotspotMonitoringPage() {
  return (
    <DefenseServicePageTemplate
      service={service}
      sectorLabel="Natural Resources & Environment Sector"
      sectorShortLabel="Natural Resources & Environment"
      sectorHref="/#natural-resources-environment"
      suiteHeading="Explore All 5 Natural Resources & Environment Services"
      siblingServices={NATURAL_RESOURCES_SERVICES_LIST}
    />
  );
}
