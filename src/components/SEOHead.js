import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEOHead = ({ 
  title, 
  description, 
  keywords = '', 
  canonical = '', 
  ogImage = '',
  ogType = 'website'
}) => {
  const siteName = 'Reviews Maps Pro';
  const baseUrl = 'https://reviews-maps-pro.com';
  const fullTitle = title ? `${title} | ${siteName}` : siteName;
  const fullDescription = description || 'Boostez votre réputation Google Maps avec nos services professionnels. Reviews authentiques, résultats garantis.';
  const fullCanonical = canonical ? `${baseUrl}${canonical}` : baseUrl;
  const fullOgImage = ogImage || `${baseUrl}/og-image.jpg`;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={fullDescription} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={fullCanonical} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={fullDescription} />
      <meta property="og:image" content={fullOgImage} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content="fr_FR" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={fullCanonical} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={fullDescription} />
      <meta name="twitter:image" content={fullOgImage} />
      
      {/* Additional SEO */}
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Reviews Maps Pro" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      
      {/* Language */}
      <meta httpEquiv="content-language" content="fr" />
      <html lang="fr" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": siteName,
          "url": baseUrl,
          "logo": `${baseUrl}/logo.png`,
          "description": fullDescription,
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+33-1-23-45-67-89",
            "contactType": "customer service",
            "availableLanguage": "French"
          },
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "123 Avenue des Champs-Élysées",
            "addressLocality": "Paris",
            "postalCode": "75008",
            "addressCountry": "FR"
          },
          "sameAs": [
            "https://www.linkedin.com/company/reviews-maps-pro",
            "https://twitter.com/reviews_maps_pro"
          ]
        })}
      </script>
    </Helmet>
  );
};

export default SEOHead;
