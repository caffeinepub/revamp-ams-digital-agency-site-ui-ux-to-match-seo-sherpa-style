import { PageShell } from '@/components/layout/PageShell';
import { Card, CardContent } from '@/components/ui/card';
import { legalPolicies } from '@/content/legalPolicies';

export function PrivacyPolicyPage() {
  const { privacy } = legalPolicies;

  return (
    <PageShell narrow>
      <div className="mb-12">
        <h1 className="mb-4">{privacy.title}</h1>
        <p className="text-muted-foreground">Last Updated: {privacy.lastUpdated}</p>
      </div>

      <div className="prose prose-lg max-w-none">
        {privacy.sections.map((section, idx) => (
          <Card key={idx} className="mb-6 border-2">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4">{section.heading}</h2>
              <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                {section.content}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </PageShell>
  );
}
