export interface TurnkeyPlatform {
  id: string;
  code: string;
  name: string;
  domain: string;
  tagline: string;
  summary: string;
  capabilities: string[];
  href: string;
  image: string;
  badge: string;
}

export interface SolutionDetail {
  id: string;
  platformCode: string;
  kicker: string;
  title: string;
  subtitle: string;
  description: string[];
  image: string;
  imageCaption: string;
  capabilities: string[];
  features: { title: string; detail: string }[];
  ctaLabel: string;
  ctaHref: string;
}

export interface SectorQuadrant {
  id: string;
  title: string;
  subtitle: string;
  motto: string;
  image: string;
  items: string[];
  itemLinks?: Record<string, string>;
  capabilitiesBar: string[];
}

export interface IndustryProfile {
  id: string;
  name: string;
  kicker: string;
  headline: string;
  description: string;
  image: string;
  useCases: string[];
  platformsUsed: string[];
  metrics: { label: string; value: string }[];
}

export const COMPANY_INFO = {
  name: "Sathya Technology Services Pvt. Ltd.",
  shortName: "SATHYA",
  tagline: "Turning Oceans of Data into Insight through AI & ML",
  heroHeading: "Turning Complex Data into Decisive Insight.",
  heroKicker: "SPACE TECHNOLOGY | AI | GEOSPATIAL INTELLIGENCE",
  established: "1997",
  address: "93, Rail Enclave, Sikh Road, Secunderabad 500009, India.",
  email: "CEO@sathyatechnologyservices.com",
  phone: "+91 99898 26684",
  phoneRaw: "+919989826684",
  website: "https://www.sathyatechnologyservices.com/",
  websiteDisplay: "www.sathyatechnologyservices.com",
  introParagraph:
    "SATHYA Technology Services (SATHYA) develops and delivers cutting-edge Space Tech, Artificial Intelligence, and Geospatial Intelligence solutions to government, defense, and commercial organizations worldwide. Established in 1997, our multidisciplinary expertise spans satellite technologies, multi-spectral remote sensing, defense analytics, sustainable resource management, and national security applications.",
};

export const CORE_OFFERINGS = [
  {
    title: "AI-Powered Remote Sensing, GIS & Geospatial Intelligence Platforms",
    description:
      "End-to-end spatial intelligence platforms fusing multi-resolution Earth observation feeds into automated command-grade GIS workflows.",
    category: "Spatial Core",
  },
  {
    title: "Satellite Imagery Processing",
    description:
      "Orthorectification, pan-sharpening, atmospheric correction, and radiometric calibration across Optical, SAR, InSAR, and Thermal sensors.",
    category: "Earth Observation",
  },
  {
    title: "Advanced Analytics",
    description:
      "Deep-learning object detection, longitudinal change detection, and spatio-temporal pattern recognition across petabyte-scale imagery archives.",
    category: "AI & ML",
  },
  {
    title: "Space Tech Application Services Consulting",
    description:
      "Strategic advisory from veteran space industry scientists and engineers helping sovereign agencies, enterprises, and startups scale in the global space market.",
    category: "Advisory",
  },
  {
    title: "Maritime Domain Awareness",
    description:
      "Unified maritime operational picture integrating real-time AIS, multi-spectral satellite feeds, ENC charts, bathymetry, and subsea infrastructure protection.",
    category: "Maritime",
  },
  {
    title: "Dark Vessel Detection Solutions",
    description:
      "Uncovering AIS-silent, spoofed, and non-cooperative vessels via SAR/Optical/Thermal correlation, RF monitoring, and drone video verification.",
    category: "Enforcement",
  },
  {
    title: "Defense & Border Security",
    description:
      "Multi-layered surveillance combining spaceborne SAR/InSAR, airborne EO/IR drones, and ground seismic/GPR sensors to detect cross-border and underground threats.",
    category: "National Security",
  },
  {
    title: "Aerospace Intelligence Systems",
    description:
      "Integrated air domain situational awareness, missile risk modeling, TEL monitoring, and aerial threat trajectory intelligence.",
    category: "Airspace",
  },
  {
    title: "Multi-Sensor Data Fusion",
    description:
      "Probabilistic longitudinal correlation across heterogeneous space, air, ground, marine, and RF signals to eliminate false alarms and surface weak indicators.",
    category: "Sensor Fusion",
  },
  {
    title: "Predictive Analytics & Real-Time Alerting",
    description:
      "Automated anomaly scoring, risk forecasting, and low-latency operational alerts delivered via On-Site, Private Cloud, or SaaS deployments.",
    category: "Decision Support",
  },
];

export const EXPERTISE_CARDS = [
  {
    badge: "ESTABLISHED IN 1997",
    title: "Nearly Three Decades of SpaceTech Leadership",
    description:
      "Serving public, defense, and private-sector organizations worldwide since 1997 with battle-tested geospatial engineering and mission-critical reliability.",
    highlights: ["28+ Years Heritage", "Public & Defense Trusted", "Global Space Market Advisory"],
  },
  {
    badge: "MULTIDISCIPLINARY TEAM",
    title: "Backed by Scientists, Engineers & Domain Veterans",
    description:
      "Comprised of seasoned space scientists, remote sensing engineers, AI/ML researchers, defense analysts, and international space industry executives.",
    highlights: ["Remote Sensing Scientists", "AI & SAR Engineers", "Mission Domain Specialists"],
  },
  {
    badge: "PREMIER CONSULTING",
    title: "Mapping, Development & Resource Management",
    description:
      "Leveraging orbital and aerial space technology for high-precision cartographic mapping, infrastructure development, and sustainable resource governance.",
    highlights: ["Precision Cartography", "Infrastructure Planning", "Resource Governance"],
  },
  {
    badge: "CRITICAL APPLICATION AREAS",
    title: "Natural Resources, Sustainability & National Security",
    description:
      "Purpose-built turnkey intelligence platforms deployed across sovereign defense perimeters, maritime EEZs, river basins, and agricultural heartlands.",
    highlights: ["National Security", "Sustainable Development", "Flexible On-Site / Cloud / SaaS"],
  },
];

export const TURNKEY_PLATFORMS: TurnkeyPlatform[] = [
  {
    id: "sathya-mda",
    code: "Sathya-MDA",
    name: "Maritime Domain Awareness",
    domain: "Maritime & Subsea Security",
    tagline: "Unified operational picture for AIS, dark vessel detection & subsea infrastructure.",
    summary:
      "Scalable AI-powered SaaS & enterprise platform integrating real-time AIS, Optical/SAR/Thermal satellite imagery, ENC charts, bathymetry, drone video, and RF monitoring.",
    capabilities: ["Dark Vessel Detection", "STS & Loitering Alerts", "Subsea Cable & Rig Protection", "RF & Drone Fusion"],
    href: "/maritime-domain-awareness",
    image: "/images/maritime-vessel.jpg",
    badge: "FLAGSHIP PLATFORM",
  },
  {
    id: "sathya-seema",
    code: "SathyaSEEMA",
    name: "Border Security",
    domain: "Perimeter & Subsurface Surveillance",
    tagline: "AI-assisted surveillance, intrusion tunnel detection & RF communication monitoring.",
    summary:
      "Fuses space-based SAR/InSAR ground deformation, Optical/Thermal imagery, VHF/UHF/L-Band RF monitoring, airborne drones, and ground seismic/GPR sensors.",
    capabilities: ["Intrusion Tunnel Detection", "InSAR Deformation Analysis", "Space-Based RF Monitoring", "Ground GPR & Seismic Fusion"],
    href: "/border-surveillance",
    image: "/images/mountain-border-satellite.jpg",
    badge: "SENSOR FUSION",
  },
  {
    id: "sathya-raksha",
    code: "SathyaRAKSHA",
    name: "Defense & Intelligence",
    domain: "Multi-Domain Threat Analytics",
    tagline: "Multi-sensor fused threat analytics & mission intelligence.",
    summary:
      "Delivers command-level battlefield intelligence, strategic asset monitoring, force readiness assessment, and multi-INT fusion for sovereign defense operations.",
    capabilities: ["Multi-INT Threat Fusion", "Battlefield Situational Picture", "Strategic Site Monitoring", "Automated Mission Alerts"],
    href: "/defense-intelligence",
    image: "/images/satellite-dish-ground.jpg",
    badge: "DEFENSE CORE",
  },
  {
    id: "sathya-pavan",
    code: "SathyaPAVAN",
    name: "Air Intelligence",
    domain: "Aerial & Airspace Surveillance",
    tagline: "Aerial surveillance & intelligence integrating satellite, drone & RF data.",
    summary:
      "Correlates orbital imagery, UAV electro-optical/infrared feeds, and radio-frequency emissions to maintain continuous airspace domain awareness and rapid verification.",
    capabilities: ["Air Domain Awareness", "UAV EO/IR Integration", "RF Emitter Geolocation", "Rapid Alert Verification"],
    href: "/air-domain-awareness",
    image: "/images/satellite-space.jpg",
    badge: "AIR DOMAIN",
  },
  {
    id: "sathya-kavach",
    code: "SathyaKAVACH",
    name: "Missile Shield",
    domain: "Strategic Deterrence & Dome Support",
    tagline: "Missile risk modeling & defense situational awareness.",
    summary:
      "Provides continuous satellite & multi-sensor intelligence for missile launch site readiness, TEL (Transporter Erector Launcher) monitoring, and dome defense modeling.",
    capabilities: ["Missile Risk Modeling", "TEL Launch Monitoring", "Dome Support Analytics", "Early Warning Correlation"],
    href: "/dome-support",
    image: "/images/radar-station.jpg",
    badge: "DOME SUPPORT",
  },
  {
    id: "sathya-sasyaved",
    code: "SathyaSASYAVED",
    name: "Agriculture & Crops",
    domain: "Precision Agro-Intelligence",
    tagline: "Crop health, yield estimation & sustainability monitoring.",
    summary:
      "Multi-spectral and radar crop intelligence tracking phenology, vegetation indices, pest/moisture stress, acreage mapping, and pre-harvest yield forecasting.",
    capabilities: ["Crop Health & NDVI/SAR", "Regional Yield Estimation", "Moisture & Stress Alerts", "Sustainability Auditing"],
    href: "/agriculture-crop-monitoring",
    image: "/images/agriculture-satellite.jpg",
    badge: "AGRO-TECH",
  },
  {
    id: "sathya-jal",
    code: "SathyaJAL",
    name: "Water Resources",
    domain: "Surface Hydrology & Watersheds",
    tagline: "Hydrology, analytics, irrigation planning & watershed management.",
    summary:
      "End-to-end surface water intelligence covering reservoir storage dynamics, flood inundation modeling, canal command efficiency, and river basin governance.",
    capabilities: ["Hydrological Modeling", "Irrigation Command Planning", "Watershed Management", "Flood & Reservoir Analytics"],
    href: "/water-resources-monitoring",
    image: "/images/water-reservoir.jpg",
    badge: "HYDROLOGY",
  },
  {
    id: "sathya-antarjal",
    code: "SathyaANTARJAL",
    name: "Ground Water",
    domain: "Subsurface Hydro-Geospatial AI",
    tagline: "Potential zones identification, aquifer mapping, depletion & artificial recharge insights.",
    summary:
      "Combines satellite gravimetry, InSAR subsidence, geomorphology, and hydrogeological AI to delineate aquifers, quantify depletion, and site recharge structures.",
    capabilities: ["Groundwater Potential Zones", "3D Aquifer Mapping", "Depletion Trend Analytics", "Artificial Recharge Siting"],
    href: "/water-resources-monitoring",
    image: "/images/natural-resources/sector-banner.jpg",
    badge: "AQUIFER AI",
  },
];

export const SECTOR_QUADRANTS: SectorQuadrant[] = [
  {
    id: "defense-intelligence-sector",
    title: "Defense & Intelligence Sector",
    subtitle: "AI & Satellite Intelligence for National Security & Operational Superiority",
    motto: "Persistent Vigilance Across Land, Sea, Air & Strategic Assets",
    image: "/images/satellite-dish-ground.jpg",
    items: [
      "Defense & Intelligence",
      "Air Domain Awareness",
      "Battlefield Intelligence",
      "Border Surveillance & Management",
      "Navy & Maritime Security",
      "Maritime Domain Awareness",
      "Drug Smuggling Detection & Monitoring",
      "Dome Support (Missile & TEL Monitoring)",
    ],
    itemLinks: {
      "Defense & Intelligence": "/defense-intelligence",
      "Air Domain Awareness": "/air-domain-awareness",
      "Battlefield Intelligence": "/battlefield-intelligence",
      "Border Surveillance & Management": "/border-surveillance",
      "Navy & Maritime Security": "/navy-maritime-security",
      "Maritime Domain Awareness": "/maritime-domain-awareness",
      "Drug Smuggling Detection & Monitoring": "/drug-smuggling-detection",
      "Dome Support (Missile & TEL Monitoring)": "/dome-support",
    },
    capabilitiesBar: [
      "Multi-Sensor Fusion",
      "SAR & Thermal",
      "RF Intelligence",
      "Real-Time Alerts",
      "Dome Support",
    ],
  },
  {
    id: "natural-resources-environment",
    title: "Natural Resources & Environment Sector",
    subtitle: "Sustainable Resource Management for a Greener Planet",
    motto: "Turning Earth Observation into Ecological & Food Security",
    image: "/images/natural-resources/sector-banner.jpg",
    items: [
      "Agriculture & Crop Monitoring",
      "Forest Mapping & Forest Fire Monitoring",
      "Water Resources Monitoring & Management",
      "Environmental Hotspot Mapping & Monitoring",
      "Illegal Fishing Detection & Monitoring",
    ],
    itemLinks: {
      "Agriculture & Crop Monitoring": "/agriculture-crop-monitoring",
      "Forest Mapping & Forest Fire Monitoring":
        "/forest-mapping-fire-monitoring",
      "Water Resources Monitoring & Management": "/water-resources-monitoring",
      "Environmental Hotspot Mapping & Monitoring":
        "/environmental-hotspot-monitoring",
      "Illegal Fishing Detection & Monitoring": "/illegal-fishing-detection",
    },
    capabilitiesBar: [
      "Satellite Data",
      "AI & Machine Learning",
      "Change Detection",
      "Real-Time Monitoring",
      "Predictive Insights",
      "Sustainable Decisions",
    ],
  },
  {
    id: "urban-energy-sector",
    title: "Urban & Energy Sector",
    subtitle: "Smart Infrastructure for Sustainable Cities & Secure Energy",
    motto: "Smart Today. Sustainable Tomorrow.",
    image: "/images/urban-energy/sector-banner.jpg",
    items: [
      "Urban Development Mapping & Monitoring",
      "Hazardous Waste Disposal Site Selection & Monitoring",
      "Energy & Critical Infrastructure Security",
      "Energy Generation & Distribution",
      "Nuclear Power Plant Site Selection & Risk Assessment",
    ],
    itemLinks: {
      "Urban Development Mapping & Monitoring": "/urban-development-monitoring",
      "Hazardous Waste Disposal Site Selection & Monitoring":
        "/hazardous-waste-site-monitoring",
      "Energy & Critical Infrastructure Security":
        "/energy-critical-infrastructure-security",
      "Energy Generation & Distribution": "/energy-generation-distribution",
      "Nuclear Power Plant Site Selection & Risk Assessment":
        "/nuclear-site-selection-risk-assessment",
    },
    capabilitiesBar: [
      "Spatial Analytics",
      "Risk Modeling",
      "Asset Monitoring",
      "Predictive Insights",
      "Resilient Infrastructure",
      "Smart Decisions",
    ],
  },
  {
    id: "finance-insurance-sector",
    title: "Finance & Insurance Sector",
    subtitle: "Data-Driven Intelligence for Financial Resilience & Trust",
    motto: "Reducing Risk. Improving Decisions. Building Trust.",
    image: "/images/finance-insurance/sector-banner.jpg",
    items: [
      "Banking & Financial Institutions — Asset Monitoring & Valuation",
      "Geospatial Credit Risk Assessment & Fraud Prevention",
      "Regulatory Compliance, Reporting & Branch/ATM Optimization",
      "Insurance Claims & Adjudication — Before/After Satellite Verification",
      "Automated Catastrophe & Crop Damage Settlement Analytics",
    ],
    itemLinks: {
      "Banking & Financial Institutions — Asset Monitoring & Valuation":
        "/banking-asset-monitoring-valuation",
      "Geospatial Credit Risk Assessment & Fraud Prevention":
        "/geospatial-credit-risk-fraud-prevention",
      "Regulatory Compliance, Reporting & Branch/ATM Optimization":
        "/regulatory-compliance-branch-optimization",
      "Insurance Claims & Adjudication — Before/After Satellite Verification":
        "/insurance-claims-satellite-verification",
      "Automated Catastrophe & Crop Damage Settlement Analytics":
        "/catastrophe-crop-damage-analytics",
    },
    capabilitiesBar: [
      "Damage Assessment",
      "Automated Claim Processing",
      "Fraud Detection",
      "Cost Estimation",
      "Faster Settlement & Accuracy",
    ],
  },
];

export const TECHNOLOGY_PILLARS = [
  {
    title: "Artificial Intelligence",
    subtitle: "Computer Vision & Deep Neural Architectures",
    description:
      "Domain-trained vision transformers and convolutional models engineered for sub-meter object recognition, vessel classification, and Automated Target Recognition (ATR) in noisy orbital scenes.",
  },
  {
    title: "Machine Learning",
    subtitle: "Spatio-Temporal & Anomaly Detection Models",
    description:
      "Probabilistic time-series models learning baseline maritime, border, crop, and hydrological behaviors to flag subtle deviations while suppressing environmental false alarms.",
  },
  {
    title: "Satellite Imagery",
    subtitle: "Optical, SAR, InSAR & Thermal Constellations",
    description:
      "All-weather, day-and-night Earth observation leveraging Very High Resolution (VHR) Optical, Synthetic Aperture Radar (SAR), Interferometric SAR (InSAR), and Thermal infrared sensors.",
  },
  {
    title: "Remote Sensing",
    subtitle: "Multi-Spectral & Radiometric Physics",
    description:
      " Extracting biophysical, structural, bathymetric, and subsurface signatures across visible, NIR, SWIR, thermal, and microwave wavelengths for scientific-grade precision.",
  },
  {
    title: "Geospatial Analytics",
    subtitle: "Enterprise GIS & Digital Twin Layers",
    description:
      "High-throughput vector/raster processing fusing ENC charts, bathymetry, subsea pipelines, cadastral boundaries, and terrain elevation models into unified 3D operational views.",
  },
  {
    title: "Sensor Fusion",
    subtitle: "Space + Air + Ground + RF Correlation",
    description:
      "Longitudinal correlation combining orbital passes, VHF/UHF/L-band RF emissions, UAV EO/IR video, ground seismic arrays, resistivity sensors, and Ground Penetration Radar (GPR).",
  },
  {
    title: "Predictive Intelligence",
    subtitle: "Proactive Risk Scoring & Automated Alerts",
    description:
      "Forecasting vessel rendezvous, subsurface excavation risk, missile readiness, flood inundation, and aquifer stress before critical thresholds are breached.",
  },
];

export const STRATEGIC_PILLARS = [
  {
    kicker: "SPACETECH CONSULTANCY",
    title: "Global Space Market Advisory & Startup Launchpad",
    description:
      "Consulting services delivered by veteran Space Industry Experts with extensive international experience guiding space startups, commercial operators, and public agencies to launch and scale in the global space market.",
  },
  {
    kicker: "GLOBAL SATELLITE IMAGERY HERITAGE",
    title: "Trusted International Remote Sensing Representative",
    description:
      "SATHYA has served as international marketing representative for leading global Earth observation pioneers including Space Imaging, GeoEye, DigitalGlobe (Maxar, now VANTOR), UrtheCast, Deimos Imaging, GeoSat, and Hydrosat.",
  },
  {
    kicker: "ATMANIRBHAR BHARAT",
    title: "Sovereign Satellite & Component Manufacturing in India",
    description:
      "Actively supporting International Space OEMs in establishing indigenous manufacturing, assembly, integration, and testing of satellites and precision satellite subsystems in India.",
  },
];

export const SOLUTIONS_DETAILS: SolutionDetail[] = [
  {
    id: "maritime-domain-awareness",
    platformCode: "Sathya-MDA",
    kicker: "AI-ENABLED TURNKEY PLATFORM • MARITIME",
    title: "Maritime Domain Awareness (MDA)",
    subtitle: "Unified Operational Picture of Surface, Coastal & Subsea Activity",
    description: [
      "Sathya-MDA is an AI-powered Maritime Domain Awareness platform delivered as a scalable SaaS or sovereign on-premise solution, providing a unified operational picture of maritime activity across Exclusive Economic Zones (EEZs), strategic straits, and ports.",
      "By fusing real-time AIS feeds, multi-spectral satellite imagery (Optical, SAR, and Thermal), Electronic Navigational Charts (ENC), bathymetry, drone-based video intelligence, and radio frequency (RF) monitoring, the platform uncovers dark vessels, illicit ship-to-ship (STS) transfers, loitering threats, and risks to subsea cables and offshore oil & gas pipelines.",
    ],
    image: "/images/maritime-vessel.jpg",
    imageCaption: "Continuous vessel tracking, port approaches, and offshore EEZ surveillance",
    capabilities: [
      "Real-time Terrestrial & Satellite AIS Ingestion",
      "Multi-Spectral Optical, SAR & Thermal Satellite Fusion",
      "AI Dark Vessel & AIS-Spoofing Detection",
      "Subsea Cable, Rig & Pipeline Protection Zones",
      "Drone-Based EO/IR Video & RF Emitter Correlation",
      "Automated Loitering, STS & Draught Change Alerts",
    ],
    features: [
      {
        title: "Non-Cooperative Target Uncovering",
        detail: "Correlates SAR ship detections with AIS tracks and RF signatures to pinpoint AIS-silent vessels in all weather.",
      },
      {
        title: "Critical Subsea Asset Shield",
        detail: "Geofenced anchor-drag and loitering anomaly detection over subsea telecom cables, rigs, and pipelines.",
      },
      {
        title: "Behavioral Risk Scoring",
        detail: "Flags sudden draught changes, unscheduled rendezvous, kinematic anomalies, and illegal fishing activity.",
      },
    ],
    ctaLabel: "Explore Dedicated MDA Platform",
    ctaHref: "/maritime-domain-awareness",
  },
  {
    id: "border-security",
    platformCode: "SathyaSEEMA",
    kicker: "AI-ENABLED TURNKEY PLATFORM • SENSOR FUSION",
    title: "Border Security & Subsurface Intrusion Shield",
    subtitle: "AI-Assisted Surveillance, Intrusion Tunnel Detection & RF Monitoring",
    description: [
      "SathyaSEEMA combines space-based Synthetic Aperture Radar (SAR) and Interferometric SAR (InSAR) surface deformation analysis, Optical and Thermal data, Space-Based Radio Frequency (VHF, UHF, L-Band Satellite Phone) monitoring, airborne drone electro-optical/infrared verification, and ground-based seismic, resistivity, and Ground Penetration Radar (GPR) sensing.",
      "The core innovation of SathyaSEEMA lies not in any single sensor, but in the longitudinal correlation and probabilistic fusion of heterogeneous signals—enabling reliable detection of weak, persistent indicators associated with sophisticated underground excavation and covert cross-border movement while drastically reducing false alarm rates.",
    ],
    image: "/images/mountain-border-satellite.jpg",
    imageCaption: "Spaceborne InSAR millimeter-scale ground deformation & perimeter terrain analytics",
    capabilities: [
      "Spaceborne SAR & InSAR Millimeter Deformation Tracking",
      "Underground Intrusion Tunnel Detection",
      "VHF, UHF & L-Band Satellite Phone RF Monitoring",
      "Ground Seismic, Soil Resistivity & GPR Integration",
      "Airborne UAV EO/IR & Drone-Mounted GPR Verification",
      "Probabilistic Multi-Sensor AI False-Alarm Suppression",
    ],
    features: [
      {
        title: "Space Layer — The Watchful Eye",
        detail: "Wide-area satellite monitoring detects subtle long-term ground subsidence, spoil piles, and thermal anomalies.",
      },
      {
        title: "Air & Ground Layers — Rapid Verification",
        detail: "Dispatches EO/IR drones and correlates localized seismic & resistivity vibrations below traditional thresholds.",
      },
      {
        title: "The AI Core — Connecting the Dots",
        detail: "Fuses weak episodic disturbances across time to distinguish genuine tunneling and infiltration from agricultural noise.",
      },
    ],
    ctaLabel: "Explore Border Surveillance",
    ctaHref: "/border-surveillance",
  },
  {
    id: "defense-intelligence",
    platformCode: "SathyaRAKSHA & SathyaKAVACH",
    kicker: "AI-ENABLED TURNKEY PLATFORMS • NATIONAL SECURITY",
    title: "Defense, Strategic Intelligence & Missile Shield",
    subtitle: "Multi-Sensor Fused Threat Analytics, Battlefield Intelligence & Dome Support",
    description: [
      "Powered by SathyaRAKSHA (Defense & Intelligence) and SathyaKAVACH (Missile Shield), our defense suite delivers high-confidence strategic and tactical situational awareness across contested theaters.",
      "From automated order-of-battle change detection and battlefield terrain intelligence to Transporter Erector Launcher (TEL) tracking and missile risk modeling, SATHYA empowers defense commands with decisive temporal advantage.",
    ],
    image: "/images/satellite-dish-ground.jpg",
    imageCaption: "High-availability sovereign ground segment & multi-INT defense fusion",
    capabilities: [
      "Multi-Sensor Fused Threat & Order-of-Battle Analytics",
      "Battlefield Terrain & Mobility Corridor Intelligence",
      "Dome Support — Missile Site & TEL Launch Monitoring",
      "Missile Trajectory & Strategic Risk Modeling",
      "Drug Smuggling & Illicit Corridor Interdiction",
      "Air-Gapped On-Site & Sovereign Cloud Deployment",
    ],
    features: [
      {
        title: "Automated Strategic Change Detection",
        detail: "Continuous monitoring of airbases, staging grounds, naval docks, and critical defense infrastructure.",
      },
      {
        title: "SathyaKAVACH Dome Support",
        detail: "Persistent surveillance of missile garrisons and mobile launcher signatures for proactive defense readiness.",
      },
      {
        title: "Command-Ready Intelligence Feeds",
        detail: "Interoperable OGC/STAC geospatial outputs engineered for C4ISR integration.",
      },
    ],
    ctaLabel: "Explore Defense & Intelligence",
    ctaHref: "/defense-intelligence",
  },
  {
    id: "air-intelligence",
    platformCode: "SathyaPAVAN",
    kicker: "AI-ENABLED TURNKEY PLATFORM • AIRSPACE",
    title: "Air Intelligence & Aerial Domain Awareness",
    subtitle: "Integrated Surveillance Unifying Satellite, UAV & Radio Frequency Data",
    description: [
      "SathyaPAVAN bridges orbital remote sensing with high-cadence aerial reconnaissance and passive RF spectrum intelligence to deliver comprehensive low-to-high altitude situational awareness.",
      "Designed for aerospace defense, coastal reconnaissance, and rapid tactical verification, SathyaPAVAN synchronizes satellite tip-and-cue tasking directly with autonomous and piloted drone fleets.",
    ],
    image: "/images/satellite-space.jpg",
    imageCaption: "Orbital-to-aerial tip-and-cue reconnaissance architecture",
    capabilities: [
      "Satellite-to-Drone Automated Tip-and-Cue Tasking",
      "Real-Time UAV Electro-Optical & Thermal Video AI",
      "Passive RF Emitter Detection & Geolocation",
      "Airfield Activity & Aircraft Classification",
      "Low-Altitude Intrusion & Rogue Drone Corridor Analytics",
      "Multi-Platform Telemetry Correlation",
    ],
    features: [
      {
        title: "Seamless Orbital-to-Aerial Handshake",
        detail: "Wide-swath satellite anomalies automatically trigger targeted UAV flight inspection for sub-decimeter confirmation.",
      },
      {
        title: "Real-Time Video Intelligence",
        detail: "Edge and cloud computer vision extracts moving vehicles, aircraft, and personnel from live aerial streams.",
      },
      {
        title: "Spectrum-Aware Situational Picture",
        detail: "Correlates RF communication bursts with visual and thermal tracks across complex terrain.",
      },
    ],
    ctaLabel: "Explore Air Domain Awareness",
    ctaHref: "/air-domain-awareness",
  },
  {
    id: "agriculture-crops",
    platformCode: "SathyaSASYAVED",
    kicker: "AI-ENABLED TURNKEY PLATFORM • AGRO-INTELLIGENCE",
    title: "Agriculture & Crop Intelligence",
    subtitle: "Precision Crop Health, Regional Yield Estimation & Sustainability Monitoring",
    description: [
      "SathyaSASYAVED transforms multi-spectral optical and cloud-penetrating SAR satellite time-series into actionable agronomic intelligence for ministries of agriculture, agribusinesses, commodity analysts, and crop insurers.",
      "Even during monsoon cloud cover, radar backscatter and spectral indices track sowing progress, crop type classification, moisture/pest stress, and district-level harvest yields with exceptional accuracy.",
    ],
    image: "/images/agriculture-satellite.jpg",
    imageCaption: "Regional crop vigor, phenology tracking, and pre-harvest yield analytics",
    capabilities: [
      "Automated Crop Type Mapping & Acreage Estimation",
      "Multi-Spectral & Monsoon-Proof SAR Crop Health Monitoring",
      "District & Field-Scale Pre-Harvest Yield Forecasting",
      "Soil Moisture, Drought & Pest Stress Early Warning",
      "Crop Insurance Claim Verification & Loss Assessment",
      "Sustainable Farming & Residue Burning Detection",
    ],
    features: [
      {
        title: "All-Season Phenology Tracking",
        detail: "Combines optical vegetation indices (NDVI, NDRE, EVI) with SAR polarimetry for uninterrupted monsoon visibility.",
      },
      {
        title: "Food Security & Supply Chain Planning",
        detail: "Equips policy planners and procurement agencies with early, objective production forecasts.",
      },
      {
        title: "Parametric & Indemnity Insurance Support",
        detail: "Verifies hail, flood, and drought crop damage using historical and post-event satellite archives.",
      },
    ],
    ctaLabel: "Learn More About SathyaSASYAVED",
    ctaHref: "/contact?platform=SathyaSASYAVED",
  },
  {
    id: "water-resources",
    platformCode: "SathyaJAL",
    kicker: "AI-ENABLED TURNKEY PLATFORM • HYDROLOGY",
    title: "Water Resources & Watershed Intelligence",
    subtitle: "Hydrology Analytics, Irrigation Command Planning & Basin Governance",
    description: [
      "SathyaJAL delivers comprehensive surface-water intelligence for water resource departments, river basin authorities, hydropower operators, and disaster management agencies.",
      "Integrating satellite altimetry, SAR surface-water extent, digital elevation models, and hydrometeorological modeling, SathyaJAL optimizes irrigation distribution and safeguards communities against flood and drought extremes.",
    ],
    image: "/images/water-reservoir.jpg",
    imageCaption: "Watershed runoff modeling, reservoir storage tracking, and irrigation governance",
    capabilities: [
      "Reservoir & Lake Volume Dynamics from Space",
      "Irrigation Command Area Water-Use Efficiency",
      "Watershed Delineation & Catchment Health Analytics",
      "Near-Real-Time Flood Inundation & Risk Mapping",
      "Snowmelt & River Basin Runoff Forecasting",
      "Water Quality, Turbidity & Algal Bloom Monitoring",
    ],
    features: [
      {
        title: "Precision Irrigation Governance",
        detail: "Balances canal releases with crop evapotranspiration demand across large command areas.",
      },
      {
        title: "All-Weather Flood Mapping",
        detail: "SAR sensors penetrate storm clouds to map exact floodwater boundaries for emergency response.",
      },
      {
        title: "Catchment Sustainability",
        detail: "Monitors sedimentation, wetland shrinkage, and upstream land-use impacts on basin yield.",
      },
    ],
    ctaLabel: "Learn More About SathyaJAL",
    ctaHref: "/contact?platform=SathyaJAL",
  },
  {
    id: "groundwater-intelligence",
    platformCode: "SathyaANTARJAL",
    kicker: "AI-ENABLED TURNKEY PLATFORM • SUBSURFACE HYDROLOGY",
    title: "Groundwater & Aquifer Intelligence",
    subtitle: "Potential Zones Identification, Aquifer Mapping, Depletion & Artificial Recharge",
    description: [
      "SathyaANTARJAL applies advanced hydrogeological AI to satellite remote sensing—fusing lineament tectonics, geomorphology, InSAR land subsidence, gravity anomalies, soil permeability, and rainfall-runoff dynamics to illuminate unseen subsurface water systems.",
      "Purpose-built for drinking water missions, sustainable groundwater boards, and industrial water stewardship, the platform pinpoints high-yield potential zones and optimal sites for check dams, percolation tanks, and managed aquifer recharge.",
    ],
    image: "/images/nasa-aquifer-hydrology.jpg",
    imageCaption: "Radar & multi-spectral hydrogeological mapping of irrigated basins and wetlands",
    capabilities: [
      "Groundwater Potential Zone (GWPZ) Identification",
      "Aquifer Geometry & Subsurface Lineament Mapping",
      "InSAR Subsidence & Groundwater Depletion Analytics",
      "Artificial Recharge Structure Siting (Check Dams, Percolation)",
      "Seasonal Water-Table Stress Forecasting",
      "Conjunctive Surface & Groundwater Planning",
    ],
    features: [
      {
        title: "Scientific Borewell & Wellfield Siting",
        detail: "Reduces dry-bore failure rates by correlating fracture networks, lithology, and recharge pathways.",
      },
      {
        title: "Depletion Early Warning",
        detail: "Detects over-extraction hotspots via millimeter-scale land deformation and temporal storage trends.",
      },
      {
        title: "Engineered Aquifer Sustainability",
        detail: "Ranks optimal locations for artificial recharge interventions to maximize monsoon capture.",
      },
    ],
    ctaLabel: "Learn More About SathyaANTARJAL",
    ctaHref: "/contact?platform=SathyaANTARJAL",
  },
];

export const MDA_CAPABILITIES = [
  {
    title: "Real-Time AIS Data Integration",
    code: "AIS-STREAM",
    description:
      "Continuous ingestion and normalization of terrestrial coastal AIS and satellite AIS (S-AIS) transponders—tracking vessel identity (IMO/MMSI), course, speed, draught, and voyage history across global sea lanes.",
  },
  {
    title: "Multi-Spectral Satellite Imagery (Optical, SAR, Thermal)",
    code: "EO / SAR / TIR",
    description:
      "All-weather, 24/7 orbital tasking and archive correlation combining high-resolution Optical confirmation, cloud-penetrating Synthetic Aperture Radar (SAR) ship detection, and Thermal infrared wake/engine signatures.",
  },
  {
    title: "Dark Vessel Detection",
    code: "DARK-TARGET AI",
    description:
      "AI-driven cross-correlation matches non-cooperative radar/optical vessel detections against active AIS broadcasts—instantly flagging AIS-silent ships, identity spoofing, and MMSI manipulation.",
  },
  {
    title: "Continuous Vessel Tracking & Kinematics",
    code: "TRACK-FUSION",
    description:
      "Multi-hypothesis trajectory reconstruction maintains persistent vessel custody across communication gaps, congested anchorages, port approaches, and Exclusive Economic Zones (EEZs).",
  },
  {
    title: "Maritime Surveillance & Subsea Infrastructure Shield",
    code: "INFRA-GUARD",
    description:
      "Overlays Electronic Navigational Charts (ENC), high-resolution bathymetry, subsea telecom cables, offshore platforms, rigs, and undersea oil & gas pipelines with automated anchor-drag geofences.",
  },
  {
    title: "Predictive Risk Modelling",
    code: "RISK-ENGINE",
    description:
      "Machine learning behavioral models score vessels on ownership risk, port-of-call anomalies, loitering patterns, illicit Ship-to-Ship (STS) transfers, and sudden draught changes indicating covert cargo transfer.",
  },
  {
    title: "Drone-Based Video Intelligence",
    code: "UAV EO/IR",
    description:
      "Integrates long-endurance maritime UAV electro-optical and infrared video streams for real-time hull identification, deck activity inspection, and evidentiary enforcement support.",
  },
  {
    title: "Radio Frequency (RF) Monitoring",
    code: "RF-SIGINT",
    description:
      "Detects and geolocates marine navigation radar, VHF/UHF, and satellite communication emissions from orbit and coastal receivers to uncover vessels operating in strict AIS silence.",
  },
  {
    title: "Automated Operational Alerts",
    code: "RAPID-ALERT",
    description:
      "Configurable low-latency alerting rules notify coastal command centers, navies, port authorities, and offshore operators the moment anomalous loitering, STS, or exclusion-zone breaches occur.",
  },
];

export interface AchievementItem {
  id: string;
  badge: string;
  title: string;
  subtitle: string;
  image: string;
  fullImage?: string;
}

export const ACHIEVEMENTS_DATA: AchievementItem[] = [
  {
    id: "ach-1",
    badge: "ACADEMIC & R&D PARTNERSHIP",
    title: "Strategic MoU with IIT Tirupati",
    subtitle:
      "Formalizing collaborative research in Space Technology, AI/ML, and Geospatial Intelligence at the Andhra Pradesh Sunrise State Pavilion.",
    image: "/images/achievements/achievement-1-card.jpg",
    fullImage: "/images/achievements/achievement-1-full.jpg",
  },
  {
    id: "ach-2",
    badge: "INSTITUTIONAL MILESTONE",
    title: "Official MoU Charter Showcase",
    subtitle:
      "Sathya Technology Services and IIT Tirupati leadership presenting the signed joint SpaceTech & Remote Sensing agreement.",
    image: "/images/achievements/achievement-2-card.jpg",
    fullImage: "/images/achievements/achievement-2-full.jpg",
  },
  {
    id: "ach-3",
    badge: "BILATERAL EXCHANGE",
    title: "Advancing Indigenous SpaceTech Innovation",
    subtitle:
      "Ceremonial exchange of the collaboration dossier uniting premier academic excellence with sovereign geospatial engineering.",
    image: "/images/achievements/achievement-3-card.jpg",
    fullImage: "/images/achievements/achievement-3-full.jpg",
  },
  {
    id: "ach-4",
    badge: "NATIONAL LEADERSHIP STAGE",
    title: "High-Level Ministerial & Global Industry Conclave",
    subtitle:
      "Sathya leadership sharing the national stage alongside Hon'ble Union Minister Shri Piyush Goyal and international delegates.",
    image: "/images/achievements/achievement-4-card.jpg",
    fullImage: "/images/achievements/achievement-4-full.jpg",
  },
  {
    id: "ach-5",
    badge: "STRATEGIC DIALOGUE",
    title: "Joint Roadmap for AI & Earth Observation",
    subtitle:
      "Executive leadership aligning on translational research, student innovation, and next-generation satellite analytics.",
    image: "/images/achievements/achievement-5-card.jpg",
    fullImage: "/images/achievements/achievement-5-full.jpg",
  },
];

export const INDUSTRIES_DATA: IndustryProfile[] = [
  {
    id: "defense",
    name: "Defense & National Security",
    kicker: "SOVEREIGN INTELLIGENCE",
    headline: "Multi-Domain Superiority Across Borders, Airspace & Strategic Theaters",
    description:
      "Equipping armed forces, border guard forces, and national intelligence agencies with persistent satellite SAR/InSAR surveillance, underground tunnel detection, battlefield analytics, and TEL/missile dome support.",
    image: "/images/satellite-dish-ground.jpg",
    useCases: [
      "Border Surveillance & Underground Intrusion Tunnel Detection",
      "Battlefield Intelligence & Strategic Order-of-Battle Tracking",
      "Air Domain Awareness & Drone/RF Correlation",
      "Dome Support — Missile Site & TEL Monitoring",
      "Counter-Narcotics & Cross-Border Smuggling Interdiction",
    ],
    platformsUsed: ["SathyaSEEMA", "SathyaRAKSHA", "SathyaPAVAN", "SathyaKAVACH"],
    metrics: [
      { label: "Sensor Domains Fused", value: "Space • Air • Ground • RF" },
      { label: "Deployment", value: "Air-Gapped On-Site / Cloud" },
    ],
  },
  {
    id: "maritime",
    name: "Maritime & Naval Operations",
    kicker: "OCEAN & SUBSEA SECURITY",
    headline: "Complete Visibility Over EEZs, Sea Lanes, Ports & Subsea Assets",
    description:
      "Protecting sovereign coastlines, naval perimeters, subsea fiber cables, and offshore energy assets with AI-driven dark vessel detection, STS transfer discovery, and multi-sensor maritime surveillance.",
    image: "/images/maritime-aerial.jpg",
    useCases: [
      "Dark Vessel & AIS-Spoofing Interdiction",
      "Ship-to-Ship (STS) & Draught Change Anomaly Detection",
      "Subsea Cables, Offshore Rigs & Pipeline Protection",
      "Illegal, Unreported & Unregulated (IUU) Fishing Enforcement",
      "Port Congestion & Maritime Supply Chain Intelligence",
    ],
    platformsUsed: ["Sathya-MDA"],
    metrics: [
      { label: "Coverage", value: "24/7 All-Weather SAR + AIS" },
      { label: "Chart Layers", value: "ENC + Bathymetry + Subsea" },
    ],
  },
  {
    id: "agriculture",
    name: "Agriculture & Food Security",
    kicker: "PRECISION AGRO-ANALYTICS",
    headline: "Orbital Crop Intelligence from Sowing to Harvest",
    description:
      "Delivering district-to-plot crop classification, monsoon-resilient radar health monitoring, moisture stress advisories, and objective yield estimation for governments, agri-enterprises, and insurers.",
    image: "/images/agriculture-satellite.jpg",
    useCases: [
      "Seasonal Crop Acreage & Multi-Crop Discrimination",
      "Crop Vigor, Pest & Water-Stress Early Warning",
      "Pre-Harvest Regional Yield & Production Forecasting",
      "Parametric & Crop Damage Insurance Verification",
      "Sustainable Agriculture & Soil Organic Carbon Insights",
    ],
    platformsUsed: ["SathyaSASYAVED", "SathyaJAL"],
    metrics: [
      { label: "Visibility", value: "Cloud-Penetrating SAR + Optical" },
      { label: "Scale", value: "Plot to National Grid" },
    ],
  },
  {
    id: "environment",
    name: "Environment & Climate Resilience",
    kicker: "PLANETARY STEWARDSHIP",
    headline: "Real-Time Ecological Monitoring, Forest Fire Alerts & Habitat Protection",
    description:
      "Tracking deforestation, active forest fire fronts, environmental pollution hotspots, coastal erosion, and biodiversity corridors through automated change detection and thermal/multi-spectral analytics.",
    image: "/images/border-terrain.jpg",
    useCases: [
      "Forest Cover Mapping & Active Forest Fire Monitoring",
      "Environmental Hotspot & Industrial Emission Tracking",
      "Wetland, Mangrove & Coastal Zone Change Detection",
      "Hazardous Waste Disposal Site Selection & Auditing",
      "Carbon Sink Verification & ESG Compliance Reporting",
    ],
    platformsUsed: ["SathyaSASYAVED", "SathyaJAL"],
    metrics: [
      { label: "Detection", value: "Thermal + Multi-Spectral AI" },
      { label: "Impact", value: "ESG & Climate Governance" },
    ],
  },
  {
    id: "energy",
    name: "Energy, Urban & Critical Infrastructure",
    kicker: "SMART CITIES & SECURE POWER",
    headline: "Geospatial Risk Modeling for Power Grids, Renewables, Nuclear & Urban Growth",
    description:
      "Supporting energy utilities, nuclear regulators, pipeline operators, and urban development authorities with site selection risk assessment, InSAR structural stability monitoring, and corridor security.",
    image: "/images/energy-infrastructure.jpg",
    useCases: [
      "Nuclear Power Plant Site Selection & Geological Risk Assessment",
      "Solar, Wind & Transmission Corridor Planning & Monitoring",
      "Oil & Gas Pipeline Right-of-Way Encroachment & Leak Detection",
      "Urban Sprawl Mapping, Digital Twins & Land-Use Auditing",
      "Critical Infrastructure Perimeter & Subsidence Monitoring",
    ],
    platformsUsed: ["SathyaRAKSHA", "SathyaSEEMA", "Sathya-MDA"],
    metrics: [
      { label: "Precision", value: "Millimeter InSAR Stability" },
      { label: "Focus", value: "Smart & Resilient Assets" },
    ],
  },
  {
    id: "finance",
    name: "Finance, Banking & Insurance",
    kicker: "FINANCIAL RESILIENCE & TRUST",
    headline: "Objective Satellite Evidence for Risk Underwriting, Asset Valuation & Claims",
    description:
      "Empowering banks, reinsurers, and financial institutions to verify physical assets, prevent fraud, optimize branch networks, and accelerate catastrophe/crop claim adjudication with Before-and-After satellite proof.",
    image: "/images/urban-finance.jpg",
    useCases: [
      "Insurance Claims & Adjudication with Before/After Satellite Imagery",
      "Banking Collateral Asset Monitoring & Geospatial Valuation",
      "Agricultural & Infrastructure Credit Risk Scoring",
      "Automated Fraud Detection & Regulatory ESG Compliance",
      "Retail Branch & ATM Geospatial Catchment Optimization",
    ],
    platformsUsed: ["SathyaSASYAVED", "SathyaJAL", "Sathya Integrated Stack"],
    metrics: [
      { label: "Adjudication", value: "Before / After Orbital Proof" },
      { label: "Outcome", value: "Faster, Fairer Settlement" },
    ],
  },
  {
    id: "natural-resources",
    name: "Natural Resources & Hydrology",
    kicker: "SURFACE & SUBSURFACE WATER",
    headline: "Sustainable Governance of River Basins, Reservoirs & Deep Aquifers",
    description:
      "Combining surface hydrology modeling with subsurface aquifer mapping to safeguard national water security, optimize command-area irrigation, and guide scientific groundwater recharge.",
    image: "/images/water-reservoir.jpg",
    useCases: [
      "Surface Reservoir Storage & River Basin Hydrology",
      "Irrigation Planning & Canal Command Efficiency",
      "Groundwater Potential Zone Identification & 3D Aquifer Mapping",
      "Groundwater Depletion Tracking & Artificial Recharge Siting",
      "Illegal Fishing & Marine Resource Protection",
    ],
    platformsUsed: ["SathyaJAL", "SathyaANTARJAL", "Sathya-MDA"],
    metrics: [
      { label: "Coverage", value: "Watershed to Deep Aquifer" },
      { label: "Analytics", value: "Hydrological + Gravity/InSAR" },
    ],
  },
];
