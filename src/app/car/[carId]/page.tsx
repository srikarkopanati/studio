
import { cars as allCarsData } from '@/lib/data/cars';
import type { Car } from '@/lib/types';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { DollarSign, Gauge, Settings, Fuel, CalendarDays, ListChecks, ArrowLeft } from 'lucide-react';
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
          <Button variant="outline">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Gallery
          </Button>
        </Link>
      </div>
    );
  }

  const imageSearchHint = car.imageUrl;
  const imageSrc = `https://picsum.photos/seed/${encodeURIComponent(car.id)}/1200/800`;

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-8">
        <Link href="/gallery" passHref>
          <Button variant="outline" className="mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Gallery
          </Button>
        </Link>
        <SectionTitle title={`${car.make} ${car.model}`} subtitle={`Details for ${car.year} ${car.make} ${car.model}`} />
      </div>

      <Card className="overflow-hidden shadow-xl bg-card">
        <CardHeader className="p-0">
          <div className="relative w-full h-72 md:h-96 lg:h-[500px]">
            <Image
              src={imageSrc}
              alt={`Image of ${car.make} ${car.model}`}
              fill
              style={{ objectFit: 'cover' }}
              className="bg-muted"
              data-ai-hint={imageSearchHint}
              priority // Prioritize loading for LCP
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
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
              
              <Separator />

              <div>
                <h3 className="text-xl font-semibold text-primary mb-3 flex items-center">
                  <ListChecks className="mr-2 h-5 w-5 text-accent" />
                  Features
                </h3>
                <div className="flex flex-wrap gap-2">
                  {car.features.map((feature, index) => (
                    <Badge key={index} variant="secondary" className="text-sm px-3 py-1">
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
                    <span className="font-medium text-foreground">Mileage:</span>
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
              </div>
              {/* Placeholder for additional images or a gallery component */}
              {/* 
              <Separator />
              <div>
                <h3 className="text-xl font-semibold text-primary mb-3">More Images</h3>
                <div className="grid grid-cols-2 gap-4">
                  {[...Array(2)].map((_, i) => (
                    <div key={i} className="relative aspect-video bg-muted rounded-md overflow-hidden">
                       <Image src={`https://picsum.photos/seed/${encodeURIComponent(car.id + i)}/400/300`} alt={`More image ${i+1}`} layout="fill" objectFit="cover" data-ai-hint={`${car.make} ${car.model} detail`} />
                    </div>
                  ))}
                </div>
                 <p className="text-xs text-muted-foreground mt-2">Note: Image gallery feature can be expanded with actual car images.</p>
              </div>
              */}
            </div>
          </div>
        </CardContent>
        <CardFooter className="p-6 md:p-8 border-t border-border">
           <Link href="/ai-finder" passHref>
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Find Similar Cars with AI
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
}
