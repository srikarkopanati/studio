
import type { Car } from '@/lib/types';
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { DollarSign, Gauge, Settings, Fuel } from 'lucide-react'; 
import Link from 'next/link';

interface CarCardProps {
  car: Car;
}

export function CarCard({ car }: CarCardProps) {
  // Using Picsum for reliable placeholder images. Added car.id to query string for variety.
  const imageSrc = `https://picsum.photos/600/400?random=${car.id}`;
  // data-ai-hint uses the car model, which is 1-2 keywords as per guidelines.
  const imageSearchHint = car.model;


  return (
    <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col h-full group bg-card">
      <CardHeader className="p-0">
        <div className="relative w-full h-56">
          <Image
            src={imageSrc}
            alt={`Image of ${car.make} ${car.model}`}
            fill
            style={{ objectFit: 'cover' }}
            className="transition-transform duration-300 group-hover:scale-105 bg-muted"
            data-ai-hint={imageSearchHint} 
            sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 30vw"
            priority={false} // Keep false for gallery items
            key={`${car.id}-card-image`} 
          />
        </div>
      </CardHeader>
      <CardContent className="p-6 flex-grow">
        <CardTitle className="text-2xl font-bold text-primary mb-1">
          {car.make} {car.model}
        </CardTitle>
        <CardDescription className="text-sm text-muted-foreground mb-4">{car.year}</CardDescription>
        
        <div className="space-y-2 text-sm text-foreground">
          <div className="flex items-center gap-2">
            <DollarSign className="w-4 h-4 text-accent" />
            <span>Price: ₹{car.price.toLocaleString('en-IN')}</span>
          </div>
          <div className="flex items-center gap-2">
            <Gauge className="w-4 h-4 text-accent" />
            <span>KMs Driven: {car.mileage.toLocaleString('en-IN')} km</span>
          </div>
          <div className="flex items-center gap-2">
            <Fuel className="w-4 h-4 text-accent" />
            <span>Fuel: {car.fuelType}</span>
          </div>
          <div className="flex items-center gap-2">
            <Settings className="w-4 h-4 text-accent" />
            <span>Engine: {car.engineType}</span>
          </div>
        </div>
        <p className="mt-4 text-sm text-muted-foreground line-clamp-3">{car.description}</p>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Link href={`/car/${car.id}`} passHref className="w-full">
          <Button variant="default" className="w-full bg-primary hover:bg-primary/90">
            View Details
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}

