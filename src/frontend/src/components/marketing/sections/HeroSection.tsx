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
    <SectionShell variant="default" className="section-padding-lg">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Content */}
        <div className="space-y-8">
          <Badge variant="secondary" className="w-fit">
            <TrendingUp className="w-3 h-3 mr-1" />
            Leading Digital Marketing Agency
          </Badge>
          
          <div className="space-y-4">
            <h1 className="font-bold">
              Accelerate Your Growth with{' '}
              <span className="gradient-text">Strategic Digital Marketing</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Partner with AMS Digital Agency to transform your online presence. We combine 
              data-driven insights, creative excellence, and proven strategies to deliver 
              exceptional results that scale your business.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" onClick={scrollToContact} className="text-base">
              Start Your Journey
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" onClick={scrollToServices}>
              Explore Our Services
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap gap-6 pt-4">
            {trustIndicators.map((indicator) => (
              <div key={indicator} className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-success" />
                <span className="text-sm font-medium">{indicator}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Visual Element */}
        <div className="relative">
          <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 p-8 lg:p-12">
            <div className="space-y-6">
              {/* Stats Cards */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-background/80 backdrop-blur-sm rounded-xl p-6 border shadow-sm hover-lift">
                  <div className="text-3xl font-bold text-primary mb-1">250%</div>
                  <div className="text-sm text-muted-foreground">Average Traffic Growth</div>
                </div>
                <div className="bg-background/80 backdrop-blur-sm rounded-xl p-6 border shadow-sm hover-lift">
                  <div className="text-3xl font-bold text-secondary mb-1">10x</div>
                  <div className="text-sm text-muted-foreground">Return on Investment</div>
                </div>
              </div>
              
              <div className="bg-background/80 backdrop-blur-sm rounded-xl p-6 border shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-medium">Campaign Performance</span>
                  <Badge variant="outline" className="bg-success/10 text-success border-success/20">
                    +45% This Month
                  </Badge>
                </div>
                <div className="space-y-3">
                  <div className="space-y-1">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Organic Traffic</span>
                      <span className="font-medium">92%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-primary to-secondary w-[92%]" />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Conversion Rate</span>
                      <span className="font-medium">87%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-secondary to-primary w-[87%]" />
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
