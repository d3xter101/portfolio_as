import type { Metadata } from 'next'
import { Ubuntu } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { CursorTracker } from '@/components/cursor-tracker'
import { AnimatedBackground } from '@/components/animated-background'

const ubuntu = Ubuntu({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  variable: '--font-ubuntu',
})

export const metadata: Metadata = {
  title: 'SAIDI Abdelhamid | Data Engineer & Analytics Specialist | ETL & Cloud Expert',
  description: 'Data Engineer specializing in ETL/ELT pipelines, cloud-native architectures, and analytics solutions. Expertise in Python, SQL, AWS, GCP, Azure, Power BI, and data warehousing. Based in Casablanca, Morocco.',
  keywords: ['Data Engineer', 'Analytics Specialist', 'ETL Developer', 'Cloud Data Architect', 'Python', 'SQL', 'AWS', 'GCP', 'Azure', 'Power BI', 'Tableau', 'Data Warehousing', 'Big Data', 'Apache Spark', 'Kafka', 'Machine Learning', 'Business Intelligence', 'Casablanca', 'Morocco'],
  authors: [{ name: 'SAIDI Abdelhamid', url: 'https://github.com/d3xter101' }],
  creator: 'SAIDI Abdelhamid',
  publisher: 'SAIDI Abdelhamid',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://portfolio-as.vercel.app',
    title: 'SAIDI Abdelhamid | Data Engineer & Analytics Specialist',
    description: 'Data Engineer specializing in ETL/ELT pipelines, cloud-native architectures, and analytics solutions. Expertise in Python, SQL, AWS, GCP, Azure, and Power BI.',
    siteName: 'SAIDI Abdelhamid Portfolio',
    images: [
      {
        url: '/professional-data-engineer-portrait.jpg',
        width: 1200,
        height: 630,
        alt: 'SAIDI Abdelhamid - Data Engineer & Analytics Specialist',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SAIDI Abdelhamid | Data Engineer & Analytics Specialist',
    description: 'Data Engineer specializing in ETL/ELT pipelines, cloud-native architectures, and analytics solutions.',
    images: ['/professional-data-engineer-portrait.jpg'],
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
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/favicon.ico',
        sizes: 'any',
      },
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
    ],
    apple: '/apple-icon.png',
  },
  metadataBase: new URL('https://portfolio-as.vercel.app'),
}

import ThemeProvider from '@/components/theme-provider'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="canonical" href="https://portfolio-as.vercel.app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                if (localStorage.getItem('theme') === 'dark' || (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.documentElement.classList.add('dark')
                }
              } catch (e) {}
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'SAIDI Abdelhamid',
              jobTitle: 'Data Engineer & Analytics Specialist',
              description: 'Data Engineer specializing in ETL/ELT pipelines, cloud-native architectures, and analytics solutions',
              url: 'https://portfolio-as.vercel.app',
              image: 'https://portfolio-as.vercel.app/professional-data-engineer-portrait.jpg',
              email: 'abdelhamidsaidiofficial@gmail.com',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Casablanca',
                addressCountry: 'Morocco',
              },
              alumniOf: [
                {
                  '@type': 'CollegeOrUniversity',
                  name: 'National School of Applied Sciences',
                },
              ],
              knowsAbout: [
                'Data Engineering',
                'ETL/ELT',
                'Cloud Computing',
                'Python',
                'SQL',
                'AWS',
                'Google Cloud Platform',
                'Azure',
                'Power BI',
                'Tableau',
                'Apache Spark',
                'Data Warehousing',
                'Business Intelligence',
              ],
              sameAs: [
                'https://github.com/abdelhamidsaidi',
                'https://linkedin.com/in/abdelhamid-saidi',
              ],
            }),
          }}
        />
      </head>
      <body className={`${ubuntu.variable} font-sans antialiased`}>
        <AnimatedBackground />
        <CursorTracker />
        <ThemeProvider>
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
