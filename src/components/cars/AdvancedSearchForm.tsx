"use client";

import { useState, useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Filter, Search, RotateCcw } from 'lucide-react';
import type { Car } from '@/lib/types';

const searchSchema = z.object({
  make: z.string().optional(),
  model: z.string().optional(),
  minYear: z.string().optional().refine(val => !val || /^\d{4}$/.test(val), { message: "Invalid year"}),
  maxYear: z.string().optional().refine(val => !val || /^\d{4}$/.test(val), { message: "Invalid year"}),
  priceRange: z.array(z.number()).optional(),
});

type SearchFormData = z.infer<typeof searchSchema>;

interface AdvancedSearchFormProps {
  allCars: Car[];
  onSearch: (filteredCars: Car[]) => void;
  uniqueMakes: string[];
  minPrice: number;
  maxPrice: number;
}

const currentYear = new Date().getFullYear();

export function AdvancedSearchForm({ allCars, onSearch, uniqueMakes, minPrice, maxPrice }: AdvancedSearchFormProps) {
  const [currentPriceRange, setCurrentPriceRange] = useState<[number, number]>([minPrice, maxPrice]);
  
  const { register, handleSubmit, control, reset, watch, formState: { errors } } = useForm<SearchFormData>({
    resolver: zodResolver(searchSchema),
    defaultValues: {
      priceRange: [minPrice, maxPrice],
    },
  });

  // Update price range display when slider changes
  const watchedPriceRange = watch("priceRange");
  useEffect(() => {
    if (watchedPriceRange) {
      setCurrentPriceRange(watchedPriceRange as [number, number]);
    }
  }, [watchedPriceRange]);

  const onSubmit: SubmitHandler<SearchFormData> = (data) => {
    let filtered = [...allCars];

    if (data.make) {
      filtered = filtered.filter(car => car.make.toLowerCase() === data.make?.toLowerCase());
    }
    if (data.model) {
      filtered = filtered.filter(car => car.model.toLowerCase().includes(data.model!.toLowerCase()));
    }
    if (data.minYear) {
      filtered = filtered.filter(car => car.year >= parseInt(data.minYear!));
    }
    if (data.maxYear) {
      filtered = filtered.filter(car => car.year <= parseInt(data.maxYear!));
    }
    if (data.priceRange) {
      filtered = filtered.filter(car => car.price >= data.priceRange![0] && car.price <= data.priceRange![1]);
    }
    onSearch(filtered);
  };

  const handleReset = () => {
    reset({
      make: '',
      model: '',
      minYear: '',
      maxYear: '',
      priceRange: [minPrice, maxPrice],
    });
    setCurrentPriceRange([minPrice, maxPrice]);
    onSearch(allCars); // Reset to show all cars
  };

  return (
    <Card className="shadow-lg mb-12 bg-card">
      <CardHeader>
        <CardTitle className="text-2xl font-semibold text-primary flex items-center gap-2">
          <Filter className="w-6 h-6" />
          Advanced Search
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="space-y-2">
            <Label htmlFor="make">Make</Label>
            <Select onValueChange={(value) => control._formValues.make = value} value={watch("make")}>
              <SelectTrigger id="make" className="w-full">
                <SelectValue placeholder="Any Make" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">Any Make</SelectItem>
                {uniqueMakes.map(make => (
                  <SelectItem key={make} value={make}>{make}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="model">Model</Label>
            <Input id="model" placeholder="e.g. Camry, CR-V" {...register('model')} />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="minYear">Min Year</Label>
            <Input id="minYear" type="number" placeholder="e.g. 2018" {...register('minYear')} min="1980" max={currentYear} />
            {errors.minYear && <p className="text-sm text-destructive">{errors.minYear.message}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="maxYear">Max Year</Label>
            <Input id="maxYear" type="number" placeholder="e.g. 2023" {...register('maxYear')} min="1980" max={currentYear} />
            {errors.maxYear && <p className="text-sm text-destructive">{errors.maxYear.message}</p>}
          </div>
          
          <div className="space-y-2 md:col-span-2 lg:col-span-1">
            <Label>Price Range</Label>
            <Slider
              defaultValue={[minPrice, maxPrice]}
              min={minPrice}
              max={maxPrice}
              step={1000}
              minStepsBetweenThumbs={1}
              onValueChange={(value) => {
                setCurrentPriceRange(value as [number,number]);
                control._formValues.priceRange = value;
              }}
              className="my-4"
            />
            <div className="text-sm text-muted-foreground flex justify-between">
              <span>${currentPriceRange[0].toLocaleString()}</span>
              <span>${currentPriceRange[1].toLocaleString()}</span>
            </div>
          </div>

          <div className="md:col-span-2 lg:col-span-3 flex flex-col sm:flex-row gap-4 pt-4">
            <Button type="submit" className="w-full sm:w-auto bg-primary hover:bg-primary/90 flex-grow">
              <Search className="mr-2 h-4 w-4" /> Search Cars
            </Button>
            <Button type="button" variant="outline" onClick={handleReset} className="w-full sm:w-auto flex-grow">
              <RotateCcw className="mr-2 h-4 w-4" /> Reset Filters
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
