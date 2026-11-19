import React from "react";
import type { Metadata } from "next";
import DefenseServicePageTemplate from "@/components/DefenseServicePageTemplate";
import MDAOperationalView from "@/components/MDAOperationalView";
import { DEFENSE_SERVICES_BY_SLUG } from "@/data/defenseServicesData";

const service = DEFENSE_SERVICES_BY_SLUG["maritime-domain-awareness"];

export const metadata: Metadata = {
  title: `Sathya-MDA | ${service.title}`,
  description: service.heroIntro,
};

export default function MaritimeDomainAwarenessPage() {
  return (
    <DefenseServicePageTemplate
      service={service}
      extraShowcase={<MDAOperationalView />}
    />
  );
}
