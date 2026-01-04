import type { Metadata } from 'next';
import { Geist } from 'next/font/google';
import './globals.css';

const geist = Geist({
  variable: '--font-geist',
  subsets: ['latin'],
});

const display = geist;
const body = geist;
const logo = geist;

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
        className={`${geist.variable} antialiased font-[family-name:var(--font-geist)]`}
      >
        {children}
      </body>
    </html>
  );
}
