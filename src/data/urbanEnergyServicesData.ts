import type { DefenseServiceDetail } from "./defenseServicesData";

export const URBAN_ENERGY_SERVICES_LIST: DefenseServiceDetail[] = [
  // 1. /urban-development-monitoring
  {
    slug: "urban-development-monitoring",
    route: "/urban-development-monitoring",
    indexNumber: "01",
    platformTag: "Smart Urban GIS • 3D Growth, Land-Use & Infrastructure AI",
    title: "Urban Development Mapping & Monitoring",
    subtitle:
      "High-Resolution Cadastral Change Detection, Master-Plan Governance & Smart City Digital Twins",
    heroIntro:
      "Empowering metropolitan development authorities, municipal corporations, and smart-city planners with sub-meter satellite imagery, 3D stereo photogrammetry, InSAR subsidence tracking, and AI building-footprint change detection.",
    heroImage: "/images/urban-energy/urban-development-brand.png",
    heroImageAlt:
      "Earth-observation satellite scanning a modern sustainable smart city skyline, green corridors, and transit interchanges",
    seamlessBrandArtwork: true,
    overviewHeading:
      "Guiding Rapid Urbanization with Sub-Meter Orbital Precision & Automated GIS Analytics",
    overviewParagraphs: [
      "Rapid metropolitan growth frequently outpaces traditional ground surveys—leading to unmapped peri-urban sprawl, encroachment onto floodplains and greenbelts, strained utility networks, and outdated property tax registries. Sathya Technology Services delivers an integrated Urban Development Mapping & Monitoring framework that keeps municipal GIS baselines continuously current.",
      "Combining sub-meter stereo Optical imagery, LiDAR/UAV 3D urban elevation models, Synthetic Aperture Radar (SAR) all-weather construction monitoring, and Thermal urban-heat-island profiling, planners can enforce zoning master plans, optimize transit-oriented corridors, and build climate-resilient cities.",
    ],
    overviewHighlights: [
      { label: "Spatial Resolution", value: "30–50 cm Stereo Optical & UAV" },
      { label: "Core AI Models", value: "Building Footprint & Zoning Change" },
      { label: "Stability & Heat", value: "InSAR Subsidence & Thermal LST" },
      { label: "Deployment", value: "On-Site • Municipal Cloud • SaaS" },
    ],
    capabilities: [
      {
        title: "Automated Building Footprint & Floor-Area Change",
        description:
          "Deep-learning segmentation extracts new constructions, vertical extensions, and unauthorized structures across municipal wards between satellite passes.",
        iconName: "layers",
      },
      {
        title: "Master-Plan Zoning & Greenbelt Enforcement",
        description:
          "Overlays live land-use/land-cover classifications onto statutory master-plan zones to flag encroachments on lakes, parks, and agricultural buffers.",
        iconName: "shield",
      },
      {
        title: "3D Urban Digital Twins & Corridor Planning",
        description:
          "Generates 3D DSM/DTM city models from stereo satellite and drone photogrammetry for metro rail, highway flyover, and utility alignment studies.",
        iconName: "globe",
      },
      {
        title: "InSAR Ground Subsidence & Tunneling Safety",
        description:
          "Measures millimeter-scale vertical settlement along underground metro tunnels, high-rise clusters, and reclaimed urban land.",
        iconName: "radar",
      },
      {
        title: "Property Tax GIS Base-Map Modernization",
        description:
          "Links georeferenced parcel polygons and 3D built-up volume estimates with municipal revenue databases to uncover unassessed properties.",
        iconName: "cpu",
      },
      {
        title: "Urban Heat Island & Stormwater Vulnerability",
        description:
          "Maps impervious surface expansion, natural drainage blockages, and thermal heat hotspots to prioritize sponge-city and greening investments.",
        iconName: "scan",
      },
    ],
    applications: [
      {
        title: "Metropolitan Master-Plan & Peri-Urban Governance",
        scenario:
          "Urban development authorities monitor fast-growing suburban rings and industrial corridors on a quarterly or monthly orbital cadence.",
        impact:
          "Prevents unplanned ribbon sprawl and protects statutory road rights-of-way before costly acquisition disputes arise.",
      },
      {
        title: "Municipal Property Assessment & Revenue Growth",
        scenario:
          "Civic bodies compare sub-meter ortho-imagery against legacy tax records to identify new commercial and residential developments.",
        impact:
          "Expands municipal own-source revenue fairly and transparently without intrusive door-to-door resurveys.",
      },
      {
        title: "Transit, Metro & Ring-Road Progress Tracking",
        scenario:
          "Infrastructure corporations track earthworks, viaduct pier erection, and station-area land readiness across multi-kilometer linear projects.",
        impact:
          "Provides executive dashboards with time-stamped visual proof of contractor milestones.",
      },
      {
        title: "Urban Flood-Plain & Lake Buffer Protection",
        scenario:
          "Automated SAR/Optical change alerts highlight illegal landfilling or construction inside statutory storm-water drains and tank FTL buffers.",
        impact:
          "Preserves natural urban flood resilience and safeguards downstream neighborhoods.",
      },
    ],
    techHeading: "Smart Urban Geospatial & 3D Photogrammetry Stack",
    techIntro:
      "Engineered to fuse multi-resolution satellite constellations, aerial LiDAR/UAV surveys, and municipal cadastral layers into a single living city twin.",
    techLayers: [
      {
        layer: "Sub-Meter Stereo & Multi-Spectral Feeds",
        modality: "30cm–2m Optical • Stereo Tri-plets • TIR",
        detail:
          "Orthorectified true-color, near-infrared, and stereo pair acquisitions enabling crisp 2D parcel mapping and 3D building height extraction.",
      },
      {
        layer: "InSAR & UAV LiDAR Integration",
        modality: "X/C-Band InSAR & Drone Point Clouds",
        detail:
          "Persistent scatterer interferometry for structural/ground deformation fused with engineering-grade UAV corridor surveys.",
      },
      {
        layer: "Urban Change & Zoning AI",
        modality: "Vision Transformers + Cadastral Rules",
        detail:
          "Automated roof/road/impervious segmentation cross-checked against statutory land-use polygons and setback regulations.",
      },
      {
        layer: "Municipal Command GIS & APIs",
        modality: "OGC Web Services, 3D Tiles & Alerts",
        detail:
          "Seamless integration with e-governance portals, building-permission workflows, and sovereign On-Site or Cloud hosting.",
      },
    ],
    gallery: [],
  },

  // 2. /hazardous-waste-site-monitoring
  {
    slug: "hazardous-waste-site-monitoring",
    route: "/hazardous-waste-site-monitoring",
    indexNumber: "02",
    platformTag: "Geo-Environmental Safety • Multi-Criteria Siting & Containment AI",
    title: "Hazardous Waste Disposal Site Selection & Monitoring",
    subtitle:
      "Scientific Multi-Criteria Site Screening, Hydrogeological Buffer Modeling & Post-Closure Containment Surveillance",
    heroIntro:
      "Combining satellite lithology, aquifer vulnerability modeling, fault-line mapping, InSAR cap-stability analytics, and multi-spectral leachate/thermal monitoring to site and safeguard hazardous waste TSDF facilities.",
    heroImage: "/images/urban-energy/hazardous-waste-brand.png",
    heroImageAlt:
      "Satellite hydrogeological terrain grid and golden containment reticle monitoring an engineered hazardous waste facility",
    seamlessBrandArtwork: true,
    overviewHeading:
      "Zero-Compromise Spatial Intelligence for Hazardous Waste Siting & Long-Term Containment",
    overviewParagraphs: [
      "Selecting Treatment, Storage, and Disposal Facilities (TSDF) for industrial and hazardous waste demands rigorous scientific screening across dozens of geological, hydrological, ecological, and habitation exclusion criteria. Poor siting or undetected liner degradation risks irreversible groundwater contamination and public-health hazards.",
      "Sathya Technology Services applies multi-criteria geospatial AI—integrating lithology, fracture lineaments, water-table depth, flood-return plains, wind-rose dispersion, and settlement buffers—to rank environmentally safe candidate sites, followed by decades-long orbital thermal, spectral, and InSAR containment monitoring.",
    ],
    overviewHighlights: [
      { label: "Siting Engine", value: "Multi-Criteria GIS & AHP Risk AI" },
      { label: "Subsurface Guard", value: "Fault, Lineament & Aquifer Buffers" },
      { label: "Containment Watch", value: "Thermal, Leachate & InSAR Cap" },
      { label: "Compliance", value: "Regulatory Audit & Buffer Baselines" },
    ],
    capabilities: [
      {
        title: "Regulatory Exclusion & Suitability Site Screening",
        description:
          "Automates weighted multi-layer GIS screening across wetlands, rivers, floodplains, fault zones, permeable aquifers, highways, and habitations.",
        iconName: "compass",
      },
      {
        title: "Hydrogeological & Leachate Pathway Modeling",
        description:
          "Evaluates soil permeability, bedrock fractures, vadose-zone thickness, and surface runoff gradients to prevent subsurface plume migration.",
        iconName: "layers",
      },
      {
        title: "InSAR Landfill Cap & Slope Stability Monitoring",
        description:
          "Detects millimeter-level differential settlement, berm slippage, or cap bulging across active and capped hazardous waste cells.",
        iconName: "radar",
      },
      {
        title: "Subsurface Thermal & Chemical Reaction Alerts",
        description:
          "High-sensitivity Thermal Infrared (TIR) imagery identifies exothermic subsurface waste reactions, spontaneous combustion risks, and gas vents.",
        iconName: "bell",
      },
      {
        title: "Perimeter Vegetation Stress & Leachate Seepage",
        description:
          "Multi-spectral red-edge and SWIR indices spot subtle surrounding plant stress or soil discoloration indicative of liner breaches.",
        iconName: "eye",
      },
      {
        title: "Illegal Dumping & Buffer Encroachment Detection",
        description:
          "High-cadence optical and SAR change detection flags unauthorized waste tipping in quarries and prevents residential encroachment into safety buffers.",
        iconName: "shield",
      },
    ],
    applications: [
      {
        title: "Industrial Corridor TSDF & Landfill Site Selection",
        scenario:
          "State industrial corporations and environmental boards screen entire districts to shortlist scientifically defensible hazardous waste disposal sites.",
        impact:
          "Accelerates Environmental Impact Assessment (EIA) approvals and builds transparent public and regulatory confidence.",
      },
      {
        title: "Active & Closed Containment Cell Integrity",
        scenario:
          "Facility operators monitor engineered clay/geomembrane caps, storm-water retention ponds, and perimeter greenbelts year-round.",
        impact:
          "Catches differential settlement or seepage anomalies early before costly remediation is required.",
      },
      {
        title: "Chemical, Pharma & Petrochemical Sludge Governance",
        scenario:
          "Tracks waste storage lagoons, evaporation ponds, and transport corridors across bulk-drug and chemical manufacturing estates.",
        impact:
          "Ensures strict adherence to hazardous waste handling norms during monsoon surges.",
      },
      {
        title: "Legacy Dump Remediation & Post-Closure Auditing",
        scenario:
          "Provides 30-year longitudinal satellite monitoring of remediated brownfields and capped legacy dumpsites.",
        impact:
          "Delivers continuous, low-cost post-closure compliance verification.",
      },
    ],
    techHeading: "Geo-Environmental Siting & Containment Surveillance Stack",
    techIntro:
      "Uniting subsurface hydrogeological physics, regulatory spatial rules, and multi-sensor anomaly detection inside a single auditable platform.",
    techLayers: [
      {
        layer: "Lithological, DEM & Aquifer Baselines",
        modality: "High-Res DEM • SWIR Mineralogy • Hydro-GIS",
        detail:
          "Maps clay/impermeable strata, fault lineaments, drainage orders, 100-year floodplains, and groundwater recharge sensitivity.",
      },
      {
        layer: "Thermal, Hyperspectral & InSAR Watch",
        modality: "TIR • VNIR/SWIR • X/C-Band InSAR",
        detail:
          "Monitors cap subsidence, internal heat buildup, methane point emissions, and perimeter bio-indicator vegetation health.",
      },
      {
        layer: "Multi-Criteria Suitability & Risk AI",
        modality: "Spatial AHP + Plume Dispersion Modeling",
        detail:
          "Scores candidate parcels across 25+ weighted environmental, geotechnical, and socio-economic safety constraints.",
      },
      {
        layer: "EIA Reporting & Regulatory Portals",
        modality: "Interactive Suitability Maps & Alerts",
        detail:
          "Generates statutory EIA cartographic annexures, buffer compliance alerts, and On-Site or Cloud dashboards.",
      },
    ],
    gallery: [],
  },

  // 3. /energy-critical-infrastructure-security
  {
    slug: "energy-critical-infrastructure-security",
    route: "/energy-critical-infrastructure-security",
    indexNumber: "03",
    platformTag: "Resilient Infrastructure • Space, UAV & InSAR Asset Shield",
    title: "Energy & Critical Infrastructure Security",
    subtitle:
      "Persistent Multi-Sensor Protection for Pipelines, Refineries, LNG Terminals, Substations & Dams",
    heroIntro:
      "Safeguarding sovereign and enterprise critical infrastructure across land and coast by fusing high-revisit SAR/Optical satellite imagery, InSAR structural health analytics, RF monitoring, and autonomous UAV corridor surveillance.",
    heroImage: "/images/urban-energy/energy-security-brand.png",
    heroImageAlt:
      "Orbital surveillance satellite and security radar rings protecting a coastal LNG energy terminal, storage tanks, and substation",
    seamlessBrandArtwork: true,
    overviewHeading:
      "360° Space-to-Ground Vigilance for High-Value Energy & National Infrastructure Assets",
    overviewParagraphs: [
      "Oil and gas pipelines, coastal LNG terminals, strategic petroleum reserves, refineries, ultra-high-voltage substations, and hydroelectric dams span thousands of kilometers—often crossing remote terrain or busy littoral waters where physical guards and CCTV alone leave blind spots. Sathya Technology Services delivers continuous geospatial security and structural integrity intelligence.",
      "Integrating all-weather Synthetic Aperture Radar (SAR) intrusion and vehicle/vessel detection, millimeter-scale InSAR structural deformation tracking, Thermal leak/overheating anomaly alerts, and UAV verification, operators gain early warning against third-party excavation, sabotage, encroachment, and geohazards.",
    ],
    overviewHighlights: [
      { label: "Protected Assets", value: "Pipelines, Terminals, Grids & Dams" },
      { label: "Threat Detection", value: "ROW Intrusion, Drone & Marine Watch" },
      { label: "Structural Health", value: "Millimeter InSAR & Thermal AI" },
      { label: "Alert Latency", value: "Automated Geo-Fenced Cueing" },
    ],
    capabilities: [
      {
        title: "Pipeline Right-of-Way (ROW) Intrusion & Excavation Alerts",
        description:
          "Detects unauthorized heavy machinery, trenching, illegal tapping structures, and construction encroachments along thousands of kilometers of buried pipelines.",
        iconName: "shield",
      },
      {
        title: "Coastal & Offshore Energy Terminal Protection",
        description:
          "Integrates Sathya-MDA vessel tracking, SAR dark-boat detection, and seabed anchor-drag alerts around LNG jetties, SPM buoys, and subsea pipelines.",
        iconName: "anchor",
      },
      {
        title: "InSAR Structural & Geohazard Early Warning",
        description:
          "Monitors dam embankments, tank foundations, and hillside pipeline slopes for subtle landslide creep, subsidence, or seismic strain.",
        iconName: "radar",
      },
      {
        title: "Thermal Leak, Flare & Substation Hotspot Analytics",
        description:
          "Spots hydrocarbon seepage, abnormal storage-tank roof temperatures, and overheating transformer bays via orbital and drone thermal sensors.",
        iconName: "activity",
      },
      {
        title: "Automated UAV Patrol Cueing & Verification",
        description:
          "Dispatches beyond-visual-line-of-sight (BVLOS) EO/IR security drones directly to satellite-flagged anomaly coordinates for live visual confirmation.",
        iconName: "plane",
      },
      {
        title: "RF Spectrum & Perimeter Geofence Intelligence",
        description:
          "Correlates unauthorized radio emissions and perimeter sensor triggers inside a unified 3D command situational picture.",
        iconName: "radio",
      },
    ],
    applications: [
      {
        title: "Cross-Country Oil, Gas & Product Pipeline Security",
        scenario:
          "Pipeline operators screen remote desert, forest, and agricultural rights-of-way for third-party digging, soil disturbance, or illegal pilferage.",
        impact:
          "Prevents ruptures, environmental spills, and costly supply disruptions across national trunklines.",
      },
      {
        title: "Refinery, Tank Farm & Strategic Reserve Surveillance",
        scenario:
          "Combines perimeter SAR/Optical change detection, floating-roof tank monitoring, and thermal safety profiling.",
        impact:
          "Enhances both physical perimeter defense and operational process-safety awareness.",
      },
      {
        title: "Hydroelectric Dam & Pumped-Storage Safety",
        scenario:
          "Tracks concrete/earthfill dam crest deformation, reservoir rim slope stability, and upstream glacial/landslide lake hazards.",
        impact:
          "Provides continuous structural health assurance for downstream population and grid protection.",
      },
      {
        title: "Offshore Rig & Subsea Cable/Pipeline Defense",
        scenario:
          "Monitors vessel loitering and anchor deployment near offshore platforms and coastal landfall stations.",
        impact:
          "Protects multi-billion-dollar marine energy infrastructure against accidental or hostile damage.",
      },
    ],
    techHeading: "Multi-Layer Critical Infrastructure Protection Stack",
    techIntro:
      "Fusing spaceborne persistent wide-area monitoring with high-precision interferometry and tactical aerial verification.",
    techLayers: [
      {
        layer: "Orbital SAR, Optical & Thermal Layer",
        modality: "Sub-Meter Optical • X/C-Band SAR • TIR",
        detail:
          "All-weather coherent change detection (CCD) spots vehicle tracks and soil disturbances alongside crisp optical asset inspection.",
      },
      {
        layer: "InSAR Structural & Slope Telemetry",
        modality: "Persistent Scatterer InSAR",
        detail:
          "Tracks millimeter-per-year displacement time series across dam walls, LNG tanks, substations, and landslide-prone corridors.",
      },
      {
        layer: "UAV, SCADA & Maritime Fusion",
        modality: "EO/IR Drones • AIS/SAR • Ground IoT",
        detail:
          "Integrates coastal vessel tracks, corridor inspection drones, and acoustic/pressure pipeline alerts on one GIS canvas.",
      },
      {
        layer: "Security SOC & Dispatch Console",
        modality: "3D Asset Twins & Priority Alerting",
        detail:
          "Air-gapped On-Site, Private Cloud, or enterprise SaaS deployment with automated patrol work-order routing.",
      },
    ],
    gallery: [],
  },

  // 4. /energy-generation-distribution
  {
    slug: "energy-generation-distribution",
    route: "/energy-generation-distribution",
    indexNumber: "04",
    platformTag: "Smart Grid & Renewables • Solar, Wind, Hydro & Transmission AI",
    title: "Energy Generation & Distribution",
    subtitle:
      "Renewable Resource Siting, Transmission Corridor Optimization & AI Vegetation/Thermal Grid Analytics",
    heroIntro:
      "Accelerating clean-energy transition and grid reliability through solar irradiance/wind resource mapping, automated transmission routing, LiDAR/SAR vegetation encroachment alerts, and outage resilience modeling.",
    heroImage: "/images/urban-energy/energy-generation-brand.png",
    heroImageAlt:
      "Satellite telemetry rings over solar photovoltaic arrays, wind turbines, substation, and high-voltage transmission towers",
    seamlessBrandArtwork: true,
    overviewHeading:
      "End-to-End Geospatial Intelligence from Utility-Scale Generation to Last-Mile Grid Reliability",
    overviewParagraphs: [
      "Planning gigawatt-scale solar, wind, and hydro generation—and transmitting that power reliably across thousands of kilometers of high-voltage corridors—requires precise spatial intelligence at every lifecycle stage. Sathya Technology Services empowers utilities, renewable IPPs, and grid operators with AI-driven Earth observation and corridor analytics.",
      "From multi-year solar irradiance, wind-terrain micro-siting, and least-cost transmission routing during planning, to satellite/LiDAR tree-encroachment detection, tower-foundation stability, and storm-outage damage assessment during operations, our platform maximizes megawatt yield and minimizes grid downtime.",
    ],
    overviewHighlights: [
      { label: "Generation Scope", value: "Solar, Wind, Hydro & Thermal" },
      { label: "Grid Analytics", value: "ROW Routing & Vegetation Clearance" },
      { label: "Asset Inspection", value: "Thermal Drone & Tower InSAR" },
      { label: "Climate Resilience", value: "Storm, Wildfire & Flood Risk AI" },
    ],
    capabilities: [
      {
        title: "Solar & Wind Park Site Selection & Yield Modeling",
        description:
          "Combines GHI/DNI solar irradiance archives, terrain slope/aspect, wind-resource fields, flood exclusions, and substation proximity to rank optimal parcels.",
        iconName: "globe",
      },
      {
        title: "Least-Cost Transmission Line Routing",
        description:
          "Automates optimal corridor alignment across terrain, forest clearances, river crossings, railways, and land-acquisition constraints.",
        iconName: "navigation",
      },
      {
        title: "ROW Vegetation Encroachment & Wildfire Prevention",
        description:
          "Stereo satellite, SAR, and aerial LiDAR canopy height models pinpoint trees growing dangerously close to high-voltage conductors.",
        iconName: "layers",
      },
      {
        title: "Solar PV Soiling, Hotspot & Construction Tracking",
        description:
          "Monitors tracker/module installation progress from orbit and pairs UAV thermal orthomosaics to locate defective PV strings and inverters.",
        iconName: "scan",
      },
      {
        title: "Transmission Tower Foundation & Slope Stability",
        description:
          "Uses InSAR and hydrological erosion modeling to flag towers vulnerable to riverbank scouring, soil subsidence, or mountain slope creep.",
        iconName: "radar",
      },
      {
        title: "Cyclone & Storm Grid Damage Rapid Assessment",
        description:
          "Cloud-penetrating SAR and post-storm optical passes map flooded substations, downed corridor access roads, and outage-affected clusters.",
        iconName: "bell",
      },
    ],
    applications: [
      {
        title: "Renewable Energy Park Development & Land Banking",
        scenario:
          "Clean-energy developers screen thousands of square kilometers to identify contiguous, non-flood-prone land with strong irradiance and grid evacuations.",
        impact:
          "Cuts pre-feasibility site-screening cycles from months to days while de-risking land acquisition.",
      },
      {
        title: "Predictive Transmission Vegetation Management",
        scenario:
          "Grid utilities replace fixed calendar tree-trimming schedules with condition-based satellite canopy clearance risk scores.",
        impact:
          "Prevents line-trip blackouts and conductor-sparked wildfires while lowering O&M expenditure.",
      },
      {
        title: "Hydroelectric Catchment & Pumped-Storage Siting",
        scenario:
          "Identifies high-head upper/lower reservoir pairs via 3D DEM analysis and forecasts seasonal hydro inflow curves.",
        impact:
          "Supports grid-scale energy storage planning and peak-load balancing.",
      },
      {
        title: "Distribution Network Modernization & Rural Electrification",
        scenario:
          "Maps rooftop solar potential, settlement growth, and feeder load corridors across urban and rural distribution circles.",
        impact:
          "Guides transformer upgrades, EV charging siting, and distributed energy integration.",
      },
    ],
    techHeading: "Clean Energy & Smart Transmission Geospatial Stack",
    techIntro:
      "Integrating orbital meteorology, 3D corridor photogrammetry, and asset-health computer vision into utility GIS and EAM workflows.",
    techLayers: [
      {
        layer: "Irradiance, Wind & Stereo Terrain Layer",
        modality: "Solar/Met Satellites • Stereo DEM • Optical",
        detail:
          "Long-term solar radiation, wind roughness/orography, and sub-meter land-parcel orthomosaics for precision micro-siting.",
      },
      {
        layer: "3D Corridor Canopy & InSAR Layer",
        modality: "Stereo DSM • LiDAR • X/C-Band InSAR",
        detail:
          "Measures conductor-to-canopy clearance spans and tower footing ground stability across rugged rights-of-way.",
      },
      {
        layer: "UAV Thermal & Defect Vision AI",
        modality: "Radiometric Thermal & Zoom EO Drones",
        detail:
          "Automated detection of PV cell hotspots, insulator flashover damage, and splice overheating.",
      },
      {
        layer: "Utility GIS & Work-Order Integration",
        modality: "Enterprise GIS, Digital Twins & Alerts",
        detail:
          "Exports prioritized span-maintenance tickets and asset risk layers via On-Site, Private Cloud, or SaaS.",
      },
    ],
    gallery: [],
  },

  // 5. /nuclear-site-selection-risk-assessment
  {
    slug: "nuclear-site-selection-risk-assessment",
    route: "/nuclear-site-selection-risk-assessment",
    indexNumber: "05",
    platformTag: "Strategic Nuclear Safety • Seismic, InSAR & Exclusion-Zone AI",
    title: "Nuclear Power Plant Site Selection & Risk Assessment",
    subtitle:
      "Seismotectonic Fault Screening, InSAR Crustal Stability, Coastal/Flood Modeling & Emergency Zone Analytics",
    heroIntro:
      "Supporting sovereign nuclear energy planners and safety regulators with multi-decadal InSAR crustal deformation mapping, active fault/lineament analysis, cooling-water thermal dispersion, tsunami/flood modeling, and EPZ demographics.",
    heroImage: "/images/urban-energy/nuclear-risk-brand.png",
    heroImageAlt:
      "InSAR Earth-observation satellite projecting concentric seismic and safety buffer rings over a coastal nuclear power plant",
    seamlessBrandArtwork: true,
    overviewHeading:
      "Defense-in-Depth Geospatial & Seismotectonic Intelligence for Civil Nuclear Infrastructure",
    overviewParagraphs: [
      "Siting and operating civil nuclear power plants requires the highest safety margins in engineering—evaluating active tectonic faults, ground-motion hazards, foundation bedrock integrity, uninterrupted cooling-water availability, extreme flood/tsunami envelopes, and strict Emergency Planning Zone (EPZ) population thresholds.",
      "Sathya Technology Services delivers specialized multi-sensor Earth observation and geospatial risk modeling spanning candidate site reconnaissance, regulatory licensing baselines, construction progress, and multi-decade operational environmental and crustal stability monitoring.",
    ],
    overviewHighlights: [
      { label: "Tectonic Screening", value: "Faults, Lineaments & InSAR Strain" },
      { label: "Hydro-Coastal Risk", value: "Tsunami, Storm Surge & PMF Flood" },
      { label: "Thermal & Water", value: "Cooling Intake & Plume Dispersion" },
      { label: "Safety Buffers", value: "Exclusion, Sterilized & EPZ GIS" },
    ],
    capabilities: [
      {
        title: "Seismotectonic Fault & Lineament Characterization",
        description:
          "Fuses shaded-relief LiDAR/stereo DEMs, SAR radar penetration, and multi-spectral geology to map neotectonic faults, shear zones, and paleoseismic landforms.",
        iconName: "layers",
      },
      {
        title: "Multi-Decadal InSAR Crustal & Foundation Stability",
        description:
          "Analyzes 20+ years of archival and live SAR interferometry to verify zero anomalous ground creep, subsidence, or differential settlement.",
        iconName: "radar",
      },
      {
        title: "Probable Maximum Flood (PMF) & Tsunami Modeling",
        description:
          "Simulates extreme cyclone storm surge, tsunami run-up, upstream dam-break waves, and plant-grade elevation safety margins.",
        iconName: "globe",
      },
      {
        title: "Cooling-Water Intake & Thermal Plume Monitoring",
        description:
          "Tracks coastal bathymetry, sediment siltation, bio-fouling algal blooms near intakes, and thermal outfall dispersion compliance via TIR satellites.",
        iconName: "activity",
      },
      {
        title: "Exclusion, Sterilized & EPZ Demographic Analytics",
        description:
          "Continuously maps population distribution, land use, industrial hazards (airports, pipelines, chemical plants), and evacuation road capacity across 1.6km, 5km, and 16km+ rings.",
        iconName: "shield",
      },
      {
        title: "Atmospheric Dispersion & Micro-Meteorology GIS",
        description:
          "Integrates 3D terrain roughness, coastal sea-breeze regimes, and wind-field trajectories to support radiological emergency preparedness planning.",
        iconName: "compass",
      },
    ],
    applications: [
      {
        title: "Greenfield & Small Modular Reactor (SMR) Site Screening",
        scenario:
          "Nuclear power corporations evaluate coastal and inland regions against national and IAEA seismic, hydrological, cooling, and population siting codes.",
        impact:
          "Identifies technically superior candidate sites early and streamlines multi-year site-evaluation investigations.",
      },
      {
        title: "Regulatory Safety Review & Periodic Safety Assessment",
        scenario:
          "Independent safety authorities audit updated fault trace maps, InSAR deformation velocity fields, and surrounding land-use changes every review cycle.",
        impact:
          "Provides objective, reproducible orbital baselines for licensing and long-term plant life extension.",
      },
      {
        title: "Thermal Outfall & Marine Ecological Stewardship",
        scenario:
          "Monitors sea-surface temperature differentials around condenser cooling outfalls to verify strict adherence to marine thermal limits.",
        impact:
          "Protects coastal fisheries and demonstrates transparent environmental stewardship.",
      },
      {
        title: "Emergency Planning Zone (EPZ) Readiness & Routing",
        scenario:
          "Maintains up-to-date high-resolution maps of new settlements, bridges, shelters, and all-weather evacuation routes around operating stations.",
        impact:
          "Ensures emergency response plans always reflect real-world ground infrastructure.",
      },
    ],
    techHeading: "Seismotectonic, Hydro-Thermal & Safety-Buffer Intelligence Stack",
    techIntro:
      "Built for sovereign air-gapped deployment with rigorous traceability across geological, hydrological, and demographic spatial datasets.",
    techLayers: [
      {
        layer: "InSAR, SAR & Stereo Tectonic Sensors",
        modality: "L/C/X-Band InSAR • Sub-Meter Stereo DEM",
        detail:
          "Millimeter-precision crustal velocity mapping combined with high-resolution geomorphic fault-scarp and slope analysis.",
      },
      {
        layer: "Coastal, Hydrological & Thermal Suite",
        modality: "Bathymetric LiDAR/Optical • TIR • Altimetry",
        detail:
          "Quantifies shoreline stability, intake sediment transport, extreme flood envelopes, and thermal plume delta-T contours.",
      },
      {
        layer: "Multi-Hazard & Siting Code Engine",
        modality: "Spatial Exclusion + Dispersion Physics",
        detail:
          "Evaluates seismic buffers, external man-made hazard standoffs, and concentric emergency evacuation network capacity.",
      },
      {
        layer: "Sovereign Air-Gapped GIS Environment",
        modality: "On-Site Secure Command & Audit Archives",
        detail:
          "Delivered on sovereign On-Premise or dedicated Private Cloud infrastructure with full provenance logging.",
      },
    ],
    gallery: [],
  },
];

export const URBAN_ENERGY_SERVICES_BY_SLUG: Record<
  string,
  DefenseServiceDetail
> = Object.fromEntries(
  URBAN_ENERGY_SERVICES_LIST.map((service) => [service.slug, service])
);
