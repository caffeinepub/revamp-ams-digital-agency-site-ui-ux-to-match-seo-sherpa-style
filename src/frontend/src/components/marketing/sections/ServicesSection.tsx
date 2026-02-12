import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Search, TrendingUp, Code, PenTool, BarChart3, Megaphone, ArrowRight } from 'lucide-react';
import { SectionShell } from './SectionShell';

export function ServicesSection() {
  const services = [
    {
      icon: Search,
      title: 'SEO Optimization',
      description: 'Dominate search rankings with our proven SEO strategies. We optimize your website for maximum visibility and organic traffic growth.',
      features: ['Keyword Research', 'Technical SEO', 'Link Building'],
    },
    {
      icon: Megaphone,
      title: 'Digital Marketing',
      description: 'Comprehensive digital marketing campaigns that drive engagement, conversions, and sustainable business growth.',
      features: ['PPC Campaigns', 'Social Media', 'Email Marketing'],
    },
    {
      icon: Code,
      title: 'Web Development',
      description: 'Build fast, responsive, and conversion-optimized websites that provide exceptional user experiences.',
      features: ['Custom Development', 'E-commerce', 'CMS Solutions'],
    },
    {
      icon: PenTool,
      title: 'Content Strategy',
      description: 'Engaging content that resonates with your audience and establishes your brand as an industry authority.',
      features: ['Content Creation', 'Copywriting', 'Brand Storytelling'],
    },
    {
      icon: BarChart3,
      title: 'Analytics & Insights',
      description: 'Data-driven insights that inform strategy and maximize ROI. Track, measure, and optimize every campaign.',
      features: ['Performance Tracking', 'A/B Testing', 'Reporting'],
    },
    {
      icon: TrendingUp,
      title: 'Growth Marketing',
      description: 'Scalable growth strategies that accelerate your business. From acquisition to retention, we optimize every funnel stage.',
      features: ['Conversion Optimization', 'Funnel Analysis', 'Retention Strategy'],
    },
  ];

  return (
    <SectionShell id="services" variant="muted" className="section-padding">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="font-bold mb-4">
          Comprehensive Digital Solutions
        </h2>
        <p className="text-xl text-muted-foreground">
          From strategy to execution, we provide end-to-end digital marketing services 
          that drive real business results.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {services.map((service) => (
          <Card key={service.title} className="hover-lift border-2 hover:border-primary/20">
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center mb-4">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <CardTitle className="text-xl">{service.title}</CardTitle>
              <CardDescription className="text-base">
                {service.description}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 mb-4">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button variant="ghost" className="w-full group">
                Learn More
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </SectionShell>
  );
}
