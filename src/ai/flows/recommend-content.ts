// RecommendContent story implementation.
'use server';

/**
 * @fileOverview This file defines a Genkit flow for recommending content based on user viewing history.
 *
 * - recommendContent - A function that takes user viewing history as input and returns content recommendations.
 * - RecommendContentInput - The input type for the recommendContent function.
 * - RecommendContentOutput - The output type for the recommendContent function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const RecommendContentInputSchema = z.object({
  viewingHistory: z
    .array(z.string())
    .describe('An array of movie or show titles the user has previously watched.'),
  genrePreferences: z
    .array(z.string())
    .optional()
    .describe('An array of preferred genres of the user. Optional'),
});
export type RecommendContentInput = z.infer<typeof RecommendContentInputSchema>;

const RecommendContentOutputSchema = z.object({
  recommendations: z
    .array(z.string())
    .describe('An array of recommended movie or show titles.'),
  reasoning: z
    .string()
    .optional()
    .describe('The reasoning behind the recommendations. Optional'),
});
export type RecommendContentOutput = z.infer<typeof RecommendContentOutputSchema>;

export async function recommendContent(input: RecommendContentInput): Promise<RecommendContentOutput> {
  return recommendContentFlow(input);
}

const recommendContentPrompt = ai.definePrompt({
  name: 'recommendContentPrompt',
  input: {schema: RecommendContentInputSchema},
  output: {schema: RecommendContentOutputSchema},
  prompt: `You are a movie and TV show recommendation expert.

  Based on the user's viewing history, recommend movies or shows they might like.
  Consider the users preferred genres if supplied. The recommendations should be diverse and interesting.

  Viewing History: {{viewingHistory}}
  Genre Preferences: {{genrePreferences}}

  Return the recommendations as an array of titles.
  Explain your reasoning in the reasoning field, briefly, if possible.
  `,
});

const recommendContentFlow = ai.defineFlow(
  {
    name: 'recommendContentFlow',
    inputSchema: RecommendContentInputSchema,
    outputSchema: RecommendContentOutputSchema,
  },
  async input => {
    const {output} = await recommendContentPrompt(input);
    return output!;
  }
);
