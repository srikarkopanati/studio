
"use client"; 

import { useState, useEffect, useMemo } from 'react';
import { CarList } from '@/components/cars/CarList';
import { AdvancedSearchForm } from '@/components/cars/AdvancedSearchForm';
import { cars as allCarsData } from '@/lib/data/cars'; 
import type { Car } from '@/lib/types';
import { SectionTitle } from '@/components/shared/SectionTitle';
import { Skeleton } from '@/components/ui/skeleton'; 
import { Card } from '@/components/ui/card';

const FALLBACK_MIN_PRICE = 500000; 
const FALLBACK_MAX_PRICE = 50000000;

export default function GalleryPage() {
  const [filteredCars, setFilteredCars] = useState<Car[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  
  const [sliderMinBound, setSliderMinBound] = useState(FALLBACK_MIN_PRICE);
  const [sliderMaxBound, setSliderMaxBound] = useState(FALLBACK_MAX_PRICE);

  useEffect(() => {
    setIsLoading(true);
    // Simulate API call / data loading for initial setup
    setTimeout(() => {
      if (allCarsData.length > 0) {
        const prices = allCarsData.map(car => car.price);
        const dataMinPrice = Math.min(...prices);
        const dataMaxPrice = Math.max(...prices);
        
        setSliderMinBound(dataMinPrice > 0 ? dataMinPrice : FALLBACK_MIN_PRICE);
        setSliderMaxBound(dataMaxPrice > dataMinPrice ? dataMaxPrice : FALLBACK_MAX_PRICE);
        
        // Initialize with all cars only after bounds are set
        setFilteredCars(allCarsData); 
      } else {
        setSliderMinBound(FALLBACK_MIN_PRICE);
        setSliderMaxBound(FALLBACK_MAX_PRICE);
        setFilteredCars([]); // No cars to show
      }
      setIsLoading(false);
    }, 300); // Reduced delay
  }, []);

  const handleSearch = (cars: Car[]) => {
    setFilteredCars(cars);
  };

  const uniqueMakes = useMemo(() => {
    const makes = new Set(allCarsData.map(car => car.make));
    return Array.from(makes).sort();
  }, []);


  return (
    <div className="container mx-auto px-4 py-12">
      <SectionTitle
        title="Car Gallery"
        subtitle="Explore our wide selection of new and used vehicles. Use the filters below to find your perfect car."
      />
      
      {isLoading || sliderMinBound === FALLBACK_MIN_PRICE && sliderMaxBound === FALLBACK_MAX_PRICE && allCarsData.length > 0 ? ( 
        <AdvancedSearchSkeleton />
      ) : (
        <AdvancedSearchForm
          allCars={allCarsData}
          onSearch={handleSearch}
          uniqueMakes={uniqueMakes}
          minPrice={sliderMinBound} 
          maxPrice={sliderMaxBound} 
        />
      )}

      {isLoading ? (
        <CarListSkeleton />
      ) : (
        <CarList cars={filteredCars} />
      )}
    </div>
  );
}

function AdvancedSearchSkeleton() {
  return (
    <Card className="shadow-lg mb-12 p-6 bg-card border border-border rounded-xl">
      <Skeleton className="h-8 w-1/3 mb-6" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(6)].map((_, i) => ( // Increased to 6 for new condition filter
          <div key={i} className="space-y-2">
            <Skeleton className="h-4 w-1/4" />
            <Skeleton className="h-10 w-full bg-muted" />
          </div>
        ))}
         <div className="lg:col-span-3 space-y-2"> {/* Price range skeleton */}
            <Skeleton className="h-4 w-1/4" />
            <Skeleton className="h-10 w-full bg-muted" />
         </div>
         <div className="md:col-span-2 lg:col-span-3 flex flex-col sm:flex-row gap-4 pt-4">
            <Skeleton className="h-10 w-full sm:w-auto flex-grow bg-muted" />
            <Skeleton className="h-10 w-full sm:w-auto flex-grow bg-muted" />
          </div>
      </div>
    </Card>
  );
}

function CarListSkeleton() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
      {[...Array(6)].map((_, i) => (
        <Card key={i} className="border border-border rounded-xl shadow-lg overflow-hidden bg-card">
          <Skeleton className="h-56 w-full bg-muted" />
          <div className="p-6">
            <Skeleton className="h-6 w-3/4 mb-2 bg-muted" />
            <Skeleton className="h-4 w-1/2 mb-4 bg-muted" />
            <Skeleton className="h-4 w-full mb-2 bg-muted" />
            <Skeleton className="h-4 w-full mb-2 bg-muted" />
            <Skeleton className="h-4 w-2/3 mb-4 bg-muted" />
            <Skeleton className="h-10 w-full bg-muted" />
          </div>
        </Card>
      ))}
    </div>
  );
}
