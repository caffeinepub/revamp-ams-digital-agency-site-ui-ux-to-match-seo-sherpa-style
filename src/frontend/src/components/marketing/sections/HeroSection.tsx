import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, CheckCircle2, TrendingUp } from 'lucide-react';
import { SectionShell } from './SectionShell';

export function HeroSection() {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToServices = () => {
    const element = document.querySelector('#services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const trustIndicators = [
    '500+ Successful Projects',
    '98% Client Retention Rate',
    'Award-Winning Strategies',
  ];

  return (
    <SectionShell variant="default" className="section-padding-lg border-b">
      <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
        {/* Content */}
        <div className="space-y-10">
          <Badge variant="secondary" className="w-fit border-2 px-4 py-2 text-sm font-medium">
            <TrendingUp className="w-4 h-4 mr-2" />
            Leading Digital Marketing Agency
          </Badge>
          
          <div className="space-y-8">
            <h1 className="font-bold">
              Accelerate Your Growth with Strategic Digital Marketing
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-xl">
              Partner with AMS Digital Agency to transform your online presence. We combine 
              data-driven insights, creative excellence, and proven strategies to deliver 
              exceptional results that scale your business.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="text-base font-medium h-14 px-8" onClick={scrollToContact}>
              Start Your Journey
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="text-base font-medium h-14 px-8 border-2" onClick={scrollToServices}>
              Explore Our Services
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap gap-8 pt-6">
            {trustIndicators.map((indicator) => (
              <div key={indicator} className="flex items-center gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-success flex-shrink-0" />
                <span className="text-sm font-medium text-muted-foreground">{indicator}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Visual Element */}
        <div className="relative">
          <div className="relative rounded-xl overflow-hidden border-2 bg-card p-10 lg:p-12 shadow-lg">
            <div className="space-y-6">
              {/* Stats Cards */}
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-muted/50 rounded-lg p-6 border-2">
                  <div className="text-4xl font-bold mb-2">250%</div>
                  <div className="text-sm text-muted-foreground font-medium">Average Traffic Growth</div>
                </div>
                <div className="bg-muted/50 rounded-lg p-6 border-2">
                  <div className="text-4xl font-bold mb-2">10x</div>
                  <div className="text-sm text-muted-foreground font-medium">Return on Investment</div>
                </div>
              </div>
              
              <div className="bg-muted/50 rounded-lg p-6 border-2">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-base font-bold">Campaign Performance</span>
                  <Badge variant="outline" className="bg-success/10 text-success border-success/30 text-sm font-bold px-3 py-1">
                    +45% This Month
                  </Badge>
                </div>
                <div className="space-y-5">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground font-medium">Organic Traffic</span>
                      <span className="font-bold">92%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-foreground w-[92%] rounded-full" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground font-medium">Conversion Rate</span>
                      <span className="font-bold">87%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-foreground w-[87%] rounded-full" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
