import { useParams, useNavigate } from '@tanstack/react-router';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, CheckCircle2, ArrowRight } from 'lucide-react';
import { services } from '@/content/services';

export function ServiceDetailPage() {
  const { slug } = useParams({ from: '/services/$slug' });
  const navigate = useNavigate();
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return (
      <div className="section-padding">
        <div className="container-narrow text-center">
          <h1 className="mb-4">Service Not Found</h1>
          <Button onClick={() => navigate({ to: '/services' })}>
            <ArrowLeft className="mr-2 w-5 h-5" />
            Back to Services
          </Button>
        </div>
      </div>
    );
  }

  const categoryColors = {
    design: 'bg-blue-500/10 text-blue-700 dark:text-blue-300',
    development: 'bg-green-500/10 text-green-700 dark:text-green-300',
    marketing: 'bg-purple-500/10 text-purple-700 dark:text-purple-300',
    advertising: 'bg-orange-500/10 text-orange-700 dark:text-orange-300',
  };

  return (
    <>
      {/* Hero */}
      <section className="section-padding-sm bg-muted/30">
        <div className="container-narrow">
          <Button variant="ghost" className="mb-8" onClick={() => navigate({ to: '/services' })}>
            <ArrowLeft className="mr-2 w-5 h-5" />
            Back to Services
          </Button>
          <Badge className={`text-base px-4 py-2 mb-6 ${categoryColors[service.category]}`}>
            {service.category.charAt(0).toUpperCase() + service.category.slice(1)} Service
          </Badge>
          <h1 className="mb-6">{service.title}</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">{service.overview}</p>
        </div>
      </section>

      {/* Deliverables */}
      <section className="section-padding-sm">
        <div className="container-narrow">
          <h2 className="mb-8">What You Get</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {service.deliverables.map((deliverable, idx) => (
              <Card key={idx} className="border-2">
                <CardContent className="p-4 flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{deliverable}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding-sm bg-muted/30">
        <div className="container-narrow">
          <h2 className="mb-8">Our Process</h2>
          <div className="space-y-6">
            {service.process.map((step, idx) => (
              <Card key={idx} className="border-2">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold flex-shrink-0">
                      {idx + 1}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{step.step}</h3>
                      <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="section-padding-sm">
        <div className="container-narrow">
          <h2 className="mb-8">Expected Outcomes</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {service.outcomes.map((outcome, idx) => (
              <Card key={idx} className="border-2 bg-success/5">
                <CardContent className="p-6 flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-success flex-shrink-0 mt-0.5" />
                  <span className="text-lg leading-relaxed">{outcome}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Related Services */}
      {service.relatedServices.length > 0 && (
        <section className="section-padding-sm bg-muted/30">
          <div className="container-narrow">
            <h2 className="mb-8">Related Services</h2>
            <div className="grid md:grid-cols-3 gap-4">
              {service.relatedServices.map((relatedSlug) => {
                const related = services.find((s) => s.slug === relatedSlug);
                if (!related) return null;
                return (
                  <Card
                    key={related.slug}
                    className="hover-lift border-2 cursor-pointer group"
                    onClick={() => navigate({ to: '/services/$slug', params: { slug: related.slug } })}
                  >
                    <CardContent className="p-4">
                      <h4 className="font-bold mb-2 group-hover:text-primary transition-colors">
                        {related.title}
                      </h4>
                      <div className="flex items-center text-sm text-primary">
                        Learn More
                        <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="section-padding bg-foreground text-background">
        <div className="container-narrow text-center">
          <h2 className="mb-6 text-background">Ready to Get Started?</h2>
          <p className="text-xl mb-8 opacity-90 leading-relaxed">
            Let's discuss how {service.title.toLowerCase()} can help your business achieve its goals.
          </p>
          <Button size="lg" variant="secondary" onClick={() => navigate({ to: '/contact' })}>
            Schedule Free Consultation
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>
    </>
  );
}
