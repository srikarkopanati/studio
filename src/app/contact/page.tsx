// src/app/contact/page.tsx
import { SectionTitle } from '@/components/shared/SectionTitle';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { User, Phone, MapPin, Mail, Building } from 'lucide-react';
import Image from 'next/image';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function ContactPage() {
  const contactDetails = {
    name: "SRIKANTH REDDY",
    phone: "7278768888",
    addressLine1: "THE WHEELS GARAGE",
    addressLine2: "PADMAVATHI NAGAR ARCH",
    addressLine3: "NANDYAL DIST 518501",
    email: "contact@thewheelsgarage.com"
  };

  const socialLinks = [
    // Add social media links here if available in the future
    // { name: 'Facebook', icon: <Facebook className="w-5 h-5" />, url: '#' },
    // { name: 'Twitter', icon: <Twitter className="w-5 h-5" />, url: '#' },
  ];

  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <SectionTitle
        title="Get in Touch"
        subtitle="We're here to help and answer any question you might have. We look forward to hearing from you!"
      />

      <div className="grid md:grid-cols-12 gap-8 md:gap-12 items-start">
        {/* Contact Information Column */}
        <div className="md:col-span-5 space-y-6">
          <Card className="shadow-xl bg-card border border-border rounded-xl overflow-hidden">
            <CardHeader className="bg-muted/30">
              <CardTitle className="text-2xl font-semibold text-primary flex items-center gap-3">
                <Building className="w-7 h-7" />
                Our Office
              </CardTitle>
              <CardDescription>
                Reach out to us via phone, email, or visit our showroom.
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6 space-y-6">
              <div className="flex items-start gap-4">
                <User className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-foreground">Contact Person</p>
                  <p className="text-muted-foreground">{contactDetails.name}</p>
                </div>
              </div>
              <Separator />
              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-foreground">Mobile Number</p>
                  <a href={`tel:${contactDetails.phone}`} className="text-accent hover:underline hover:text-primary transition-colors">
                    {contactDetails.phone}
                  </a>
                </div>
              </div>
              <Separator />
              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-foreground">Email Address</p>
                  <a href={`mailto:${contactDetails.email}`} className="text-accent hover:underline hover:text-primary transition-colors">
                    {contactDetails.email}
                  </a>
                </div>
              </div>
              <Separator />
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-foreground">Our Address</p>
                  <address className="not-italic text-muted-foreground space-y-0.5">
                    <p>{contactDetails.addressLine1}</p>
                    <p>{contactDetails.addressLine2}</p>
                    <p>{contactDetails.addressLine3}</p>
                  </address>
                </div>
              </div>
            </CardContent>
          </Card>

          {socialLinks.length > 0 && (
             <Card className="shadow-xl bg-card border border-border rounded-xl">
                <CardHeader>
                    <CardTitle className="text-xl font-semibold text-primary">Connect With Us</CardTitle>
                </CardHeader>
                <CardContent className="flex gap-4">
                    {socialLinks.map(link => (
                        <Link key={link.name} href={link.url} target="_blank" rel="noopener noreferrer">
                            <Button variant="outline" size="icon" aria-label={link.name} className="border-primary text-primary hover:bg-primary/10">
                                {link.icon}
                            </Button>
                        </Link>
                    ))}
                </CardContent>
            </Card>
          )}
        </div>

        {/* Map/Image Column */}
        <div className="md:col-span-7">
          <Card className="shadow-xl overflow-hidden bg-card border border-border rounded-xl">
            <CardHeader className="pb-2">
              <CardTitle className="text-2xl font-semibold text-primary">
                Visit Our Showroom
              </CardTitle>
              <CardDescription>
                Located conveniently in Nandyal. Find directions below.
              </CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <div className="relative w-full h-80 md:h-[500px] lg:h-[600px] bg-muted">
                <Image
                  src="https://picsum.photos/seed/garage-map-location/1200/800"
                  alt="Map location of The Wheels Garage showroom"
                  fill
                  style={{ objectFit: 'cover' }}
                  data-ai-hint="city map location"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 700px"
                  priority
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-2">Operating Hours</h3>
                <p className="text-muted-foreground mb-1">Monday - Saturday: 9:00 AM - 7:00 PM</p>
                <p className="text-muted-foreground mb-4">Sunday: Closed</p>
                <Button asChild size="lg" className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground">
                  <a 
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(contactDetails.addressLine1 + ", " + contactDetails.addressLine3)}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Get Directions
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
