import { Award, Users, Rocket, Target } from 'lucide-react';
import { SectionShell } from './SectionShell';

export function ProofSection() {
  const metrics = [
    {
      icon: Users,
      value: '500+',
      label: 'Satisfied Clients',
      description: 'Businesses worldwide trust us',
    },
    {
      icon: Rocket,
      value: '1,200+',
      label: 'Projects Delivered',
      description: 'Successfully completed on time',
    },
    {
      icon: Target,
      value: '250%',
      label: 'Average Growth',
      description: 'Client traffic increase achieved',
    },
    {
      icon: Award,
      value: '15+',
      label: 'Industry Awards',
      description: 'Excellence and innovation recognized',
    },
  ];

  return (
    <SectionShell variant="default" className="section-padding-sm border-b">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
        {metrics.map((metric, index) => (
          <div key={metric.label} className={`text-center space-y-4 ${index < metrics.length - 1 ? 'lg:border-r-2' : ''}`}>
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-lg border-2 bg-muted/50 mb-3">
              <metric.icon className="w-8 h-8" />
            </div>
            <div className="text-5xl lg:text-6xl font-bold tracking-tight">
              {metric.value}
            </div>
            <div>
              <div className="font-bold text-base mb-1">{metric.label}</div>
              <div className="text-sm text-muted-foreground">{metric.description}</div>
            </div>
          </div>
        ))}
      </div>
    </SectionShell>
  );
}
