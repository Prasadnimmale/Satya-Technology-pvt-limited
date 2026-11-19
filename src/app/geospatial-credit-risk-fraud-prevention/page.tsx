import React from "react";
import type { Metadata } from "next";
import DefenseServicePageTemplate from "@/components/DefenseServicePageTemplate";
import {
  FINANCE_INSURANCE_SERVICES_BY_SLUG,
  FINANCE_INSURANCE_SERVICES_LIST,
} from "@/data/financeInsuranceServicesData";

const service =
  FINANCE_INSURANCE_SERVICES_BY_SLUG["geospatial-credit-risk-fraud-prevention"];

export const metadata: Metadata = {
  title: `${service.title} | Finance & Insurance Sector`,
  description: service.heroIntro,
};

export default function GeospatialCreditRiskFraudPreventionPage() {
  return (
    <DefenseServicePageTemplate
      service={service}
      sectorLabel="Finance & Insurance Sector"
      sectorShortLabel="Finance & Insurance"
      sectorHref="/#finance-insurance-sector"
      suiteHeading="Explore All 5 Finance & Insurance Sector Services"
      siblingServices={FINANCE_INSURANCE_SERVICES_LIST}
    />
  );
}
