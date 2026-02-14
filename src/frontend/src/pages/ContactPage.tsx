import { useState } from 'react';
import { PageShell } from '@/components/layout/PageShell';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Mail, Phone, MapPin, CheckCircle2 } from 'lucide-react';

export function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Client-side only submission
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', company: '', service: '', message: '' });
    }, 5000);
  };

  return (
    <PageShell
      title="Get in Touch"
      subtitle="Ready to transform your digital presence? Let's discuss how we can help you achieve your goals."
      centered
    >
      <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {/* Contact Form */}
        <Card className="border-2">
          <CardContent className="p-8">
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 rounded-full bg-success/10 flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-8 h-8 text-success" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Thank You!</h3>
                <p className="text-muted-foreground">
                  We've received your message and will get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="john@company.com"
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
                <div>
                  <Label htmlFor="company">Company Name</Label>
                  <Input
                    id="company"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="Your Company"
                  />
                </div>
                <div>
                  <Label htmlFor="service">Service Interest</Label>
                  <Select value={formData.service} onValueChange={(value) => setFormData({ ...formData, service: value })}>
                    <SelectTrigger id="service">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="seo">SEO Optimization</SelectItem>
                      <SelectItem value="ppc">PPC Advertising</SelectItem>
                      <SelectItem value="social">Social Media Marketing</SelectItem>
                      <SelectItem value="content">Content Marketing</SelectItem>
                      <SelectItem value="web">Website Development</SelectItem>
                      <SelectItem value="branding">Branding & Design</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your project and goals..."
                    rows={5}
                  />
                </div>
                <Button type="submit" size="lg" className="w-full">
                  Send Message
                </Button>
              </form>
            )}
          </CardContent>
        </Card>

        {/* Contact Info */}
        <div className="space-y-8">
          <Card className="border-2">
            <CardContent className="p-8">
              <div className="w-14 h-14 rounded-lg bg-success/10 flex items-center justify-center mb-6">
                <Mail className="w-7 h-7 text-success" />
              </div>
              <h3 className="text-xl font-bold mb-2">Email Us</h3>
              <p className="text-muted-foreground mb-4">
                Get in touch via email for inquiries and support.
              </p>
              <a href="mailto:hello@amsdigital.com" className="text-primary font-medium hover:underline">
                hello@amsdigital.com
              </a>
            </CardContent>
          </Card>

          <Card className="border-2">
            <CardContent className="p-8">
              <div className="w-14 h-14 rounded-lg bg-success/10 flex items-center justify-center mb-6">
                <Phone className="w-7 h-7 text-success" />
              </div>
              <h3 className="text-xl font-bold mb-2">Call Us</h3>
              <p className="text-muted-foreground mb-4">
                Speak directly with our team during business hours.
              </p>
              <a href="tel:+15551234567" className="text-primary font-medium hover:underline">
                +1 (555) 123-4567
              </a>
            </CardContent>
          </Card>

          <Card className="border-2">
            <CardContent className="p-8">
              <div className="w-14 h-14 rounded-lg bg-success/10 flex items-center justify-center mb-6">
                <MapPin className="w-7 h-7 text-success" />
              </div>
              <h3 className="text-xl font-bold mb-2">Visit Us</h3>
              <p className="text-muted-foreground mb-4">
                Stop by our office for a consultation.
              </p>
              <p className="text-primary font-medium">
                123 Digital Avenue<br />
                Suite 100<br />
                San Francisco, CA 94102
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </PageShell>
  );
}
