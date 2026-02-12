import { SiteHeader } from './components/marketing/SiteHeader';
import { SiteFooter } from './components/marketing/SiteFooter';
import { HeroSection } from './components/marketing/sections/HeroSection';
import { ServicesSection } from './components/marketing/sections/ServicesSection';
import { ProofSection } from './components/marketing/sections/ProofSection';
import { TestimonialsSection } from './components/marketing/sections/TestimonialsSection';
import { ProcessSection } from './components/marketing/sections/ProcessSection';
import { AboutSection } from './components/marketing/sections/AboutSection';
import { CtaSection } from './components/marketing/sections/CtaSection';
import { LegalSections } from './components/marketing/sections/LegalSections';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        <HeroSection />
        <ServicesSection />
        <ProofSection />
        <TestimonialsSection />
        <ProcessSection />
        <AboutSection />
        <CtaSection />
        <LegalSections />
      </main>
      <SiteFooter />
    </div>
  );
}

export default App;
