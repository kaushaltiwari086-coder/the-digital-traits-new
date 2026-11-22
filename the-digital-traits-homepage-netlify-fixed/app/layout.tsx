import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'The Digital Traits | Strategy. Creativity. Growth.',
  description: 'A digital growth partner for ambitious brands. Performance marketing, SEO, social media, influencer marketing, lead generation and web development across India.',
  metadataBase: new URL('https://www.thedigitaltraits.com'),
  openGraph: { title: 'The Digital Traits | Strategy. Creativity. Growth.', description: 'We turn digital potential into measurable business momentum.', type: 'website' }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
