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
  budget: z.string().describe('The budget for the car, specified in INR (e.g., "₹8,00,000 - ₹15,00,000", "under ₹8,00,000", "above ₹40,00,000", or "flexible").'),
  familySize: z.string().describe('The size of the family (e.g., "1-2 people", "3-4 people", "5+ people").'),
  usage: z.string().describe('The primary usage of the car (e.g., "daily city commute", "highway driving / long trips", "off-road / adventure").'),
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
  prompt: `You are an expert car consultant specializing in recommending car models available in the Indian market based on user preferences. Prices should be considered in Indian Rupees (INR). Mileage should be considered in kilometers (km).

You will use the following information to recommend suitable car models to the user.

Budget (INR): {{{budget}}}
Family Size: {{{familySize}}}
Primary Usage: {{{usage}}}

Based on the above information, recommend a list of car models (typically 2-4 models) that would be suitable for the user in India and explain your reasoning behind the recommendations. Focus on models readily available and popular in the Indian automotive market.`,
});

const aiCarFinderFlow = ai.defineFlow(
  {
    name: 'aiCarFinderFlow',
    inputSchema: AICarFinderInputSchema,
    outputSchema: AICarFinderOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
