import { PageShell } from '@/components/layout/PageShell';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Target, Eye, Users, Lightbulb } from 'lucide-react';
import { useNavigate } from '@tanstack/react-router';
import { companyPages } from '@/content/companyPages';

export function AboutPage() {
  const navigate = useNavigate();
  const { about } = companyPages;

  const valueIcons = [Target, Eye, Lightbulb, Users];

  return (
    <>
      <PageShell
        title={about.title}
        subtitle={about.subtitle}
        centered
      >
        <div className="max-w-3xl mx-auto mb-16">
          <p className="text-xl text-muted-foreground leading-relaxed">{about.intro}</p>
        </div>

        {/* Mission */}
        <Card className="border-2 mb-16">
          <CardContent className="p-12 text-center">
            <h2 className="mb-6">{about.mission.title}</h2>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              {about.mission.content}
            </p>
          </CardContent>
        </Card>

        {/* Values */}
        <div className="mb-16">
          <h2 className="text-center mb-12">Our Values</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {about.values.map((value, idx) => {
              const Icon = valueIcons[idx];
              return (
                <Card key={idx} className="border-2">
                  <CardContent className="p-8">
                    <div className="w-14 h-14 rounded-lg bg-success/10 flex items-center justify-center mb-6">
                      <Icon className="w-7 h-7 text-success" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Team */}
        <Card className="border-2 bg-muted/30 mb-16">
          <CardContent className="p-12">
            <h2 className="mb-6">{about.team.title}</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">{about.team.description}</p>
          </CardContent>
        </Card>

        {/* Approach */}
        <Card className="border-2 mb-16">
          <CardContent className="p-12">
            <h2 className="mb-6">{about.approach.title}</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">{about.approach.description}</p>
          </CardContent>
        </Card>

        {/* CTA */}
        <div className="text-center">
          <h3 className="text-3xl font-bold mb-6">Ready to Work Together?</h3>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help your business achieve its digital marketing goals.
          </p>
          <Button size="lg" onClick={() => navigate({ to: '/contact' })}>
            Get in Touch
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </PageShell>
    </>
  );
}
