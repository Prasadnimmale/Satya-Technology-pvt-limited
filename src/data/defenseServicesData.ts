export interface DefenseCapability {
  title: string;
  description: string;
  iconName:
    | "satellite"
    | "radar"
    | "shield"
    | "cpu"
    | "eye"
    | "radio"
    | "compass"
    | "layers"
    | "plane"
    | "anchor"
    | "activity"
    | "bell"
    | "Crosshair"
    | "globe"
    | "scan"
    | "navigation";
}

export interface DefenseApplication {
  title: string;
  scenario: string;
  impact: string;
}

export interface DefenseTechLayer {
  layer: string;
  modality: string;
  detail: string;
}

export interface DefenseGalleryImage {
  src: string;
  alt: string;
  caption: string;
}

export interface DefenseServiceDetail {
  slug: string;
  route: string;
  indexNumber: string;
  platformTag: string;
  title: string;
  subtitle: string;
  heroIntro: string;
  heroImage: string;
  heroImageAlt: string;
  seamlessBrandArtwork?: boolean;
  overviewHeading: string;
  overviewParagraphs: string[];
  overviewHighlights: { label: string; value: string }[];
  capabilities: DefenseCapability[];
  applications: DefenseApplication[];
  techHeading: string;
  techIntro: string;
  techLayers: DefenseTechLayer[];
  gallery: DefenseGalleryImage[];
}

export const DEFENSE_SERVICES_LIST: DefenseServiceDetail[] = [
  // 1. /defense-intelligence
  {
    slug: "defense-intelligence",
    route: "/defense-intelligence",
    indexNumber: "01",
    platformTag: "SathyaRAKSHA • Strategic Multi-INT Fusion",
    title: "Defense & Intelligence",
    subtitle:
      "AI-Driven Satellite Observation, Multi-Sensor Fusion & Strategic Situational Awareness",
    heroIntro:
      "Unifying orbital Earth observation, geospatial analytics, and machine-learning pattern recognition to transform multi-source defense data into timely, high-confidence strategic insight.",
    heroImage: "/images/defense-services/defense-intelligence-brand.png",
    heroImageAlt:
      "Defense & Intelligence integrated architecture showing Earth observation, telemetry networks, satellite dish, mobile command vehicle, and analytical workstation",
    seamlessBrandArtwork: true,
    overviewHeading:
      "Turning Multi-Source Orbital & Geospatial Data into Strategic Clarity",
    overviewParagraphs: [
      "Modern defense planning requires continuous visibility across vast geographical regions where isolated reports and manual imagery inspection can no longer keep pace. Sathya Technology Services delivers an integrated Defense & Intelligence framework—anchored by SathyaRAKSHA—that fuses optical, radar, thermal, and radio-frequency observations into a coherent digital intelligence picture.",
      "Designed for sovereign analytical centers and defense planning teams, the platform correlates historical satellite baselines with newly acquired passes to highlight infrastructure developments, logistics shifts, and anomalous activity across land, coastal, and aerospace theaters.",
    ],
    overviewHighlights: [
      { label: "Primary Platform", value: "SathyaRAKSHA" },
      { label: "Sensor Inputs", value: "Optical • SAR • Thermal • RF" },
      { label: "Analytical Focus", value: "Change & Pattern Intelligence" },
      { label: "Deployment", value: "On-Site • Private Cloud • SaaS" },
    ],
    capabilities: [
      {
        title: "Automated Infrastructure Change Detection",
        description:
          "Compares longitudinal satellite imagery archives to surface new construction, runway extensions, staging facilities, and terrain modifications.",
        iconName: "layers",
      },
      {
        title: "Multi-Sensor Intelligence Fusion",
        description:
          "Combines Electro-Optical, Synthetic Aperture Radar (SAR), Thermal Infrared, and geospatial vector layers within a single analytical workspace.",
        iconName: "cpu",
      },
      {
        title: "All-Weather Day & Night Observation",
        description:
          "Utilizes cloud-penetrating radar backscatter and thermal signatures to maintain situational continuity regardless of cloud cover or lighting.",
        iconName: "satellite",
      },
      {
        title: "Object & Asset Classification",
        description:
          "Applies computer-vision models to assist analysts in identifying aircraft, naval vessels, heavy vehicles, and defensive structures across wide swaths.",
        iconName: "scan",
      },
      {
        title: "Spatio-Temporal Activity Baselines",
        description:
          "Models normal operational rhythms at key regions of interest to flag unusual surges, depletions, or out-of-pattern movements.",
        iconName: "activity",
      },
      {
        title: "Decision-Ready Briefings & Alerts",
        description:
          "Generates georeferenced visual intelligence reports and configurable threshold notifications for command and analytical workflows.",
        iconName: "bell",
      },
    ],
    applications: [
      {
        title: "Strategic Site & Facility Monitoring",
        scenario:
          "Periodic and persistent satellite review of airfields, ports, logistics hubs, and remote installations.",
        impact:
          "Reduces manual imagery screening workload while providing early visibility into structural and operational changes.",
      },
      {
        title: "Regional Readiness Assessment",
        scenario:
          "Aggregating multi-sensor indicators across wide theater corridors to evaluate equipment concentration and mobility.",
        impact:
          "Supports objective, evidence-backed strategic planning with verifiable orbital imagery.",
      },
      {
        title: "Geospatial Digital Twin Maintenance",
        scenario:
          "Maintaining up-to-date 2D/3D foundational map layers, road networks, bridges, and elevation models across remote regions.",
        impact:
          "Ensures mission planners operate from current terrain truth rather than outdated cartography.",
      },
      {
        title: "Disaster & Humanitarian Defense Support",
        scenario:
          "Rapid post-event satellite mapping of floods, landslides, and damaged transport links for defense relief coordination.",
        impact:
          "Accelerates route selection and resource allocation during civil-military emergency operations.",
      },
    ],
    techHeading: "Multi-INT Orbital & AI Processing Architecture",
    techIntro:
      "Built on the SATHYA Integrated Intelligence Stack, our Defense & Intelligence workflow connects raw multi-spectral pixels to structured geospatial indicators.",
    techLayers: [
      {
        layer: "Orbital Collection Layer",
        modality: "VHR Optical, X/C/L-Band SAR & Thermal",
        detail:
          "Ingests multi-resolution commercial and sovereign Earth observation feeds with automated orthorectification and co-registration.",
      },
      {
        layer: "Deep-Learning Vision Core",
        modality: "Automated Detection & Segmentation",
        detail:
          "Domain-tuned neural networks highlight vehicles, vessels, aircraft, and structural changes across large imagery tiles.",
      },
      {
        layer: "Temporal Correlation Engine",
        modality: "Time-Series Anomaly Scoring",
        detail:
          "Tracks site activity curves over weeks, months, and years to distinguish routine fluctuations from meaningful shifts.",
      },
      {
        layer: "Interoperable GIS Delivery",
        modality: "OGC / STAC Standards & Secure Dashboards",
        detail:
          "Delivers georeferenced layers, annotated imagery chips, and alerts across air-gapped on-premise or private cloud environments.",
      },
    ],
    gallery: [
      {
        src: "/images/satellite-dish-ground.jpg",
        alt: "High-gain satellite ground station antenna array",
        caption: "High-capacity ground segment & satellite telemetry reception",
      },
      {
        src: "/images/defense-services/hero-battlefield-intel.jpg",
        alt: "Multi-console analytical operations center",
        caption: "Collaborative geospatial analysis & command visualization",
      },
      {
        src: "/images/satellite-space.jpg",
        alt: "Earth observation spacecraft in low Earth orbit",
        caption: "Persistent orbital Earth observation across global theaters",
      },
    ],
  },

  // 2. /air-domain-awareness
  {
    slug: "air-domain-awareness",
    route: "/air-domain-awareness",
    indexNumber: "02",
    platformTag: "SathyaPAVAN • Aerospace & Aerial Intelligence",
    title: "Air Domain Awareness",
    subtitle:
      "Integrated Aerial Surveillance Unifying Satellite Imagery, Drone Feeds & RF Intelligence",
    heroIntro:
      "Connecting orbital remote sensing, unmanned aerial reconnaissance, and passive radio-frequency monitoring to provide comprehensive situational awareness across airspace corridors and airfields.",
    heroImage: "/images/defense-services/hero-air-domain.jpg",
    heroImageAlt:
      "High-performance fighter aircraft banking in flight across deep blue sky",
    overviewHeading:
      "Bridging Orbital Wide-Area Context with High-Cadence Aerial Reconnaissance",
    overviewParagraphs: [
      "Effective Air Domain Awareness spans both active airspace corridors and the ground infrastructure that sustains aerial operations. Through SathyaPAVAN, Sathya Technology Services integrates wide-swath satellite imagery with high-resolution UAV electro-optical/infrared (EO/IR) streams and radio-frequency signal monitoring.",
      "This multi-altitude approach enables analysts to monitor airfield readiness, aircraft dispersal patterns, runway utilization, and low-altitude unmanned aerial corridors while rapidly cueing aerial sensors to verify satellite-detected anomalies.",
    ],
    overviewHighlights: [
      { label: "Primary Platform", value: "SathyaPAVAN" },
      { label: "Data Streams", value: "Satellite • UAV EO/IR • RF" },
      { label: "Tasking Workflow", value: "Automated Tip-and-Cue" },
      { label: "Coverage", value: "Airfields & Aerial Corridors" },
    ],
    capabilities: [
      {
        title: "Airbase & Runway Activity Analytics",
        description:
          "Monitors aprons, hangars, fuel depots, and taxiways via optical and SAR imagery to track aircraft presence and infrastructure updates.",
        iconName: "plane",
      },
      {
        title: "Satellite-to-UAV Tip-and-Cue",
        description:
          "Translates wide-area orbital anomaly detections into targeted flight coordinates for rapid drone EO/IR visual confirmation.",
        iconName: "compass",
      },
      {
        title: "Aerial Video Intelligence",
        description:
          "Processes live and recorded UAV electro-optical and thermal video streams to detect, classify, and track moving objects on the ground.",
        iconName: "eye",
      },
      {
        title: "Passive RF Spectrum Correlation",
        description:
          "Correlates communication and radar emitter detections with visual and satellite tracks to enhance situational context.",
        iconName: "radio",
      },
      {
        title: "Low-Altitude Corridor Mapping",
        description:
          "Uses high-resolution Digital Elevation Models (DEM) and clutter maps to model line-of-sight coverage and low-altitude approach routes.",
        iconName: "layers",
      },
      {
        title: "Automated Airspace Event Alerts",
        description:
          "Notifies operators when unusual aircraft concentrations, unscheduled airfield changes, or perimeter aerial events are detected.",
        iconName: "bell",
      },
    ],
    applications: [
      {
        title: "Airfield Readiness & Dispersal Monitoring",
        scenario:
          "Tracking rotary- and fixed-wing asset positioning across primary airbases and forward operating strips.",
        impact:
          "Provides timely visibility into operational tempo and logistical buildup across regional air infrastructure.",
      },
      {
        title: "Aerial Reconnaissance Verification",
        scenario:
          "Dispatching unmanned aerial systems to inspect remote terrain anomalies flagged by morning satellite passes.",
        impact:
          "Shortens the sensor-to-verification cycle while conserving aerial sortie endurance.",
      },
      {
        title: " Radar Line-of-Sight & Gap Modeling",
        scenario:
          "Analyzing mountainous terrain masking and valley corridors using 3D geospatial elevation datasets.",
        impact:
          "Helps planners optimize sensor placement to cover low-altitude blind spots.",
      },
      {
        title: "Coastal & Island Airspace Watch",
        scenario:
          "Integrating maritime patrol drone feeds with orbital imagery over offshore islands and littoral air corridors.",
        impact:
          "Unifies aerial and surface situational pictures across extended maritime approaches.",
      },
    ],
    techHeading: "Orbital-to-Aerial Sensor Fusion Pipeline",
    techIntro:
      "SathyaPAVAN synchronizes spaceborne revisit schedules, UAV video pipelines, and spectrum metadata into a unified aerospace intelligence view.",
    techLayers: [
      {
        layer: "Spaceborne Airfield Watch",
        modality: "Sub-Meter Optical & High-Cadence SAR",
        detail:
          "Captures clear aircraft silhouettes and radar returns across aprons even under heavy cloud cover or night conditions.",
      },
      {
        layer: "Airborne EO/IR Stream Analytics",
        modality: "Real-Time Full-Motion Video AI",
        detail:
          "Applies stabilized object detection, georegistration, and thermal contrast enhancement to UAV video feeds.",
      },
      {
        layer: "RF Signal Context Layer",
        modality: "VHF / UHF / L-Band Metadata Fusion",
        detail:
          "Associates detected radio-frequency activity with spatial terrain corridors and known facility footprints.",
      },
      {
        layer: "3D Airspace & Terrain GIS",
        modality: "Viewshed & Elevation Analytics",
        detail:
          "Renders sensor coverage domes, terrain masking zones, and flight paths on high-precision 3D maps.",
      },
    ],
    gallery: [
      {
        src: "/images/defense-services/gallery-awacs-surveillance.jpg",
        alt: "Airborne early warning and control radar aircraft in flight",
        caption: "Wide-area airborne radar & command surveillance integration",
      },
      {
        src: "/images/defense-services/gallery-uav-surveillance.jpg",
        alt: "Long-endurance reconnaissance UAV flying with EO/IR sensor pod",
        caption: "UAV electro-optical & infrared verification payloads",
      },
      {
        src: "/images/defense-services/gallery-radar-dome.jpg",
        alt: "High-altitude mountain radome surveillance installation",
        caption: "High-elevation air surveillance & spectrum monitoring stations",
      },
    ],
  },

  // 3. /battlefield-intelligence
  {
    slug: "battlefield-intelligence",
    route: "/battlefield-intelligence",
    indexNumber: "03",
    platformTag: "SathyaRAKSHA • Tactical Terrain & Theatre Analytics",
    title: "Battlefield Intelligence",
    subtitle:
      "Digital Terrain Intelligence, Multi-Sensor Fusion & Command Situational Picture",
    heroIntro:
      "Empowering tactical and operational command centers with high-resolution 3D terrain modeling, mobility corridor analysis, and real-time multi-sensor situational synthesis.",
    heroImage: "/images/defense-services/battlefield-intelligence-brand.png",
    heroImageAlt:
      "Battlefield Intelligence tactical operator with digital radar map tablet, armored reconnaissance vehicle, and radar communications tower",
    seamlessBrandArtwork: true,
    overviewHeading:
      "Transforming Complex Theater Topography & Sensor Feeds into Operational Clarity",
    overviewParagraphs: [
      "Rapidly evolving ground theaters demand accurate terrain understanding and timely synthesis of heterogeneous reconnaissance feeds. Sathya Technology Services provides Battlefield Intelligence solutions that combine high-resolution satellite elevation models, SAR surface analytics, drone reconnaissance, and tactical GIS layers.",
      "From evaluating cross-country vehicle mobility, river-crossing points, and bridge integrity to correlating multi-sensor indicators into a common operational picture, our platform equips command teams with clear spatial context for informed decision-making.",
    ],
    overviewHighlights: [
      { label: "Core Focus", value: "3D Terrain & Theatre Fusion" },
      { label: "Spatial Inputs", value: "DEM • SAR • EO/IR • GIS" },
      { label: "Key Outputs", value: "Mobility, Viewshed & Change Maps" },
      { label: "Architecture", value: "Command-Center Ready GIS" },
    ],
    capabilities: [
      {
        title: "3D Digital Terrain & Slope Analytics",
        description:
          "Generates high-precision elevation, gradient, soil-moisture, and obstacle maps to assess off-road mobility and choke points.",
        iconName: "layers",
      },
      {
        title: "Line-of-Sight & Viewshed Modeling",
        description:
          "Calculates observation fields, communication relay coverage, and dead-ground zones across rugged mountain or urban terrain.",
        iconName: "eye",
      },
      {
        title: "Bridge, Road & Logistics Route Auditing",
        description:
          "Uses high-revisit optical and radar imagery to verify the status of supply routes, mountain passes, bridges, and forward depots.",
        iconName: "navigation",
      },
      {
        title: "Multi-Sensor Common Operational Picture",
        description:
          "Consolidates satellite imagery, UAV reconnaissance frames, and ground sensor alerts onto a unified, time-slider map canvas.",
        iconName: "globe",
      },
      {
        title: "SAR Surface Disturbance Detection",
        description:
          "Detects coherent radar phase changes caused by heavy vehicle tracks, earthworks, and new field fortifications.",
        iconName: "radar",
      },
      {
        title: "Rapid Damage & Impact Assessment",
        description:
          "Performs automated before-and-after structural comparison across infrastructure corridors and tactical zones.",
        iconName: "scan",
      },
    ],
    applications: [
      {
        title: "Mobility & Route Planning",
        scenario:
          "Evaluating seasonal snow, flood inundation, and terrain steepness across remote frontier corridors.",
        impact:
          "Identifies viable logistics and movement routes while avoiding impassable or bottlenecked terrain.",
      },
      {
        title: "Observation Post & Sensor Siting",
        scenario:
          "Computing optimal ridge and tower placements for electro-optical cameras, radars, and communication relays.",
        impact:
          "Maximizes area coverage with fewer physical sensor installations.",
      },
      {
        title: "Theater Infrastructure Monitoring",
        scenario:
          "Tracking engineering earthworks, temporary bridging, and supply staging across wide operational zones.",
        impact:
          "Provides early indicators of logistical focus and terrain preparation.",
      },
      {
        title: "Command Briefing Visualization",
        scenario:
          "Synthesizing multi-layered geospatial overlays into clear, interactive 3D terrain briefings for senior leadership.",
        impact:
          "Improves shared situational understanding across joint operational teams.",
      },
    ],
    techHeading: "Geospatial Terrain & Tactical Fusion Engine",
    techIntro:
      "Combining interferometric radar physics, photogrammetric 3D terrain reconstruction, and AI-assisted change analytics.",
    techLayers: [
      {
        layer: "High-Resolution Elevation Core",
        modality: "Stereo Optical & InSAR DEMs",
        detail:
          "Produces detailed 3D surface and terrain models supporting slope, aspect, hydrological runoff, and viewshed computation.",
      },
      {
        layer: "Coherent Change Detection (CCD)",
        modality: "Interferometric SAR Phase Analytics",
        detail:
          "Highlights subtle surface disturbances, unpaved track usage, and excavation activity invisible on standard optical photos.",
      },
      {
        layer: "Edge-to-Command Synchronization",
        modality: "Tiled Raster & Vector Streaming",
        detail:
          "Optimizes large satellite mosaics and tactical overlays for smooth rendering across command-wall displays.",
      },
      {
        layer: "AI Object & Fortification Tagging",
        modality: "Computer Vision Analyst Assist",
        detail:
          "Flags potential convoys, engineered berms, and structural alterations for rapid human-in-the-loop verification.",
      },
    ],
    gallery: [
      {
        src: "/images/mountain-border-satellite.jpg",
        alt: "Orbital view of rugged mountain ridges and valley corridors",
        caption: "High-altitude mountain corridor & valley mobility mapping",
      },
      {
        src: "/images/defense-services/gallery-uav-surveillance.jpg",
        alt: "Tactical aerial reconnaissance drone in flight",
        caption: "Real-time airborne EO/IR tactical terrain verification",
      },
      {
        src: "/images/nasa-aquifer-hydrology.jpg",
        alt: "Synthetic Aperture Radar terrain backscatter imagery",
        caption: "All-weather SAR surface moisture & terrain classification",
      },
    ],
  },

  // 4. /border-surveillance
  {
    slug: "border-surveillance",
    route: "/border-surveillance",
    indexNumber: "04",
    platformTag: "SathyaSEEMA • Multi-Layer Perimeter & Subsurface Shield",
    title: "Border Surveillance & Management",
    subtitle:
      "AI-Assisted Perimeter Monitoring, Underground Tunnel Detection & Multi-Sensor Fusion",
    heroIntro:
      "Combining spaceborne SAR/InSAR deformation analysis, optical/thermal imagery, RF communication monitoring, UAV verification, and ground seismic/GPR sensors to safeguard complex land borders.",
    heroImage: "/images/defense-services/border-surveillance-brand.png",
    heroImageAlt:
      "Border Surveillance & Management watchtower, perimeter fencing, frontier road, aerial overwatch jets, and radar reticle",
    seamlessBrandArtwork: true,
    overviewHeading:
      "Persistent Surface & Subsurface Vigilance Across Challenging Frontier Terrain",
    overviewParagraphs: [
      "Securing vast mountain, desert, riverine, and forested borders requires detecting threats both above and beneath the surface. Powered by SathyaSEEMA, our Border Surveillance & Management platform fuses space-based Synthetic Aperture Radar (SAR), Interferometric SAR (InSAR), Optical and Thermal imagery, Space-Based RF (VHF, UHF, L-Band satellite phone) monitoring, airborne drones, and ground-based seismic, resistivity, and Ground Penetration Radar (GPR) sensors.",
      "Rather than relying on any single isolated sensor—which often suffers from high false-alarm rates—SathyaSEEMA performs longitudinal correlation and probabilistic AI fusion across weak, persistent signals to uncover covert cross-border movement, fence breaches, and underground intrusion tunnels.",
    ],
    overviewHighlights: [
      { label: "Primary Platform", value: "SathyaSEEMA" },
      { label: "4-Layer Architecture", value: "Space • Air • Ground • AI Core" },
      { label: "Subsurface Capability", value: "InSAR + GPR + Seismic Fusion" },
      { label: "RF Coverage", value: "VHF • UHF • L-Band SatPhone" },
    ],
    capabilities: [
      {
        title: "Underground Intrusion Tunnel Detection",
        description:
          "Correlates millimeter-scale InSAR ground subsidence, spoil-pile thermal signatures, soil resistivity, and GPR reflections to detect covert tunneling.",
        iconName: "layers",
      },
      {
        title: "Wide-Area Perimeter & Fence Monitoring",
        description:
          "Tracks remote border fencing, patrol tracks, and rugged mountain passes via high-cadence optical and all-weather SAR satellite passes.",
        iconName: "shield",
      },
      {
        title: "Space & Ground RF Signal Monitoring",
        description:
          "Detects unauthorized VHF, UHF, and L-Band satellite phone emissions in remote border sectors and correlates them with terrain trails.",
        iconName: "radio",
      },
      {
        title: "UAV EO/IR & Airborne GPR Verification",
        description:
          "Cues tactical drones equipped with high-resolution thermal cameras and airborne GPR to visually confirm flagged perimeter alerts.",
        iconName: "plane",
      },
      {
        title: "Ground Seismic & Resistivity Integration",
        description:
          "Ingests localized subsurface vibration and electrical resistivity streams to capture excavation indicators below surface thresholds.",
        iconName: "activity",
      },
      {
        title: "Probabilistic False-Alarm Suppression",
        description:
          "Distinguishes genuine infiltration and excavation patterns from routine agricultural, wildlife, or seasonal weather disturbances.",
        iconName: "cpu",
      },
    ],
    applications: [
      {
        title: "Subterranean Cross-Border Tunnel Discovery",
        scenario:
          "Identifying subtle ground deformation, thermal exhaust, and acoustic vibrations along vulnerable border stretches.",
        impact:
          "Uncovers engineered underground threats well before surface emergence.",
      },
      {
        title: "High-Altitude & Riverine Gap Surveillance",
        scenario:
          "Monitoring unfenced glacial passes, shifting riverine islands, and dense forest corridors where physical patrols face extreme terrain.",
        impact:
          "Maintains year-round 24/7 situational coverage across harsh geographical sectors.",
      },
      {
        title: "Unauthorized Communication Geolocation",
        scenario:
          "Flagging covert radio and satellite phone transmissions inside restricted border buffer zones.",
        impact:
          "Guides patrol interdiction teams with timely spatial coordinates.",
      },
      {
        title: "Border Infrastructure & Road Encroachment",
        scenario:
          "Tracking new tracks, staging shelters, and perimeter infrastructure changes near international boundaries.",
        impact:
          "Provides longitudinal geospatial evidence for border management authorities.",
      },
    ],
    techHeading: "Four-Layer Probabilistic Sensor Fusion",
    techIntro:
      "SathyaSEEMA's core innovation lies in correlating heterogeneous space, aerial, and geophysical sensors over time.",
    techLayers: [
      {
        layer: "Space Layer — The Watchful Eye",
        modality: "SAR, InSAR, Optical, Thermal & Orbital RF",
        detail:
          "Detects subtle long-term surface deformation, thermal anomalies, and remote RF emissions across hundreds of kilometers.",
      },
      {
        layer: "Air Layer — The Rapid Responder",
        modality: "Drone EO/IR & Airborne GPR",
        detail:
          "Provides on-demand sub-decimeter visual, thermal, and shallow-subsurface confirmation of orbital alerts.",
      },
      {
        layer: "Ground Layer — The Listening Ear",
        modality: "Seismic Arrays, Soil Resistivity & GPR",
        detail:
          "Captures localized subsurface acoustic vibrations, cavity anomalies, and soil disturbance signatures.",
      },
      {
        layer: "The AI Core — Connecting the Dots",
        modality: "Longitudinal Probabilistic Fusion",
        detail:
          "Correlates weak multi-modal indicators across time to eliminate episodic noise and generate high-confidence command alerts.",
      },
    ],
    gallery: [
      {
        src: "/images/mountain-border-satellite.jpg",
        alt: "Satellite view of high-altitude mountain border passes",
        caption: "Orbital monitoring of high-altitude frontier passes & glaciers",
      },
      {
        src: "/images/defense-services/gallery-radar-dome.jpg",
        alt: "Remote mountain surveillance radar and communications station",
        caption: "Remote frontier sensor & RF monitoring outposts",
      },
      {
        src: "/images/border-terrain.jpg",
        alt: "Dense forested frontier terrain under remote sensing watch",
        caption: "All-weather radar penetration across forested border belts",
      },
    ],
  },

  // 5. /navy-maritime-security
  {
    slug: "navy-maritime-security",
    route: "/navy-maritime-security",
    indexNumber: "05",
    platformTag: "Naval & Littoral Defense Intelligence",
    title: "Navy & Maritime Security",
    subtitle:
      "Blue-Water Fleet Situational Awareness, Coastal Defense & Subsea Infrastructure Protection",
    heroIntro:
      "Delivering multi-spectral satellite ocean surveillance, non-cooperative vessel detection, naval port monitoring, and subsea critical infrastructure protection across strategic sea lanes.",
    heroImage: "/images/defense-services/navy-maritime-brand.png",
    heroImageAlt:
      "Naval aircraft carrier sailing across deep blue ocean waters under satellite and maritime surveillance",
    seamlessBrandArtwork: true,
    overviewHeading:
      "Safeguarding Sovereign Waters, Naval Approaches & Critical Subsea Corridors",
    overviewParagraphs: [
      "Naval commands and coastal security forces operate across millions of square kilometers of open ocean, choke points, island chains, and busy littoral approaches. Sathya Technology Services supports Navy & Maritime Security missions by fusing wide-swath SAR ship detection, high-resolution optical/thermal satellite imagery, AIS/RF intelligence, bathymetry, and subsea asset registries.",
      "Whether monitoring strategic straits, tracking non-cooperative surface vessels operating without transponders, auditing naval dockyard changes, or safeguarding undersea telecom cables and offshore energy platforms, our solutions provide persistent maritime clarity.",
    ],
    overviewHighlights: [
      { label: "Theater Scope", value: "Blue-Water, Straits & Littoral" },
      { label: "Detection Modes", value: "SAR • Optical • Thermal • RF" },
      { label: "Subsea Layers", value: "Cables, Rigs, Pipelines & ENC" },
      { label: "Operational Role", value: "Fleet & Coastal Security" },
    ],
    capabilities: [
      {
        title: "Non-Cooperative Surface Vessel Detection",
        description:
          "Uses cloud-penetrating SAR imagery and wake analysis to detect and classify vessels operating with disabled AIS transponders.",
        iconName: "radar",
      },
      {
        title: "Naval Port & Dockyard Change Analytics",
        description:
          "Monitors berth occupancy, dry-dock activity, and coastal facility developments across regional maritime ports.",
        iconName: "anchor",
      },
      {
        title: "Subsea Cable & Offshore Platform Guard",
        description:
          "Establishes automated geofences over subsea fiber cables, oil/gas pipelines, and offshore rigs to flag suspicious loitering or anchor-drag risk.",
        iconName: "shield",
      },
      {
        title: "Choke-Point & Island Chain Surveillance",
        description:
          "Maintains high-cadence orbital and UAV EO/IR watch over strategic straits, archipelagos, and Exclusive Economic Zone (EEZ) boundaries.",
        iconName: "compass",
      },
      {
        title: "Marine RF & Radar Emitter Correlation",
        description:
          "Geolocates marine navigation radar and communication transmissions from orbit to uncover vessels maintaining AIS silence.",
        iconName: "radio",
      },
      {
        title: "Bathymetric & Navigational Hazard Overlays",
        description:
          "Integrates Electronic Navigational Charts (ENC), depth contours, and sea-state layers for coastal patrol and interception planning.",
        iconName: "navigation",
      },
    ],
    applications: [
      {
        title: "Exclusive Economic Zone (EEZ) Sovereignty Patrols",
        scenario:
          "Cueing naval offshore patrol vessels and maritime aircraft toward dark targets detected by wide-swath satellite radar.",
        impact:
          "Multiplies effective patrol coverage while reducing fuel and sortie hours spent searching empty ocean.",
      },
      {
        title: "Subsea Critical Infrastructure Defense",
        scenario:
          "Continuous monitoring of vessels slowing down or loitering anomalously above international undersea data cables and gas pipelines.",
        impact:
          "Provides early warning to prevent accidental or deliberate seabed infrastructure disruption.",
      },
      {
        title: "Strategic Sea-Lane & Strait Monitoring",
        scenario:
          "Tracking transit patterns, naval task-group movements, and anchorage congestion along vital maritime trade corridors.",
        impact:
          "Enhances maritime situational awareness across key oceanic choke points.",
      },
      {
        title: "Coastal & Amphibious Approach Security",
        scenario:
          "Combining thermal infrared imagery, coastal radar, and drone feeds to watch vulnerable landing beaches and island perimeters at night.",
        impact:
          "Strengthens round-the-clock littoral perimeter defense.",
      },
    ],
    techHeading: "Multi-Sensor Naval & Subsea Intelligence Stack",
    techIntro:
      "Fusing orbital radar ship-wake physics, RF emitter geolocation, and subsea GIS layers into a unified naval picture.",
    techLayers: [
      {
        layer: "Wide-Swath Maritime SAR",
        modality: "All-Weather Ship & Wake Detection",
        detail:
          "Detects metallic hull returns and Kelvin wake vectors to estimate vessel length, heading, and speed even through monsoon clouds.",
      },
      {
        layer: "Optical & Thermal Confirmation",
        modality: "Vessel Classification & Engine Signatures",
        detail:
          "High-resolution optical chips and thermal propulsion plumes verify vessel class and operational state.",
      },
      {
        layer: "Subsea Infrastructure GIS",
        modality: "ENC, Bathymetry & Pipeline Corridors",
        detail:
          "Maps seabed cables, rigs, and depth contours directly beneath surface vessel kinematic tracks.",
      },
      {
        layer: "Automated Fleet Alerting",
        modality: "Rule-Based & AI Anomaly Triggers",
        detail:
          "Dispatches low-latency notifications for zone entry, AIS drop-offs, and loitering near sovereign maritime assets.",
      },
    ],
    gallery: [
      {
        src: "/images/defense-services/gallery-naval-carrier.jpg",
        alt: "Naval fighter aircraft launching from carrier flight deck at sea",
        caption: "Carrier & blue-water naval task force situational support",
      },
      {
        src: "/images/maritime-vessel.jpg",
        alt: "Large ocean vessel monitored along strategic shipping lane",
        caption: "High-density shipping lane & anchorage vessel correlation",
      },
      {
        src: "/images/defense-services/hero-drug-smuggling.jpg",
        alt: "Offshore patrol vessel and cargo ship in coastal waters",
        caption: "Littoral patrol & offshore maritime asset protection",
      },
    ],
  },

  // 6. /maritime-domain-awareness
  {
    slug: "maritime-domain-awareness",
    route: "/maritime-domain-awareness",
    indexNumber: "06",
    platformTag: "Sathya-MDA • Scalable Maritime SaaS & Enterprise Platform",
    title: "Maritime Domain Awareness",
    subtitle:
      "Unified Operational Picture Integrating Real-Time AIS, Multi-Spectral Satellite Imagery, RF & Drone Intelligence",
    heroIntro:
      "Sathya-MDA fuses real-time AIS streams, Optical/SAR/Thermal satellite imagery, ENC charts, bathymetry, drone video, and RF monitoring to uncover dark vessels, loitering, STS transfers, and draught anomalies.",
    heroImage: "/images/defense-services/mda-brand.png",
    heroImageAlt:
      "Multi-domain satellite observation, aerial radar sweep, and integrated situational intelligence network",
    seamlessBrandArtwork: true,
    overviewHeading:
      "Continuous Ocean-to-Port Visibility Through AI Pattern Recognition & Sensor Fusion",
    overviewParagraphs: [
      "Sathya-MDA is an AI-powered Maritime Domain Awareness platform delivered as a scalable SaaS or sovereign on-premise solution, providing a unified operational picture of maritime activity. It integrates real-time terrestrial and satellite AIS data, multi-spectral satellite imagery (Optical, SAR, and Thermal), Electronic Navigational Charts (ENC), bathymetry, and critical infrastructure layers—including subsea cables, offshore platforms, rigs, and undersea oil & gas pipelines.",
      "Building on these foundational layers, Sathya-MDA incorporates AI-powered pattern recognition, predictive risk modeling, drone-based video intelligence, and radio frequency (RF) monitoring to uncover non-cooperative or AIS-silent vessels, illicit Ship-to-Ship (STS) transfers, sudden draught changes, and illegal fishing activity.",
    ],
    overviewHighlights: [
      { label: "Flagship Platform", value: "Sathya-MDA" },
      { label: "Satellite Feeds", value: "Optical • SAR • Thermal" },
      { label: "Anomaly AI", value: "Dark Vessels, STS & Draught" },
      { label: "Delivery Model", value: "Scalable SaaS / On-Premise" },
    ],
    capabilities: [
      {
        title: "Real-Time Terrestrial & Satellite AIS",
        description:
          "Ingests global IMO/MMSI vessel identity, position, course, speed, and reported draught across coastal and deep-ocean shipping lanes.",
        iconName: "compass",
      },
      {
        title: "Optical, SAR & Thermal Satellite Fusion",
        description:
          "Combines all-weather radar ship detection with high-resolution optical imagery and thermal wake/hull signatures.",
        iconName: "satellite",
      },
      {
        title: "Dark Vessel & AIS-Spoofing Detection",
        description:
          "Cross-correlates satellite radar/optical vessel detections with AIS broadcasts and RF emissions to flag silent or identity-manipulated ships.",
        iconName: "eye",
      },
      {
        title: "Loitering, STS & Draught Change Analytics",
        description:
          "Identifies unscheduled vessel rendezvous, prolonged loitering, and sudden draught shifts indicative of covert cargo transfers at sea.",
        iconName: "activity",
      },
      {
        title: "Drone EO/IR & RF Monitoring Integration",
        description:
          "Incorporates maritime UAV video streams and passive radio-frequency detections to verify non-cooperative targets.",
        iconName: "radio",
      },
      {
        title: "Predictive Risk Modeling & Automated Alerts",
        description:
          "Scores vessel behavior against historical voyage baselines and triggers instant alerts for geofence breaches and anomalous maneuvers.",
        iconName: "bell",
      },
    ],
    applications: [
      {
        title: "Dark Fleet & Sanctions Evasion Monitoring",
        scenario:
          "Detecting vessels that disable AIS transponders prior to conducting offshore Ship-to-Ship (STS) transfers.",
        impact:
          "Uncovers covert cargo transfers through SAR correlation and draught-change analytics.",
      },
      {
        title: "Port Authorities & Coastal Traffic Management",
        scenario:
          "Monitoring anchorage queues, draught declarations, and approach corridors outside major commercial ports.",
        impact:
          "Improves port security, berth planning, and regulatory compliance.",
      },
      {
        title: "Illegal, Unreported & Unregulated (IUU) Fishing Watch",
        scenario:
          "Tracking distant-water fishing fleets encroaching upon marine protected areas and sovereign EEZ boundaries.",
        impact:
          "Supports targeted coast guard and fisheries enforcement.",
      },
      {
        title: "Offshore Energy & Subsea Asset Protection",
        scenario:
          "Surveilling vessel movements around FPSOs, offshore wind/oil rigs, and subsea pipelines.",
        impact:
          "Prevents collision, anchor-dragging, and unauthorized proximity incidents.",
      },
    ],
    techHeading: "Sathya-MDA Multi-Source Maritime Intelligence Engine",
    techIntro:
      "Fusing orbital Earth observation, AIS kinematics, hydrographic charts, and airborne/RF verification in real time.",
    techLayers: [
      {
        layer: "Global AIS & Kinematic Stream",
        modality: "Coastal + S-AIS Ingestion",
        detail:
          "Reconstructs continuous vessel trajectories, speed profiles, anchorage history, and reported draught changes.",
      },
      {
        layer: "Multi-Spectral Orbital Tasking",
        modality: "SAR, Optical & Thermal Correlation",
        detail:
          "Matches physical ship detections on satellite passes against expected AIS positions to isolate dark targets.",
      },
      {
        layer: "Hydrographic & Infrastructure GIS",
        modality: "ENC Charts, Bathymetry & Subsea Assets",
        detail:
          "Overlays depth contours, restricted zones, subsea telecom cables, and offshore oil & gas pipelines.",
      },
      {
        layer: "Behavioral AI & Enforcement Cues",
        modality: "Risk Scoring, Drone Video & RF",
        detail:
          "Combines predictive anomaly scoring with drone EO/IR video and RF geolocation to support rapid interdiction.",
      },
    ],
    gallery: [
      {
        src: "/images/maritime-vessel.jpg",
        alt: "Container vessel monitored in coastal waters",
        caption: "Continuous IMO/MMSI tracking & draught verification",
      },
      {
        src: "/images/maritime-aerial.jpg",
        alt: "Aerial view of maritime container terminal and port approaches",
        caption: "Port approach congestion & anchorage surveillance",
      },
      {
        src: "/images/defense-services/hero-mda-ocean.jpg",
        alt: "Commercial cargo terminal and vessel berth monitoring",
        caption: "Integrated port-to-open-ocean maritime domain intelligence",
      },
    ],
  },

  // 7. /drug-smuggling-detection
  {
    slug: "drug-smuggling-detection",
    route: "/drug-smuggling-detection",
    indexNumber: "07",
    platformTag: "Counter-Narcotics & Illicit Trafficking Intelligence",
    title: "Drug Smuggling Detection & Monitoring",
    subtitle:
      "AI Behavioral Anomaly Detection, Rendezvous Tracking & Multi-Sensor Maritime/Border Interdiction",
    heroIntro:
      "Uncovering illicit maritime and cross-border trafficking networks through dark-vessel discovery, mother-ship rendezvous analytics, thermal/SAR small-craft detection, and covert corridor monitoring.",
    heroImage: "/images/defense-services/drug-smuggling-brand.png",
    heroImageAlt:
      "Maritime patrol vessel and AI radar target lock monitoring ocean waters for illicit trafficking",
    seamlessBrandArtwork: true,
    overviewHeading:
      "Exposing Covert Trafficking Routes Across Open Seas, Littorals & Remote Borders",
    overviewParagraphs: [
      "Illicit narcotics and contraband networks rely on AIS transponder manipulation, mid-ocean mother-ship transfers to fast go-fast/fishing craft, night-time coastal landings, and remote overland trails. Sathya Technology Services equips enforcement and coast guard agencies with AI-driven anomaly detection that spots subtle kinematic and multi-sensor signatures of smuggling operations.",
      "By correlating satellite SAR wake detections, thermal infrared night imagery, RF communication bursts, AIS gap analysis, and aerial UAV surveillance, the platform identifies high-risk rendezvous events and anomalous routing patterns so interdiction teams can act decisively.",
    ],
    overviewHighlights: [
      { label: "Mission Focus", value: "Maritime & Land Interdiction" },
      { label: "Key Indicators", value: "AIS Gaps, STS & Fast-Craft Wakes" },
      { label: "Night Visibility", value: "SAR + Thermal IR + RF" },
      { label: "Output", value: "Prioritized Interdiction Alerts" },
    ],
    capabilities: [
      {
        title: "Mid-Ocean Rendezvous & Mother-Ship Detection",
        description:
          "Flags unscheduled proximity events, drift pairings, and loitering in open waters where cargo vessels transfer contraband to smaller craft.",
        iconName: "compass",
      },
      {
        title: "AIS Gap & Route Deviation Analytics",
        description:
          "Identifies suspicious transponder shutoffs, MMSI spoofing, erratic speed shifts, and inexplicable detours from declared commercial sea lanes.",
        iconName: "activity",
      },
      {
        title: "SAR Wake & Small-Craft Detection",
        description:
          "Analyzes high-resolution Synthetic Aperture Radar surface wakes and thermal engine signatures to spot unlit small vessels operating at night.",
        iconName: "radar",
      },
      {
        title: "Covert RF & SatPhone Burst Correlation",
        description:
          "Correlates isolated VHF/UHF and satellite phone transmissions in remote ocean or border zones with satellite-detected vessel/vehicle tracks.",
        iconName: "radio",
      },
      {
        title: "Coastal Landing & Creek Monitoring",
        description:
          "Surveils secluded coves, mangrove creeks, uninhabited islands, and remote desert/forest staging strips for illicit offloading activity.",
        iconName: "eye",
      },
      {
        title: "Network Risk Scoring & Evidence Packages",
        description:
          "Builds longitudinal voyage histories and georeferenced multi-sensor evidence timelines to support maritime law-enforcement interdiction.",
        iconName: "shield",
      },
    ],
    applications: [
      {
        title: "High-Seas Narcotics Transshipment Interdiction",
        scenario:
          "Detecting commercial or fishing vessels pausing along known trafficking latitudes to meet AIS-silent feeder boats.",
        impact:
          "Provides coast guard and naval cutters with actionable coordinates for targeted boarding operations.",
      },
      {
        title: "Night-Time Littoral & Creek Surveillance",
        scenario:
          "Monitoring remote estuaries, island landing points, and coastal road junctions using thermal imagery and drone EO/IR patrols.",
        impact:
          "Closes night-vision gaps exploited by fast coastal smuggling craft.",
      },
      {
        title: "Suspicious Cargo & Port-of-Call Screening",
        scenario:
          "Auditing historical port visits, unusual anchorage stops, and unexplained draught changes prior to port arrival.",
        impact:
          "Helps customs and port security prioritize high-risk vessel inspections.",
      },
      {
        title: "Cross-Border Overland Corridor Watch",
        scenario:
          "Combining SAR coherent track detection and UAV thermal sweeps across remote desert and mountain smuggling trails.",
        impact:
          "Connects maritime offloading intelligence with inland interdiction.",
      },
    ],
    techHeading: "Counter-Trafficking Behavioral & Sensor Fusion",
    techIntro:
      "Combining kinematic graph analytics with all-weather orbital and airborne sensors to uncover concealed operations.",
    techLayers: [
      {
        layer: "Kinematic Anomaly Graph AI",
        modality: "Voyage Deviation & Rendezvous Scoring",
        detail:
          "Evaluates millions of AIS and radar track points to isolate loitering, drift meetings, and deceptive routing.",
      },
      {
        layer: "High-Resolution SAR & Thermal IR",
        modality: "Night & Cloud-Penetrating Detection",
        detail:
          "Captures fast-craft wakes and engine heat plumes invisible to standard daytime optical cameras.",
      },
      {
        layer: "RF & Aerial Tip-and-Cue",
        modality: "Spectrum Geolocation + Drone EO/IR",
        detail:
          "Cues long-endurance surveillance drones onto RF-active dark vessels for real-time visual confirmation.",
      },
      {
        layer: "Interdiction Command Alerts",
        modality: "Time-Critical Geofence & Risk Feeds",
        detail:
          "Delivers prioritized target packages with coordinates, heading, and historical risk context to enforcement centers.",
      },
    ],
    gallery: [
      {
        src: "/images/maritime-vessel.jpg",
        alt: "Commercial cargo ship tracked across shipping corridor",
        caption: "Voyage history auditing & anomalous cargo route screening",
      },
      {
        src: "/images/defense-services/gallery-uav-surveillance.jpg",
        alt: "Aerial reconnaissance UAV conducting maritime overwatch",
        caption: "Long-endurance UAV EO/IR verification of non-cooperative craft",
      },
      {
        src: "/images/defense-services/hero-border-surveillance.jpg",
        alt: "Remote frontier surveillance tower monitoring overland corridors",
        caption: "Coordinated coastal-to-land border corridor interdiction",
      },
    ],
  },

  // 8. /dome-support
  {
    slug: "dome-support",
    route: "/dome-support",
    indexNumber: "08",
    platformTag: "SathyaKAVACH • Missile & TEL Situational Intelligence",
    title: "DOME Support (Missile & TEL Monitoring)",
    subtitle:
      "Strategic Launch-Site Readiness Analytics, Mobile TEL Tracking & Air-Defense Situational Modeling",
    heroIntro:
      "Powered by SathyaKAVACH, DOME Support fuses high-revisit satellite SAR/Optical/Thermal imagery and geospatial terrain modeling to monitor missile garrisons, Transporter Erector Launcher (TEL) mobility corridors, and strategic defense readiness.",
    heroImage: "/images/defense-services/dome-support-brand.png",
    heroImageAlt:
      "Strategic missile launch vehicle, mobile TEL radar truck, and protective radar DOME situational shield",
    seamlessBrandArtwork: true,
    overviewHeading:
      "Persistent Orbital & Geospatial Intelligence for Strategic Air and Missile Defense",
    overviewParagraphs: [
      "Effective air and missile defense situational awareness begins well before launch—requiring continuous monitoring of fixed launch infrastructure, garrison readiness, support vehicle dispersal, and mobile Transporter Erector Launcher (TEL) operating corridors. Through SathyaKAVACH, Sathya Technology Services delivers specialized geospatial and multi-sensor intelligence for DOME Support.",
      "Integrating high-cadence Synthetic Aperture Radar (SAR), sub-meter Optical imagery, Thermal infrared anomaly detection, and 3D terrain mobility modeling, the platform assists defense analysts in tracking site preparations, identifying potential concealed deployment zones, and modeling radar coverage envelopes.",
    ],
    overviewHighlights: [
      { label: "Primary Platform", value: "SathyaKAVACH" },
      { label: "Core Focus", value: "Missile Site & TEL Intelligence" },
      { label: "Sensor Stack", value: "High-Cadence SAR • Optical • TIR" },
      { label: "Spatial Modeling", value: "TEL Mobility & Radar Envelopes" },
    ],
    capabilities: [
      {
        title: "Missile Garrison & Launch-Pad Monitoring",
        description:
          "Tracks structural changes, gantry movements, fuel/support vehicle staging, and shelter activity at strategic missile facilities.",
        iconName: "shield",
      },
      {
        title: "Mobile TEL Corridor & Hide-Site Analytics",
        description:
          "Models road-network load capacity, tunnel portals, bridge clearances, and hard-stand presurveyed sites suitable for mobile launchers.",
        iconName: "navigation",
      },
      {
        title: "All-Weather SAR Coherent Track Detection",
        description:
          "Uses interferometric radar coherence loss and high-resolution SAR backscatter to spot heavy multi-axle vehicle movement under cloud or night cover.",
        iconName: "radar",
      },
      {
        title: "Thermal Plume & Readiness Indicators",
        description:
          "Monitors localized thermal infrared signatures associated with generator power-ups, propellant handling, and test-stand activity.",
        iconName: "activity",
      },
      {
        title: "3D Radar Dome & Sensor Coverage Modeling",
        description:
          "Computes 3D terrain masking, horizon angles, and overlapping detection domes to support defensive sensor placement planning.",
        iconName: "globe",
      },
      {
        title: "Priority Change & Readiness Alerting",
        description:
          "Generates automated analyst alerts when anomalous vehicle dispersal or launch-site preparation indicators cross defined thresholds.",
        iconName: "bell",
      },
    ],
    applications: [
      {
        title: "Strategic Launch Infrastructure Watch",
        scenario:
          "Continuous multi-spectral monitoring of test ranges, silos, underground facility portals, and garrison motor pools.",
        impact:
          "Provides early, objective indicators of elevated site activity and engineering expansion.",
      },
      {
        title: "TEL Dispersal & Mobility Mapping",
        scenario:
          "Narrowing search areas for mobile launchers by intersecting terrain gradient limits, turning radii, and recent SAR track disturbances.",
        impact:
          "Focuses scarce high-resolution reconnaissance assets onto the highest-probability deployment pockets.",
      },
      {
        title: "Air & Missile Defense Sensor Siting",
        scenario:
          "Simulating radar line-of-sight domes across mountainous and coastal approaches using high-precision 3D elevation models.",
        impact:
          "Optimizes defensive sensor layering to minimize low-altitude terrain blind spots.",
      },
      {
        title: "Post-Event & Test-Site Assessment",
        scenario:
          "Analyzing thermal scar patterns, structural modifications, and telemetry facility updates following range events.",
        impact:
          "Delivers rapid, georeferenced technical assessments for defense intelligence teams.",
      },
    ],
    techHeading: "SathyaKAVACH Strategic Risk & Sensor Architecture",
    techIntro:
      "Combining orbital multi-spectral physics, heavy-vehicle terrain modeling, and 3D defensive dome simulation.",
    techLayers: [
      {
        layer: "High-Revisit SAR & Optical Constellation Feed",
        modality: "Sub-Meter Day/Night Site Surveillance",
        detail:
          "Maintains frequent revisit cadence over priority garrisons, tunnel entrances, and staging depots in any weather.",
      },
      {
        layer: "Thermal & RF Activity Correlation",
        modality: "Infrared Signatures & Emitter Context",
        detail:
          "Pairs thermal power-up anomalies with communication/radar metadata for higher-confidence readiness scoring.",
      },
      {
        layer: "Geospatial TEL Mobility Model",
        modality: "Axle-Load, Slope & Portal Network GIS",
        detail:
          "Maps viable dispersal routes, presurveyed launch pads, and concealment structures across regional road networks.",
      },
      {
        layer: "3D Dome & Threat Envelope Analytics",
        modality: "Volumetric Viewshed & Risk Visualization",
        detail:
          "Renders defensive radar coverage volumes and risk corridors inside sovereign command environments.",
      },
    ],
    gallery: [
      {
        src: "/images/radar-station.jpg",
        alt: "Aerospace launch and telemetry infrastructure",
        caption: "Launch corridor & range telemetry signature analysis",
      },
      {
        src: "/images/defense-services/gallery-radar-dome.jpg",
        alt: "Strategic radome and high-ground sensor array",
        caption: "3D radar dome horizon & defensive coverage modeling",
      },
      {
        src: "/images/satellite-dish-ground.jpg",
        alt: "Deep-space and orbital tracking antenna dish",
        caption: "High-availability ground tracking & satellite downlink integration",
      },
    ],
  },
];

export const DEFENSE_SERVICES_BY_SLUG: Record<string, DefenseServiceDetail> =
  Object.fromEntries(DEFENSE_SERVICES_LIST.map((s) => [s.slug, s]));
