import type { Metadata } from 'next';
import { siteConfig } from './config';

export const SITE_URL = siteConfig.url; // 'https://nirmaaninfotech.in'
export const SITE_NAME = siteConfig.name; // 'Nirmaan Infotech'
export const DEFAULT_OG_IMAGE = `${SITE_URL}/images/logo/logo-light.png`;

interface MetadataProps {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  noIndex?: boolean;
}

/**
 * Creates standardized Next.js Metadata for any route, ensuring exact titles,
 * correct canonical URLs, Open Graph tags, Twitter cards, and robot directives.
 */
export function createMetadata({
  title,
  description,
  path,
  keywords,
  noIndex = false,
}: MetadataProps): Metadata {
  const canonicalUrl = path === '/' ? SITE_URL : `${SITE_URL}${path}`;

  return {
    title: {
      absolute: title,
    },
    description,
    keywords: keywords && keywords.length > 0 ? keywords : siteConfig.meta.keywords,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      type: 'website',
      locale: 'en_IN',
      url: canonicalUrl,
      title,
      description,
      siteName: SITE_NAME,
      images: [
        {
          url: DEFAULT_OG_IMAGE,
          width: 1200,
          height: 630,
          alt: `${SITE_NAME} — ${title}`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      creator: '@nirmaaninfotech',
      images: [DEFAULT_OG_IMAGE],
    },
    robots: noIndex
      ? {
          index: false,
          follow: false,
          googleBot: {
            index: false,
            follow: false,
          },
        }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
          },
        },
  };
}

/**
 * Organization Schema for Nirmaan Infotech.
 * Truthful, verified business signals only.
 * Postal code excluded — not independently verified.
 */
export function getOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${SITE_URL}/#organization`,
    name: SITE_NAME,
    alternateName: ['Nirmaan', 'Nirmaan Infotech India'],
    url: `${SITE_URL}/`,
    logo: DEFAULT_OG_IMAGE,
    description: siteConfig.description,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Anandnagar',
      addressLocality: 'Pune',
      addressRegion: 'Maharashtra',
      addressCountry: 'IN',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: siteConfig.contact.phone,
      email: siteConfig.contact.email,
      contactType: 'customer service',
      areaServed: ['IN'],
      availableLanguage: ['English', 'Hindi', 'Marathi'],
    },
    sameAs: [
      siteConfig.social.linkedin,
      siteConfig.social.instagram,
      siteConfig.social.facebook,
      siteConfig.social.twitter,
    ].filter(Boolean),
  };
}

/**
 * LocalBusiness / ProfessionalService Schema for Nirmaan Infotech.
 * Used on the homepage to strengthen local Pune SEO signals.
 * Only includes verified, factual information.
 * No postal code, opening hours, price range, or ratings are included
 * unless independently verified.
 */
export function getLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': `${SITE_URL}/#localbusiness`,
    name: SITE_NAME,
    url: `${SITE_URL}/`,
    telephone: siteConfig.contact.phone,
    email: siteConfig.contact.email,
    description: siteConfig.description,
    logo: DEFAULT_OG_IMAGE,
    image: DEFAULT_OG_IMAGE,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Anandnagar',
      addressLocality: 'Pune',
      addressRegion: 'Maharashtra',
      addressCountry: 'IN',
    },
    serviceArea: [
      {
        '@type': 'City',
        name: 'Pune',
      },
      {
        '@type': 'State',
        name: 'Maharashtra',
      },
      {
        '@type': 'Country',
        name: 'India',
      },
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Web Development & Digital Services',
      itemListElement: [
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Website Development' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'E-commerce Development' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'ERP Software Development' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Custom Software Development' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Website Redesign' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'SEO Services' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Website Maintenance' } },
      ],
    },
    sameAs: [
      siteConfig.social.linkedin,
      siteConfig.social.instagram,
      siteConfig.social.facebook,
      siteConfig.social.twitter,
    ].filter(Boolean),
  };
}

/**
 * WebSite Schema for Nirmaan Infotech.
 * Does NOT include fabricated SearchAction since there is no internal search feature.
 */
export function getWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    url: `${SITE_URL}/`,
    name: SITE_NAME,
    description: siteConfig.meta.description,
    publisher: {
      '@id': `${SITE_URL}/#organization`,
    },
    inLanguage: 'en-IN',
  };
}

export interface BreadcrumbItem {
  name: string;
  path: string;
}

/**
 * Generates BreadcrumbList Schema for hierarchical search navigation.
 */
export function getBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.path === '/' ? `${SITE_URL}/` : `${SITE_URL}${item.path}`,
    })),
  };
}

export interface ServiceSchemaProps {
  name: string;
  description: string;
  path: string;
  serviceType: string;
}

/**
 * Generates Service Schema for specific service offerings.
 * Represents visible page content only — no fabricated ratings or pricing.
 */
export function getServiceSchema({
  name,
  description,
  path,
  serviceType,
}: ServiceSchemaProps) {
  const serviceUrl = `${SITE_URL}${path}`;
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${serviceUrl}#service`,
    name,
    description,
    url: serviceUrl,
    provider: {
      '@id': `${SITE_URL}/#organization`,
    },
    areaServed: [
      { '@type': 'City', name: 'Pune' },
      { '@type': 'State', name: 'Maharashtra' },
      { '@type': 'Country', name: 'India' },
    ],
    serviceType,
  };
}

export interface FAQItem {
  question: string;
  answer: string;
}

/**
 * Generates FAQPage Schema.
 * Only use when the FAQ content is genuinely visible on the page.
 * Content must accurately reflect what is shown to the user.
 */
export function getFAQSchema(faqs: FAQItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

/**
 * Generates ContactPage Schema.
 */
export function getContactPageSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    '@id': `${SITE_URL}/contact#webpage`,
    url: `${SITE_URL}/contact`,
    name: `Contact ${SITE_NAME}`,
    description: `Contact ${SITE_NAME} for web development, ERP, and software solutions in Pune, Maharashtra.`,
    mainEntity: {
      '@id': `${SITE_URL}/#organization`,
    },
  };
}

