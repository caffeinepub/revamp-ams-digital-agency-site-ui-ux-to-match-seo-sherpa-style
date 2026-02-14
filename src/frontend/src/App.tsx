import { RouterProvider, createRouter, createRootRoute, createRoute, Outlet } from '@tanstack/react-router';
import { SiteHeader } from './components/marketing/SiteHeader';
import { SiteFooter } from './components/marketing/SiteFooter';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { PortfolioPage } from './pages/PortfolioPage';
import { CaseStudyDetailPage } from './pages/CaseStudyDetailPage';
import { BlogsPage } from './pages/BlogsPage';
import { ContactPage } from './pages/ContactPage';
import { CustomerReviewsPage } from './pages/CustomerReviewsPage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { CookiePolicyPage } from './pages/CookiePolicyPage';
import { AmsDigitalProfilePage } from './pages/AmsDigitalProfilePage';
import { ServicesPage } from './pages/ServicesPage';
import { ServiceDetailPage } from './pages/ServiceDetailPage';

// Root layout component
function RootLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        <Outlet />
      </main>
      <SiteFooter />
    </div>
  );
}

// Create root route
const rootRoute = createRootRoute({
  component: RootLayout,
});

// Create all page routes
const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: HomePage,
});

const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/about',
  component: AboutPage,
});

const portfolioRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/portfolio',
  component: PortfolioPage,
});

const caseStudyDetailRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/portfolio/$slug',
  component: CaseStudyDetailPage,
});

const blogsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/blogs',
  component: BlogsPage,
});

const contactRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/contact',
  component: ContactPage,
});

const customerReviewsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/customer-reviews',
  component: CustomerReviewsPage,
});

const privacyPolicyRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/privacy-policy',
  component: PrivacyPolicyPage,
});

const cookiePolicyRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/cookie-policy',
  component: CookiePolicyPage,
});

const amsDigitalProfileRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/amsdigital-profile',
  component: AmsDigitalProfilePage,
});

const servicesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/services',
  component: ServicesPage,
});

const serviceDetailRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/services/$slug',
  component: ServiceDetailPage,
});

// Build route tree
const routeTree = rootRoute.addChildren([
  indexRoute,
  aboutRoute,
  portfolioRoute,
  caseStudyDetailRoute,
  blogsRoute,
  contactRoute,
  customerReviewsRoute,
  privacyPolicyRoute,
  cookiePolicyRoute,
  amsDigitalProfileRoute,
  servicesRoute,
  serviceDetailRoute,
]);

// Create router instance
const router = createRouter({
  routeTree,
  defaultPreload: 'intent',
});

// Register router for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

function App() {
  return <RouterProvider router={router} />;
}

export default App;
