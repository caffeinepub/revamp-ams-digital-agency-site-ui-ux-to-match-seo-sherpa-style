import { ReactNode } from 'react';

interface PageShellProps {
  children: ReactNode;
  title?: string;
  subtitle?: string;
  centered?: boolean;
  narrow?: boolean;
}

export function PageShell({ children, title, subtitle, centered = false, narrow = false }: PageShellProps) {
  return (
    <div className="section-padding">
      <div className={narrow ? 'container-narrow' : 'container-wide'}>
        {(title || subtitle) && (
          <div className={`mb-16 ${centered ? 'text-center' : ''}`}>
            {title && (
              <h1 className="mb-4">{title}</h1>
            )}
            {subtitle && (
              <p className="text-xl text-muted-foreground max-w-3xl ${centered ? 'mx-auto' : ''}">{subtitle}</p>
            )}
          </div>
        )}
        {children}
      </div>
    </div>
  );
}
