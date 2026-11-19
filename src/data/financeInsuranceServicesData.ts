import type { DefenseServiceDetail } from "./defenseServicesData";

export const FINANCE_INSURANCE_SERVICES_LIST: DefenseServiceDetail[] = [
  // 1. /banking-asset-monitoring-valuation
  {
    slug: "banking-asset-monitoring-valuation",
    route: "/banking-asset-monitoring-valuation",
    indexNumber: "01",
    platformTag: "FinGeo Intelligence • Collateral Tracking & Spatial Valuation AI",
    title: "Banking & Financial Institutions — Asset Monitoring & Valuation",
    subtitle:
      "Continuous Orbital Verification of Financed Infrastructure, Real Estate, Industrial & Commodity Assets",
    heroIntro:
      "Equipping commercial banks, project-finance lenders, NBFCs, and institutional investors with time-stamped satellite imagery, 3D construction progress analytics, and geospatial market layers to value and monitor physical collateral at scale.",
    heroImage: "/images/finance-insurance/banking-asset-brand.png",
    heroImageAlt:
      "Earth-observation satellite scanning commercial real estate towers, logistics warehouses, and infrastructure collateral boundaries",
    seamlessBrandArtwork: true,
    overviewHeading:
      "Objective, Time-Stamped Ground Truth Across Every Financed Asset & Project Milestone",
    overviewParagraphs: [
      "Project-finance disbursements, commercial real-estate mortgages, industrial term loans, and sovereign infrastructure bonds depend on accurate valuation and milestone verification of physical assets. Relying solely on periodic manual site visits or borrower self-reporting leaves financial institutions exposed to delayed construction, stalled capex, unapproved land-use changes, and mispriced collateral.",
      "Sathya Technology Services delivers an AI-powered Geospatial Asset Monitoring & Valuation platform that pairs sub-meter Optical stereo imagery, all-weather Synthetic Aperture Radar (SAR) activity indicators, Thermal plant-utilization signals, and neighborhood infrastructure growth indices into auditable portfolio dashboards.",
    ],
    overviewHighlights: [
      { label: "Collateral Scope", value: "Real Estate, Infra, Plants & Land" },
      { label: "Sensor Stack", value: "30cm Stereo Optical • SAR • TIR" },
      { label: "Milestone AI", value: "3D Progress & Utilization Signals" },
      { label: "Deployment", value: "Bank On-Premise • Private Cloud • SaaS" },
    ],
    capabilities: [
      {
        title: "Tranche-Linked Construction Progress Verification",
        description:
          "Tracks earthworks, foundation pouring, structural floor-plate rise, and highway/solar installation percentages prior to releasing loan disbursements.",
        iconName: "layers",
      },
      {
        title: "Automated Geospatial Collateral Valuation (AVM)",
        description:
          "Combines parcel geometry, 3D built-up area, road/metro connectivity, flood/subsidence hazard scores, and surrounding urban growth rates.",
        iconName: "globe",
      },
      {
        title: "Industrial & Logistics Utilization Telemetry",
        description:
          "Measures factory thermal stack activity, container/truck yard occupancy, and raw-material stockpile volumes via SAR and optical computer vision.",
        iconName: "activity",
      },
      {
        title: "Encroachment & Collateral Boundary Protection",
        description:
          "Continuously monitors mortgaged land banks, distressed NPA properties, and warehoused assets for unauthorized occupation or stripping.",
        iconName: "shield",
      },
      {
        title: "Climate & Physical Asset Risk Stress-Testing",
        description:
          "Scores long-term flood, coastal surge, wildfire, drought, and InSAR ground-subsidence exposure across entire loan portfolios.",
        iconName: "radar",
      },
      {
        title: "Portfolio-Wide Early Warning & NPA Surveillance",
        description:
          "Flags sudden drops in site activity, halted construction, or undisclosed structural alterations months before financial covenant defaults surface.",
        iconName: "bell",
      },
    ],
    applications: [
      {
        title: "Infrastructure & Real-Estate Project Finance",
        scenario:
          "Lenders verify physical completion percentages across townships, data centers, highways, ports, and renewable energy parks before each drawdown.",
        impact:
          "Eliminates over-invoicing and milestone slippage while cutting site-inspection travel time and cost.",
      },
      {
        title: "Commercial & Retail Mortgage Valuation",
        scenario:
          "Credit appraisal teams evaluate exact plot boundaries, surrounding civic amenities, upcoming transit corridors, and floodplains within minutes.",
        impact:
          "Standardizes valuation objectivity across metropolitan, tier-2, and tier-3 lending markets.",
      },
      {
        title: "Distressed Asset (NPA) & Collateral Safeguarding",
        scenario:
          "Asset reconstruction companies and bank recovery cells monitor vacant industrial plots and attached properties via automated change alerts.",
        impact:
          "Protects recovery value against illegal encroachment or asset dismantling.",
      },
      {
        title: "Institutional M&A & Sovereign Bond Due Diligence",
        scenario:
          " Sovereign funds and institutional analysts audit multi-year historical imagery archives to verify historical asset performance.",
        impact:
          "Delivers independent, tamper-proof physical due diligence across global geographies.",
      },
    ],
    techHeading: "Financial Collateral & Spatial Valuation Intelligence Stack",
    techIntro:
      "Engineered for bank-grade security, audit traceability, and seamless integration into core credit, risk, and loan-origination systems.",
    techLayers: [
      {
        layer: "Sub-Meter Optical, Stereo & SAR Archive",
        modality: "30cm–1m Optical • Stereo DSM • X/C-Band SAR",
        detail:
          "High-cadence tasking and 10+ year historical lookback archives providing indisputable visual and 3D volumetric timelines.",
      },
      {
        layer: "Thermal & Economic Activity Indicators",
        modality: "TIR • Night-Time Lights • Yard Object AI",
        detail:
          "Quantifies operational plant heat signatures, logistics vehicle density, and regional commercial momentum.",
      },
      {
        layer: "Spatial AVM & Covenant Risk Engine",
        modality: "Computer Vision + Multi-Hazard Econometrics",
        detail:
          "Computes built-up progress curves, accessibility-adjusted valuation scores, and climate-adjusted collateral haircuts.",
      },
      {
        layer: "Bank-Grade API & Audit Vault",
        modality: "Air-Gapped On-Premise / Private Cloud",
        detail:
          "Zero-PII geospatial query APIs, PDF valuation certificates, and encrypted enterprise portals.",
      },
    ],
    gallery: [],
  },

  // 2. /geospatial-credit-risk-fraud-prevention
  {
    slug: "geospatial-credit-risk-fraud-prevention",
    route: "/geospatial-credit-risk-fraud-prevention",
    indexNumber: "02",
    platformTag: "Trusted Lending • Parcel Verification, Agro-Credit & Anti-Fraud AI",
    title: "Geospatial Credit Risk Assessment & Fraud Prevention",
    subtitle:
      "Multi-Year Satellite Productivity Scoring, Collateral De-Duplication & Ghost-Asset Fraud Detection",
    heroIntro:
      "De-risking agricultural, MSME, housing, and corporate lending through multi-season satellite crop/business history, automated cadastral polygon de-duplication, and real-world existence verification.",
    heroImage: "/images/finance-insurance/credit-risk-brand.png",
    heroImageAlt:
      "Satellite cadastral parcel grid, golden verification reticle, and survey drone validating agricultural and commercial borrower land",
    seamlessBrandArtwork: true,
    overviewHeading:
      "Eliminating Asymmetric Information & Collateral Fraud in Agri, MSME & Retail Lending",
    overviewParagraphs: [
      "Financial institutions expanding credit to rural borrowers, smallholder farmers, MSMEs, and emerging industrial clusters often face incomplete paper land records, overstated crop acreage, duplicate pledging of the same land parcel across branches, or 'ghost' collateral located on non-permissible forest or wetland zones.",
      "Powered by SathyaSASYAVED, SathyaJAL, and spatial anti-fraud AI, Sathya Technology Services verifies exact geo-coordinates, 5-to-10-year historical cropping intensity, irrigation reliability, soil moisture resilience, and statutory land-use legality in seconds—enabling faster credit inclusion with dramatically lower NPAs.",
    ],
    overviewHighlights: [
      { label: "Historical Lookback", value: "5–10 Yr Multi-Season Archive" },
      { label: "Anti-Fraud Guard", value: "Polygon Overlap & Ghost-Asset AI" },
      { label: "Agri Credit Engine", value: "SathyaSASYAVED + SathyaJAL Score" },
      { label: "Decision Speed", value: "Instant Geo-Underwriting Report" },
    ],
    capabilities: [
      {
        title: "Cadastral Polygon Overlap & Double-Pledging Detection",
        description:
          "Spatial topology checks instantly flag if a pledged land parcel overlaps an existing active mortgage, government reserve forest, lake bed, or highway acquisition zone.",
        iconName: "shield",
      },
      {
        title: "Multi-Year Crop History & Irrigation Credit Scoring",
        description:
          "Evaluates 5+ years of Kharif/Rabi sowing consistency, NDVI/SAR biomass stability, canal/borewell water security, and historical flood/drought resilience.",
        iconName: "cpu",
      },
      {
        title: "Ghost-Asset & Misrepresented Land-Use Discovery",
        description:
          "Verifies whether declared factories, warehouses, orchards, aquaculture ponds, or residential buildings physically exist at the submitted coordinates.",
        iconName: "eye",
      },
      {
        title: "In-Season Crop & Borrower Cash-Flow Monitoring",
        description:
          "Tracks post-disbursement sowing, mid-season crop health, and harvest timing to align repayment schedules or offer timely restructuring during weather shocks.",
        iconName: "activity",
      },
      {
        title: "Geo-Tagged Field App & Spoof-Proof KYC",
        description:
          "Cross-validates mobile field-officer photo capture locations and azimuths against current high-resolution satellite orthomosaics.",
        iconName: "compass",
      },
      {
        title: "Micro-Market Economic & Hydro-Climate Resilience",
        description:
          "Incorporates groundwater depletion trends (SathyaANTARJAL), night-light growth, and market-mandi proximity into district credit risk limits.",
        iconName: "globe",
      },
    ],
    applications: [
      {
        title: "Kisan Credit Card (KCC) & Agri-Loan Origination",
        scenario:
          "Rural and commercial banks underwrite farm loans digitally using objective satellite productivity, crop-type, and water-availability scores.",
        impact:
          "Cuts loan approval turnaround from weeks to minutes while expanding formal credit to creditworthy farmers.",
      },
      {
        title: "Collateral Fraud & Duplicate Mortgage Prevention",
        scenario:
          "Every new loan parcel polygon is spatially indexed against the institution's master collateral GIS registry and prohibited government land layers.",
        impact:
          "Stops double-financing, forged boundary sketches, and lending on encroached public land.",
      },
      {
        title: "MSME, Warehouse & Cold-Storage Lending",
        scenario:
          "Verifies physical warehouse roof footprint, road access, cold-chain solar/power infrastructure, and surrounding catchment activity.",
        impact:
          "Strengthens SME underwriting confidence in semi-urban and rural industrial clusters.",
      },
      {
        title: "Portfolio Climate & Drought Early-Warning",
        scenario:
          "Risk officers track monsoon progression and reservoir storage across borrower districts to anticipate localized stress.",
        impact:
          "Enables proactive portfolio provisioning and targeted borrower support.",
      },
    ],
    techHeading: "Geospatial Credit Scoring & Anti-Fraud Intelligence Stack",
    techIntro:
      "Combining petabyte-scale Earth-observation history with sub-second spatial indexing for high-volume digital lending.",
    techLayers: [
      {
        layer: "Multi-Year Optical, SAR & Hydro Archive",
        modality: "Sentinel • Landsat • High-Res Optical • SAR",
        detail:
          "Gap-free multi-year time series quantifying parcel cropping frequency, yield stability, flood return, and irrigation reliability.",
      },
      {
        layer: "Spatial Topology & Cadastral Engine",
        modality: "PostGIS / Vector Polygon De-Duplication",
        detail:
          "Sub-second intersection checks against existing bank collateral polygons, forest boundaries, wetlands, and CRZ zones.",
      },
      {
        layer: "Geo-Credit & Fraud Anomaly AI",
        modality: "Explainable ML Scorecard",
        detail:
          "Produces transparent parcel risk grades, existence confidence scores, and reason codes for credit committees.",
      },
      {
        layer: "LOS / LMS Integration Layer",
        modality: "REST APIs, Web Portal & PDF Scorecards",
        detail:
          "Plugs directly into bank Loan Origination Systems via sovereign On-Premise or Private Cloud deployment.",
      },
    ],
    gallery: [],
  },

  // 3. /regulatory-compliance-branch-optimization
  {
    slug: "regulatory-compliance-branch-optimization",
    route: "/regulatory-compliance-branch-optimization",
    indexNumber: "03",
    platformTag: "Spatial Governance • ESG/Climate Reporting & Network Expansion AI",
    title: "Regulatory Compliance, Reporting & Branch/ATM Optimization",
    subtitle:
      "Climate/ESG Regulatory Disclosure Analytics, Financial Inclusion Mapping & High-ROI Branch/ATM Site Selection",
    heroIntro:
      "Uniting auditable climate-risk and ESG regulatory reporting with high-precision demographic, night-light, and urban-growth location intelligence for strategic branch, ATM, and business-correspondent placement.",
    heroImage: "/images/finance-insurance/branch-optimization-brand.png",
    heroImageAlt:
      "Dusk aerial view of a metropolitan commercial district overlaid with cyan catchment rings and golden optimal branch hub nodes",
    seamlessBrandArtwork: true,
    overviewHeading:
      "Auditable Climate/Regulatory Compliance Paired with Precision Retail Network Growth",
    overviewParagraphs: [
      "Modern financial institutions face dual strategic imperatives: complying with stringent central-bank climate-risk disclosures, green-finance taxonomies, and financial-inclusion mandates while simultaneously optimizing physical branch, ATM, and wealth-center footprints across rapidly shifting urban and rural growth corridors.",
      "Sathya Technology Services bridges both mandates inside a single spatial intelligence suite—quantifying portfolio-level physical climate risks and deforestation-free ESG compliance from orbit while modeling high-potential micro-markets using 3D built-up growth, night-time economic radiance, transit accessibility, and competitor catchment gaps.",
    ],
    overviewHighlights: [
      { label: "Regulatory Scope", value: "Climate Risk, ESG & Inclusion GIS" },
      { label: "Network Planning", value: "Branch, ATM & BC Micro-Siting" },
      { label: "Growth Signals", value: "Night-Lights, 3D Sprawl & Transit" },
      { label: "Audit Readiness", value: "Traceable Spatial Evidence Packs" },
    ],
    capabilities: [
      {
        title: "Climate-Risk Stress Testing & Regulatory Reporting",
        description:
          "Quantifies acute and chronic physical risks (flood, cyclone, heat, subsidence, water stress) across financed assets and branches for regulatory disclosures.",
        iconName: "shield",
      },
      {
        title: "Green-Bond & ESG Use-of-Proceeds Verification",
        description:
          "Independently verifies renewable solar/wind installations, afforestation survival, and zero-deforestation supply chains backed by sustainable finance.",
        iconName: "globe",
      },
      {
        title: "High-ROI Branch & ATM Catchment Micro-Siting",
        description:
          "Models drive/walk isochrones, commercial floor-space density, new residential townships, and competitor saturation to rank top expansion sites.",
        iconName: "navigation",
      },
      {
        title: "Night-Time Radiance & Emerging Growth Detection",
        description:
          "Uses VIIRS/high-res night-light trends and quarterly building-footprint expansion to spot booming peri-urban and industrial hubs ahead of competitors.",
        iconName: "eye",
      },
      {
        title: "Financial Inclusion & Unbanked Village Mapping",
        description:
          "Identifies underserved rural clusters beyond 5km banking-touchpoint radii to guide Business Correspondent (BC) and rural-branch mandates.",
        iconName: "compass",
      },
      {
        title: "Branch Consolidation & Disaster Continuity GIS",
        description:
          "Evaluates overlapping branch cannibalization alongside flood/power-outage vulnerability to optimize network resilience and operating cost.",
        iconName: "layers",
      },
    ],
    applications: [
      {
        title: "Central-Bank Climate Risk &BRSR/ESG Disclosures",
        scenario:
          "Risk and sustainability teams map every corporate loan, mortgage cluster, and bank facility against multi-horizon physical hazard layers.",
        impact:
          "Delivers regulator-ready, reproducible spatial metrics without manual spreadsheet estimation.",
      },
      {
        title: "Metro & Tier-2/3 Branch/ATM Network Expansion",
        scenario:
          "Retail banking strategy teams pinpoint high-deposit, high-footfall emerging neighborhoods along new ring roads, IT parks, and metro lines.",
        impact:
          "Accelerates branch break-even timelines and maximizes deposit mobilization per outlet.",
      },
      {
        title: "Green & Sustainability-Linked Loan Auditing",
        scenario:
          "Tracks annual KPIs—such as captive solar capacity, effluent compliance, or greenbelt cover—for sustainability-linked corporate borrowers.",
        impact:
          "Prevents greenwashing with independent, time-stamped satellite verification.",
      },
      {
        title: "Priority-Sector & Rural Banking Governance",
        scenario:
          "Maps district-level agricultural potential, rural road connectivity, and banking touchpoints across priority-sector districts.",
        impact:
          "Aligns regulatory inclusion compliance with profitable rural market penetration.",
      },
    ],
    techHeading: "Regulatory Climate-GIS & Location Optimization Stack",
    techIntro:
      "Integrating orbital Earth observation, socio-economic spatial layers, and network-graph optimization inside an enterprise banking portal.",
    techLayers: [
      {
        layer: "Multi-Hazard Climate & ESG EO Suite",
        modality: "SAR Flood • TIR Heat • Optical/Forest • InSAR",
        detail:
          "Standardized hazard return-period grids and ecological compliance baselines spanning national and global geographies.",
      },
      {
        layer: "Urban Momentum & Radiance Signals",
        modality: "Night-Time Lights • 3D Built-Up • Road Graphs",
        detail:
          "Captures real-time residential, commercial, and industrial expansion before decennial census updates.",
      },
      {
        layer: "Catchment Gravity & Cannibalization AI",
        modality: "Isochrone Routing + Spatial Econometrics",
        detail:
          "Forecasts deposit/loan potential, ATM transaction volume, and sister-branch overlap for candidate street segments.",
      },
      {
        layer: "Executive BI & Compliance Dashboards",
        modality: "Board Reports, Audit Logs & Secure GIS",
        detail:
          "Deployed On-Premise or in Sovereign Private Cloud with role-based access for Risk, ESG, and Retail Network teams.",
      },
    ],
    gallery: [],
  },

  // 4. /insurance-claims-satellite-verification
  {
    slug: "insurance-claims-satellite-verification",
    route: "/insurance-claims-satellite-verification",
    indexNumber: "04",
    platformTag: "InsurTech Truth • Before/After Orbital Claim Adjudication",
    title: "Insurance Claims & Adjudication — Before/After Satellite Verification",
    subtitle:
      "Sub-Meter Pre- and Post-Loss Imagery Comparison, Fraudulent Claim Screening & Rapid Remote Loss Adjustment",
    heroIntro:
      "Accelerating property, industrial, marine, and infrastructure claim adjudication while eliminating backdated or exaggerated claims through time-stamped before-and-after Optical, SAR, and Thermal satellite evidence.",
    heroImage: "/images/finance-insurance/insurance-verification-brand.png",
    heroImageAlt:
      "Satellite scan line comparing intact pre-event commercial properties with post-storm flooded buildings marked by golden verification reticles",
    seamlessBrandArtwork: true,
    overviewHeading:
      "Indisputable Before-and-After Orbital Evidence for Fair, Fast & Fraud-Free Claim Settlement",
    overviewParagraphs: [
      "Following fires, floods, cyclones, explosions, landslides, or marine casualties, insurers and reinsurers face a surge of complex claims where physical access may be blocked, site evidence clears quickly, or opportunistic claims attempt to attribute pre-existing damage to a covered event.",
      "Sathya Technology Services provides claims adjusters, special investigation units (SIU), and underwriters with exact time-stamped Before-and-After satellite imagery pairs, all-weather SAR structural/flood damage masks, and AI damage-severity grading—enabling remote desk adjudication in hours instead of weeks.",
    ],
    overviewHighlights: [
      { label: "Core Method", value: "Pre- vs. Post-Event Orbital Diff" },
      { label: "Spatial Detail", value: "30–50 cm Optical + All-Weather SAR" },
      { label: "Fraud Defense", value: "Date-of-Loss & Pre-Existing Damage" },
      { label: "Turnaround", value: "Rapid Desk Triage & Evidence Pack" },
    ],
    capabilities: [
      {
        title: "Time-Stamped Pre- & Post-Loss Visual Differencing",
        description:
          "Retrieves archival baseline imagery just prior to policy inception or peril date and pairs it with rapid post-event acquisitions to isolate true event damage.",
        iconName: "scan",
      },
      {
        title: "AI Roof, Structural & Industrial Damage Grading",
        description:
          "Classifies intact, minor, major, and collapsed roof/warehouse structures across commercial estates, factories, ports, and residential clusters.",
        iconName: "cpu",
      },
      {
        title: "Backdated & Pre-Existing Damage Fraud Detection",
        description:
          "Exposes claims where roof dilapidation, excavation, fire scars, or waterlogging clearly existed prior to policy binding or the declared loss date.",
        iconName: "shield",
      },
      {
        title: "All-Weather SAR Flood & Water-Depth Verification",
        description:
          "Confirms whether floodwaters actually reached an insured warehouse, plant floor, or vehicle yard during peak storm cloud cover.",
        iconName: "radar",
      },
      {
        title: "Fire Origin, Thermal Scar & Plume Reconstruction",
        description:
          "Uses multi-temporal thermal/SWIR passes to corroborate industrial fire timelines, burn footprints, and adjacent property exposure.",
        iconName: "eye",
      },
      {
        title: "Marine Hull, Cargo & Port Casualty Verification",
        description:
          "Leverages Sathya-MDA AIS kinematics and satellite imagery to verify vessel groundings, storm berth impacts, and declared casualty coordinates.",
        iconName: "anchor",
      },
    ],
    applications: [
      {
        title: "Commercial Property & Industrial Fire/Storm Claims",
        scenario:
          "Loss adjusters inspect factory complexes, solar farms, and logistics hubs immediately after cyclones or fires using sub-meter before/after swipe views.",
        impact:
          "Fast-tracks genuine business-interruption and property payouts while triaging field surveyors to complex losses.",
      },
      {
        title: "Special Investigation Unit (SIU) Anti-Fraud Audits",
        scenario:
          "Investigates suspicious, late-reported, or policy-inception-adjacent claims across remote geographies using historical satellite archives.",
        impact:
          "Saves millions in fraudulent claim leakage with court-admissible time-stamped orbital proof.",
      },
      {
        title: "Pre-Bind Underwriting & Risk Engineering",
        scenario:
          "Underwriters inspect roof condition, hazardous neighboring occupancies, fire-tender access, and flood-zone elevation before quoting large policies.",
        impact:
          "Improves loss ratios through accurate upfront risk selection and pricing.",
      },
      {
        title: "Reinsurance Treaty & Facultative Loss Verification",
        scenario:
          "Reinsurers independently validate cedent loss footprints, event dates, and aggregation boundaries across regional perils.",
        impact:
          "Builds transparent trust and speeds reinsurance recovery settlements.",
      },
    ],
    techHeading: "Before/After Satellite Claim Adjudication Stack",
    techIntro:
      "Purpose-built to deliver legally defensible provenance, sub-meter co-registration accuracy, and effortless side-by-side adjuster workflows.",
    techLayers: [
      {
        layer: "Global Archive + Rapid Tasking",
        modality: "30cm Optical • X/C-Band SAR • SWIR/TIR",
        detail:
          "Combines deep historical baseline libraries with priority post-event satellite tasking and UAV orthomosaics.",
      },
      {
        layer: "Sub-Pixel Co-Registration & CCD",
        modality: "Orthorectified Alignment + SAR Coherence",
        detail:
          "Eliminates viewing-angle parallax so pre- and post-event building footprints align to sub-pixel precision.",
      },
      {
        layer: "Damage Segmentation & Fraud AI",
        modality: "Siamese Change Networks",
        detail:
          "Automatically highlights structural collapse, roof tarping/peeling, char scars, debris, and floodwater lines.",
      },
      {
        layer: "Claims Workbench & PDF Dossiers",
        modality: "Before/After Swipe UI & Claims APIs",
        detail:
          "Exports certified sensor-timestamped adjudication reports directly into core insurance claims platforms.",
      },
    ],
    gallery: [],
  },

  // 5. /catastrophe-crop-damage-analytics
  {
    slug: "catastrophe-crop-damage-analytics",
    route: "/catastrophe-crop-damage-analytics",
    indexNumber: "05",
    platformTag: "SathyaSASYAVED & Cat-AI • Parametric & Automated Loss Settlement",
    title: "Automated Catastrophe & Crop Damage Settlement Analytics",
    subtitle:
      "Wide-Area Cyclone, Flood, Hail & Drought Damage Quantification for Rapid Crop & Catastrophe Payouts",
    heroIntro:
      "Fusing cloud-penetrating SAR flood mapping, SathyaSASYAVED multi-spectral crop loss models, and parametric hazard triggers to estimate catastrophe losses and settle millions of claims with speed and precision.",
    heroImage: "/images/finance-insurance/catastrophe-crop-brand.png",
    heroImageAlt:
      "SAR radar satellite and assessment UAV delineating storm-flooded agricultural crop damage polygons along a swollen river",
    seamlessBrandArtwork: true,
    overviewHeading:
      "Scaling Post-Disaster & Agricultural Claim Settlement from Months down to Days",
    overviewParagraphs: [
      "When cyclones, widespread monsoon floods, unseasonal hailstorms, or severe droughts strike across entire states, manual village-by-village crop-cutting experiments and physical property surveys create massive settlement backlogs—delaying relief for policyholders and leaving insurers uncertain of total reserve liabilities.",
      "Combining SathyaSASYAVED agro-intelligence, SathyaJAL flood hydrodynamics, and high-cadence Synthetic Aperture Radar (SAR), Sathya Technology Services automatically maps inundated acreage, crop lodging, biomass drop, and structural catastrophe footprints—powering fast indemnity settlements and instant parametric insurance triggers.",
    ],
    overviewHighlights: [
      { label: "Perils Covered", value: "Flood, Cyclone, Drought, Hail & Fire" },
      { label: "Cloud-Free Tech", value: "All-Weather SAR + Optical/SWIR" },
      { label: "Crop Engine", value: "SathyaSASYAVED Yield-Loss AI" },
      { label: "Payout Speed", value: "Automated Reserve & Parametric Triggers" },
    ],
    capabilities: [
      {
        title: "24–48 Hr All-Weather SAR Flood Footprint Mapping",
        description:
          "Penetrates dense cyclone and monsoon cloud cover to delineate inundated villages, industrial estates, and submerged standing crops.",
        iconName: "radar",
      },
      {
        title: "Parcel & Gram-Panchayat Crop Loss Quantification",
        description:
          "Calculates percentage biomass loss, flood submergence duration, hail lodging, and prevented sowing across insured notification units.",
        iconName: "layers",
      },
      {
        title: "Parametric Index Design & Automated Triggering",
        description:
          "Structures objective, tamper-proof satellite indices (rainfall deficit, soil moisture, NDVI anomaly, flood depth, wind swath) for instant parametric payouts.",
        iconName: "cpu",
      },
      {
        title: "Catastrophe Reserve & Loss Cost Estimation",
        description:
          "Overlays live hazard footprints onto insured exposure schedules (TIV) to compute real-time gross and net loss estimates for executive reserving.",
        iconName: "activity",
      },
      {
        title: "Smart-Sampling CCE & Adjuster Routing",
        description:
          "Stratifies homogeneous high-, medium-, and low-damage zones from space to optimize statutory Crop Cutting Experiments (CCE) and field surveys.",
        iconName: "navigation",
      },
      {
        title: "Longitudinal Drought & Moisture-Deficit Tracking",
        description:
          "Monitors cumulative evaporative stress, reservoir storage drops, and delayed sowing across entire agricultural insurance portfolios.",
        iconName: "globe",
      },
    ],
    applications: [
      {
        title: "Sovereign & Commercial Crop Insurance (PMFBY / Weather)",
        scenario:
          "Crop insurers and state agriculture departments assess localized hailstorm/inundation claims and mid-season adversity payouts across millions of farms.",
        impact:
          "Delivers fair, transparent farmer compensation weeks faster while eliminating moral hazard and sampling disputes.",
      },
      {
        title: "Cyclone & Flood Catastrophe Event Response",
        scenario:
          "General insurers and reinsurers overlay SAR flood-duration maps and wind-damage swaths onto property, motor, and engineering policy portfolios.",
        impact:
          "Establishes accurate IBNR loss reserves within 48 hours of landfall and mobilizes claims teams to worst-hit pin codes.",
      },
      {
        title: "Parametric Micro-Insurance & Climate Resilience Pools",
        scenario:
          "Development banks, disaster authorities, and insurers run automated parametric covers for smallholder farmers, renewable parks, and coastal MSMEs.",
        impact:
          "Triggers liquidity payouts automatically as soon as satellite thresholds are crossed.",
      },
      {
        title: "Reinsurance Catastrophe Modeling & Retrocession",
        scenario:
          "Calibrates historical flood, drought, and cyclone vulnerability curves using 20+ years of Earth-observation peril footprints.",
        impact:
          "Sharpens treaty pricing and reduces model uncertainty in emerging markets.",
      },
    ],
    techHeading: "Catastrophe & Agro-Actuarial Geospatial Intelligence Stack",
    techIntro:
      "Uniting all-weather orbital radar, biophysical crop modeling, and actuarial exposure engines for high-speed mass settlement.",
    techLayers: [
      {
        layer: "All-Weather SAR & Meteorological Constellation",
        modality: "C/L/X-Band SAR • GPM Rain • Soil Moisture",
        detail:
          "Uninterrupted flood-extent, inundation-duration, wind-roughness, and root-zone moisture capture during severe weather.",
      },
      {
        layer: "Multi-Spectral Crop & Structural Damage Layer",
        modality: "VNIR • Red-Edge • SWIR • UAV Verification",
        detail:
          "Quantifies post-event chlorophyll collapse, crop lodging, siltation, and urban/industrial roof damage.",
      },
      {
        layer: "Actuarial Loss & Parametric Trigger AI",
        modality: "Vulnerability Curves + Exposure GIS",
        detail:
          "Translates physical hazard intensity and crop-stage sensitivity directly into rupee/dollar loss ratios and payout tiers.",
      },
      {
        layer: "Mass-Settlement & Regulator Portal",
        modality: "Batch Claim APIs, Village Maps & Audit Trails",
        detail:
          "Processes millions of policy polygons with full transparency via On-Premise, Private Cloud, or SaaS.",
      },
    ],
    gallery: [],
  },
];

export const FINANCE_INSURANCE_SERVICES_BY_SLUG: Record<
  string,
  DefenseServiceDetail
> = Object.fromEntries(
  FINANCE_INSURANCE_SERVICES_LIST.map((service) => [service.slug, service])
);
