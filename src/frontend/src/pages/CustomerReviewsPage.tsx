import { PageShell } from '@/components/layout/PageShell';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle2 } from 'lucide-react';
import { reviews } from '@/content/reviews';

export function CustomerReviewsPage() {
  return (
    <PageShell
      title="Client Success Stories"
      subtitle="Hear directly from businesses that have transformed their digital presence and achieved remarkable growth with AMS Digital."
      centered
    >
      <div className="grid md:grid-cols-2 gap-8">
        {reviews.map((review) => (
          <Card key={review.id} className="border-2">
            <CardContent className="p-8">
              <div className="flex items-center justify-between mb-4">
                <Badge variant="secondary">{review.project}</Badge>
                <div className="flex gap-1">
                  {[...Array(review.rating)].map((_, i) => (
                    <span key={i} className="text-warning text-xl">★</span>
                  ))}
                </div>
              </div>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed italic">
                "{review.quote}"
              </p>
              {review.outcome && (
                <div className="mb-6 p-4 bg-success/10 rounded-lg border-2 border-success/20">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-bold text-sm mb-1">Results Achieved:</div>
                      <p className="text-sm font-medium">{review.outcome}</p>
                    </div>
                  </div>
                </div>
              )}
              <div className="pt-6 border-t">
                <div className="font-bold text-lg">{review.client}</div>
                <div className="text-muted-foreground">{review.role}</div>
                <div className="text-sm text-muted-foreground mt-1">{review.company}</div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </PageShell>
  );
}
