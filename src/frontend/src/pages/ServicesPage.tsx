import { PageShell } from '@/components/layout/PageShell';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from '@tanstack/react-router';
import { services } from '@/content/services';

export function ServicesPage() {
  const navigate = useNavigate();

  const categories = [
    { id: 'design', label: 'Design Services', color: 'bg-blue-500/10 text-blue-700 dark:text-blue-300' },
    { id: 'development', label: 'Development Services', color: 'bg-green-500/10 text-green-700 dark:text-green-300' },
    { id: 'marketing', label: 'Marketing Services', color: 'bg-purple-500/10 text-purple-700 dark:text-purple-300' },
    { id: 'advertising', label: 'Advertising Services', color: 'bg-orange-500/10 text-orange-700 dark:text-orange-300' },
  ];

  return (
    <PageShell
      title="Our Services"
      subtitle="Comprehensive digital marketing solutions designed to drive growth and deliver measurable results for your business."
      centered
    >
      {categories.map((category) => {
        const categoryServices = services.filter((s) => s.category === category.id);
        return (
          <div key={category.id} className="mb-20">
            <div className="mb-8">
              <Badge className={`text-base px-4 py-2 ${category.color}`}>{category.label}</Badge>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categoryServices.map((service) => (
                <Card
                  key={service.slug}
                  className="hover-lift border-2 cursor-pointer group"
                  onClick={() => navigate({ to: '/services/$slug', params: { slug: service.slug } })}
                >
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {service.shortDescription}
                    </p>
                    <div className="flex items-center text-sm font-medium text-primary">
                      Learn More
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        );
      })}
    </PageShell>
  );
}
