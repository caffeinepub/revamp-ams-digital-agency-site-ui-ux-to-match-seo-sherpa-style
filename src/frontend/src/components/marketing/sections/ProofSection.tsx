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
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
        {metrics.map((metric, index) => (
          <div key={metric.label} className={`text-center space-y-2 ${index < metrics.length - 1 ? 'lg:border-r' : ''}`}>
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-md border bg-accent/50 mb-2">
              <metric.icon className="w-6 h-6" />
            </div>
            <div className="text-4xl lg:text-5xl font-bold tracking-tight">
              {metric.value}
            </div>
            <div>
              <div className="font-medium text-sm">{metric.label}</div>
              <div className="text-xs text-muted-foreground">{metric.description}</div>
            </div>
          </div>
        ))}
      </div>
    </SectionShell>
  );
}
