
import type { Car } from '@/lib/types';
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Gauge, Settings, Fuel, IndianRupee } from 'lucide-react'; // Ensured IndianRupee is imported
import Link from 'next/link';
import React from 'react'; // Import React for React.memo

interface CarCardProps {
  car: Car;
}

const CarCardFunc = ({ car }: CarCardProps) => {
  const imageSearchHint = `${car.make.toLowerCase()} ${car.model.toLowerCase()}`.split(' ').slice(0, 2).join(' ');

  return (
    <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col h-full group bg-card border border-border rounded-xl">
      <CardHeader className="p-0 relative">
        <div className="relative w-full h-56">
          <Image
            src={car.imageUrl || `https://picsum.photos/seed/${car.id}/800/600`}
            alt={`Image of ${car.make} ${car.model}`}
            fill
            style={{ objectFit: 'cover' }}
            className="transition-transform duration-300 group-hover:scale-105 bg-muted"
            data-ai-hint={imageSearchHint}
            sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 30vw"
            priority={false}
            key={`${car.id}-card-image`}
          />
        </div>
        <Badge
          variant={car.condition === 'new' ? 'default' : 'secondary'}
          className={`absolute top-3 right-3 text-xs px-2 py-1 shadow-md ${car.condition === 'new' ? 'bg-accent text-accent-foreground' : 'bg-secondary text-secondary-foreground'}`}
        >
          {car.condition === 'new' ? 'New' : 'Used'}
        </Badge>
      </CardHeader>
      <CardContent className="p-6 flex-grow">
        <CardTitle className="text-2xl font-bold text-primary mb-1">
          {car.make} {car.model}
        </CardTitle>
        <CardDescription className="text-sm text-muted-foreground mb-4">{car.year}</CardDescription>

        <div className="space-y-2 text-sm text-foreground">
          <div className="flex items-center gap-2">
            <IndianRupee className="w-4 h-4 text-accent" />
            <span>{car.price.toLocaleString('en-IN')}</span>
          </div>
          <div className="flex items-center gap-2">
            <Gauge className="w-4 h-4 text-accent" />
            <span>KMs Driven: {car.condition === 'new' ? '0' : car.mileage.toLocaleString('en-IN')} km</span>
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
      <CardFooter className="border-t border-border mt-auto bg-muted/30 p-4">
        <Link href={`/car/${car.id}`} passHref className="w-full">
          <Button variant="default" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
            View Details
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export const CarCard = React.memo(CarCardFunc);
