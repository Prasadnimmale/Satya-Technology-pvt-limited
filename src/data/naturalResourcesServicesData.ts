import type { DefenseServiceDetail } from "./defenseServicesData";

export const NATURAL_RESOURCES_SERVICES_LIST: DefenseServiceDetail[] = [
  // 1. /agriculture-crop-monitoring
  {
    slug: "agriculture-crop-monitoring",
    route: "/agriculture-crop-monitoring",
    indexNumber: "01",
    platformTag: "SathyaSASYAVED • Precision Agro-Intelligence & Crop Analytics",
    title: "Agriculture & Crop Monitoring",
    subtitle:
      "Multi-Spectral & SAR Crop Health Diagnostics, Acreage Mapping & Pre-Harvest Yield Forecasting",
    heroIntro:
      "Powered by SathyaSASYAVED, Sathya fuses optical vegetation indices, all-weather Synthetic Aperture Radar (SAR), thermal soil-moisture analytics, and UAV telemetry to strengthen regional food security and sustainable farm governance.",
    heroImage: "/images/natural-resources/agriculture-crop-brand.png",
    heroImageAlt:
      "Earth-observation satellite and agricultural survey drone scanning precision green crop fields",
    seamlessBrandArtwork: true,
    overviewHeading:
      "Transforming Orbital & Drone Observations into Season-Long Agricultural Clarity",
    overviewParagraphs: [
      "Climate variability, pest outbreaks, and uneven irrigation place immense pressure on agricultural productivity across diverse agro-climatic zones. Sathya Technology Services delivers SathyaSASYAVED—an AI-enabled remote sensing and GIS platform that tracks crop sowing progress, phenological growth stages, canopy vigor, and moisture deficits from parcel level up to state and national scales.",
      "By combining cloud-penetrating C-band and L-band Synthetic Aperture Radar (SAR) during monsoon cloud cover with high-resolution multi-spectral optical (NDVI, NDRE, EVI) and thermal infrared feeds, planners, agribusinesses, and crop insurers gain continuous, objective ground truth throughout Kharif, Rabi, and perennial cropping cycles.",
    ],
    overviewHighlights: [
      { label: "Primary Platform", value: "SathyaSASYAVED" },
      { label: "Sensor Fusion", value: "Optical • SAR • Thermal • UAV" },
      { label: "Core Analytics", value: "Crop Health, Stress & Yield AI" },
      { label: "Deployment", value: "On-Site • Private Cloud • SaaS" },
    ],
    capabilities: [
      {
        title: "Crop Classification & Sown Acreage Mapping",
        description:
          "Automated deep-learning parcel segmentation and multi-temporal spectral signatures accurately map crop types and net sown area across districts.",
        iconName: "layers",
      },
      {
        title: "Canopy Vigor & Vegetation Index Tracking",
        description:
          "Continuous NDVI, NDRE, SAVI, and chlorophyll stress profiling detects nutrient deficiencies and early biotic pest or disease anomalies.",
        iconName: "activity",
      },
      {
        title: "All-Weather Monsoon SAR Phenology",
        description:
          "Cloud-penetrating radar backscatter and polarimetric coherence monitor paddy transplantation, crop height, and harvest progress even under overcast skies.",
        iconName: "radar",
      },
      {
        title: "Root-Zone Soil Moisture & Evapotranspiration",
        description:
          "Thermal land-surface temperature and microwave soil-moisture modeling guide precision irrigation scheduling and early drought warning.",
        iconName: "compass",
      },
      {
        title: "Pre-Harvest Regional Yield Estimation",
        description:
          "Ensemble machine-learning models fuse historical yields, meteorological series, and crop growth curves to forecast tonnage weeks prior to harvest.",
        iconName: "cpu",
      },
      {
        title: "Crop Damage & Parametric Claim Verification",
        description:
          "Before-and-after satellite passes quantify hailstorm, cyclone, flood inundation, and drought crop losses with auditable spatial boundaries.",
        iconName: "shield",
      },
    ],
    applications: [
      {
        title: "State & Sovereign Food Security Planning",
        scenario:
          "Agricultural ministries and procurement boards track district-wise sowing progress, fertilizer demand, and expected grain output across major command areas.",
        impact:
          "Enables proactive buffer-stock logistics, supply stabilization, and targeted farmer advisory interventions.",
      },
      {
        title: "Early Pest, Disease & Drought Stress Advisories",
        scenario:
          "Localized drops in red-edge chlorophyll indices and elevated canopy temperatures flag emerging moisture stress or pest hotspots before visible crop failure.",
        impact:
          "Reduces input wastage while protecting farm yields through timely, localized agronomic action.",
      },
      {
        title: "Agri-Finance & Crop Insurance Underwriting",
        scenario:
          "Historical 10-year parcel productivity and objective flood/drought loss polygons streamline farm credit scoring and crop insurance settlement.",
        impact:
          "Accelerates claim turnaround and eliminates manual field-sampling bottlenecks across millions of hectares.",
      },
      {
        title: "Sustainable Supply-Chain & Residue Governance",
        scenario:
          "Monitors regenerative farming practices, crop rotation compliance, and post-harvest stubble management across enterprise sourcing sheds.",
        impact:
          "Provides verifiable ESG and sustainability metrics backed by time-stamped orbital imagery.",
      },
    ],
    techHeading: "Multi-Sensor Agro-Geospatial Intelligence Architecture",
    techIntro:
      "SathyaSASYAVED harmonizes multi-constellation orbital feeds, meteorological telemetry, and UAV orthomosaics into automated agronomic decision layers.",
    techLayers: [
      {
        layer: "Multi-Spectral & Radar Ingestion",
        modality: "Optical • Red-Edge • SWIR • SAR",
        detail:
          "Radiometrically calibrated Sentinel, Landsat, commercial sub-meter optical, and C/L-band SAR time series for gap-free seasonal coverage.",
      },
      {
        layer: "UAV & Field IoT Correlation",
        modality: "Multispectral Drones & Weather Stations",
        detail:
          "Centimeter-level drone scouting orthomosaics fused with agro-meteorological rainfall, humidity, and soil-probe observations.",
      },
      {
        layer: "Phenology & Yield AI Engine",
        modality: "Spatio-Temporal Deep Learning",
        detail:
          "Transformer-based crop classification, phenological curve matching, and district-calibrated econometric/biophysical yield models.",
      },
      {
        layer: "Command GIS & Advisory Delivery",
        modality: "District Dashboards & GeoJSON APIs",
        detail:
          "Interactive village/parcel GIS portals, automated stress alerts, and customizable On-Site, Private Cloud, or SaaS deployment.",
      },
    ],
    gallery: [],
  },

  // 2. /forest-mapping-fire-monitoring
  {
    slug: "forest-mapping-fire-monitoring",
    route: "/forest-mapping-fire-monitoring",
    indexNumber: "02",
    platformTag: "Ecological Stewardship • Canopy Biomass & Thermal Wildfire AI",
    title: "Forest Mapping & Forest Fire Monitoring",
    subtitle:
      "High-Cadence Canopy Cover Analytics, Deforestation Alerts & Real-Time Thermal Wildfire Intelligence",
    heroIntro:
      "Protecting biodiversity corridors, carbon sinks, and reserve forests through multi-spectral canopy classification, SAR deforestation detection, and real-time thermal infrared wildfire tracking and spread modeling.",
    heroImage: "/images/natural-resources/forest-fire-brand.png",
    heroImageAlt:
      "Satellite coordinate scan rings and surveillance UAV pinpointing an early mountain forest fire hotspot",
    seamlessBrandArtwork: true,
    overviewHeading:
      "Persistent Orbital Vigilance Over Reserve Forests, Wildlife Corridors & Carbon Sinks",
    overviewParagraphs: [
      "Vast, rugged forest ecosystems are increasingly threatened by dry-season wildfires, illegal timber encroachment, mining disturbances, and habitat fragmentation. Sathya Technology Services equips forestry departments, disaster management authorities, and conservation programs with continuous satellite and aerial forest intelligence.",
      "Integrating high-resolution Optical/SWIR canopy mapping, cloud-penetrating SAR structural biomass analytics, geostationary/polar-orbiting Thermal Infrared (TIR) hotspot detection, and wind-terrain fire-spread simulation, the platform delivers early warning and post-event ecological recovery assessment.",
    ],
    overviewHighlights: [
      { label: "Canopy Analytics", value: "Species, Density & Biomass AI" },
      { label: "Wildfire Sensors", value: "MWIR / TIR + Geostationary Feeds" },
      { label: "Change Alerts", value: "Encroachment & Deforestation" },
      { label: "Predictive Engine", value: "Fuel-Load & Fire Spread Modeling" },
    ],
    capabilities: [
      {
        title: "Real-Time Thermal Wildfire Hotspot Detection",
        description:
          "Fuses high-revisit mid-wave and thermal infrared satellite passes with aerial UAV feeds to pinpoint nascent surface and crown fire ignitions.",
        iconName: "bell",
      },
      {
        title: "Dynamic Fire-Spread & Fuel-Moisture Modeling",
        description:
          "Combines 3D digital elevation slope/aspect, live wind vectors, and dry-fuel vegetation indices to forecast fire-front progression corridors.",
        iconName: "activity",
      },
      {
        title: "Forest Canopy Density & Species Mapping",
        description:
          "Classifies very dense, moderately dense, open, and scrub forest strata alongside dominant tree species and afforestation survival rates.",
        iconName: "layers",
      },
      {
        title: "All-Weather SAR Deforestation & Encroachment Alerts",
        description:
          "Detects sub-hectare canopy clearing, illegal logging tracks, and boundary encroachments even beneath persistent tropical cloud cover.",
        iconName: "radar",
      },
      {
        title: "Burn-Scar Severity & Ecological Recovery",
        description:
          "Computes Normalized Burn Ratio (dNBR) maps immediately post-fire to quantify damaged acreage and prioritize watershed restoration.",
        iconName: "scan",
      },
      {
        title: "Above-Ground Biomass & Carbon Stock Auditing",
        description:
          "Estimates forest carbon sequestration baselines and longitudinalstock changes using SAR radar backscatter, LiDAR, and optical indices.",
        iconName: "globe",
      },
    ],
    applications: [
      {
        title: "Rapid Wildfire Dispatch & Containment Support",
        scenario:
          "Forest control rooms receive automated geo-tagged thermal ignition alerts with nearest fire-line access routes, water bodies, and vulnerable settlements.",
        impact:
          "Slashes detection-to-response latency and protects frontline firefighting crews, communities, and wildlife.",
      },
      {
        title: "Protected Area & Wildlife Corridor Conservation",
        scenario:
          "Continuous change detection across tiger reserves, national parks, and elephant corridors highlights unauthorized clearings or linear barriers.",
        impact:
          "Strengthens beat-level ranger patrolling with precise GPS coordinates and historical evidence.",
      },
      {
        title: "Afforestation & Compensatory Plantation Auditing",
        scenario:
          "Multi-year high-resolution satellite monitoring verifies sapling canopy closure and greening trajectories across restoration polygons.",
        impact:
          "Provides transparent, tamper-proof auditing for state greening missions and ecological funds.",
      },
      {
        title: "Nature-Based Carbon Credit Verification (MRV)",
        scenario:
          "Quantifies baseline forest carbon stocks, leakage prevention, and permanence across REDD+ and afforestation carbon projects.",
        impact:
          "Delivers auditable Measurement, Reporting, and Verification (MRV) aligned with global sustainability standards.",
      },
    ],
    techHeading: "Integrated Forest & Wildfire Geospatial Intelligence Stack",
    techIntro:
      "Built to monitor millions of hectares simultaneously while delivering beat-level precision to field officers and emergency responders.",
    techLayers: [
      {
        layer: "Thermal & Multi-Spectral Constellation",
        modality: "MWIR • TIR • SWIR • High-Res Optical",
        detail:
          "High-cadence thermal anomaly detection paired with sub-meter and 10m optical/SWIR bands for canopy moisture and burn indices.",
      },
      {
        layer: "SAR Canopy Structure & UAV Recon",
        modality: "C/L-Band SAR & Forestry Drones",
        detail:
          "Polarimetric radar backscatter tracks structural biomass loss through smoke and clouds, verified by long-endurance EO/IR drones.",
      },
      {
        layer: "Fire-Physics & Change AI",
        modality: "Deep Learning + Topographic Spread Sim",
        detail:
          "Automated cloud/false-alarm filtering, fuel-dryness indexing, slope-wind propagation modeling, and sub-hectare clearing detection.",
      },
      {
        layer: "Forest Command & Field Alerting",
        modality: "GIS Control Room & Mobile Beat Alerts",
        detail:
          "Compartment-boundary overlays, SMS/webhook wildfire alerts, and sovereign On-Site or Cloud deployment.",
      },
    ],
    gallery: [],
  },

  // 3. /water-resources-monitoring
  {
    slug: "water-resources-monitoring",
    route: "/water-resources-monitoring",
    indexNumber: "03",
    platformTag: "SathyaJAL & SathyaANTARJAL • Surface & Aquifer Hydrology AI",
    title: "Water Resources Monitoring & Management",
    subtitle:
      "Reservoir Storage Analytics, River-Basin Hydrology, Irrigation Planning & Subsurface Aquifer Intelligence",
    heroIntro:
      "Unifying SathyaJAL surface hydrology and SathyaANTARJAL groundwater AI to monitor reservoir volumes, watershed runoff, flood inundation, canal efficiency, aquifer depletion, and artificial recharge zones.",
    heroImage: "/images/natural-resources/water-resources-brand.png",
    heroImageAlt:
      "Hydrology Earth-observation satellite scanning a crystal-blue dam reservoir, meandering river basin, and irrigation canals",
    seamlessBrandArtwork: true,
    overviewHeading:
      " Basin-to-Aquifer Hydrological Intelligence for Sustainable Water Security",
    overviewParagraphs: [
      "Securing reliable water supplies for cities, agriculture, and industry requires simultaneous visibility into surface reservoirs, river watersheds, and hidden underground aquifers. Sathya Technology Services combines two flagship turnkey platforms—SathyaJAL for surface water governance and SathyaANTARJAL for subsurface groundwater intelligence—into a comprehensive hydrological decision framework.",
      "Fusing optical water indices (NDWI), all-weather SAR flood and water-spread delineation, radar altimetry water-level series, satellite gravimetry, InSAR land-subsidence measurements, and digital elevation watershed models, the platform empowers water authorities to balance allocation, mitigate floods, and reverse aquifer depletion.",
    ],
    overviewHighlights: [
      { label: "Flagship Platforms", value: "SathyaJAL & SathyaANTARJAL" },
      { label: "Surface Scope", value: "Reservoirs, Canals & Flood Basins" },
      { label: "Subsurface Scope", value: "Aquifer Mapping & Recharge AI" },
      { label: "All-Weather Data", value: "SAR Altimetry • Optical • InSAR" },
    ],
    capabilities: [
      {
        title: "Reservoir Water-Spread & Live Storage Estimation",
        description:
          "Combines SAR/Optical surface-water polygons with bathymetric elevation-area-capacity curves and radar altimetry to track live storage volumes.",
        iconName: "globe",
      },
      {
        title: "Watershed Hydrology & Runoff Modeling",
        description:
          "Integrates catchment terrain slope, land-use cover, soil infiltration, and satellite precipitation to forecast basin inflows and water balance.",
        iconName: "layers",
      },
      {
        title: "Irrigation Command & Canal Performance",
        description:
          "Evaluates head-to-tail canal water delivery equity, command-area cropping intensity, seepage zones, and water-use efficiency.",
        iconName: "compass",
      },
      {
        title: "All-Weather SAR Flood Inundation & Risk Mapping",
        description:
          "Maps real-time floodwater extent through monsoon storm clouds, identifying breached embankments, submerged roads, and affected habitations.",
        iconName: "radar",
      },
      {
        title: "Groundwater Potential & 3D Aquifer Delineation",
        description:
          "SathyaANTARJAL correlates lineaments, hydrogeomorphology, lithology, and satellite gravimetry to identify high-yield groundwater zones.",
        iconName: "scan",
      },
      {
        title: "Depletion Tracking & Artificial Recharge Siting",
        description:
          "Pinpoints over-exploited aquifer blocks via InSAR subsidence and piezometric trends while siting check dams, percolation tanks, and recharge shafts.",
        iconName: "cpu",
      },
    ],
    applications: [
      {
        title: "River Basin & Dam Release Optimization",
        scenario:
          "Water resource departments monitor upstream catchment rainfall, snowmelt, and cascade reservoir storage across inter-state river basins.",
        impact:
          "Optimizes seasonal irrigation releases, drinking-water reserves, and downstream flood-cushion management.",
      },
      {
        title: "Groundwater Sustainability & Recharge Missions",
        scenario:
          "Hydrogeological agencies identify stressed blocks and rank optimal locations for check dams and rainwater harvesting structures.",
        impact:
          "Maximizes aquifer recovery per rupee invested using scientific terrain and subsurface permeability modeling.",
      },
      {
        title: "Monsoon Flood Emergency Response",
        scenario:
          "Cloud-penetrating SAR imagery maps peak river inundation footprints within hours to guide evacuation, relief routing, and post-flood assessment.",
        impact:
          "Delivers unambiguous flood-extent maps even when optical satellites are blocked by heavy cyclone cloud cover.",
      },
      {
        title: "Urban Water Body & Wetland Protection",
        scenario:
          "Multi-year satellite archives track lake shrinkage, catchment encroachment, siltation, and aquatic weed proliferation across municipal tanks.",
        impact:
          "Preserves natural urban flood sponges and drinking-water reservoirs with time-stamped legal GIS baselines.",
      },
    ],
    techHeading: "Surface-to-Subsurface Hydro-Geospatial Intelligence Stack",
    techIntro:
      "Bridging orbital radar hydrology, terrain physics, and hydrogeological machine learning inside a single basin management environment.",
    techLayers: [
      {
        layer: "Orbital Hydro-Sensor Suite",
        modality: "SAR • Radar Altimetry • Optical • Gravimetry",
        detail:
          "Multi-frequency SAR water masks, satellite water-surface elevation altimetry, NDWI/MNDWI optical bands, and GRACE-class mass anomalies.",
      },
      {
        layer: "Terrain, InSAR & Lithology Fusion",
        modality: "High-Res DEM, InSAR & Hydrogeology",
        detail:
          "Hydro-conditioned DEM stream networks, millimeter-scale InSAR aquifer compaction maps, fracture lineaments, and well-log layers.",
      },
      {
        layer: "Hydrological & Aquifer AI Models",
        modality: "Runoff Physics + Subsurface ML",
        detail:
          "Coupled rainfall-runoff routing, bathymetric storage curve estimation, and multi-criteria AI groundwater potential/recharge scoring.",
      },
      {
        layer: "Basin Command & Decision Portals",
        modality: "Interactive Watershed Twins & Alerts",
        detail:
          "Live reservoir dashboards, canal command analytics, flood hazard layers, and sovereign On-Site / Cloud deployment.",
      },
    ],
    gallery: [],
  },

  // 4. /environmental-hotspot-monitoring
  {
    slug: "environmental-hotspot-monitoring",
    route: "/environmental-hotspot-monitoring",
    indexNumber: "04",
    platformTag: "Ecological Risk & Compliance • Multi-Spectral Hotspot AI",
    title: "Environmental Hotspot Mapping & Monitoring",
    subtitle:
      "Satellite Detection of Industrial Plumes, Water Pollution, Coastal Degradation & Thermal Anomalies",
    heroIntro:
      "Continuous multi-spectral, hyperspectral, thermal, and SAR environmental intelligence pinpointing industrial effluent discharges, methane/gas flaring, mine-tailing risks, urban heat islands, and fragile wetland degradation.",
    heroImage: "/images/natural-resources/environmental-hotspot-brand.png",
    heroImageAlt:
      "Multi-spectral orbital grid and golden target reticle pinpointing a coastal industrial discharge hotspot near mangrove wetlands",
    seamlessBrandArtwork: true,
    overviewHeading:
      "Proactive Orbital Detection of Ecological Stress, Pollution Plumes & Compliance Risks",
    overviewParagraphs: [
      "Environmental regulators, coastal authorities, and responsible enterprises cannot rely solely on sparse ground-sampling stations to detect episodic pollution events or gradual habitat degradation across expansive industrial corridors, mining belts, and coastlines. Sathya Technology Services delivers automated Environmental Hotspot Mapping & Monitoring powered by multi-sensor Earth observation.",
      "By fusing atmospheric trace-gas spectroscopy, thermal infrared effluent/flaring signatures, coastal turbidity and algal-bloom optical bands, SAR oil-slick detection, and InSAR ground-stability analytics, the platform flags localized environmental anomalies early so corrective action can be taken before irreversible ecological damage occurs.",
    ],
    overviewHighlights: [
      { label: "Spectral Coverage", value: "Optical • SWIR • Thermal • Gas" },
      { label: "Marine & Water", value: "Oil Slicks, Turbidity & Effluents" },
      { label: "Land & Air", value: "Methane, Flaring & Mine Tailings" },
      { label: "Audit Trail", value: "Time-Stamped Geospatial Evidence" },
    ],
    capabilities: [
      {
        title: "Industrial Effluent & Thermal Plume Detection",
        description:
          "Identifies abnormal thermal cooling-water discharges, chemical discoloration, and suspended sediment plumes entering rivers, lakes, and estuaries.",
        iconName: "eye",
      },
      {
        title: "Atmospheric Emission & Gas-Flaring Hotspots",
        description:
          "Tracks NO2, SO2, aerosol optical depth, SWIR methane point-sources, and unpermitted industrial flaring across energy and manufacturing clusters.",
        iconName: "activity",
      },
      {
        title: "Marine Oil-Spill & Bilge Dumping Surveillance",
        description:
          "Uses all-weather SAR wave-damping signatures and drift modeling to detect offshore slicks and trace probable source vessels or pipelines.",
        iconName: "radar",
      },
      {
        title: "Mining Footprint, Tailings & Land Degradation",
        description:
          "Monitors quarry boundary compliance, overburden dump stability via InSAR, acid-mine drainage, and illegal sand-mining along riverbeds.",
        iconName: "layers",
      },
      {
        title: "Wetland, Mangrove & Coastal Erosion Analytics",
        description:
          "Maps shoreline retreat, mangrove health changes, estuarine eutrophication, and harmful chlorophyll-a algal blooms across sensitive littorals.",
        iconName: "globe",
      },
      {
        title: "Urban Heat Island & Micro-Climate Profiling",
        description:
          "Generates high-resolution Land Surface Temperature (LST) hotspot maps to guide green-corridor urban cooling and public-health planning.",
        iconName: "scan",
      },
    ],
    applications: [
      {
        title: "Environmental Regulatory & Compliance Auditing",
        scenario:
          "Pollution control boards continuously screen industrial estates, thermal plants, ports, and mining leases for anomalous discharges or boundary violations.",
        impact:
          "Focuses scarce field-inspection teams directly onto high-probability violation hotspots with objective satellite evidence.",
      },
      {
        title: "Coastal Zone, Mangrove & Estuary Stewardship",
        scenario:
          "Coastal management authorities monitor industrial port runoff, aquaculture expansion, and shoreline erosion near fragile marine ecosystems.",
        impact:
          "Safeguards coastal biodiversity and natural storm-surge buffers through early intervention.",
      },
      {
        title: "River Rejuvenation & Water-Quality Governance",
        scenario:
          "Tracks point-source drain inflows, turbidity spikes, algal blooms, and floodplain encroachments along priority river stretches.",
        impact:
          "Provides continuous basin-wide visibility to measure the real-world effectiveness of effluent treatment infrastructure.",
      },
      {
        title: "Enterprise ESG & Environmental Risk Assurance",
        scenario:
          "Infrastructure operators and energy companies monitor tailings dams, pipeline corridors, and facility perimeters for zero-harm compliance.",
        impact:
          "Mitigates operational liabilities and supports transparent, audit-ready sustainability reporting.",
      },
    ],
    techHeading: "Multi-Spectral & Atmospheric Environmental Intelligence Stack",
    techIntro:
      "Correlating spectral chemistry, thermal anomalies, and radar surface physics to isolate genuine environmental hazards from natural seasonal background variation.",
    techLayers: [
      {
        layer: "Multi-Spectral, Hyperspectral & Gas Sensors",
        modality: "VNIR • SWIR • TIR • Trace-Gas Spectrometers",
        detail:
          "Captures water-quality bio-optical indices, thermal plumes, mineral alteration signatures, and atmospheric emission columns.",
      },
      {
        layer: "SAR Surface & InSAR Stability Layer",
        modality: "C/X-Band SAR & Interferometry",
        detail:
          "Detects marine oil slicks in any weather while measuring millimeter-level subsidence on mine tailings and landfills.",
      },
      {
        layer: "Anomaly Scoring & Source Attribution AI",
        modality: "Baseline Deviation & Plume Dispersion ML",
        detail:
          "Compares every pass against seasonal multi-year baselines and wind/current vectors to pinpoint hotspot origins.",
      },
      {
        layer: "Compliance GIS & Automated Alerting",
        modality: "Regulatory Dashboards & Evidence Packs",
        detail:
          "Delivers severity-ranked hotspot alerts, historical time-sliders, and sovereign On-Site, Private Cloud, or SaaS deployment.",
      },
    ],
    gallery: [],
  },

  // 5. /illegal-fishing-detection
  {
    slug: "illegal-fishing-detection",
    route: "/illegal-fishing-detection",
    indexNumber: "05",
    platformTag: "Sathya-MDA • Marine Biodiversity & IUU Fishing Enforcement",
    title: "Illegal Fishing Detection & Monitoring",
    subtitle:
      "Dark-Trawler Discovery, EEZ & Marine Protected Area Surveillance & AI Fishing-Behavior Analytics",
    heroIntro:
      "Built on Sathya-MDA, this specialized ecological enforcement solution fuses SAR, Optical, Thermal, VIIRS night-light boat detection, AIS/VMS kinematics, and RF monitoring to combat Illegal, Unreported, and Unregulated (IUU) fishing.",
    heroImage: "/images/natural-resources/illegal-fishing-brand.png",
    heroImageAlt:
      "SAR satellite radar grid locking onto dark unlit fishing trawlers at sea as a fisheries patrol craft approaches",
    seamlessBrandArtwork: true,
    overviewHeading:
      "Safeguarding Marine Ecosystems, Sovereign Fisheries & Coastal Livelihoods from IUU Exploitation",
    overviewParagraphs: [
      "Illegal, Unreported, and Unregulated (IUU) fishing depletes vital fish stocks, destroys sensitive coral and benthic habitats, and undermines the livelihoods of lawful coastal fishing communities. Unauthorized fleets frequently disable AIS/VMS transponders, spoof vessel identities, fish inside Marine Protected Areas (MPAs) during seasonal bans, or transship catches at sea to evade port inspections.",
      "Powered by Sathya-MDA, Sathya Technology Services integrates all-weather Synthetic Aperture Radar (SAR) ship detection, night-time optical/VIIRS squid-fleet light sensors, high-resolution Optical/Thermal verification, space-based RF emitter geolocation, and AI kinematic fishing-pattern recognition to expose dark trawlers and coordinate rapid coast-guard or fisheries patrol interdiction.",
    ],
    overviewHighlights: [
      { label: "Core Platform", value: "Sathya-MDA (Fisheries Edition)" },
      { label: "Dark-Fleet Sensors", value: "SAR • Night-Light • Optical • RF" },
      { label: "Behavioral AI", value: "Trawling, Longlining & Transshipment" },
      { label: "Protected Zones", value: "EEZ, MPAs & Seasonal Ban Polygons" },
    ],
    capabilities: [
      {
        title: "AIS-Silent 'Dark Fishing Vessel' Detection",
        description:
          "Cross-matches wide-swath satellite SAR radar hull returns against active AIS and VMS broadcasts to immediately highlight non-cooperative vessels.",
        iconName: "radar",
      },
      {
        title: "AI Gear-Specific Kinematic Pattern Recognition",
        description:
          "Classifies active purse-seining, bottom-trawling, and longlining maneuvers from subtle speed, turn-rate, and drift track signatures.",
        iconName: "cpu",
      },
      {
        title: "Night-Time Light-Lure Fleet Detection",
        description:
          "Detects unpermitted night-fishing fleets using high-intensity deck lights across offshore waters even when transponders are switched off.",
        iconName: "eye",
      },
      {
        title: "At-Sea Transshipment & Reefer Rendezvous Alerts",
        description:
          "Flags suspicious mid-ocean loitering and side-by-side pairings between fishing boats and refrigerated cargo vessels ('reefers') used to launder illegal catch.",
        iconName: "compass",
      },
      {
        title: "Marine Protected Area & Seasonal-Ban Geofencing",
        description:
          "Enforces automated digital perimeters around Marine Protected Areas, breeding grounds, artisanal coastal zones, and sovereign EEZ boundaries.",
        iconName: "shield",
      },
      {
        title: "RF Geolocation & Patrol UAV Verification",
        description:
          "Correlates marine navigation radar/VHF emissions with long-range patrol drone video to capture prosecutorial hull-number and fishing-activity evidence.",
        iconName: "radio",
      },
    ],
    applications: [
      {
        title: "EEZ & Foreign Fleet Incursion Interdiction",
        scenario:
          "Fisheries protection and coast guard centers monitor outer Exclusive Economic Zone borders for unauthorized distant-water trawling fleets.",
        impact:
          "Directs patrol vessels and aircraft straight to confirmed dark-vessel clusters instead of conducting blind ocean sweeps.",
      },
      {
        title: "Marine Protected Area & Coral Reef Conservation",
        scenario:
          "24/7 geofenced SAR and optical monitoring protects marine national parks, turtle nesting waters, and fragile benthic ecosystems from destructive bottom trawling.",
        impact:
          "Preserves marine biodiversity and enables rapid fish-stock regeneration in protected sanctuaries.",
      },
      {
        title: "Seasonal Fishing-Ban & Artisanal Zone Enforcement",
        scenario:
          "Monitors monsoon breeding-season fishing moratoriums and near-shore waters reserved exclusively for traditional small-scale fishers.",
        impact:
          "Protects sustainable breeding cycles and ensures fair resource access for local coastal communities.",
      },
      {
        title: "Port-State Control & Catch-Traceability Auditing",
        scenario:
          "Reconstructs complete voyage histories,AIS gaps, and offshore rendezvous events prior to a vessel requesting port entry or landing clearance.",
        impact:
          "Prevents IUU-tainted seafood from entering domestic and export supply chains.",
      },
    ],
    techHeading: "Orbital-to-Patrol Fisheries Enforcement Architecture",
    techIntro:
      "Combining wide-ocean radar search, behavioral machine learning, and tactical patrol cueing inside the battle-tested Sathya-MDA platform.",
    techLayers: [
      {
        layer: "Wide-Swath SAR & Night-Light Search",
        modality: "SAR • VIIRS/Low-Light • Optical • Thermal",
        detail:
          "Scans hundreds of thousands of square kilometers day or night to detect metallic and wooden/fiberglass fishing hulls.",
      },
      {
        layer: "AIS, VMS & Space-Based RF Fusion",
        modality: "Satellite AIS • Fisheries VMS • RF",
        detail:
          "Correlates cooperative vessel transponders with marine radar/VHF RF detections to expose MMSI spoofing and dark vessels.",
      },
      {
        layer: "IUU Behavioral & Risk Scoring AI",
        modality: "Track Kinematics + Bathymetric Context",
        detail:
          "Scores illegal fishing probability using seabed depth, MPA boundaries, sea-surface temperature fronts, and loitering/trawling kinematics.",
      },
      {
        layer: "Fisheries Command & Patrol Dispatch",
        modality: "ENC Charts, Drone Cueing & Evidence Packs",
        detail:
          "Delivers live patrol intercept vectors, court-ready multi-sensor evidence reports, and SaaS or sovereign On-Premise deployment.",
      },
    ],
    gallery: [],
  },
];

export const NATURAL_RESOURCES_SERVICES_BY_SLUG: Record<
  string,
  DefenseServiceDetail
> = Object.fromEntries(
  NATURAL_RESOURCES_SERVICES_LIST.map((service) => [service.slug, service])
);
