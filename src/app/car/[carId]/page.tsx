
import { cars as allCarsData } from '@/lib/data/cars';
import type { Car } from '@/lib/types';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { DollarSign, Gauge, Settings, Fuel, CalendarDays, ListChecks, ArrowLeft, ShieldCheck } from 'lucide-react';
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

  // Generate a concise AI hint, prioritizing model name, then make and model if short enough.
  let mainImageSearchHint = car.model;
  if (`${car.make} ${car.model}`.split(' ').length <= 2) {
    mainImageSearchHint = `${car.make} ${car.model}`;
  }


  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-8">
        <Link href="/gallery" passHref>
          <Button variant="outline" className="mb-8 border-primary text-primary hover:bg-primary/5">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Gallery
          </Button>
        </Link>
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
            <SectionTitle title={`${car.make} ${car.model}`} subtitle={`Details for ${car.year} ${car.make} ${car.model}`} />
            <Badge 
                variant={car.condition === 'new' ? 'default' : 'secondary'}
                className={`text-lg px-4 py-2 mb-4 sm:mb-0 ${car.condition === 'new' ? 'bg-accent text-accent-foreground' : 'bg-secondary text-secondary-foreground'}`}
            >
                {car.condition === 'new' ? 'Brand New' : 'Pre-Owned'}
            </Badge>
        </div>
      </div>

      <Card className="overflow-hidden shadow-xl bg-card border border-border rounded-xl">
        <CardHeader className="p-0">
          <div className="relative w-full h-72 md:h-96 lg:h-[500px]">
            <Image
              src={car.imageUrl || `https://picsum.photos/seed/${car.id}-detail/1200/800`} // Fallback if imageUrl is somehow missing
              alt={`Image of ${car.make} ${car.model}`}
              fill
              style={{ objectFit: 'cover' }}
              className="bg-muted"
              data-ai-hint={mainImageSearchHint.toLowerCase()} 
              priority 
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
              key={`${car.id}-details-image`}
            />
          </div>
        </CardHeader>
        <CardContent className="p-6 md:p-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-6">
              <div>
                <h2 className="text-2xl font-semibold text-primary mb-2">Description</h2>
                <p className="text-muted-foreground leading-relaxed">{car.description}</p>
              </div>
              
              <Separator className="my-6 border-border" />

              <div>
                <h3 className="text-xl font-semibold text-primary mb-3 flex items-center">
                  <ListChecks className="mr-2 h-5 w-5 text-accent" />
                  Features
                </h3>
                <div className="flex flex-wrap gap-2">
                  {car.features.map((feature, index) => (
                    <Badge key={index} variant="secondary" className="text-sm px-3 py-1 bg-secondary/70 text-secondary-foreground">
                      {feature}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-6 md:border-l md:pl-8 border-border">
              <h3 className="text-xl font-semibold text-primary mb-3">Key Specifications</h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-3">
                  <DollarSign className="w-5 h-5 text-accent flex-shrink-0" />
                  <div>
                    <span className="font-medium text-foreground">Price:</span>
                    <span className="text-muted-foreground ml-1">₹{car.price.toLocaleString('en-IN')}</span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <CalendarDays className="w-5 h-5 text-accent flex-shrink-0" />
                  <div>
                    <span className="font-medium text-foreground">Year:</span>
                    <span className="text-muted-foreground ml-1">{car.year}</span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Gauge className="w-5 h-5 text-accent flex-shrink-0" />
                  <div>
                    <span className="font-medium text-foreground">KMs Driven:</span>
                    <span className="text-muted-foreground ml-1">{car.mileage.toLocaleString('en-IN')} km</span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Fuel className="w-5 h-5 text-accent flex-shrink-0" />
                  <div>
                    <span className="font-medium text-foreground">Fuel Type:</span>
                    <span className="text-muted-foreground ml-1">{car.fuelType}</span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Settings className="w-5 h-5 text-accent flex-shrink-0" />
                  <div>
                    <span className="font-medium text-foreground">Engine:</span>
                    <span className="text-muted-foreground ml-1">{car.engineType}</span>
                  </div>
                </div>
                 <div className="flex items-center gap-3">
                  <ShieldCheck className="w-5 h-5 text-accent flex-shrink-0" />
                  <div>
                    <span className="font-medium text-foreground">Condition:</span>
                    <span className="text-muted-foreground ml-1 capitalize">{car.condition}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter className="p-6 md:p-8 border-t border-border bg-muted/30">
           <Link href="/ai-finder" passHref>
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Find Similar Cars with AI
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
}
