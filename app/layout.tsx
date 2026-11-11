import type { Metadata } from 'next';
import { Nunito, Fredoka } from 'next/font/google';
import './globals.css';

const nunito = Nunito({
  variable: '--font-nunito',
  subsets: ['latin'],
  display: 'swap'
});

const fredoka = Fredoka({
  variable: '--font-fredoka',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Games by NVP',
  description: 'Games by NVP',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='fr'>
      <body className={`${nunito.variable} ${fredoka.variable}`}>{children}</body>
    </html>
  );
}
