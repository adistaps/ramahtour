import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from 'next-themes'
import type { Metadata, Viewport } from 'next'
import Script from 'next/script'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})


const siteUrl = 'https://ramahtourlombok.com' // TODO: sesuaikan dengan domain aktif
const siteName = 'RAMAH Tour Lombok'
const siteDescription =
  'RAMAH Tour Lombok: private trip, custom itinerary, airport transfer, hotel & villa, island hopping, dan dokumentasi foto & video. Paket mulai Rp2.950.000/pax. Your Lombok Escape, Made Easy.'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'RAMAH Tour Lombok | Your Lombok Escape, Made Easy',
    template: '%s | RAMAH Tour Lombok',
  },
  description: siteDescription,
  keywords: [
    'ramah tour lombok',
    'paket tour lombok',
    'open trip lombok',
    'private trip lombok',
    'honeymoon lombok',
    'girls trip lombok',
    'island hopping gili',
    'wisata kuta lombok',
    'tanjung aan',
    'bukit merese',
    'pink beach lombok',
    'gili trawangan',
    'airport transfer lombok',
    'custom itinerary lombok',
  ],
  authors: [{ name: 'RAMAH Tour Lombok', url: siteUrl }],
  creator: 'RAMAH Tour Lombok',
  publisher: 'RAMAH Tour Lombok',
  category: 'Travel & Tourism',
  classification: 'Tour & Travel Lombok',
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
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    url: siteUrl,
    siteName,
    title: 'RAMAH Tour Lombok | Your Lombok Escape, Made Easy',
    description: siteDescription,
    images: [
      {
        url: `${siteUrl}/hero.webp`,
        width: 1200,
        height: 630,
        alt: 'RAMAH Tour Lombok',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RAMAH Tour Lombok | Your Lombok Escape, Made Easy',
    description: siteDescription,
    images: [`${siteUrl}/hero.webp`],
  },
  alternates: {
    canonical: siteUrl,
  },
  icons: {
    icon: '/icon.png',
    apple: '/icon.png',
  },
  other: {
    'geo.region': 'ID-NB',
    'geo.placename': 'Lombok, Nusa Tenggara Barat, Indonesia',
    'geo.position': '-8.65;116.32',
    'ICBM': '-8.65, 116.32',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0d0d0d' },
  ],
}

// JSON-LD structured data for Local Business + TouristAttraction
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'LocalBusiness',
      '@id': `${siteUrl}/#localbusiness`,
      name: 'RAMAH Tour Lombok',
      description: siteDescription,
      url: siteUrl,
      telephone: '+6282342200038',
      priceRange: 'Rp2.950.000 - Rp5.950.000',
      currenciesAccepted: 'IDR',
      image: `${siteUrl}/hero.webp`,
      logo: `${siteUrl}/logo.webp`,
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Lombok',
        addressRegion: 'Nusa Tenggara Barat',
        addressCountry: 'ID',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: -8.65,
        longitude: 116.32,
      },
      sameAs: [
        `https://wa.me/6282342200038`,
        `https://instagram.com/ramahtourlombok`,
      ],
    },
    {
      '@type': 'TouristAttraction',
      '@id': `${siteUrl}/#attraction`,
      name: 'Paket Tour Lombok RAMAH',
      description: 'Liburan Lombok yang mudah: Kuta Lombok, Tanjung Aan, Bukit Merese, Pink Beach, hingga island hopping ke Gili Trawangan.',
      url: siteUrl,
      touristType: ['Family', 'Adventure', 'Group', 'Couple'],
      geo: {
        '@type': 'GeoCoordinates',
        latitude: -8.65,
        longitude: 116.32,
      },
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Lombok',
        addressRegion: 'Nusa Tenggara Barat',
        addressCountry: 'ID',
      },
    },
    {
      '@type': 'WebSite',
      '@id': `${siteUrl}/#website`,
      url: siteUrl,
      name: siteName,
      description: siteDescription,
      inLanguage: 'id-ID',
    },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="id" className={inter.variable} suppressHydrationWarning>
      <head>
        {/* JSON-LD Structured Data */}
        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          {children}
          {process.env.NODE_ENV === 'production' && <Analytics />}
        </ThemeProvider>
      </body>
    </html>
  )
}