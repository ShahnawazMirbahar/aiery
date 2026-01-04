import type { Metadata } from 'next';
import { Manrope, Space_Grotesk, Playfair_Display } from 'next/font/google';
import './globals.css';

const display = Space_Grotesk({
  variable: '--font-display',
  subsets: ['latin'],
});

const body = Manrope({
  variable: '--font-body',
  subsets: ['latin'],
});

const logo = Playfair_Display({
  variable: '--font-logo',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Aiery Studio',
  description: 'Design-ready Next.js canvas for your video and logo showcase.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${display.variable} ${body.variable} ${logo.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
