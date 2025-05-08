import type { Car } from '@/lib/types';
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tag, DollarSign, CalendarDays, Gauge, Settings, Fuel } from 'lucide-react';
import Link from 'next/link';

interface CarCardProps {
  car: Car;
}

function getCarTypeHint(make: string, model: string): string {
  const lowerMake = make.toLowerCase();
  const lowerModel = model.toLowerCase();
  if (lowerModel.includes('suv') || ['cr-v', 'x5', 'telluride', 'outback', 'wrangler'].some(m => lowerModel.includes(m))) return "SUV car";
  if (lowerModel.includes('sedan') || ['camry', 'model 3', 'c-class', 'a4'].some(m => lowerModel.includes(m))) return "sedan car";
  if (lowerModel.includes('mustang') || lowerModel.includes('sports')) return "sports car";
  if (lowerModel.includes('truck')) return "truck vehicle";
  return "modern car";
}


export function CarCard({ car }: CarCardProps) {
  const carTypeHint = getCarTypeHint(car.make, car.model);
  return (
    <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
      <CardHeader className="p-0">
        <div className="relative w-full h-56">
          <Image
            src={car.imageUrl}
            alt={`${car.make} ${car.model}`}
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-300 group-hover:scale-105"
            data-ai-hint={carTypeHint}
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
            <span>Price: ${car.price.toLocaleString()}</span>
          </div>
          <div className="flex items-center gap-2">
            <Gauge className="w-4 h-4 text-accent" />
            <span>Mileage: {car.mileage.toLocaleString()} miles</span>
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
        {/* In a real app, this link would go to a detailed car page e.g. /cars/${car.id} */}
        <Link href={`/gallery?carId=${car.id}`} passHref className="w-full">
          <Button variant="default" className="w-full bg-primary hover:bg-primary/90">
            View Details
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
