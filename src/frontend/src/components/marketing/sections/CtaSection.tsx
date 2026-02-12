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
      <div className="max-w-4xl mx-auto">
        <div className="relative rounded-lg overflow-hidden border bg-foreground p-8 md:p-12 lg:p-16 text-center">
          <div className="relative z-10 space-y-6">
            <h2 className="font-bold text-background">
              Ready to Transform Your Digital Presence?
            </h2>
            <p className="text-base text-background/80 max-w-2xl mx-auto leading-relaxed">
              Join hundreds of successful businesses that have accelerated their growth 
              with AMS Digital Agency's proven strategies. Let's create your success story together.
            </p>

            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="relative flex-1">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    type="email"
                    placeholder="Enter your business email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-10 h-11 bg-background border-background/20"
                    required
                  />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  variant="secondary"
                  className="h-11 px-6"
                >
                  Get Started Free
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
              <p className="text-xs text-background/60 mt-3">
                No credit card required. Free strategy consultation included.
              </p>
            </form>

            <div className="flex flex-wrap justify-center gap-8 pt-8 text-background/90">
              <div className="text-center">
                <div className="text-2xl font-bold">24/7</div>
                <div className="text-xs">Expert Support</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">100%</div>
                <div className="text-xs">Satisfaction Guarantee</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">30-Day</div>
                <div className="text-xs">Money-Back Promise</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
