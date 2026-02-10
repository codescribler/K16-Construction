import type { Metadata } from 'next';
import { Poppins, Open_Sans } from 'next/font/google';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { BackToTop } from '@/components/layout/BackToTop';
import { generateBusinessSchema } from '@/lib/schema';
import { BASE_URL } from '@/data/site';
import { Analytics } from '@vercel/analytics/next';
import { GoogleAnalyticsEvents } from '@/components/analytics/GoogleAnalyticsEvents';
import { GA_MEASUREMENT_ID } from '@/lib/gtag';
import './globals.css';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
});

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '600'],
  variable: '--font-open-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'K16 Contracts - Quality Home Extensions & Renovations Since 1998',
    template: '%s | K16 Contracts',
  },
  description:
    'K16 Contracts - Quality home extensions and renovations for growing families. Family-run builders with 25+ years experience. Get your free consultation today.',
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: BASE_URL,
    siteName: 'K16 Contracts',
    title: 'K16 Contracts - Quality Home Extensions & Renovations Since 1998',
    description:
      'Family-run builders delivering quality home extensions and renovations since 1998. Your home, our reputation.',
    images: [{ url: '/images/british-home.jpg', width: 1200, height: 630, alt: 'K16 Contracts - Quality Home Extensions' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'K16 Contracts - Quality Home Extensions & Renovations Since 1998',
    description:
      'Family-run builders delivering quality home extensions and renovations since 1998.',
    images: ['/images/british-home.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const businessSchema = generateBusinessSchema();

  return (
    <html lang="en" className={`${poppins.variable} ${openSans.variable}`}>
      <head>
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_MEASUREMENT_ID}');
            `,
          }}
        />
      </head>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
        />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <BackToTop />
        <Analytics />
        <GoogleAnalyticsEvents />
      </body>
    </html>
  );
}
