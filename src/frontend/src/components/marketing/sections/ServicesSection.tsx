import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Search, TrendingUp, Code, PenTool, BarChart3, Megaphone, ArrowRight } from 'lucide-react';
import { SectionShell } from './SectionShell';

export function ServicesSection() {
  const services = [
    {
      icon: Search,
      title: 'SEO Optimization',
      description: 'Dominate search engine rankings with our comprehensive SEO strategies. We optimize every aspect of your online presence to drive sustainable organic growth and visibility.',
      features: ['Technical SEO Audits', 'Keyword Research & Strategy', 'Link Building & Authority'],
    },
    {
      icon: Megaphone,
      title: 'Digital Marketing',
      description: 'Full-spectrum digital marketing campaigns designed to engage your audience, drive conversions, and build lasting customer relationships across all channels.',
      features: ['PPC & Paid Advertising', 'Social Media Marketing', 'Email Campaign Management'],
    },
    {
      icon: Code,
      title: 'Web Development',
      description: 'Create stunning, high-performance websites that captivate visitors and convert them into customers. Built with the latest technologies for speed and scalability.',
      features: ['Custom Web Applications', 'E-commerce Solutions', 'Responsive Design & UX'],
    },
    {
      icon: PenTool,
      title: 'Content Strategy',
      description: 'Compelling content that tells your brand story, engages your audience, and establishes your authority in your industry. From blogs to video, we create content that converts.',
      features: ['Content Marketing Plans', 'Professional Copywriting', 'Brand Voice Development'],
    },
    {
      icon: BarChart3,
      title: 'Analytics & Insights',
      description: 'Transform data into actionable insights. Our advanced analytics track every metric that matters, helping you make informed decisions and maximize your marketing ROI.',
      features: ['Performance Dashboards', 'A/B Testing & Optimization', 'Custom Reporting Solutions'],
    },
    {
      icon: TrendingUp,
      title: 'Growth Marketing',
      description: 'Accelerate your business growth with proven strategies that optimize every stage of your customer journey. From acquisition to retention, we drive sustainable expansion.',
      features: ['Conversion Rate Optimization', 'Customer Journey Mapping', 'Retention & Loyalty Programs'],
    },
  ];

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <SectionShell id="services" variant="muted" className="section-padding">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="font-bold mb-4">
          Comprehensive Digital Solutions for Modern Businesses
        </h2>
        <p className="text-xl text-muted-foreground">
          From strategic planning to flawless execution, we deliver end-to-end digital marketing 
          services that transform your online presence and drive measurable business growth.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {services.map((service) => (
          <Card key={service.title} className="hover-lift border-2 hover:border-primary/20">
            <CardHeader>
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center mb-4">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <CardTitle className="text-xl">{service.title}</CardTitle>
              <CardDescription className="text-base leading-relaxed">
                {service.description}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 mb-4">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button variant="ghost" className="w-full group" onClick={scrollToContact}>
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
