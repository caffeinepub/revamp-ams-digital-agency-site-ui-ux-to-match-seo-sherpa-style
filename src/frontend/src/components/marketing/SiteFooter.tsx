import { SiFacebook, SiX, SiLinkedin, SiInstagram } from 'react-icons/si';
import { Heart } from 'lucide-react';
import { Link } from '@tanstack/react-router';

export function SiteFooter() {
  const currentYear = new Date().getFullYear();
  
  const appIdentifier = typeof window !== 'undefined' 
    ? encodeURIComponent(window.location.hostname)
    : 'ams-digital-agency';

  const footerLinks = {
    services: [
      { label: 'SEO Optimization', href: '/services/search-engine-optimization' },
      { label: 'Digital Marketing', href: '/services/content-marketing' },
      { label: 'Web Development', href: '/services/website-development' },
      { label: 'PPC Advertising', href: '/services/pay-per-click' },
    ],
    company: [
      { label: 'About Us', href: '/about' },
      { label: 'Our Portfolio', href: '/portfolio' },
      { label: 'Client Reviews', href: '/customer-reviews' },
      { label: 'Contact Us', href: '/contact' },
    ],
    legal: [
      { label: 'Privacy Policy', href: '/privacy-policy' },
      { label: 'Cookie Policy', href: '/cookie-policy' },
      { label: 'Company Profile', href: '/amsdigital-profile' },
    ],
  };

  const socialLinks = [
    { icon: SiFacebook, href: '#', label: 'Facebook' },
    { icon: SiX, href: '#', label: 'X (Twitter)' },
    { icon: SiLinkedin, href: '#', label: 'LinkedIn' },
    { icon: SiInstagram, href: '#', label: 'Instagram' },
  ];

  return (
    <footer className="border-t bg-muted/30">
      <div className="container-wide">
        {/* Main Footer Content */}
        <div className="py-16 md:py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center space-x-3 group mb-6">
              <div className="flex items-center justify-center w-10 h-10 rounded-md bg-foreground transition-transform group-hover:scale-105">
                <span className="text-background font-bold text-lg">A</span>
              </div>
              <span className="font-bold text-xl tracking-tight">
                AMS Digital Agency
              </span>
            </Link>
            <p className="text-base text-muted-foreground mb-8 max-w-sm leading-relaxed">
              Transforming businesses through innovative digital marketing strategies. 
              We deliver measurable results that drive growth and maximize your online presence.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-11 h-11 rounded-md border-2 flex items-center justify-center hover:bg-foreground hover:text-background hover:border-foreground transition-all text-muted-foreground"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-base mb-6">Services</h4>
            <ul className="space-y-4">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold text-base mb-6">Company</h4>
            <ul className="space-y-4">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-bold text-base mb-6">Legal</h4>
            <ul className="space-y-4">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {currentYear} AMS Digital Agency. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground flex items-center gap-1.5">
              Built with <Heart className="w-3.5 h-3.5 text-destructive fill-destructive" /> using{' '}
              <a
                href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appIdentifier}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground transition-colors font-medium"
              >
                caffeine.ai
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
