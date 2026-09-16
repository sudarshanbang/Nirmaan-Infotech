import type { Metadata, Viewport } from 'next';

export const viewport: Viewport = {
  themeColor: '#071A36',
};
import { Inter, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import { siteConfig } from '@/lib/config';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { BackgroundGlow } from '@/components/ui/BackgroundGlow';
import { CustomCursor } from '@/components/ui/CustomCursor';
import { FloatingWhatsApp } from '@/components/layout/FloatingWhatsApp';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.meta.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.meta.description,
  keywords: siteConfig.meta.keywords,
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  manifest: '/site.webmanifest',
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
      { url: '/web-app-manifest-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/web-app-manifest-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: siteConfig.url,
    title: siteConfig.meta.title,
    description: siteConfig.meta.description,
    siteName: siteConfig.name,
    images: [
      {
        url: '/images/logo/logo-light.png',
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
    images: ['/images/logo/logo-light.png'],
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
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}/images/logo/logo-light.png`,
    description: siteConfig.description,
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'IN',
      addressLocality: 'Pune',
      addressRegion: 'Maharashtra',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: siteConfig.contact.phone,
      contactType: 'customer service',
      areaServed: 'IN',
      availableLanguage: ['English', 'Hindi'],
    },
  };

  return (
    <html
      lang="en"
      className={`${inter.variable} ${plusJakartaSans.variable} dark scroll-smooth`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className="relative min-h-screen bg-navy-950 text-slate-100 flex flex-col font-sans"
        suppressHydrationWarning
      >
        <BackgroundGlow />
        <CustomCursor />
        <Header />
        <main className="flex-1 relative z-10">{children}</main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
