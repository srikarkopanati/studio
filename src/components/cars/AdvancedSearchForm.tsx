
"use client";

import * as React from 'react';
import { useForm, SubmitHandler, Controller } from 'react-hook-form'; 
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
import { carConditionOptions } from '@/lib/types'; 

const searchSchema = z.object({
  make: z.string().optional(),
  model: z.string().optional(),
  minYear: z.string().optional().refine(val => !val || /^\d{4}$/.test(val), { message: "Invalid year"}),
  maxYear: z.string().optional().refine(val => !val || /^\d{4}$/.test(val), { message: "Invalid year"}),
  priceRange: z.array(z.number()).optional(), 
  condition: z.string().optional(),
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
const ANY_MAKE_VALUE = "_ANY_MAKE_"; 
const ANY_CONDITION_VALUE = "_ANY_CONDITION_";

export function AdvancedSearchForm({ allCars, onSearch, uniqueMakes, minPrice, maxPrice }: AdvancedSearchFormProps) {
  
  const { register, handleSubmit, control, reset, watch, formState: { errors } } = useForm<SearchFormData>({
    resolver: zodResolver(searchSchema),
    defaultValues: {
      make: ANY_MAKE_VALUE, 
      model: '',
      minYear: '',
      maxYear: '',
      priceRange: [minPrice, maxPrice],
      condition: ANY_CONDITION_VALUE,
    },
  });

  React.useEffect(() => {
    // Ensure priceRange defaults are set correctly if minPrice/maxPrice change after initial mount
    reset(currentValues => ({
      ...currentValues,
      priceRange: [minPrice, maxPrice]
    }), { keepDirty: true, keepSubmitSucceeded: true });
  }, [minPrice, maxPrice, reset]);

  const onSubmit: SubmitHandler<SearchFormData> = (data) => {
    let filtered = [...allCars];

    if (data.make && data.make !== ANY_MAKE_VALUE) { 
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
    if (data.condition && data.condition !== ANY_CONDITION_VALUE) {
      filtered = filtered.filter(car => car.condition === data.condition);
    }
    onSearch(filtered);
  };

  const handleReset = () => {
    reset({
      make: ANY_MAKE_VALUE,
      model: '',
      minYear: '',
      maxYear: '',
      priceRange: [minPrice, maxPrice],
      condition: ANY_CONDITION_VALUE,
    });
    onSearch(allCars); 
  };

  const currentPriceRange = watch("priceRange") || [minPrice, maxPrice];

  return (
    <Card className="shadow-xl mb-12 bg-card border border-border rounded-xl">
      <CardHeader className="border-b border-border">
        <CardTitle className="text-2xl font-semibold text-primary flex items-center gap-2">
          <Filter className="w-6 h-6" />
          Advanced Search
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-end">
          <div className="space-y-2">
            <Label htmlFor="make-select" className="font-medium">Make</Label>
            <Controller
              name="make"
              control={control}
              render={({ field }) => (
                <Select
                  onValueChange={(value) => field.onChange(value === ANY_MAKE_VALUE ? "" : value)}
                  value={field.value || ANY_MAKE_VALUE}
                >
                  <SelectTrigger id="make-select" className="w-full bg-input border-input focus:ring-primary">
                    <SelectValue placeholder="Any Make" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value={ANY_MAKE_VALUE}>Any Make</SelectItem>
                    {uniqueMakes.map(make => (
                      <SelectItem key={make} value={make}>{make}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="model" className="font-medium">Model</Label>
            <Input id="model" placeholder="e.g., Swift, Creta, XUV700" {...register('model')} className="bg-input border-input focus:ring-primary" />
          </div>
          
           <div className="space-y-2">
            <Label htmlFor="condition-select" className="font-medium">Condition</Label>
            <Controller
              name="condition"
              control={control}
              render={({ field }) => (
                <Select
                  onValueChange={(value) => field.onChange(value === ANY_CONDITION_VALUE ? "" : value)}
                  value={field.value || ANY_CONDITION_VALUE}
                >
                  <SelectTrigger id="condition-select" className="w-full bg-input border-input focus:ring-primary">
                    <SelectValue placeholder="Any Condition" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value={ANY_CONDITION_VALUE}>Any Condition</SelectItem>
                    {carConditionOptions.map(option => (
                      <SelectItem key={option.value} value={option.value}>{option.label}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="minYear" className="font-medium">Min Year</Label>
            <Input id="minYear" type="number" placeholder={`e.g. ${currentYear - 5}`} {...register('minYear')} min="1980" max={currentYear} className="bg-input border-input focus:ring-primary" />
            {errors.minYear && <p className="text-sm text-destructive">{errors.minYear.message}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="maxYear" className="font-medium">Max Year</Label>
            <Input id="maxYear" type="number" placeholder={`e.g. ${currentYear}`} {...register('maxYear')} min="1980" max={currentYear} className="bg-input border-input focus:ring-primary" />
            {errors.maxYear && <p className="text-sm text-destructive">{errors.maxYear.message}</p>}
          </div>
          
          <div className="space-y-2 md:col-span-2 lg:col-span-3">
            <Label className="font-medium">Price Range (₹)</Label>
            <Controller
              name="priceRange"
              control={control}
              defaultValue={[minPrice, maxPrice]} // Ensure defaultValue is set for slider
              render={({ field }) => (
                <>
                  <Slider
                    value={field.value}
                    onValueChange={field.onChange}
                    min={minPrice} 
                    max={maxPrice} 
                    step={50000} 
                    minStepsBetweenThumbs={0}
                    className="my-4 [&>span:nth-child(1)>span]:bg-primary [&>span:nth-child(2)>span]:bg-accent [&>span:nth-child(3)>span]:bg-accent" // Ensure all thumbs are accent
                  />
                  <div className="text-sm text-muted-foreground flex justify-between">
                    <span>₹{currentPriceRange[0].toLocaleString('en-IN')}</span>
                    <span>₹{currentPriceRange[1].toLocaleString('en-IN')}</span>
                  </div>
                </>
              )}
            />
          </div>

          <div className="md:col-span-2 lg:col-span-3 flex flex-col sm:flex-row gap-4 pt-4">
            <Button type="submit" className="w-full sm:w-auto bg-primary hover:bg-primary/90 flex-grow text-primary-foreground shadow-md">
              <Search className="mr-2 h-4 w-4" /> Search Cars
            </Button>
            <Button type="button" variant="outline" onClick={handleReset} className="w-full sm:w-auto flex-grow border-primary text-primary hover:bg-primary/10 hover:text-primary-foreground shadow-sm">
              <RotateCcw className="mr-2 h-4 w-4" /> Reset Filters
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
