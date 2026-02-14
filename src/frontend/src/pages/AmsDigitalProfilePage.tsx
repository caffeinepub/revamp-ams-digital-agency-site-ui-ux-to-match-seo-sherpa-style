import { PageShell } from '@/components/layout/PageShell';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle2 } from 'lucide-react';
import { companyPages } from '@/content/companyPages';

export function AmsDigitalProfilePage() {
  const { profile } = companyPages;

  return (
    <PageShell
      title={profile.title}
      subtitle={profile.subtitle}
      centered
    >
      <div className="max-w-3xl mx-auto mb-16">
        <p className="text-xl text-muted-foreground leading-relaxed">{profile.overview}</p>
      </div>

      {/* Services */}
      <div className="mb-16">
        <h2 className="text-center mb-12">{profile.services.title}</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {profile.services.categories.map((category, idx) => (
            <Card key={idx} className="border-2">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6">{category.name}</h3>
                <ul className="space-y-3">
                  {category.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Stats */}
      <Card className="border-2 mb-16 bg-muted/30">
        <CardContent className="p-12">
          <h2 className="text-center mb-12">{profile.stats.title}</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {profile.stats.metrics.map((metric, idx) => (
              <div key={idx} className="text-center">
                <div className="text-5xl font-bold mb-2">{metric.value}</div>
                <div className="text-muted-foreground">{metric.label}</div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Industries */}
      <div className="mb-16">
        <h2 className="text-center mb-12">{profile.industries.title}</h2>
        <div className="flex flex-wrap justify-center gap-3">
          {profile.industries.list.map((industry, idx) => (
            <Badge key={idx} variant="secondary" className="text-base px-4 py-2">
              {industry}
            </Badge>
          ))}
        </div>
      </div>

      {/* Certifications */}
      <Card className="border-2">
        <CardContent className="p-12">
          <h2 className="text-center mb-8">{profile.certifications.title}</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {profile.certifications.list.map((cert, idx) => (
              <Badge key={idx} variant="outline" className="text-base px-4 py-2">
                {cert}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </PageShell>
  );
}
