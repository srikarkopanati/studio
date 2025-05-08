import type { Car } from '@/lib/types';
import { CarCard } from './CarCard';

interface CarListProps {
  cars: Car[];
}

export function CarList({ cars }: CarListProps) {
  if (!cars || cars.length === 0) {
    return <p className="text-center text-muted-foreground py-12">No cars found matching your criteria.</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
      {cars.map((car) => (
        <CarCard key={car.id} car={car} />
      ))}
    </div>
  );
}
