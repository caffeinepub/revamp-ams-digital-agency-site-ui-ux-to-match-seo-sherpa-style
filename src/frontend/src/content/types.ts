export interface CaseStudy {
  slug: string;
  title: string;
  client: string;
  industry: string;
  thumbnail: string;
  heroImage: string;
  challenge: string;
  approach: string[];
  outcome: {
    description: string;
    metrics: {
      label: string;
      value: string;
    }[];
  };
  services: string[];
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
}

export interface Service {
  slug: string;
  title: string;
  category: 'design' | 'development' | 'marketing' | 'advertising';
  icon: string;
  shortDescription: string;
  overview: string;
  deliverables: string[];
  process: {
    step: string;
    description: string;
  }[];
  outcomes: string[];
  relatedServices: string[];
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  category: string;
  readTime: string;
  thumbnail?: string;
}

export interface Review {
  id: string;
  client: string;
  company: string;
  role: string;
  rating: number;
  quote: string;
  outcome?: string;
  project: string;
  avatar?: string;
}
