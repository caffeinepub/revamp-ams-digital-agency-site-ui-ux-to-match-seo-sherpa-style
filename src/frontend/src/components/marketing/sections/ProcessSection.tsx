import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Search, Lightbulb, Rocket, BarChart } from 'lucide-react';
import { SectionShell } from './SectionShell';

export function ProcessSection() {
  const steps = [
    {
      number: '01',
      icon: Search,
      title: 'Discovery & Research',
      description: 'We start by understanding your business, goals, target audience, and competitive landscape to create a solid foundation for success.',
    },
    {
      number: '02',
      icon: Lightbulb,
      title: 'Strategy Development',
      description: 'Our team crafts a customized digital marketing strategy tailored to your unique needs, leveraging data-driven insights and industry best practices.',
    },
    {
      number: '03',
      icon: Rocket,
      title: 'Implementation & Launch',
      description: 'We execute your strategy with precision, launching campaigns, optimizing your website, and creating compelling content that resonates with your audience.',
    },
    {
      number: '04',
      icon: BarChart,
      title: 'Monitor & Optimize',
      description: 'Continuous monitoring, testing, and optimization ensure your campaigns deliver maximum ROI. We adapt strategies based on real-time performance data.',
    },
  ];

  return (
    <SectionShell id="process" variant="default" className="section-padding">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="font-bold mb-4">
          Our Proven Process
        </h2>
        <p className="text-xl text-muted-foreground">
          A systematic approach to digital marketing success. We follow a proven methodology 
          that delivers consistent, measurable results.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
        {steps.map((step, index) => (
          <Card key={step.number} className="relative overflow-hidden border-2 hover:border-primary/20 transition-colors">
            <div className="absolute top-0 right-0 text-[120px] font-bold text-muted/5 leading-none">
              {step.number}
            </div>
            <CardHeader>
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center mb-4">
                <step.icon className="w-7 h-7 text-primary" />
              </div>
              <div className="flex items-center gap-3 mb-2">
                <span className="text-sm font-bold text-primary">{step.number}</span>
                <CardTitle className="text-xl">{step.title}</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </SectionShell>
  );
}
