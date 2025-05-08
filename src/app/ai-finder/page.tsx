
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
import { Loader2, Wand2, Car as CarIcon, Zap, Users, Target, Banknote } from 'lucide-react';
import { SectionTitle } from '@/components/shared/SectionTitle';
import { aiCarFinder, AICarFinderInput, AICarFinderOutput } from '@/ai/flows/ai-car-finder';
import { budgetOptions, familySizeOptions, usageOptions, mileagePreferenceOptions } from '@/lib/types';
import { toast } from '@/hooks/use-toast';

// Schema now allows empty strings, as empty means "any" or "no preference"
const aiFinderSchema = z.object({
  budget: z.string().optional(),
  familySize: z.string().optional(),
  usage: z.string().optional(),
  mileagePreference: z.string().optional(),
});

type AIFinderFormData = z.infer<typeof aiFinderSchema>;

interface ControllerSelectProps {
  name: keyof AIFinderFormData;
  control: any; // Control type from react-hook-form
  placeholder: string;
  options: { value: string; label: string }[];
  Icon?: React.ElementType; 
  label: string;
}

const EMPTY_STRING_VALUE_FOR_SELECT = "_EMPTY_"; // Special value for "Any" or "No Preference"

function ControllerSelect({ name, control, placeholder, options, Icon, label }: ControllerSelectProps) {
  return (
    <div className="space-y-2">
      <Label htmlFor={name} className="flex items-center gap-1">
        {Icon && <Icon className="w-4 h-4 text-primary" />}
        {label}
      </Label>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <Select 
            onValueChange={(value) => field.onChange(value === EMPTY_STRING_VALUE_FOR_SELECT ? "" : value)} 
            value={field.value === "" ? EMPTY_STRING_VALUE_FOR_SELECT : field.value}
          >
            <SelectTrigger id={name} className="w-full">
              <SelectValue placeholder={placeholder} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value={EMPTY_STRING_VALUE_FOR_SELECT}>{placeholder}</SelectItem>
              {options.map(option => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        )}
      />
    </div>
  );
}

export default function AiFinderPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState<AICarFinderOutput | null>(null);

  const { handleSubmit, control } = useForm<AIFinderFormData>({
    resolver: zodResolver(aiFinderSchema),
    defaultValues: { // Default to empty strings, meaning no specific preference
      budget: '',
      familySize: '',
      usage: '',
      mileagePreference: '',
    },
  });

  const onSubmit: SubmitHandler<AIFinderFormData> = async (data) => {
    setIsLoading(true);
    setResults(null);
    try {
      const submissionData: AICarFinderInput = {
        budget: data.budget || "",
        familySize: data.familySize || "",
        usage: data.usage || "",
        mileagePreference: data.mileagePreference || "",
      };
      const aiResponse = await aiCarFinder(submissionData);
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
        subtitle="Let our intelligent assistant help you find the perfect car. Just answer a few questions about your needs and preferences. Leave fields blank if you have no specific preference."
      />

      <div className="flex flex-col gap-8 md:gap-12 items-center"> {/* Changed to flex-col */}
        <Card className="shadow-xl w-full max-w-2xl"> {/* Added max-w-2xl for better form appearance */}
          <CardHeader>
            <CardTitle className="text-2xl font-semibold text-primary flex items-center gap-2">
              <Wand2 className="w-6 h-6" />
              Your Preferences
            </CardTitle>
            <CardDescription>Tell us what you're looking for. Fields can be left blank.</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <ControllerSelect 
                name="budget" 
                control={control} 
                label="What's your budget?"
                placeholder="Any Budget" 
                options={budgetOptions}
                Icon={Banknote} 
              />
              <ControllerSelect 
                name="familySize" 
                control={control} 
                label="How many people will use the car?"
                placeholder="Any Family Size" 
                options={familySizeOptions} 
                Icon={Users}
              />
              <ControllerSelect 
                name="usage" 
                control={control} 
                label="What's the primary use?"
                placeholder="Any Usage" 
                options={usageOptions} 
                Icon={Target}
              />
              <ControllerSelect 
                name="mileagePreference" 
                control={control} 
                label="Mileage preference (kmpl)?"
                placeholder="Any Mileage" 
                options={mileagePreferenceOptions} 
                Icon={Zap}
              />

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

        {/* Results Area - now below the form */}
        <div className="w-full max-w-4xl"> {/* Added max-w-4xl for better results appearance */}
          {isLoading && (
            <Card className="shadow-xl animate-pulse w-full">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold text-primary flex items-center gap-2">
                  <CarIcon className="w-6 h-6" />
                  AI Recommendations
                </CardTitle>
                <CardDescription>Our AI is thinking... please wait.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 p-6">
                <div className="h-6 bg-muted rounded w-3/4"></div>
                <div className="h-4 bg-muted rounded w-full"></div>
                <div className="h-4 bg-muted rounded w-5/6"></div>
                <div className="h-4 bg-muted rounded w-full"></div>
              </CardContent>
            </Card>
          )}

          {!isLoading && results && (
            <Card className="shadow-xl bg-card border-accent w-full">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold text-primary flex items-center gap-2">
                  <CarIcon className="w-6 h-6" />
                  AI Recommendations
                </CardTitle>
                <CardDescription>Based on your preferences, here are some suggestions:</CardDescription>
              </CardHeader>
              <CardContent className="p-6">
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
              <CardFooter className="p-6 border-t">
                <Button variant="link" onClick={() => { setResults(null); }} className="text-primary">
                  Clear Results & Search Again
                </Button>
              </CardFooter>
            </Card>
          )}

          {!isLoading && !results && (
            <Card className="shadow-xl w-full min-h-[300px] flex flex-col items-center justify-center text-center bg-card">
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
    </div>
  );
}

