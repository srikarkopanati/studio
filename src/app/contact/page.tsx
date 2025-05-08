// src/app/contact/page.tsx
import { SectionTitle } from '@/components/shared/SectionTitle';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { User, Phone, MapPin, Mail } from 'lucide-react';
import Image from 'next/image';

export default function ContactPage() {
  const contactDetails = {
    name: "SRIKANTH REDDY",
    phone: "7278768888",
    addressLine1: "THE WHEELS GARAGE",
    addressLine2: "PADMAVATHI NAGAR ARCH",
    addressLine3: "NANDYAL DIST 518501",
    email: "contact@wheelsonline.com" // Added a placeholder email
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <SectionTitle
        title="Contact Us"
        subtitle="We'd love to hear from you! Reach out to us with any questions or inquiries."
      />

      <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
        <div className="space-y-6">
          <Card className="shadow-xl bg-card">
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-primary flex items-center gap-2">
                <User className="w-5 h-5" />
                Contact Person
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-foreground">{contactDetails.name}</p>
            </CardContent>
          </Card>

          <Card className="shadow-xl bg-card">
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-primary flex items-center gap-2">
                <Phone className="w-5 h-5" />
                Mobile Number
              </CardTitle>
            </CardHeader>
            <CardContent>
              <a href={`tel:${contactDetails.phone}`} className="text-lg text-accent hover:underline">
                {contactDetails.phone}
              </a>
            </CardContent>
          </Card>

          <Card className="shadow-xl bg-card">
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-primary flex items-center gap-2">
                <Mail className="w-5 h-5" />
                Email Address
              </CardTitle>
            </CardHeader>
            <CardContent>
              <a href={`mailto:${contactDetails.email}`} className="text-lg text-accent hover:underline">
                {contactDetails.email}
              </a>
            </CardContent>
          </Card>

          <Card className="shadow-xl bg-card">
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-primary flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                Our Address
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-1">
              <p className="text-md text-foreground">{contactDetails.addressLine1}</p>
              <p className="text-md text-muted-foreground">{contactDetails.addressLine2}</p>
              <p className="text-md text-muted-foreground">{contactDetails.addressLine3}</p>
            </CardContent>
          </Card>
        </div>

        <Card className="shadow-xl overflow-hidden bg-card">
           <CardHeader>
              <CardTitle className="text-xl font-semibold text-primary flex items-center gap-2">
                Our Location
              </CardTitle>
            </CardHeader>
          <CardContent className="p-0">
            {/* Placeholder for map or image. Using Picsum for now. */}
            <div className="relative w-full h-72 md:h-96 lg:h-[500px]">
              <Image
                src="https://picsum.photos/seed/garagemap/1200/800"
                alt="Map location of The Wheels Garage"
                fill
                style={{ objectFit: 'cover' }}
                className="bg-muted"
                data-ai-hint="office building map"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="p-6">
                <p className="text-muted-foreground">
                    Visit us at our Nandyal location. We are dedicated to helping you find your perfect vehicle.
                </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
