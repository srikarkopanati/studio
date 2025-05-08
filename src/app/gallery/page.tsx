"use client"; // This page uses client-side state for filtering

import { useState, useEffect, useMemo } from 'react';
import { CarList } from '@/components/cars/CarList';
import { AdvancedSearchForm } from '@/components/cars/AdvancedSearchForm';
import { cars as allCarsData } from '@/lib/data/cars'; // Mock data
import type { Car } from '@/lib/types';
import { SectionTitle } from '@/components/shared/SectionTitle';
import { Skeleton } from '@/components/ui/skeleton'; // For loading state

export default function GalleryPage() {
  const [filteredCars, setFilteredCars] = useState<Car[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Simulate API call / data loading
  useEffect(() => {
    // In a real app, you'd fetch this data
    setTimeout(() => {
      setFilteredCars(allCarsData);
      setIsLoading(false);
    }, 500); // Simulate network delay
  }, []);

  const handleSearch = (cars: Car[]) => {
    setFilteredCars(cars);
  };

  const uniqueMakes = useMemo(() => {
    const makes = new Set(allCarsData.map(car => car.make));
    return Array.from(makes).sort();
  }, []);

  const priceRange = useMemo(() => {
    if (allCarsData.length === 0) return { min: 0, max: 100000 };
    const prices = allCarsData.map(car => car.price);
    return {
      min: Math.min(...prices),
      max: Math.max(...prices),
    };
  }, []);

  return (
    <div className="container mx-auto px-4 py-12">
      <SectionTitle
        title="Car Gallery"
        subtitle="Explore our wide selection of vehicles. Use the filters below to find your perfect car."
      />
      
      {!isLoading ? (
        <AdvancedSearchForm
          allCars={allCarsData}
          onSearch={handleSearch}
          uniqueMakes={uniqueMakes}
          minPrice={priceRange.min}
          maxPrice={priceRange.max}
        />
      ) : (
        <CardSkeleton />
      )}

      {isLoading ? (
        <CarListSkeleton />
      ) : (
        <CarList cars={filteredCars} />
      )}
    </div>
  );
}

function CardSkeleton() {
  return (
    <div className="mb-12 p-6 border rounded-lg shadow-lg bg-card">
      <Skeleton className="h-8 w-1/3 mb-6" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="space-y-2">
            <Skeleton className="h-4 w-1/4" />
            <Skeleton className="h-10 w-full" />
          </div>
        ))}
         <div className="md:col-span-2 lg:col-span-3 flex flex-col sm:flex-row gap-4 pt-4">
            <Skeleton className="h-10 w-full sm:w-auto flex-grow" />
            <Skeleton className="h-10 w-full sm:w-auto flex-grow" />
          </div>
      </div>
    </div>
  );
}

function CarListSkeleton() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
      {[...Array(6)].map((_, i) => (
        <div key={i} className="border rounded-lg shadow-lg overflow-hidden bg-card">
          <Skeleton className="h-56 w-full" />
          <div className="p-6">
            <Skeleton className="h-6 w-3/4 mb-2" />
            <Skeleton className="h-4 w-1/2 mb-4" />
            <Skeleton className="h-4 w-full mb-2" />
            <Skeleton className="h-4 w-full mb-2" />
            <Skeleton className="h-4 w-2/3 mb-4" />
            <Skeleton className="h-10 w-full" />
          </div>
        </div>
      ))}
    </div>
  );
}
