import type { ReactNode } from 'react';
import { Cinzel, Crimson_Text } from 'next/font/google';

import './globals.css';
import Footer from '@/components/layout/Footer';
import Navbar from '@/components/layout/Navbar';

const heading = Cinzel({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

const body = Crimson_Text({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
  weight: ['400', '600', '700'],
  style: ['normal', 'italic'],
});

export const metadata = {
  title: {
    default: 'Théâtre des Lumières — Théâtre & Spectacle à Lyon',
    template: '%s — Théâtre des Lumières',
  },
  description:
    'Programmation, billetterie et privatisation au cœur de la Presqu’île lyonnaise. Mar-Sam 11h-19h.',
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="fr">
      <body
        className={`${heading.variable} ${body.variable} font-body bg-background text-text antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

