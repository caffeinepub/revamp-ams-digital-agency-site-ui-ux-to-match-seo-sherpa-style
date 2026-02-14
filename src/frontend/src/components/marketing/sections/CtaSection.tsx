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
    <SectionShell id="contact" variant="default" className="section-padding border-b">
      <div className="max-w-5xl mx-auto">
        <div className="relative rounded-2xl overflow-hidden border-2 bg-foreground p-12 md:p-16 lg:p-20 text-center shadow-xl">
          <div className="relative z-10 space-y-10">
            <h2 className="font-bold text-background">
              Ready to Transform Your Digital Presence?
            </h2>
            <p className="text-xl text-background/90 max-w-2xl mx-auto leading-relaxed font-medium">
              Join hundreds of successful businesses that have accelerated their growth 
              with AMS Digital Agency's proven strategies. Let's create your success story together.
            </p>

            <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="relative flex-1">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
                    type="email"
                    placeholder="Enter your business email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-12 h-14 bg-background border-2 text-base font-medium"
                    required
                  />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  variant="secondary"
                  className="h-14 px-8 text-base font-bold"
                >
                  Get Started Free
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
              <p className="text-sm text-background/70 mt-4 font-medium">
                No credit card required. Free strategy consultation included.
              </p>
            </form>

            <div className="flex flex-wrap justify-center gap-12 pt-10 text-background/95">
              <div className="text-center">
                <div className="text-3xl font-bold mb-1">24/7</div>
                <div className="text-sm font-medium">Expert Support</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-1">100%</div>
                <div className="text-sm font-medium">Satisfaction Guarantee</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-1">30-Day</div>
                <div className="text-sm font-medium">Money-Back Promise</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
