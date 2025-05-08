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
  budget: z.string().describe('The budget for the car.'),
  familySize: z.string().describe('The size of the family.'),
  usage: z.string().describe('The primary usage of the car.'),
});
export type AICarFinderInput = z.infer<typeof AICarFinderInputSchema>;

const AICarFinderOutputSchema = z.object({
  carModels: z.array(z.string()).describe('A list of recommended car models.'),
  reasoning: z.string().describe('The reasoning behind the car model recommendations.'),
});
export type AICarFinderOutput = z.infer<typeof AICarFinderOutputSchema>;

export async function aiCarFinder(input: AICarFinderInput): Promise<AICarFinderOutput> {
  return aiCarFinderFlow(input);
}

const prompt = ai.definePrompt({
  name: 'aiCarFinderPrompt',
  input: {schema: AICarFinderInputSchema},
  output: {schema: AICarFinderOutputSchema},
  prompt: `You are an expert car consultant specializing in recommending car models based on user preferences.

You will use the following information to recommend suitable car models to the user.

Budget: {{{budget}}}
Family Size: {{{familySize}}}
Usage: {{{usage}}}

Based on the above information, recommend a list of car models that would be suitable for the user and explain your reasoning behind the recommendations.`,
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
