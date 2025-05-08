
import type { Car } from '@/lib/types';
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tag, DollarSign, CalendarDays, Gauge, Settings, Fuel } from 'lucide-react';
import Link from 'next/link';

interface CarCardProps {
  car: Car;
}

function getSpecificCarHint(make: string, model: string): string {
  const makeLower = make.toLowerCase();
  const modelLower = model.toLowerCase();

  if (makeLower === 'toyota' && modelLower === 'camry') return 'Toyota Camry';
  if (makeLower === 'honda' && modelLower === 'cr-v') return 'Honda CRV';
  if (makeLower === 'ford' && modelLower === 'mustang') return 'Ford Mustang';
  if (makeLower === 'tesla' && modelLower === 'model 3') return 'Tesla Model3';
  if (makeLower === 'bmw' && modelLower === 'x5') return 'BMW X5';
  if (makeLower === 'mercedes-benz' && modelLower === 'c-class') return 'Benz CClass';
  if (makeLower === 'audi' && modelLower === 'a4') return 'Audi A4';
  if (makeLower === 'jeep' && modelLower === 'wrangler') return 'Jeep Wrangler';
  if (makeLower === 'subaru' && modelLower === 'outback') return 'Subaru Outback';
  if (makeLower === 'kia' && modelLower === 'telluride') return 'Kia Telluride';
  
  // Fallback for any other cars, trying to keep it to two words
  const makeWords = make.split(" ");
  const modelWords = model.split(" ");
  
  if (makeWords.length === 1 && modelWords.length === 1) return `${make} ${model}`;
  
  const modelHint = modelWords.slice(0, 2).join(" ");
  if (modelHint.split(" ").length <= 2 && modelHint.length > 0) return modelHint;

  const makeHint = makeWords.slice(0, 2).join(" ");
  if (makeHint.split(" ").length <= 2 && makeHint.length > 0) return makeHint;

  if (makeWords.length > 0 && modelWords.length > 0) {
    const combinedHint = `${makeWords[0]} ${modelWords[0]}`;
    if (combinedHint.split(" ").length <=2) return combinedHint;
  }
  
  return 'modern car'; // Default fallback
}


export function CarCard({ car }: CarCardProps) {
  const specificHint = getSpecificCarHint(car.make, car.model);
  return (
    <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col h-full group">
      <CardHeader className="p-0">
        <div className="relative w-full h-56">
          <Image
            src={car.imageUrl}
            alt={`${car.make} ${car.model}`}
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-300 group-hover:scale-105"
            data-ai-hint={specificHint}
            unoptimized={car.imageUrl.startsWith('https://picsum.photos')} // Useful for picsum to avoid caching issues with random images
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
            <span>Mileage: {car.mileage.toLocaleString('en-IN')} km</span>
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
