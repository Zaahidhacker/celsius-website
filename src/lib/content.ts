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
  tagline: "Experts in keeping things cool",
  taglineLong: "Excellence in Cooling Since 2019",
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
  legalName: "Aircon Celsius Pvt (Ltd)",
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
  { name: "Midea", tag: "Energy Efficient", body: "Energy-efficient split and ducted units, offering precise temperature control and improved air quality." },
  { name: "Daikin", tag: "Quiet Comfort", body: "Diverse lineup of split and multi-split systems, prioritizing comfort, energy efficiency, and quiet operation." },
  { name: "Panasonic", tag: "nanoe™ X", body: "Split and multi-split units with nanoe™ X air purifying technology and smart connectivity options." },
  { name: "Haier", tag: "Smart Convenience", body: "Wide range of split and ducted units focusing on user convenience, energy savings, and innovative technologies." },
  { name: "Mitsubishi", tag: "Hyper-Heating", body: "Split and multi-split systems with Hyper-Heating INVERTER® technology and advanced climate control." },
  { name: "Samsung", tag: "Smart Filtration", body: "Split and ducted units emphasizing comfort, smart functionality, and enhanced air filtration." },
  { name: "TCL", tag: "Simple & Portable", body: "Range of split and portable air conditioners designed for simplicity, convenience, and effective cooling." },
  { name: "Chigo", tag: "Turbo & Self-Clean", body: "Product line includes split and window units with features like turbo mode and self-cleaning functions." },
  { name: "LG", tag: "Dual Inverter", body: "Offers split, multi-split, and ducted units with dual inverter compressors, Wi-Fi control, and advanced air purification." },
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

/**
 * AC Selection Guide — from brochure page 10.
 * Maps setup type to BTU range, room area, and recommended A/C types.
 */
export const selectionGuide = {
  eyebrow: "Selection Guide",
  title: "Right-size your cooling.",
  subtitle: "Match BTU capacity to room size for optimal efficiency. BTU (British Thermal Unit) is a measure of energy used in the heating and cooling industry.",
  note: "Suitable room area can vary based on insulation, climate, and heat-generating appliances.",
  categories: [
    {
      type: "Domestic",
      btuRange: "5,000 – 24,000",
      roomArea: "100 – 1,500 sq ft",
      acTypes: ["Split Wall Mount", "Cassette Type", "Ceiling Suspended", "Floor Mounted", "Ducted Systems"],
      tips: ["Ensure proper insulation for efficiency", "Consider smart home integration", "Opt for energy-efficient models"],
      examples: ["Midea 12,000 BTU", "Panasonic 18,000 BTU", "Haier 8,000 BTU", "LG 15,000 BTU"],
    },
    {
      type: "Commercial",
      btuRange: "24,000 – 60,000",
      roomArea: "1,500 – 4,000 sq ft",
      acTypes: ["Split Wall Mount", "Cassette Type", "VRF Systems"],
      tips: ["Utilize multi-split systems for zones", "Prioritize advanced air purification", "Opt for systems with zoning capabilities"],
      examples: ["Daikin 36,000 BTU", "LG 48,000 BTU", "Panasonic 30,000 BTU", "Samsung 54,000 BTU"],
    },
    {
      type: "Industrial",
      btuRange: "60,000+",
      roomArea: "4,000+ sq ft",
      acTypes: ["VRF Systems", "Precision Cooling"],
      tips: ["Implement Variable Refrigerant Flow (VRF) for flexibility", "Ensure precise temperature control for processes", "Consider energy-efficient compressors"],
      examples: ["Mitsubishi VRF Systems", "Daikin VRF Systems", "Samsung 120,000 BTU", "LG 150,000 BTU"],
    },
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
      tone: "sky" as const,
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
      tone: "cyan" as const,
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
      tone: "azure" as const,
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
      tone: "yellow" as const,
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
      tone: "red" as const,
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
  name: "Mohamed Ijaz Niyaz",
  shortName: "Ijaz Niyaz",
  role: "Founder & CEO, Celsius",
  legalRole: "Founder & Director, Aircon Celsius Pvt (Ltd)",
  quote: "We didn't build Celsius to sell air conditioners. We built it to give Sri Lankan homes and businesses the comfort they deserve — engineered with precision, delivered with integrity.",
  intro: "Welcome to Celsius, where your comfort is our commitment. As the CEO, I am honored to lead a team dedicated to transforming your spaces into havens of unparalleled cooling and efficiency.",
  bio: "A dedicated and organized HVAC professional with qualifications from the Ceylon German Technical Training Institute. Expertise spans electrical wiring, three-phase motor control maintenance, refrigeration and air conditioning mechanics, and gas and arc welding technology.",
  background: "Former AC Mechanic at Al Afifi Engineering & Trading Co. in Doha, Qatar, ensuring safety compliance and diagnosing heating-cooling system malfunctions. Previously AC Technician at Power Cool Pvt (Ltd) in Colombo, laying out electrical wiring and installing auxiliary components.",
  founder: "Founder of Aircon Celsius Pvt (Ltd) in Colombo, Sri Lanka — overseeing supply, installation, service, and maintenance of air conditioning and electrical systems for domestic, commercial, and industrial use. Also Director of Lintrex Trading (Pvt) Ltd, managing import and export of hardware, electrical, electronic, and air conditioning products.",
  vision: "As the CEO of Celsius, my personal vision is to position our company as an industry trailblazer, defining new standards of excellence in the air conditioning sector. Through unwavering dedication to quality, customer-centric solutions, and a commitment to environmental consciousness, I aim to propel Celsius to the forefront of the market.",
};

export const caseStudies = [
  {
    tag: "Commercial",
    title: "Eyepax IT Consulting — Colpetty",
    summary: "Installation of three 48,000 BTU cassette type air conditioning units covering 2,100 sq ft of commercial office space.",
    result: "Optimized indoor climate for enhanced comfort and productivity.",
    testimonial: "Celsius delivered exceptional comfort, professionalism, and expertise. Highly recommend for installations.",
    location: "Colpetty, Colombo",
    specs: ["3 × 48,000 BTU cassette units", "2,100 sq ft", "Commercial office"],
  },
  {
    tag: "Residential",
    title: "Emperor Residencies — Colombo 3",
    summary: "Tailored climate control for a 600 sq ft apartment: 24,000 BTU in the living room plus two 12,000 BTU units in the master and queen bedrooms.",
    result: "High-quality branded units delivering efficient, reliable performance in every living space.",
    testimonial: "Celsius created a haven with precise cooling, using top-notch units that enhanced comfort and exceeded expectations.",
    location: "Emperor Residencies, Colombo 3",
    specs: ["1 × 24,000 BTU living room", "2 × 12,000 BTU bedrooms", "600 sq ft apartment"],
  },
  {
    tag: "Troubleshooting",
    title: "Gas Leak Diagnosis & Repair",
    summary: "A/C breakdown case study: gas leak impacting system performance. Identified, fixed the leak, vacuumed the system, and performed a full gas refill.",
    result: "Restored optimal cooling efficiency. Timely resolution ensures prolonged A/C functionality.",
    testimonial: "Timely resolution ensures prolonged A/C functionality.",
    location: "Colombo, Sri Lanka",
    specs: ["Leak detection", "System vacuum", "Gas refill"],
  },
];

/**
 * Testimonials mapped to real review screenshots in /public/reviews/.
 * 4 sets, each with a primary screenshot + a companion close-up (image2).
 *
 * Each testimonial also has a `logo` block describing the client's
 * stylized monogram — short initials + brand color + icon name — which
 * the V6Reviews component renders as a "client logo" badge on the card.
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
    logo: {
      monogram: "W",
      name: "Wellawatta",
      sub: "Colombo 06",
      color: "#ffffff",
      bg: "#00AEEF",
      icon: "wave" as const,
    },
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
    logo: {
      monogram: "PR",
      name: "Prime Residencies",
      sub: "Luxury Apartments",
      color: "#ffffff",
      bg: "#00BCD4",
      icon: "building" as const,
    },
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
    logo: {
      monogram: "P",
      name: "Panasonic",
      sub: "12,000 BTU · Supply + Install",
      color: "#ffffff",
      bg: "#E53935",
      icon: "snowflake" as const,
    },
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
    logo: {
      monogram: "HDC",
      name: "Havock Dental Care",
      sub: "Commercial Clinic",
      color: "#0a1d3f",
      bg: "#FFC107",
      icon: "tooth" as const,
    },
  },
];

export type TestimonialLogo = {
  monogram: string;
  name: string;
  sub: string;
  color: string;
  bg: string;
  icon: "wave" | "building" | "snowflake" | "tooth";
};

/**
 * Real client list from brochure page 17.
 * 40+ verified business clients across Sri Lanka.
 */
export const clients = [
  "Emerald", "Base One Consultancy", "Softlogic", "Telesonic", "Unicky Global",
  "Jazima Holding", "NBRO", "Primland Holding", "Auto Mart", "Eco Logo Tech",
  "American Water", "Premium Motor", "Capital Money Exchange", "Marine One", "Madtown",
  "Havelock City Dental", "Nalanda Apartment", "Mahindra", "Nalanda College", "Isipathana College",
  "Laptop.lk", "Raretech", "Amana Bank", "Barcode", "Karunaratne Traders",
  "Aqua Power", "Java Lounge", "Sri Lanka State Trading", "Oceanpick", "Batik Roma",
  "Breadtalk", "Shazi Cafe", "Astoria", "Zam Zam Gems", "Bright Gems",
  "Abdeen Gem & Jewelry", "Catlitter.lk", "Almonds", "DIMO",
];

/**
 * Featured project portfolio from brochure pages 18-23.
 */
export const portfolioProjects = [
  { name: "PRIME LAND", type: "Residential", page: 16 },
  { name: "JAGRO", type: "Commercial — Panasonic", page: 17 },
  { name: "Resident at Colombo 7", type: "Residential", page: 18 },
  { name: "Nalanda Apartment", type: "Residential — Nalanda Gate", page: 19 },
  { name: "Havelock Dental Center", type: "Commercial — Since 1970", page: 20 },
  { name: "Finest Motor Trading", type: "Commercial — Showroom", page: 21 },
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
