import { cn } from '@/lib/utils';

interface SectionShellProps {
  children: React.ReactNode;
  variant?: 'default' | 'muted' | 'highlight';
  className?: string;
  id?: string;
}

export function SectionShell({
  children,
  variant = 'default',
  className,
  id,
}: SectionShellProps) {
  const variantStyles = {
    default: 'bg-background',
    muted: 'bg-muted/30',
    highlight: 'bg-accent/5',
  };

  return (
    <section id={id} className={cn(variantStyles[variant], className)}>
      <div className="container-wide">{children}</div>
    </section>
  );
}
