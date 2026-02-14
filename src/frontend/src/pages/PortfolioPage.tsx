import { PageShell } from '@/components/layout/PageShell';
import { CaseStudyCard } from '@/components/portfolio/CaseStudyCard';
import { caseStudies } from '@/content/caseStudies';

export function PortfolioPage() {
  return (
    <PageShell
      title="Client Success Stories"
      subtitle="Real results from real businesses. Explore how we've helped companies across industries achieve transformative growth through strategic digital marketing."
      centered
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {caseStudies.map((study) => (
          <CaseStudyCard key={study.slug} caseStudy={study} />
        ))}
      </div>
    </PageShell>
  );
}
