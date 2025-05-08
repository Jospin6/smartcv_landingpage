import { Header } from '@/components/landing/header';
import { Hero } from '@/components/landing/hero';
import { ProcessSteps } from '@/components/landing/process-steps';
import { CVShowcase } from '@/components/landing/cv-showcase';
import { Testimonials } from '@/components/landing/testimonials';
import { Benefits } from '@/components/landing/benefits';
import { Stats } from '@/components/landing/stats';
import { FAQ } from '@/components/landing/faq';
import { Pricing } from '@/components/landing/pricing';
import { CTA } from '@/components/landing/cta';
import { Footer } from '@/components/landing/footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <ProcessSteps />
      {/* <CVShowcase /> */}
      {/* <Stats /> */}
      <Benefits />
      {/* <Testimonials /> */}
      <Pricing />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}