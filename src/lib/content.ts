/**
 * Shared content for Celsius website — used by both V1 and V2.
 * Kept deliberately concise: no marketing fluff, just the facts.
 */

export const company = {
  name: "Celsius",
  tagline: "Excellence in Cooling Since 2019",
  phone: "+94 777 136 560",
  phoneHref: "tel:+94777136560",
  email: "ijazniyaz1234@gmail.com",
  emailHref: "mailto:ijazniyaz1234@gmail.com",
  address: ["No. 47/3 Srimaha Vihara Road", "Kalubowila, Dehiwala"],
  hours: "Mon – Sat · 8:30am – 6:30pm",
  established: "2019",
  sectors: ["Domestic", "Commercial", "Industrial"],
};

export const stats = [
  { number: "2019", label: "Established" },
  { number: "40+", label: "Business Clients" },
  { number: "9", label: "Premium Brands" },
  { number: "3", label: "Sectors Served" },
];

export const hero = {
  badge: "Excellence in Cooling Since 2019",
  titleLines: ["Precision", "Cooling,"],
  titleAccent: "Engineered.",
  taglines: ["Show up,", "stay cool."],
  description: "Supply, installation & maintenance of premium AC systems across Sri Lanka.",
  stat: { number: "40+", label: "Business Clients" },
  cta: { primary: "Book a Demo", secondary: "Talk to a specialist" },
};

export const about = {
  eyebrow: "About Celsius",
  title: "Where cooling meets craft.",
  intro: "Celsius has engineered comfort across Sri Lanka since 2019 — pairing premium brands with seasoned expertise.",
  guarantee: "If your facility's temperature and air quality aren't perfect, we pledge to modify it.",
  pillars: [
    { icon: "snowflake", title: "Industry Expertise", body: "Years of HVAC precision across domestic, commercial, and industrial installs." },
    { icon: "shield", title: "Quality Commitment", body: "Branded units from Midea, Daikin, Panasonic, Mitsubishi, LG and more." },
    { icon: "leaf", title: "Environmental Responsibility", body: "Energy-efficient systems that lower cost and reduce environmental impact." },
    { icon: "users", title: "Client-Centric Approach", body: "Personalised cooling solutions tailored to your space and needs." },
  ],
};

export const visionMission = {
  eyebrow: "Vision & Mission",
  title: "A transformative force in air conditioning.",
  subtitle: "Celsius stands at the forefront as the premier distributor and repairer of AC systems in Sri Lanka.",
  vision: {
    body: "To be Sri Lanka's premier distributor and repairer of air conditioning systems — shaping the future of environmental comfort.",
    quote: "Transforming spaces into havens of comfort and efficiency.",
  },
  mission: {
    body: "Supply, install, and service high-quality AC units for industrial, commercial, and household use — with fair, transparent pricing.",
    quote: "Enduring relationships built on trust, reliability, and the pursuit of cooling solutions that stand the test of time.",
  },
  pledges: [
    { title: "Transparent Pricing", body: "Clear pricing structures. No surprises." },
    { title: "Competitive Rates", body: "Fair market pricing, superior value." },
    { title: "No Hidden Costs", body: "Straightforward quotes, full clarity." },
    { title: "High-Quality Installs", body: "Branded units, durable and efficient." },
  ],
};

export const services = [
  { idx: "01", name: "Supply & Installation", desc: "Premium branded AC units, expertly installed for any sector.", href: "#contact" },
  { idx: "02", name: "Service & Maintenance", desc: "Proactive maintenance plans that extend system lifespan.", href: "#contact" },
  { idx: "03", name: "Gas Leak & Breakdown Repair", desc: "Skilled diagnostics for leaks, faults, and refrigeration issues.", href: "#case-studies" },
  { idx: "04", name: "VRF & Industrial Systems", desc: "Variable Refrigerant Flow for plants, data centres, and processing.", href: "#solutions" },
];

export const brands = [
  { name: "Midea", tag: "Energy Efficient", body: "Efficient split and ducted units with precise temperature control." },
  { name: "Daikin", tag: "Quiet Comfort", body: "Split and multi-split systems built for comfort and quiet operation." },
  { name: "Panasonic", tag: "nanoe™ X", body: "Air purifying technology with smart connectivity." },
  { name: "Haier", tag: "Smart Convenience", body: "User-friendly units focused on energy savings and innovation." },
  { name: "Mitsubishi", tag: "Hyper-Heating", body: "INVERTER® technology with advanced climate control." },
  { name: "Samsung", tag: "Smart Filtration", body: "Ducted units with smart features and enhanced filtration." },
  { name: "TCL", tag: "Simple & Portable", body: "Split and portable units for simple, effective cooling." },
  { name: "Chigo", tag: "Turbo & Self-Clean", body: "Split and window units with turbo mode and self-cleaning." },
  { name: "LG", tag: "Dual Inverter", body: "Dual inverter compressors with Wi-Fi control and air purification." },
];

export const solutions = [
  {
    id: "domestic",
    label: "Domestic",
    icon: "home",
    title: "Home Comfort",
    body: "Energy-efficient, smart cooling for modern homes. Brands: Midea, Haier, Panasonic.",
    features: ["Smart integration", "Energy efficiency", "Improved air quality"],
    tone: "clay" as const,
  },
  {
    id: "commercial",
    label: "Commercial",
    icon: "building",
    title: "Commercial Spaces",
    body: "Offices, retail, restaurants, and hotels. Brands: LG, Panasonic, Daikin.",
    features: ["Multi-split zoning", "Smart connectivity", "Air purification"],
    tone: "blue" as const,
  },
  {
    id: "industrial",
    label: "Industrial",
    icon: "factory",
    title: "Industrial Cooling",
    body: "VRF systems for manufacturing, storage, and data centres. Brands: Mitsubishi, Daikin, Samsung.",
    features: ["VRF systems", "Precise regulation", "Robust reliability"],
    tone: "navy" as const,
  },
];

export const selectionGuide = {
  eyebrow: "Selection Guide",
  title: "Right-size your cooling.",
  subtitle: "Match BTU capacity to room size for optimal efficiency.",
  rows: [
    { size: "Up to 150 sq ft", btu: "5,000 BTU", ideal: "Small bedroom, home office" },
    { size: "150 – 250 sq ft", btu: "6,000 BTU", ideal: "Standard bedroom" },
    { size: "250 – 350 sq ft", btu: "8,000 BTU", ideal: "Large bedroom, living room" },
    { size: "350 – 500 sq ft", btu: "12,000 BTU", ideal: "Open living area" },
    { size: "500 – 700 sq ft", btu: "18,000 BTU", ideal: "Open-plan office" },
    { size: "700+ sq ft", btu: "24,000+ BTU", ideal: "Hall, commercial space" },
  ],
};

export const ceo = {
  eyebrow: "From the CEO",
  name: "Ijaz Niyaz",
  role: "Founder & CEO, Celsius",
  quote: "We didn't build Celsius to sell air conditioners. We built it to give Sri Lankan homes and businesses the comfort they deserve — engineered with precision, delivered with integrity.",
  bio: "A HVAC specialist with over a decade in the field, Ijaz founded Celsius in 2019 to raise the bar for cooling standards across Sri Lanka.",
};

export const caseStudies = [
  {
    tag: "Commercial",
    title: "Boutique Hotel Colombo",
    summary: "36-room boutique hotel — full HVAC design, supply, and install.",
    result: "32% reduction in cooling energy costs.",
  },
  {
    tag: "Industrial",
    title: "Manufacturing Plant Homagama",
    summary: "VRF system for a 2,000 sqm production floor with precision temperature requirements.",
    result: "Zero downtime across 18 months of operation.",
  },
  {
    tag: "Domestic",
    title: "Luxury Residence Nugegoda",
    summary: "Multi-split system across 4 bedrooms and 2 living areas.",
    result: "Whisper-quiet operation, smart-home integrated.",
  },
];

export const testimonials = [
  { quote: "Celsius transformed our office environment. Professional, on-time, and the cooling is flawless.", name: "Roshan Perera", role: "Operations Manager, Colombo" },
  { quote: "Best AC service we've had in 15 years. Transparent pricing and genuine care.", name: "Anusha Silva", role: "Homeowner, Nugegoda" },
  { quote: "Their industrial VRF install has run without a hitch. Highly recommend.", name: "Mohammed Faisal", role: "Plant Engineer, Homagama" },
];

export const clients = [
  "Boutique Hotels", "Manufacturing Plants", "Corporate Offices",
  "Luxury Residences", "Retail Chains", "Restaurants",
  "Hospitals", "Educational Institutes", "Data Centres",
];

export const navLinks = [
  { label: "Services", href: "#services", desc: "Supply, installation & maintenance" },
  { label: "Solutions", href: "#solutions", desc: "Domestic, commercial & industrial" },
  { label: "Brands", href: "#products", desc: "9 premium AC brands" },
  { label: "Projects", href: "#case-studies", desc: "Real installations across Sri Lanka" },
  { label: "About", href: "#about", desc: "Celsius since 2019" },
  { label: "Contact", href: "#contact", desc: "Talk to a specialist today" },
];
