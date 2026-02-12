import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Search, Lightbulb, Rocket, BarChart } from 'lucide-react';
import { SectionShell } from './SectionShell';

export function ProcessSection() {
  const steps = [
    {
      number: '01',
      icon: Search,
      title: 'Discovery & Research',
      description: 'We begin by conducting a comprehensive analysis of your business, goals, target audience, and competitive landscape. This deep understanding forms the foundation for a winning strategy tailored to your unique needs.',
    },
    {
      number: '02',
      icon: Lightbulb,
      title: 'Strategy Development',
      description: 'Our expert team crafts a customized digital marketing roadmap designed specifically for your business. We leverage data-driven insights, industry best practices, and innovative approaches to create strategies that deliver results.',
    },
    {
      number: '03',
      icon: Rocket,
      title: 'Implementation & Launch',
      description: 'We execute your strategy with precision and excellence. From launching targeted campaigns to optimizing your website and creating compelling content, we bring your digital vision to life with meticulous attention to detail.',
    },
    {
      number: '04',
      icon: BarChart,
      title: 'Monitor & Optimize',
      description: 'Success requires continuous improvement. We monitor performance in real-time, conduct rigorous testing, and optimize every element to ensure your campaigns consistently deliver maximum ROI and exceed your business objectives.',
    },
  ];

  return (
    <SectionShell id="process" variant="default" className="section-padding border-b">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="font-bold mb-4">
          Our Proven Four-Step Process
        </h2>
        <p className="text-lg text-muted-foreground leading-relaxed">
          A systematic, results-driven approach to digital marketing excellence. We follow a 
          battle-tested methodology that consistently delivers measurable success for our clients.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {steps.map((step) => (
          <Card key={step.number} className="relative overflow-hidden hover-lift">
            <div className="absolute top-0 right-0 text-[100px] font-bold text-muted/5 leading-none select-none">
              {step.number}
            </div>
            <CardHeader>
              <div className="w-10 h-10 rounded-md border bg-accent/50 flex items-center justify-center mb-4">
                <step.icon className="w-5 h-5" />
              </div>
              <div className="flex items-center gap-3 mb-2">
                <span className="text-xs font-bold text-muted-foreground">{step.number}</span>
                <CardTitle className="text-lg">{step.title}</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </SectionShell>
  );
}
