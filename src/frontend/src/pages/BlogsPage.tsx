import { PageShell } from '@/components/layout/PageShell';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock } from 'lucide-react';
import { blogPosts } from '@/content/blogPosts';

export function BlogsPage() {
  return (
    <PageShell
      title="Digital Marketing Insights"
      subtitle="Stay ahead with the latest strategies, trends, and best practices in digital marketing."
      centered
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <Card key={post.slug} className="hover-lift border-2 cursor-pointer group">
            <CardContent className="p-6">
              <Badge variant="secondary" className="mb-4">{post.category}</Badge>
              <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                {post.title}
              </h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">{post.excerpt}</p>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {post.readTime}
                </div>
              </div>
              <div className="mt-4 pt-4 border-t">
                <span className="text-sm font-medium">By {post.author}</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </PageShell>
  );
}
