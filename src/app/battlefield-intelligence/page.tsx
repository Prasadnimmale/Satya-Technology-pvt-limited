import React from "react";
import type { Metadata } from "next";
import DefenseServicePageTemplate from "@/components/DefenseServicePageTemplate";
import { DEFENSE_SERVICES_BY_SLUG } from "@/data/defenseServicesData";

const service = DEFENSE_SERVICES_BY_SLUG["battlefield-intelligence"];

export const metadata: Metadata = {
  title: `${service.title} | Defense & Intelligence Sector`,
  description: service.heroIntro,
};

export default function BattlefieldIntelligencePage() {
  return <DefenseServicePageTemplate service={service} />;
}
