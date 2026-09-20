import type { Metadata, Viewport } from 'next';

export const viewport: Viewport = {
  themeColor: '#ffffff',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

import { Inter, Figtree, IBM_Plex_Mono } from 'next/font/google';
import './globals.css';
import { siteConfig } from '@/lib/config';
import { getOrganizationSchema, getWebSiteSchema, SITE_URL } from '@/lib/seo';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { BackgroundGlow } from '@/components/ui/BackgroundGlow';
import { CustomCursor } from '@/components/ui/CustomCursor';
import { FloatingWhatsApp } from '@/components/layout/FloatingWhatsApp';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['300', '400', '500', '600'],
  display: 'swap',
});

const figtree = Figtree({
  subsets: ['latin'],
  variable: '--font-figtree',
  weight: ['500', '600', '700'],
  display: 'swap',
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  weight: ['400', '500'],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: siteConfig.meta.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.meta.description,
  keywords: siteConfig.meta.keywords,
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  manifest: '/site.webmanifest',
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: SITE_URL,
    title: siteConfig.meta.title,
    description: siteConfig.meta.description,
    siteName: siteConfig.name,
    images: [
      {
        url: `${SITE_URL}/images/logo/logo-light.png`,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.meta.title,
    description: siteConfig.meta.description,
    creator: '@nirmaaninfotech',
    images: [`${SITE_URL}/images/logo/logo-light.png`],
  },
  robots: {
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const orgSchema = getOrganizationSchema();
  const webSiteSchema = getWebSiteSchema();

  return (
    <html
      lang="en"
      className={`${inter.variable} ${figtree.variable} ${ibmPlexMono.variable} scroll-smooth w-full max-w-full overflow-x-hidden`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }}
        />
      </head>
      <body
        className="relative min-h-screen bg-white text-[#071A36] flex flex-col font-sans selection:bg-[#1677FF] selection:text-white w-full max-w-full overflow-x-hidden"
        suppressHydrationWarning
      >
        <BackgroundGlow />
        <CustomCursor />
        <Header />
        <main className="flex-1 relative z-10 w-full max-w-full overflow-x-hidden">{children}</main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
