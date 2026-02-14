import { useParams, useNavigate } from '@tanstack/react-router';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, CheckCircle2, Quote } from 'lucide-react';
import { caseStudies } from '@/content/caseStudies';

export function CaseStudyDetailPage() {
  const { slug } = useParams({ from: '/portfolio/$slug' });
  const navigate = useNavigate();
  const caseStudy = caseStudies.find((cs) => cs.slug === slug);

  if (!caseStudy) {
    return (
      <div className="section-padding">
        <div className="container-narrow text-center">
          <h1 className="mb-4">Case Study Not Found</h1>
          <Button onClick={() => navigate({ to: '/portfolio' })}>
            <ArrowLeft className="mr-2 w-5 h-5" />
            Back to Portfolio
          </Button>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Hero */}
      <section className="section-padding-sm bg-muted/30">
        <div className="container-wide">
          <Button variant="ghost" className="mb-8" onClick={() => navigate({ to: '/portfolio' })}>
            <ArrowLeft className="mr-2 w-5 h-5" />
            Back to Portfolio
          </Button>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Badge variant="secondary" className="text-base px-4 py-2">{caseStudy.industry}</Badge>
                <span className="text-muted-foreground">{caseStudy.client}</span>
              </div>
              <h1 className="mb-6">{caseStudy.title}</h1>
              <div className="flex flex-wrap gap-2">
                {caseStudy.services.map((service, idx) => (
                  <Badge key={idx} variant="outline">{service}</Badge>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                src={caseStudy.heroImage}
                alt={caseStudy.title}
                className="w-full rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Metrics */}
      <section className="section-padding-sm border-y bg-background">
        <div className="container-wide">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {caseStudy.outcome.metrics.map((metric, idx) => (
              <div key={idx} className="text-center">
                <div className="text-5xl font-bold text-success mb-2">{metric.value}</div>
                <div className="text-muted-foreground">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Challenge */}
      <section className="section-padding-sm">
        <div className="container-narrow">
          <h2 className="mb-6">The Challenge</h2>
          <p className="text-xl text-muted-foreground leading-relaxed">{caseStudy.challenge}</p>
        </div>
      </section>

      {/* Approach */}
      <section className="section-padding-sm bg-muted/30">
        <div className="container-narrow">
          <h2 className="mb-8">Our Approach</h2>
          <div className="space-y-4">
            {caseStudy.approach.map((step, idx) => (
              <Card key={idx} className="border-2">
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-success/10 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-5 h-5 text-success" />
                  </div>
                  <p className="text-lg leading-relaxed">{step}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Outcome */}
      <section className="section-padding-sm">
        <div className="container-narrow">
          <h2 className="mb-6">The Outcome</h2>
          <p className="text-xl text-muted-foreground leading-relaxed mb-8">{caseStudy.outcome.description}</p>
          <div className="grid md:grid-cols-2 gap-6">
            {caseStudy.outcome.metrics.map((metric, idx) => (
              <Card key={idx} className="border-2 bg-success/5">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl font-bold text-success mb-2">{metric.value}</div>
                  <div className="text-muted-foreground">{metric.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      {caseStudy.testimonial && (
        <section className="section-padding-sm bg-muted/30">
          <div className="container-narrow">
            <Card className="border-2">
              <CardContent className="p-12">
                <Quote className="w-12 h-12 text-muted-foreground/30 mb-6" />
                <p className="text-2xl font-medium mb-8 leading-relaxed">"{caseStudy.testimonial.quote}"</p>
                <div>
                  <div className="font-bold text-lg">{caseStudy.testimonial.author}</div>
                  <div className="text-muted-foreground">{caseStudy.testimonial.role}</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="section-padding bg-foreground text-background">
        <div className="container-narrow text-center">
          <h2 className="mb-6 text-background">Ready to Achieve Similar Results?</h2>
          <p className="text-xl mb-8 opacity-90 leading-relaxed">
            Let's discuss how we can help your business achieve transformative growth.
          </p>
          <Button size="lg" variant="secondary" onClick={() => navigate({ to: '/contact' })}>
            Schedule Free Consultation
          </Button>
        </div>
      </section>
    </>
  );
}
