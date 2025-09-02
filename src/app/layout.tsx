import type { Metadata } from 'next';
import './globals.css';
import { Rajdhani } from 'next/font/google';
import { Header } from '@/components/Header';


export const metadata: Metadata = {
  title: 'WizardZ Digital Marketing Agency',
  description:
    'WizardZ is a digital marketing agency helping businesses grow online with tailored SEO, PPC, email, and social media marketing. Elevate your brand and reach new customers with our expert team.',
  keywords: [
    'digital marketing',
    'SEO',
    'PPC',
    'email marketing',
    'social media marketing',
    'content creation',
    'brand growth',
    'online marketing',
    'marketing agency',
    'business growth',
    'lead generation',
    'conversion optimization',
    'customer retention',
    'WizardZ',
    'marketing solutions',
  ],
};

const rajdhani = Rajdhani({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-rajdhani',
  display: 'swap',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${rajdhani.className} bg-background relative h-screen w-screen overflow-hidden overflow-y-scroll overscroll-none px-6 antialiased md:px-32`}
      >
        <main>
          <Header />
          {children}
        </main>
      </body>
    </html>
  );
}
