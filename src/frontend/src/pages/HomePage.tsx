import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, CheckCircle2, TrendingUp, Users, Award } from 'lucide-react';
import { useNavigate } from '@tanstack/react-router';
import { siteCopy } from '@/content/siteCopy';
import { caseStudies } from '@/content/caseStudies';
import { reviews } from '@/content/reviews';

export function HomePage() {
  const navigate = useNavigate();

  return (
    <>
      {/* Hero Section */}
      <section className="section-padding-lg bg-gradient-to-b from-muted/30 to-background">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-6 text-base px-4 py-2">{siteCopy.hero.badge}</Badge>
              <h1 className="mb-6">{siteCopy.hero.headline}</h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                {siteCopy.hero.subheadline}
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="text-base" onClick={() => navigate({ to: '/portfolio' })}>
                  {siteCopy.hero.primaryCta}
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button size="lg" variant="outline" className="text-base" onClick={() => navigate({ to: '/contact' })}>
                  {siteCopy.hero.secondaryCta}
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src="/assets/generated/ams-hero-visual.dim_1600x900.png"
                alt="Digital Marketing Success"
                className="w-full rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Proof Section */}
      <section className="section-padding border-y bg-muted/20">
        <div className="container-wide">
          <h2 className="text-center mb-12">{siteCopy.proof.title}</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {siteCopy.proof.metrics.map((metric, idx) => (
              <div key={idx} className="text-center">
                <div className="text-5xl font-bold mb-2">{metric.value}</div>
                <div className="text-muted-foreground">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Case Studies */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="text-center mb-16">
            <h2 className="mb-4">Client Success Stories</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Real results from real businesses. See how we've helped companies like yours achieve transformative growth.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {caseStudies.slice(0, 3).map((study) => (
              <Card key={study.slug} className="hover-lift border-2 cursor-pointer" onClick={() => navigate({ to: '/portfolio/$slug', params: { slug: study.slug } })}>
                <div className="aspect-[4/3] overflow-hidden bg-muted">
                  <img
                    src={study.thumbnail}
                    alt={study.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <Badge variant="secondary" className="mb-3">{study.industry}</Badge>
                  <h3 className="text-2xl font-bold mb-3">{study.title}</h3>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    {study.outcome.metrics.slice(0, 2).map((metric, idx) => (
                      <div key={idx}>
                        <div className="text-2xl font-bold text-success">{metric.value}</div>
                        <div className="text-sm text-muted-foreground">{metric.label}</div>
                      </div>
                    ))}
                  </div>
                  <p className="text-muted-foreground line-clamp-2">{study.challenge}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center">
            <Button size="lg" variant="outline" onClick={() => navigate({ to: '/portfolio' })}>
              View All Success Stories
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-muted/30">
        <div className="container-wide">
          <div className="text-center mb-16">
            <h2 className="mb-4">Why Businesses Choose AMS Digital</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We're not just another agency. We're your partner in growth, committed to delivering results that matter.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2">
              <CardContent className="p-8">
                <div className="w-14 h-14 rounded-lg bg-success/10 flex items-center justify-center mb-6">
                  <TrendingUp className="w-7 h-7 text-success" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Proven Results</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Our clients achieve an average of 285% growth in their key metrics. We focus on outcomes, not just activities.
                </p>
              </CardContent>
            </Card>
            <Card className="border-2">
              <CardContent className="p-8">
                <div className="w-14 h-14 rounded-lg bg-success/10 flex items-center justify-center mb-6">
                  <Users className="w-7 h-7 text-success" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Expert Team</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Our certified specialists bring deep expertise across all digital marketing channels and industries.
                </p>
              </CardContent>
            </Card>
            <Card className="border-2">
              <CardContent className="p-8">
                <div className="w-14 h-14 rounded-lg bg-success/10 flex items-center justify-center mb-6">
                  <Award className="w-7 h-7 text-success" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Full Transparency</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Clear reporting, honest communication, and complete visibility into your campaigns and results.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="text-center mb-16">
            <h2 className="mb-4">What Our Clients Say</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Don't just take our word for it. Hear from businesses that have transformed their digital presence with AMS Digital.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {reviews.slice(0, 3).map((review) => (
              <Card key={review.id} className="border-2">
                <CardContent className="p-8">
                  <div className="flex gap-1 mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <span key={i} className="text-warning text-xl">★</span>
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6 leading-relaxed">"{review.quote}"</p>
                  {review.outcome && (
                    <div className="mb-6 p-4 bg-success/10 rounded-lg">
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                        <p className="text-sm font-medium">{review.outcome}</p>
                      </div>
                    </div>
                  )}
                  <div>
                    <div className="font-bold">{review.client}</div>
                    <div className="text-sm text-muted-foreground">{review.role}, {review.company}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button size="lg" variant="outline" onClick={() => navigate({ to: '/customer-reviews' })}>
              Read More Reviews
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-foreground text-background">
        <div className="container-narrow text-center">
          <h2 className="mb-6 text-background">{siteCopy.cta.title}</h2>
          <p className="text-xl mb-8 opacity-90 leading-relaxed">
            {siteCopy.cta.description}
          </p>
          <Button size="lg" variant="secondary" className="text-base" onClick={() => navigate({ to: '/contact' })}>
            {siteCopy.cta.buttonText}
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>
    </>
  );
}
