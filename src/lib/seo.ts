/**
 * Centralized SEO configuration for the Celsius website.
 * Used by layout.tsx (root metadata) and per-page metadata.
 */

export const SITE_URL = "https://celsius-lk.vercel.app";

export const siteConfig = {
  name: "Celsius",
  shortName: "Celsius",
  url: SITE_URL,
  title: "Celsius — HVAC Experts in Sri Lanka | AC Supply, Install & Service",
  titleTemplate: "%s | Celsius Sri Lanka",
  defaultTitle: "Celsius — HVAC Experts in Sri Lanka | AC Supply, Install & Service",
  description:
    "Celsius is Sri Lanka's premier HVAC company since 2019. We supply, install, and service premium air conditioning systems for domestic, commercial, and industrial use. Authorised supplier of Midea, Daikin, Panasonic, Mitsubishi, LG and more.",
  keywords: [
    "Celsius",
    "Celsius Sri Lanka",
    "Celsiuslk",
    "Celsius LK",
    "celsiuslk",
    "air conditioning Sri Lanka",
    "HVAC Sri Lanka",
    "AC installation Colombo",
    "AC service Sri Lanka",
    "AC repair Sri Lanka",
    "aircon Sri Lanka",
    "Midea Sri Lanka",
    "Daikin Sri Lanka",
    "Panasonic AC Sri Lanka",
    "Mitsubishi AC Sri Lanka",
    "LG AC Sri Lanka",
    "VRF systems Sri Lanka",
    "industrial cooling Sri Lanka",
    "commercial HVAC Colombo",
    "domestic air conditioning",
  ],
  authors: [{ name: "Celsius — Aircon Celsius Pvt (Ltd)" }],
  creator: "Celsius",
  publisher: "Celsius",
  locale: "en_US",
  type: "website",
  ogImage: "/og-image.png",
  twitter: "@celsiuslk",
  contact: {
    phone: "+94 777 136 560",
    phoneHref: "+94777136560",
    email: "ijazniyaz1234@gmail.com",
    address: {
      street: "No. 47/3 Srimaha Vihara Road",
      city: "Kalubowila, Dehiwala",
      region: "Western Province",
      postalCode: "10350",
      country: "Sri Lanka",
      countryCode: "LK",
    },
    hours: "Mon – Sat · 8:30am – 6:30pm",
  },
  social: {
    github: "https://github.com/Zaahidhacker/celsius-website",
  },
  nav: [
    { label: "Home", href: "/" },
    { label: "V2 — Studio", href: "/v2" },
    { label: "V3 — Atelier", href: "/v3" },
  ],
};

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "HVACBusiness",
  "@id": `${SITE_URL}/#organization`,
  name: "Celsius",
  legalName: "Aircon Celsius Pvt (Ltd)",
  alternateName: "Celsius Sri Lanka",
  description:
    "Premier HVAC company in Sri Lanka supplying, installing, and servicing premium air conditioning systems for domestic, commercial, and industrial use since 2019.",
  url: SITE_URL,
  logo: `${SITE_URL}/celsius-logo-navy.png`,
  image: `${SITE_URL}/og-image.png`,
  telephone: "+94777136560",
  email: "ijazniyaz1234@gmail.com",
  foundingDate: "2019",
  founder: {
    "@type": "Person",
    name: "Ijaz Niyaz",
    jobTitle: "Founder & CEO",
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "No. 47/3 Srimaha Vihara Road",
    addressLocality: "Kalubowila, Dehiwala",
    addressRegion: "Western Province",
    postalCode: "10350",
    addressCountry: "LK",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 6.8527,
    longitude: 79.8651,
  },
  areaServed: [
    { "@type": "Country", name: "Sri Lanka" },
    { "@type": "City", name: "Colombo" },
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "08:30",
      closes: "18:30",
    },
  ],
  priceRange: "$$",
  knowsAbout: [
    "Air Conditioning Installation",
    "HVAC Maintenance",
    "VRF Systems",
    "Industrial Cooling",
    "Commercial HVAC",
    "AC Repair",
    "Gas Leak Repair",
    "Refrigeration",
  ],
  brand: [
    { "@type": "Brand", name: "Midea" },
    { "@type": "Brand", name: "Daikin" },
    { "@type": "Brand", name: "Panasonic" },
    { "@type": "Brand", name: "Haier" },
    { "@type": "Brand", name: "Mitsubishi" },
    { "@type": "Brand", name: "Samsung" },
    { "@type": "Brand", name: "TCL" },
    { "@type": "Brand", name: "Chigo" },
    { "@type": "Brand", name: "LG" },
  ],
  sameAs: ["https://github.com/Zaahidhacker/celsius-website"],
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: "Celsius — HVAC Experts in Sri Lanka",
  alternateName: "Celsius LK",
  description:
    "Premier HVAC company in Sri Lanka. AC supply, installation, and maintenance for domestic, commercial, and industrial use.",
  publisher: { "@id": `${SITE_URL}/#organization` },
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${SITE_URL}/?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
  inLanguage: "en",
};
