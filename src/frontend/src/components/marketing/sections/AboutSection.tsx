import { SectionShell } from './SectionShell';
import { Target, Users, Award, Zap } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export function AboutSection() {
  const values = [
    {
      icon: Target,
      title: 'Results-Driven',
      description: 'Every strategy we implement is focused on delivering measurable business outcomes and ROI.',
    },
    {
      icon: Users,
      title: 'Client-Centric',
      description: 'Your success is our success. We build long-term partnerships based on trust and transparency.',
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We maintain the highest standards in everything we do, from strategy to execution.',
    },
    {
      icon: Zap,
      title: 'Innovation',
      description: 'We stay ahead of digital trends to give your business a competitive advantage.',
    },
  ];

  return (
    <SectionShell id="about" variant="muted" className="section-padding border-b">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h2 className="font-bold mb-6">
          About AMS Digital Agency
        </h2>
        <div className="space-y-4 text-base text-muted-foreground leading-relaxed">
          <p>
            AMS Digital Agency is a full-service digital marketing firm dedicated to helping businesses 
            thrive in the digital landscape. Founded by industry veterans with over 15 years of combined 
            experience, we've grown from a small startup to a trusted partner for over 500 businesses worldwide.
          </p>
          <p>
            Our team of certified specialists brings together expertise in SEO, digital marketing, web development, 
            content strategy, and analytics. We don't believe in one-size-fits-all solutions. Instead, we take 
            the time to understand your unique business challenges and craft customized strategies that deliver 
            real, measurable results.
          </p>
          <p>
            What sets us apart is our commitment to transparency, data-driven decision making, and continuous 
            optimization. We're not just service providers—we're strategic partners invested in your long-term success.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto">
        <h3 className="text-xl font-bold text-center mb-8">Our Core Values</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value) => (
            <Card key={value.title} className="text-center hover-lift">
              <CardContent className="pt-6">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-md border bg-accent/50 mb-4">
                  <value.icon className="w-5 h-5" />
                </div>
                <h4 className="font-semibold text-sm mb-2">{value.title}</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
