import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Star } from 'lucide-react';
import { SectionShell } from './SectionShell';

export function TestimonialsSection() {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO, TechStart Inc.',
      content: 'AMS Digital transformed our online presence completely. Within 6 months, our organic traffic increased by 300% and our conversion rate doubled. Their team is professional, responsive, and truly understands digital marketing.',
      initials: 'SJ',
      rating: 5,
    },
    {
      name: 'Michael Chen',
      role: 'Marketing Director, GrowthCo',
      content: 'Working with AMS Digital has been a game-changer for our business. Their data-driven approach and strategic insights helped us achieve a 10x ROI on our marketing spend. Highly recommended!',
      initials: 'MC',
      rating: 5,
    },
    {
      name: 'Emily Rodriguez',
      role: 'Founder, EcoShop',
      content: 'The team at AMS Digital is exceptional. They took the time to understand our business goals and delivered a comprehensive strategy that exceeded our expectations. Our sales have tripled since partnering with them.',
      initials: 'ER',
      rating: 5,
    },
  ];

  return (
    <SectionShell id="testimonials" variant="muted" className="section-padding">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="font-bold mb-4">
          Trusted by Industry Leaders
        </h2>
        <p className="text-xl text-muted-foreground">
          Don't just take our word for it. Here's what our clients have to say about 
          working with AMS Digital Agency.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {testimonials.map((testimonial) => (
          <Card key={testimonial.name} className="hover-lift">
            <CardContent className="pt-6">
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>
              <div className="flex items-center gap-3">
                <Avatar className="w-12 h-12">
                  <AvatarFallback className="bg-gradient-to-br from-primary to-secondary text-white font-semibold">
                    {testimonial.initials}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </SectionShell>
  );
}
