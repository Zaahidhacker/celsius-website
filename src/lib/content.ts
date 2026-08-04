/**
 * Shared content for Celsius website.
 * V6 is now the single production version — all content lives here.
 *
 * Updated:
 * - New email: aircon.celsius@gmail.com
 * - Socials: Instagram, Facebook, WhatsApp, Email
 * - Square-foot pricing tiers
 * - Testimonials mapped to real review screenshots in /public/reviews/
 */

export const company = {
  name: "Celsius",
  tagline: "Excellence in Cooling Since 2019",
  phone: "+94 777 136 560",
  phoneHref: "tel:+94777136560",
  whatsapp: "+94 777 136 560",
  whatsappHref: "https://wa.me/94777136560",
  email: "aircon.celsius@gmail.com",
  emailHref: "mailto:aircon.celsius@gmail.com",
  address: ["No. 47/3 Srimaha Vihara Road", "Kalubowila, Dehiwala"],
  hours: "Mon – Sat · 8:30am – 6:30pm",
  established: "2019",
  sectors: ["Domestic", "Commercial", "Industrial"],
};

export const socials = {
  instagram: {
    label: "Instagram",
    handle: "@aircon.celsius",
    href: "https://www.instagram.com/aircon.celsius?igsh=MXM2cmkwdmh2bnFwaQ==",
  },
  facebook: {
    label: "Facebook",
    handle: "Celsius HVAC",
    href: "https://www.facebook.com/share/1DMuxTvG7F/",
  },
  whatsapp: {
    label: "WhatsApp",
    handle: "+94 777 136 560",
    href: "https://wa.me/94777136560",
  },
  email: {
    label: "Email",
    handle: "aircon.celsius@gmail.com",
    href: "mailto:aircon.celsius@gmail.com",
  },
};

export const socialList = [
  { key: "instagram", ...socials.instagram, icon: "instagram" as const },
  { key: "facebook", ...socials.facebook, icon: "facebook" as const },
  { key: "whatsapp", ...socials.whatsapp, icon: "whatsapp" as const },
  { key: "email", ...socials.email, icon: "email" as const },
];

export const stats = [
  { number: "2019", label: "Established", suffix: "" },
  { number: 40, label: "Business Clients", suffix: "+" },
  { number: 9, label: "Premium Brands", suffix: "" },
  { number: 3, label: "Sectors Served", suffix: "" },
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

/**
 * Square-foot pricing — transparent supply + install cost per room size.
 * Prices in LKR. Includes branded unit + standard installation.
 */
export const pricing = {
  eyebrow: "Transparent Pricing",
  title: "Square-foot",
  titleAccent: "pricing.",
  subtitle:
    "Clear, upfront rates based on room size. Branded unit + standard installation included — no hidden costs, no surprises.",
  perSqFtNote: "Average rate: Rs. 950 – 1,200 per sq ft (supply + install)",
  cta: { label: "Get a custom quote", href: "#contact" },
  plans: [
    {
      tier: "Starter",
      range: "Up to 150 sq ft",
      btu: "5,000 BTU",
      price: "145,000",
      priceSuffix: "LKR",
      ideal: "Small bedroom · Home office",
      brands: "Midea · Haier · TCL",
      tone: "amber" as const,
      featured: false,
    },
    {
      tier: "Home",
      range: "150 – 250 sq ft",
      btu: "6,000 BTU",
      price: "165,000",
      priceSuffix: "LKR",
      ideal: "Standard bedroom",
      brands: "Midea · Haier · Panasonic",
      tone: "clay" as const,
      featured: false,
    },
    {
      tier: "Plus",
      range: "250 – 350 sq ft",
      btu: "8,000 BTU",
      price: "195,000",
      priceSuffix: "LKR",
      ideal: "Large bedroom · Living room",
      brands: "Panasonic · LG · Daikin",
      tone: "navy" as const,
      featured: true,
    },
    {
      tier: "Pro",
      range: "350 – 500 sq ft",
      btu: "12,000 BTU",
      price: "245,000",
      priceSuffix: "LKR",
      ideal: "Open living area",
      brands: "LG · Daikin · Mitsubishi",
      tone: "blue" as const,
      featured: false,
    },
    {
      tier: "Commercial",
      range: "500 – 700 sq ft",
      btu: "18,000 BTU",
      price: "295,000",
      priceSuffix: "LKR",
      ideal: "Open-plan office · Retail",
      brands: "Daikin · Mitsubishi · Samsung",
      tone: "mint" as const,
      featured: false,
    },
    {
      tier: "Industrial",
      range: "700+ sq ft",
      btu: "24,000+ BTU",
      price: "Custom",
      priceSuffix: "Quote",
      ideal: "Hall · Plant · Data centre",
      brands: "Mitsubishi · Daikin · Samsung VRF",
      tone: "lemon" as const,
      featured: false,
    },
  ],
  inclusions: [
    "Branded AC unit supplied",
    "Standard installation",
    "1-year comprehensive warranty",
    "Free site assessment",
  ],
  footnote:
    "All prices are indicative for supply + standard installation within Colombo & suburbs. Final quote may vary based on site conditions, brand selection, and ancillary work (ducting, electrical, brackets).",
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

/**
 * Testimonials mapped to real review screenshots in /public/reviews/.
 * 4 sets, each with a primary screenshot + a companion close-up (image2).
 *
 * Real client work:
 *  01 — Wellawatta, Colombo 06
 *  02 — Prime Residencies
 *  03 — Supply & install of Panasonic 12,000 BTU unit
 *  04 — Havock Dental Care
 */
export const testimonials = [
  {
    quote:
      "Celsius handled our AC install in Wellawatta flawlessly — clean wiring, neat trunking, zero mess left behind.",
    name: "Resident — Wellawatta",
    role: "Colombo 06 · Domestic Install",
    location: "Wellawatta, Colombo 06",
    image: "/reviews/01.jpg",
    image2: "/reviews/01.1.jpg",
    imageAlt: "Customer review — Wellawatta, Colombo 06",
    rating: 5,
    project: "Split AC supply & install",
  },
  {
    quote:
      "Prime Residencies came recommended and Celsius delivered. Quiet, efficient units across multiple apartments.",
    name: "Owner — Prime Residencies",
    role: "Multiple Units · Residential",
    location: "Prime Residencies, Colombo",
    image: "/reviews/02.jpg",
    image2: "/reviews/02.1.jpg",
    imageAlt: "Customer review — Prime Residencies",
    rating: 5,
    project: "Multi-unit residential install",
  },
  {
    quote:
      "Supplied and installed a Panasonic 12,000 BTU unit — perfectly sized for the room, cooled in minutes.",
    name: "Verified Client",
    role: "Panasonic 12,000 BTU · Supply + Install",
    location: "Colombo, Sri Lanka",
    image: "/reviews/03.jpg",
    image2: "/reviews/03.1.jpg",
    imageAlt: "Customer review — Panasonic 12,000 BTU install",
    rating: 5,
    project: "Panasonic 12,000 BTU split AC",
  },
  {
    quote:
      "Havock Dental Care now runs at the perfect temperature for both patients and equipment. Highly recommended.",
    name: "Havock Dental Care",
    role: "Commercial · Dental Clinic",
    location: "Colombo, Sri Lanka",
    image: "/reviews/04.jpg",
    image2: "/reviews/04.1.jpg",
    imageAlt: "Customer review — Havock Dental Care",
    rating: 5,
    project: "Commercial dental clinic cooling",
  },
];

export const clients = [
  "Boutique Hotels", "Manufacturing Plants", "Corporate Offices",
  "Luxury Residences", "Retail Chains", "Restaurants",
  "Hospitals", "Educational Institutes", "Data Centres",
];

export const navLinks = [
  { label: "Services", href: "#services", desc: "Supply, installation & maintenance" },
  { label: "Solutions", href: "#solutions", desc: "Domestic, commercial & industrial" },
  { label: "Pricing", href: "#pricing", desc: "Square-foot pricing tiers" },
  { label: "Brands", href: "#brands", desc: "9 premium AC brands" },
  { label: "Projects", href: "#projects", desc: "Real installations across Sri Lanka" },
  { label: "Reviews", href: "#reviews", desc: "What our clients say" },
  { label: "About", href: "#about", desc: "Celsius since 2019" },
  { label: "Contact", href: "#contact", desc: "Talk to a specialist today" },
];
