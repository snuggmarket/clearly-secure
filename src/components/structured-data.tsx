import Script from 'next/script';

export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Clearly Secure Locks & Glazing Ltd",
    "image": "https://clearly-secure.co.uk/logo.png",
    "@id": "https://clearly-secure.co.uk",
    "url": "https://clearly-secure.co.uk",
    "telephone": "02393 552773",
    "priceRange": "££",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "79 Greenfield Crescent",
      "addressLocality": "Waterlooville, Hampshire",
      "postalCode": "PO8 9EL",
      "addressCountry": "UK"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      "opens": "09:00",
      "closes": "18:00"
    }
  };

  return (
    <Script
      id="structured-data"
      type="application/ld+json"
      strategy="afterInteractive"
    >
      {JSON.stringify(structuredData)}
    </Script>
  );
}
