
'use server';
/**
 * @fileOverview An AI car finder to suggest car models based on user preferences.
 *
 * - aiCarFinder - A function that handles the car recommendation process.
 * - AICarFinderInput - The input type for the aiCarFinder function.
 * - AICarFinderOutput - The return type for the aiCarFinder function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AICarFinderInputSchema = z.object({
  budget: z.string().describe('The budget for the car, specified in INR (e.g., "₹8,00,000 - ₹15,00,000", "under ₹8,00,000", "above ₹40,00,000", or "flexible"). An empty string means the budget is flexible or not specified.'),
  familySize: z.string().describe('The size of the family (e.g., "3-4 people", "5+ people"). An empty string means this is not a primary constraint or any size is acceptable.'),
  usage: z.string().describe('The primary usage of the car (e.g., "daily city commute", "highway driving / long trips", "off-road / adventure"). An empty string means the usage is varied or not specified.'),
  mileagePreference: z.string().describe('The desired mileage preference for the car in kmpl (e.g., "20+ kmpl (High)", "15-20 kmpl (Average)", "not a primary concern"). An empty string means mileage is not a primary concern or any mileage is acceptable.'),
});
export type AICarFinderInput = z.infer<typeof AICarFinderInputSchema>;

const AICarFinderOutputSchema = z.object({
  carModels: z.array(z.string()).describe('A list of recommended car models available in India.'),
  reasoning: z.string().describe('The reasoning behind the car model recommendations, considering the Indian market and preferences.'),
});
export type AICarFinderOutput = z.infer<typeof AICarFinderOutputSchema>;

export async function aiCarFinder(input: AICarFinderInput): Promise<AICarFinderOutput> {
  return aiCarFinderFlow(input);
}

const prompt = ai.definePrompt({
  name: 'aiCarFinderPrompt',
  input: {schema: AICarFinderInputSchema},
  output: {schema: AICarFinderOutputSchema},
  prompt: `You are an expert car consultant specializing in recommending car models available in the Indian market based on user preferences. Prices should be considered in Indian Rupees (INR). Fuel efficiency/mileage should be considered in kilometers per liter (kmpl).

You will use the following information to recommend suitable car models to the user. If a particular preference is not specified (i.e., the value is empty or "flexible" for budget, or "not a primary concern" for mileage), consider it as not a strong constraint and provide broader recommendations if applicable for that category.

Budget (INR): {{{budget}}}
Family Size: {{{familySize}}}
Primary Usage: {{{usage}}}
Mileage Preference (kmpl): {{{mileagePreference}}}

Based on the above information, recommend a list of car models (typically 2-4 models) that would be suitable for the user in India and explain your reasoning behind the recommendations. Focus on models readily available and popular in the Indian automotive market. Consider the mileage preference carefully in your suggestions. If a preference is not provided, explain how that flexibility influenced your recommendations.`,
});

const aiCarFinderFlow = ai.defineFlow(
  {
    name: 'aiCarFinderFlow',
    inputSchema: AICarFinderInputSchema,
    outputSchema: AICarFinderOutputSchema,
  },
  async input => {
    // Sanitize inputs: map empty strings to a more explicit "any" or "flexible" for the AI if needed,
    // or rely on the prompt instructions to handle empty strings.
    // For this iteration, the prompt is updated to handle empty strings directly.
    const processedInput = {
        budget: input.budget || "flexible",
        familySize: input.familySize || "any",
        usage: input.usage || "any",
        mileagePreference: input.mileagePreference || "not a primary concern",
    };
    const {output} = await prompt(processedInput);
    return output!;
  }
);

