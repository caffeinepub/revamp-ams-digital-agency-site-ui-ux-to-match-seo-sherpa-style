import { Award, Users, Rocket, Target } from 'lucide-react';
import { SectionShell } from './SectionShell';

export function ProofSection() {
  const metrics = [
    {
      icon: Users,
      value: '500+',
      label: 'Happy Clients',
      description: 'Businesses trust us',
    },
    {
      icon: Rocket,
      value: '1,200+',
      label: 'Projects Completed',
      description: 'Successfully delivered',
    },
    {
      icon: Target,
      value: '250%',
      label: 'Average Growth',
      description: 'Client traffic increase',
    },
    {
      icon: Award,
      value: '15+',
      label: 'Industry Awards',
      description: 'Recognition & excellence',
    },
  ];

  return (
    <SectionShell variant="default" className="section-padding-sm">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
        {metrics.map((metric) => (
          <div key={metric.label} className="text-center space-y-3">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 mb-2">
              <metric.icon className="w-8 h-8 text-primary" />
            </div>
            <div className="text-4xl lg:text-5xl font-bold gradient-text">
              {metric.value}
            </div>
            <div>
              <div className="font-semibold text-lg">{metric.label}</div>
              <div className="text-sm text-muted-foreground">{metric.description}</div>
            </div>
          </div>
        ))}
      </div>
    </SectionShell>
  );
}
