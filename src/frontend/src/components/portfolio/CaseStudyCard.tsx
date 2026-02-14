import { Link } from '@tanstack/react-router';
import { ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CaseStudy } from '@/content/types';

interface CaseStudyCardProps {
  caseStudy: CaseStudy;
}

export function CaseStudyCard({ caseStudy }: CaseStudyCardProps) {
  return (
    <Link to="/portfolio/$slug" params={{ slug: caseStudy.slug }} className="group block">
      <Card className="overflow-hidden hover-lift border-2">
        <div className="aspect-[4/3] overflow-hidden bg-muted">
          <img
            src={caseStudy.thumbnail}
            alt={caseStudy.title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <CardContent className="p-6">
          <div className="flex items-center gap-2 mb-3">
            <Badge variant="secondary">{caseStudy.industry}</Badge>
            <span className="text-sm text-muted-foreground">{caseStudy.client}</span>
          </div>
          <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
            {caseStudy.title}
          </h3>
          <p className="text-muted-foreground mb-4 line-clamp-2">
            {caseStudy.challenge}
          </p>
          <div className="flex items-center justify-between">
            <div className="flex gap-4">
              {caseStudy.outcome.metrics.slice(0, 2).map((metric, idx) => (
                <div key={idx}>
                  <div className="text-lg font-bold text-success">{metric.value}</div>
                  <div className="text-xs text-muted-foreground">{metric.label}</div>
                </div>
              ))}
            </div>
            <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-foreground group-hover:translate-x-1 transition-all" />
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
