
'use client';

import { useState } from 'react';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Loader2, Wand2, Car as CarIcon } from 'lucide-react';
import { SectionTitle } from '@/components/shared/SectionTitle';
import { aiCarFinder, AICarFinderInput, AICarFinderOutput } from '@/ai/flows/ai-car-finder';
import { budgetOptions, familySizeOptions, usageOptions } from '@/lib/types';
import { toast } from '@/hooks/use-toast';

const aiFinderSchema = z.object({
  budget: z.string().min(1, "Please select your budget."),
  familySize: z.string().min(1, "Please select your family size."),
  usage: z.string().min(1, "Please select your primary car usage."),
});

type AIFinderFormData = z.infer<typeof aiFinderSchema>;

interface ControllerSelectProps {
  name: keyof AIFinderFormData;
  control: any; // Control type from react-hook-form
  placeholder: string;
  options: { value: string; label: string }[];
  error?: string;
}

function ControllerSelect({ name, control, placeholder, options, error }: ControllerSelectProps) {
  return (
    <>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <Select onValueChange={field.onChange} defaultValue={field.value}>
            <SelectTrigger id={name} className="w-full">
              <SelectValue placeholder={placeholder} />
            </SelectTrigger>
            <SelectContent>
              {options.map(option => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        )}
      />
      {error && <p className="text-sm text-destructive mt-1">{error}</p>}
    </>
  );
}

export default function AiFinderPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState<AICarFinderOutput | null>(null);

  const { handleSubmit, control, formState: { errors } } = useForm<AIFinderFormData>({
    resolver: zodResolver(aiFinderSchema),
     defaultValues: { // Add default values to prevent uncontrolled to controlled warning
      budget: '',
      familySize: '',
      usage: '',
    },
  });

  const onSubmit: SubmitHandler<AIFinderFormData> = async (data) => {
    setIsLoading(true);
    setResults(null);
    try {
      const aiResponse = await aiCarFinder(data);
      setResults(aiResponse);
      toast({
        title: "AI Recommendations Ready!",
        description: "Check out the car models suggested by our AI.",
      });
    } catch (error) {
      console.error("AI Car Finder error:", error);
      toast({
        title: "Error",
        description: "Failed to get AI recommendations. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <SectionTitle
        title="AI Car Finder"
        subtitle="Let our intelligent assistant help you find the perfect car. Just answer a few questions about your needs and preferences."
      />

      <div className="flex flex-col gap-8 md:gap-12"> {/* Changed from grid to flex-col for top-bottom layout */}
        <Card className="shadow-xl w-full"> {/* Ensure card takes full width in flex-col */}
          <CardHeader>
            <CardTitle className="text-2xl font-semibold text-primary flex items-center gap-2">
              <Wand2 className="w-6 h-6" />
              Your Preferences
            </CardTitle>
            <CardDescription>Tell us what you're looking for in a car.</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <Label htmlFor="budget">What's your budget?</Label>
                 <ControllerSelect name="budget" control={control} placeholder="Select budget range" options={budgetOptions} error={errors.budget?.message} />
              </div>

              <div>
                <Label htmlFor="familySize">How many people will typically use the car?</Label>
                <ControllerSelect name="familySize" control={control} placeholder="Select family size" options={familySizeOptions} error={errors.familySize?.message} />
              </div>

              <div>
                <Label htmlFor="usage">What's the primary use for the car?</Label>
                <ControllerSelect name="usage" control={control} placeholder="Select primary usage" options={usageOptions} error={errors.usage?.message} />
              </div>

              <Button type="submit" disabled={isLoading} className="w-full bg-primary hover:bg-primary/90">
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Finding Cars...
                  </>
                ) : (
                  <>
                    <Wand2 className="mr-2 h-4 w-4" />
                    Find My Perfect Car
                  </>
                )}
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Results Area - will now stack below the preferences card */}
        {isLoading && (
          <Card className="shadow-xl animate-pulse w-full"> {/* Ensure card takes full width */}
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-primary flex items-center gap-2">
                <CarIcon className="w-6 h-6" />
                AI Recommendations
              </CardTitle>
              <CardDescription>Our AI is thinking... please wait.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="h-6 bg-muted rounded w-3/4"></div>
              <div className="h-4 bg-muted rounded w-full"></div>
              <div className="h-4 bg-muted rounded w-5/6"></div>
              <div className="h-4 bg-muted rounded w-full"></div>
            </CardContent>
          </Card>
        )}

        {!isLoading && results && (
          <Card className="shadow-xl bg-card border-accent w-full"> {/* Ensure card takes full width */}
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-primary flex items-center gap-2">
                 <CarIcon className="w-6 h-6" />
                AI Recommendations
              </CardTitle>
              <CardDescription>Based on your preferences, here are some suggestions:</CardDescription>
            </CardHeader>
            <CardContent>
              <h3 className="font-semibold text-lg mb-2 text-primary">Recommended Models:</h3>
              {results.carModels && results.carModels.length > 0 ? (
                <ul className="list-disc list-inside space-y-1 mb-4 text-foreground">
                  {results.carModels.map((model, index) => (
                    <li key={index}>{model}</li>
                  ))}
                </ul>
              ) : (
                <p className="text-muted-foreground mb-4">No specific models found. Try adjusting your preferences.</p>
              )}
              
              <h3 className="font-semibold text-lg mb-2 text-primary">Reasoning:</h3>
              <p className="text-muted-foreground whitespace-pre-line">{results.reasoning}</p>
            </CardContent>
            <CardFooter>
              <Button variant="link" onClick={() => { setResults(null); /* Consider resetting form here if desired */ }} className="text-primary">
                Clear Results & Search Again
              </Button>
            </CardFooter>
          </Card>
        )}
         {!isLoading && !results && (
           <Card className="shadow-xl w-full min-h-[300px] flex flex-col items-center justify-center text-center bg-secondary/50"> {/* Ensure card takes full width and has some min-height */}
              <CardContent className="p-8">
                  <Wand2 className="w-16 h-16 text-primary mx-auto mb-4 opacity-50" />
                  <p className="text-lg text-muted-foreground">
                      Fill out the form to get personalized car recommendations from our AI.
                  </p>
              </CardContent>
           </Card>
         )}
      </div>
    </div>
  );
}
