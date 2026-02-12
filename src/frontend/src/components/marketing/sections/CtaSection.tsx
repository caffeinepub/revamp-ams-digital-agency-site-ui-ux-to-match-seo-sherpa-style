import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ArrowRight, Mail } from 'lucide-react';
import { SectionShell } from './SectionShell';
import { useState } from 'react';

export function CtaSection() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Email submitted:', email);
    setEmail('');
  };

  return (
    <SectionShell id="contact" variant="highlight" className="section-padding">
      <div className="max-w-4xl mx-auto">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-primary via-primary to-secondary p-8 md:p-12 lg:p-16 text-center">
          {/* Decorative elements */}
          <div className="absolute inset-0 bg-grid-white/5 [mask-image:radial-gradient(white,transparent_70%)]" />
          
          <div className="relative z-10 space-y-6">
            <h2 className="font-bold text-white">
              Ready to Transform Your Digital Presence?
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Join hundreds of successful businesses that have accelerated their growth 
              with our proven digital marketing strategies.
            </p>

            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="relative flex-1">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-10 h-12 bg-white/95 border-white/20"
                    required
                  />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  variant="secondary"
                  className="h-12 px-8"
                >
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
              <p className="text-sm text-white/70 mt-3">
                No credit card required. Free consultation included.
              </p>
            </form>

            <div className="flex flex-wrap justify-center gap-8 pt-8 text-white/90">
              <div className="text-center">
                <div className="text-3xl font-bold">24/7</div>
                <div className="text-sm">Support</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">100%</div>
                <div className="text-sm">Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">30-Day</div>
                <div className="text-sm">Money Back</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
