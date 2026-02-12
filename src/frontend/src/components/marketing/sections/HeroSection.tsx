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
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Content */}
        <div className="space-y-8">
          <Badge variant="secondary" className="w-fit border">
            <TrendingUp className="w-3 h-3 mr-1" />
            Leading Digital Marketing Agency
          </Badge>
          
          <div className="space-y-6">
            <h1 className="font-bold">
              Accelerate Your Growth with Strategic Digital Marketing
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Partner with AMS Digital Agency to transform your online presence. We combine 
              data-driven insights, creative excellence, and proven strategies to deliver 
              exceptional results that scale your business.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <Button size="lg" onClick={scrollToContact}>
              Start Your Journey
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" onClick={scrollToServices}>
              Explore Our Services
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap gap-6 pt-4">
            {trustIndicators.map((indicator) => (
              <div key={indicator} className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-success" />
                <span className="text-sm text-muted-foreground">{indicator}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Visual Element */}
        <div className="relative">
          <div className="relative rounded-lg overflow-hidden border bg-card p-8 lg:p-10">
            <div className="space-y-4">
              {/* Stats Cards */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-accent/50 rounded-md p-5 border">
                  <div className="text-3xl font-bold mb-1">250%</div>
                  <div className="text-xs text-muted-foreground">Average Traffic Growth</div>
                </div>
                <div className="bg-accent/50 rounded-md p-5 border">
                  <div className="text-3xl font-bold mb-1">10x</div>
                  <div className="text-xs text-muted-foreground">Return on Investment</div>
                </div>
              </div>
              
              <div className="bg-accent/50 rounded-md p-5 border">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-medium">Campaign Performance</span>
                  <Badge variant="outline" className="bg-success/10 text-success border-success/20 text-xs">
                    +45% This Month
                  </Badge>
                </div>
                <div className="space-y-3">
                  <div className="space-y-1.5">
                    <div className="flex justify-between text-xs">
                      <span className="text-muted-foreground">Organic Traffic</span>
                      <span className="font-medium">92%</span>
                    </div>
                    <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-foreground w-[92%]" />
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <div className="flex justify-between text-xs">
                      <span className="text-muted-foreground">Conversion Rate</span>
                      <span className="font-medium">87%</span>
                    </div>
                    <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-foreground w-[87%]" />
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
