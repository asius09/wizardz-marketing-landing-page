'use client';
import { Brands } from '@/components/Brands';
import { CaseStudy } from '@/components/CaseStudy';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { Hero } from '@/components/Hero';
import { Service } from '@/components/Service';

export default function Home() {
  return (
    <main className="space-y-24">
      <Hero />
      <Brands />
      <Service />
      <Contact />
      <CaseStudy />
      <Footer />
    </main>
  );
}
