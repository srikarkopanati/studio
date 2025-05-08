// src/app/contact/page.tsx
import { SectionTitle } from '@/components/shared/SectionTitle';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { User, Phone, MapPin, Mail, Building, Clock } from 'lucide-react';
import Image from 'next/image';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function ContactPage() {
  const contactDetails = {
    name: "SRIKANTH REDDY",
    phone: "7278768888",
    addressLine1: "THE WHEELS GARAGE",
    addressLine2: "PADMAVATHI NAGAR ARCH,",
    addressLine3: "NANDYAL, KURNOOL DIST - 518501",
    email: "contact@thewheelsgarage.com"
  };

  const socialLinks = [
    // { name: 'Facebook', icon: <Facebook className="w-6 h-6" />, url: '#' },
    // { name: 'Instagram', icon: <Instagram className="w-6 h-6" />, url: '#' },
  ];

  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <SectionTitle
        title="Get in Touch"
        subtitle="We're here to help and answer any question you might have. We look forward to hearing from you!"
      />

      <div className="grid md:grid-cols-12 gap-8 md:gap-12 items-stretch">
        {/* Contact Information Column */}
        <div className="md:col-span-5 lg:col-span-4 flex flex-col">
          <Card className="shadow-xl bg-card border border-border rounded-xl overflow-hidden flex-grow flex flex-col h-full">
            <CardHeader className="bg-primary text-primary-foreground p-6">
              <CardTitle className="text-2xl font-semibold flex items-center gap-3">
                <Building className="w-7 h-7" />
                Our Showroom
              </CardTitle>
              <CardDescription className="text-primary-foreground/80">
                Reach out or visit us.
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6 space-y-5 flex-grow">
              <div className="flex items-center gap-4">
                <User className="w-6 h-6 text-accent flex-shrink-0" />
                <div>
                  <p className="font-semibold text-foreground text-sm uppercase tracking-wider">Contact Person</p>
                  <p className="text-lg text-accent">{contactDetails.name}</p>
                </div>
              </div>
              <Separator />
              <div className="flex items-center gap-4">
                <Phone className="w-6 h-6 text-accent flex-shrink-0" />
                <div>
                  <p className="font-semibold text-foreground text-sm uppercase tracking-wider">Mobile Number</p>
                  <a href={`tel:${contactDetails.phone}`} className="text-lg text-accent hover:underline hover:text-primary transition-colors">
                    {contactDetails.phone}
                  </a>
                </div>
              </div>
              <Separator />
              <div className="flex items-center gap-4">
                <Mail className="w-6 h-6 text-accent flex-shrink-0" />
                <div>
                  <p className="font-semibold text-foreground text-sm uppercase tracking-wider">Email Address</p>
                  <a href={`mailto:${contactDetails.email}`} className="text-base text-accent hover:underline hover:text-primary transition-colors break-words">
                    {contactDetails.email}
                  </a>
                </div>
              </div>
              <Separator />
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-foreground text-sm uppercase tracking-wider">Our Address</p>
                  <address className="not-italic text-base text-muted-foreground space-y-0.5">
                    <p>{contactDetails.addressLine1}</p>
                    <p>{contactDetails.addressLine2}</p>
                    <p>{contactDetails.addressLine3}</p>
                  </address>
                </div>
              </div>
            </CardContent>
          </Card>

          {socialLinks.length > 0 && (
             <Card className="shadow-xl bg-card border border-border rounded-xl mt-8">
                <CardHeader>
                    <CardTitle className="text-xl font-semibold text-primary">Connect With Us</CardTitle>
                </CardHeader>
                <CardContent className="flex gap-3">
                    {socialLinks.map(link => (
                        <Link key={link.name} href={link.url} target="_blank" rel="noopener noreferrer">
                            <Button variant="outline" size="icon" aria-label={link.name} className="border-primary text-primary hover:bg-primary/10 rounded-full">
                                {link.icon}
                            </Button>
                        </Link>
                    ))}
                </CardContent>
            </Card>
          )}
        </div>

        {/* Map/Image Column */}
        <div className="md:col-span-7 lg:col-span-8 flex flex-col">
          <Card className="shadow-xl overflow-hidden bg-card border border-border rounded-xl flex-grow flex flex-col h-full">
            <div className="relative w-full h-72 md:h-96 lg:h-[450px] bg-muted">
              <Image
                src="https://picsum.photos/seed/dealership-map/1200/800"
                alt="The Wheels Garage Showroom Location"
                fill
                style={{ objectFit: 'cover' }}
                data-ai-hint="car dealership map"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 700px"
                priority
                className="rounded-t-xl"
              />
            </div>
            <CardContent className="p-6 md:p-8 flex-grow flex flex-col justify-between">
               <div> {/* Content wrapper */}
                <div className="flex items-center gap-3 mb-4">
                    <Clock className="w-6 h-6 text-accent flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-semibold text-primary">Operating Hours</h3>
                      <p className="text-muted-foreground">Monday - Saturday: 9:00 AM - 7:00 PM</p>
                      <p className="text-muted-foreground">Sunday: Closed</p>
                    </div>
                  </div>
                  <Separator className="my-6" />
              </div>
              <Button asChild size="lg" className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground text-base py-3 px-8 shadow-md mt-auto self-start">
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(contactDetails.addressLine1 + ", " + contactDetails.addressLine2 + " " + contactDetails.addressLine3)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MapPin className="mr-2 h-5 w-5" />
                  Get Directions
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}