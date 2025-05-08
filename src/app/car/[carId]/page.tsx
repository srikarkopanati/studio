
import { cars as allCarsData } from '@/lib/data/cars';
import type { Car } from '@/lib/types';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Gauge, Settings, Fuel, CalendarDays, ListChecks, ArrowLeft, ShieldCheck, Mail, Car as CarIconLucide, Phone } from 'lucide-react';
import { SectionTitle } from '@/components/shared/SectionTitle';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

interface CarDetailsPageProps {
  params: {
    carId: string;
  };
}

export async function generateStaticParams() {
  return allCarsData.map((car) => ({
    carId: car.id,
  }));
}

export default function CarDetailsPage({ params }: CarDetailsPageProps) {
  const { carId } = params;
  const car: Car | undefined = allCarsData.find((c) => c.id === carId);

  if (!car) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <SectionTitle title="Car Not Found" subtitle="Sorry, we couldn't find details for this car." />
        <Link href="/gallery" passHref>
          <Button variant="outline" className="border-primary text-primary hover:bg-primary/5">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Gallery
          </Button>
        </Link>
      </div>
    );
  }

  const mainImageSearchHint = `${car.make.toLowerCase()} ${car.model.toLowerCase()}`.split(' ').slice(0, 2).join(' ');
  const imageSeed = car.model.replace(/\s+/g, '') + car.make.replace(/\s+/g, '');


  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-8">
        <Link href="/gallery" passHref>
          <Button variant="outline" className="mb-8 border-primary text-primary hover:bg-primary/10 hover:text-primary-foreground">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Gallery
          </Button>
        </Link>
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
            <SectionTitle title={`${car.make} ${car.model}`} subtitle={`Details for ${car.year} ${car.make} ${car.model}`} />
            <Badge 
                variant={car.condition === 'new' ? 'default' : 'secondary'}
                className={`text-base md:text-lg px-3 py-1 md:px-4 md:py-2 mb-4 sm:mb-0 shadow-md ${car.condition === 'new' ? 'bg-accent text-accent-foreground' : 'bg-secondary text-secondary-foreground'}`}
            >
                {car.condition === 'new' ? 'Brand New' : 'Pre-Owned'}
            </Badge>
        </div>
      </div>

      <Card className="overflow-hidden shadow-xl bg-card border border-border rounded-xl">
        <CardHeader className="p-0">
          <div className="relative w-full h-64 sm:h-72 md:h-96 lg:h-[500px]">
            <Image
              src={car.imageUrl || `https://picsum.photos/seed/${imageSeed}/1200/800`} 
              alt={`Image of ${car.make} ${car.model}`}
              fill
              style={{ objectFit: 'cover' }}
              className="bg-muted"
              data-ai-hint={mainImageSearchHint} 
              priority 
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
              key={`${car.id}-details-image`}
            />
          </div>
        </CardHeader>
        <CardContent className="p-4 md:p-6 lg:p-8">
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            <div className="md:col-span-2 space-y-4 md:space-y-6">
              <div>
                <h2 className="text-xl md:text-2xl font-semibold text-primary mb-2 flex items-center">
                    <CarIconLucide className="mr-2 md:mr-3 h-5 w-5 md:h-6 md:w-6 text-accent" />
                    Vehicle Overview
                </h2>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">{car.description}</p>
              </div>
              
              <Separator className="my-4 md:my-6 border-border" />

              <div>
                <h3 className="text-lg md:text-xl font-semibold text-primary mb-3 flex items-center">
                  <ListChecks className="mr-2 h-4 w-4 md:h-5 md:w-5 text-accent" />
                  Features
                </h3>
                <div className="flex flex-wrap gap-2">
                  {car.features.map((feature, index) => (
                    <Badge key={index} variant="outline" className="text-xs md:text-sm px-2 py-1 md:px-3 bg-secondary/50 text-secondary-foreground border-primary/50">
                      {feature}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-4 md:space-y-6 md:border-l md:pl-6 lg:pl-8 border-border">
              <h3 className="text-lg md:text-xl font-semibold text-primary mb-3">Key Specifications</h3>
              <div className="space-y-3 text-sm md:text-base">
                <div className="flex items-center gap-2 md:gap-3">
                  <span className="font-semibold text-accent text-xl md:text-2xl w-5 h-5 md:w-6 md:h-6 flex-shrink-0 flex items-center justify-center">₹</span>
                  <div>
                    <span className="font-medium text-foreground">Price:</span>
                    <span className="text-muted-foreground ml-1">{car.price.toLocaleString('en-IN')}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 md:gap-3">
                  <CalendarDays className="w-4 h-4 md:w-5 md:h-5 text-accent flex-shrink-0" />
                  <div>
                    <span className="font-medium text-foreground">Year:</span>
                    <span className="text-muted-foreground ml-1">{car.year}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 md:gap-3">
                  <Gauge className="w-4 h-4 md:w-5 md:h-5 text-accent flex-shrink-0" />
                  <div>
                    <span className="font-medium text-foreground">KMs Driven:</span>
                    <span className="text-muted-foreground ml-1">{car.condition === 'new' ? '0' : car.mileage.toLocaleString('en-IN')} km</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 md:gap-3">
                  <Fuel className="w-4 h-4 md:w-5 md:h-5 text-accent flex-shrink-0" />
                  <div>
                    <span className="font-medium text-foreground">Fuel Type:</span>
                    <span className="text-muted-foreground ml-1">{car.fuelType}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 md:gap-3">
                  <Settings className="w-4 h-4 md:w-5 md:h-5 text-accent flex-shrink-0" />
                  <div>
                    <span className="font-medium text-foreground">Engine:</span>
                    <span className="text-muted-foreground ml-1">{car.engineType}</span>
                  </div>
                </div>
                 <div className="flex items-center gap-2 md:gap-3">
                  <ShieldCheck className="w-4 h-4 md:w-5 md:h-5 text-accent flex-shrink-0" />
                  <div>
                    <span className="font-medium text-foreground">Condition:</span>
                    <span className="text-muted-foreground ml-1 capitalize">{car.condition}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter className="p-4 md:p-6 lg:p-8 border-t border-border bg-muted/30">
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 w-full">
            <Link href="/ai-finder" passHref className="flex-grow">
              <Button size="lg" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground text-sm md:text-base">
                <Mail className="mr-2 h-4 w-4 md:h-5 md:w-5" /> Find Similar with AI
              </Button>
            </Link>
            <Link href="/contact" passHref className="flex-grow">
              <Button size="lg" variant="outline" className="w-full border-accent text-accent hover:bg-accent/10 hover:text-accent-foreground text-sm md:text-base">
                <Phone className="mr-2 h-4 w-4 md:h-5 md:w-5" />
                Contact Us
              </Button>
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
