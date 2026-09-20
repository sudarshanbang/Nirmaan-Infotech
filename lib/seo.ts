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
          alt: `${SITE_NAME} - ${title}`,
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
 * Organization Schema for Nirmaan Infotech
 * Truthful, verified business signals only.
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
      postalCode: '411051',
      addressCountry: 'IN',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: siteConfig.contact.phone,
      contactType: 'customer service',
      areaServed: 'IN',
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
 * WebSite Schema for Nirmaan Infotech
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
    areaServed: {
      '@type': 'Country',
      name: 'India',
    },
    serviceType,
  };
}
