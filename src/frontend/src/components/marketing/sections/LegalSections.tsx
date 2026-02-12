import { SectionShell } from './SectionShell';
import { Separator } from '@/components/ui/separator';

export function LegalSections() {
  return (
    <SectionShell variant="default" className="section-padding">
      <div className="max-w-4xl mx-auto space-y-16">
        {/* Privacy Policy */}
        <div id="privacy" className="scroll-mt-20">
          <h2 className="text-3xl font-bold mb-6">Privacy Policy</h2>
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p className="text-sm text-muted-foreground">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
            
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Introduction</h3>
              <p>
                AMS Digital Agency ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy 
                explains how we collect, use, disclose, and safeguard your information when you visit our website or 
                use our services. Please read this privacy policy carefully. If you do not agree with the terms of 
                this privacy policy, please do not access the site.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Information We Collect</h3>
              <p className="mb-3">
                We may collect information about you in a variety of ways. The information we may collect on the 
                site includes:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong className="text-foreground">Personal Data:</strong> Personally identifiable information, 
                  such as your name, email address, and telephone number, that you voluntarily give to us when you 
                  contact us or express an interest in obtaining information about us or our services.
                </li>
                <li>
                  <strong className="text-foreground">Derivative Data:</strong> Information our servers automatically 
                  collect when you access the site, such as your IP address, browser type, operating system, access 
                  times, and the pages you have viewed directly before and after accessing the site.
                </li>
                <li>
                  <strong className="text-foreground">Financial Data:</strong> Financial information, such as data 
                  related to your payment method that we may collect when you purchase, order, or request information 
                  about our services from the site.
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Use of Your Information</h3>
              <p className="mb-3">
                Having accurate information about you permits us to provide you with a smooth, efficient, and 
                customized experience. Specifically, we may use information collected about you via the site to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Create and manage your account</li>
                <li>Process your transactions and send you related information</li>
                <li>Email you regarding your account or order</li>
                <li>Fulfill and manage purchases, orders, payments, and other transactions</li>
                <li>Generate a personal profile about you to make future visits more personalized</li>
                <li>Increase the efficiency and operation of the site</li>
                <li>Monitor and analyze usage and trends to improve your experience</li>
                <li>Notify you of updates to our services</li>
                <li>Perform other business activities as needed</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Disclosure of Your Information</h3>
              <p>
                We may share information we have collected about you in certain situations. Your information may be 
                disclosed as follows: by law or to protect rights, with third-party service providers, for marketing 
                communications (with your consent), with business partners, and in connection with business transfers. 
                We do not sell your personal information to third parties.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Security of Your Information</h3>
              <p>
                We use administrative, technical, and physical security measures to help protect your personal 
                information. While we have taken reasonable steps to secure the personal information you provide to us, 
                please be aware that despite our efforts, no security measures are perfect or impenetrable, and no 
                method of data transmission can be guaranteed against any interception or other type of misuse.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Contact Us</h3>
              <p>
                If you have questions or comments about this Privacy Policy, please contact us at privacy@amsdigital.agency
              </p>
            </div>
          </div>
        </div>

        <Separator />

        {/* Terms of Service */}
        <div id="terms" className="scroll-mt-20">
          <h2 className="text-3xl font-bold mb-6">Terms of Service</h2>
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p className="text-sm text-muted-foreground">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>

            <div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Agreement to Terms</h3>
              <p>
                These Terms of Service constitute a legally binding agreement made between you, whether personally or 
                on behalf of an entity ("you") and AMS Digital Agency ("we," "us" or "our"), concerning your access to 
                and use of our website and services. You agree that by accessing the site, you have read, understood, 
                and agree to be bound by all of these Terms of Service.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Services</h3>
              <p>
                AMS Digital Agency provides digital marketing services including but not limited to SEO optimization, 
                digital marketing campaigns, web development, content strategy, analytics, and growth marketing. The 
                specific services provided to you will be outlined in a separate service agreement or statement of work.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-foreground mb-3">User Representations</h3>
              <p className="mb-3">By using the site, you represent and warrant that:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>All registration information you submit will be true, accurate, current, and complete</li>
                <li>You will maintain the accuracy of such information and promptly update such information as necessary</li>
                <li>You have the legal capacity and you agree to comply with these Terms of Service</li>
                <li>You will not access the site through automated or non-human means</li>
                <li>You will not use the site for any illegal or unauthorized purpose</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Payment Terms</h3>
              <p>
                All fees for services are due as specified in your service agreement. We accept various forms of payment 
                as outlined in your invoice. Late payments may result in suspension of services and may incur additional 
                fees. All fees are non-refundable except as required by law or as specifically stated in your service 
                agreement.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Intellectual Property Rights</h3>
              <p>
                Unless otherwise indicated, the site is our proprietary property and all source code, databases, 
                functionality, software, website designs, audio, video, text, photographs, and graphics on the site 
                (collectively, the "Content") are owned or controlled by us or licensed to us. The Content and the 
                marks are protected by copyright and trademark laws.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Limitation of Liability</h3>
              <p>
                In no event will we or our directors, employees, or agents be liable to you or any third party for any 
                direct, indirect, consequential, exemplary, incidental, special, or punitive damages, including lost 
                profit, lost revenue, loss of data, or other damages arising from your use of the site or services, 
                even if we have been advised of the possibility of such damages.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Termination</h3>
              <p>
                These Terms of Service shall remain in full force and effect while you use the site. We reserve the 
                right to deny access to the site to anyone for any reason at any time. Service agreements may be 
                terminated by either party with written notice as specified in the service agreement.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Contact Us</h3>
              <p>
                If you have any questions about these Terms of Service, please contact us at legal@amsdigital.agency
              </p>
            </div>
          </div>
        </div>

        <Separator />

        {/* Cookie Policy */}
        <div id="cookies" className="scroll-mt-20">
          <h2 className="text-3xl font-bold mb-6">Cookie Policy</h2>
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p className="text-sm text-muted-foreground">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>

            <div>
              <h3 className="text-xl font-semibold text-foreground mb-3">What Are Cookies</h3>
              <p>
                Cookies are small text files that are placed on your computer or mobile device when you visit a website. 
                They are widely used to make websites work more efficiently and provide information to the owners of the 
                site. Cookies help us understand how you use our site and improve your experience.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-foreground mb-3">How We Use Cookies</h3>
              <p className="mb-3">We use cookies for several reasons:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong className="text-foreground">Essential Cookies:</strong> These cookies are necessary for the 
                  website to function properly. They enable basic functions like page navigation and access to secure 
                  areas of the website.
                </li>
                <li>
                  <strong className="text-foreground">Analytics Cookies:</strong> These cookies help us understand how 
                  visitors interact with our website by collecting and reporting information anonymously. This helps us 
                  improve our website's performance.
                </li>
                <li>
                  <strong className="text-foreground">Functionality Cookies:</strong> These cookies enable the website 
                  to provide enhanced functionality and personalization, such as remembering your preferences.
                </li>
                <li>
                  <strong className="text-foreground">Marketing Cookies:</strong> These cookies are used to track 
                  visitors across websites to display relevant advertisements and measure the effectiveness of our 
                  marketing campaigns.
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Types of Cookies We Use</h3>
              <p className="mb-3">Our website uses the following types of cookies:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong className="text-foreground">Session Cookies:</strong> These are temporary cookies that expire 
                  when you close your browser. They help us maintain your session as you navigate through our site.
                </li>
                <li>
                  <strong className="text-foreground">Persistent Cookies:</strong> These cookies remain on your device 
                  for a set period or until you delete them. They help us recognize you when you return to our site.
                </li>
                <li>
                  <strong className="text-foreground">First-Party Cookies:</strong> These are cookies set by our website 
                  directly.
                </li>
                <li>
                  <strong className="text-foreground">Third-Party Cookies:</strong> These are cookies set by third-party 
                  services we use, such as analytics providers or advertising networks.
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Managing Cookies</h3>
              <p>
                Most web browsers allow you to control cookies through their settings preferences. However, if you limit 
                the ability of websites to set cookies, you may worsen your overall user experience, since it will no 
                longer be personalized to you. You can delete all cookies that are already on your computer and you can 
                set most browsers to prevent them from being placed. If you do this, however, you may have to manually 
                adjust some preferences every time you visit a site.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Third-Party Services</h3>
              <p>
                We use third-party services such as Google Analytics to help us understand how our website is being used. 
                These services may use cookies to collect information about your visits to our site and other websites. 
                The information collected is used to compile reports and help us improve our site. The cookies collect 
                information in an anonymous form, including the number of visitors to the site, where visitors have come 
                to the site from, and the pages they visited.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Updates to This Policy</h3>
              <p>
                We may update this Cookie Policy from time to time to reflect changes in our practices or for other 
                operational, legal, or regulatory reasons. We encourage you to review this policy periodically to stay 
                informed about how we use cookies.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Contact Us</h3>
              <p>
                If you have any questions about our use of cookies, please contact us at privacy@amsdigital.agency
              </p>
            </div>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
