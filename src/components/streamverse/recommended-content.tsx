'use client';

import { useState, useEffect } from 'react';
import { recommendContent, type RecommendContentOutput } from '@/ai/flows/recommend-content';
import { ContentCard } from './content-card';
import { getContentById, type ContentItem } from '@/lib/data'; // To fetch full content item details
import { Loader2 } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

export function RecommendedContent() {
  const [recommendations, setRecommendations] = useState<ContentItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchRecommendations() {
      setIsLoading(true);
      setError(null);
      try {
        const viewingHistory = ['Stellar Odyssey', 'The Crimson Cipher']; 
        const result: RecommendContentOutput = await recommendContent({ viewingHistory });
        
        if (result.recommendations && result.recommendations.length > 0) {
          const detailedRecommendations = result.recommendations
            .map(title => getContentById(mockGetIdByTitle(title)))
            .filter(item => item !== undefined) as ContentItem[];
          setRecommendations(detailedRecommendations);
        } else {
          setRecommendations([]);
        }
      } catch (err) {
        console.error('Error fetching recommendations:', err);
        setError('Failed to load recommendations. Please try again later.');
      } finally {
        setIsLoading(false);
      }
    }

    fetchRecommendations();
  }, []);

  // Helper to map title to ID for demo purposes. In real app, AI might return IDs.
  const mockGetIdByTitle = (title: string): string => {
    if (title.toLowerCase().includes('echoes')) return '3';
    if (title.toLowerCase().includes('guardians')) return '4';
    if (title.toLowerCase().includes('midnight')) return '5';
    if (title.toLowerCase().includes('planet')) return '6';
    return Math.random().toString(); // fallback if not found
  };

  if (isLoading) {
    return (
      <section className="py-8 md:py-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-primary-foreground px-4 sm:px-6 lg:px-8">Recommended For You</h2>
        <div className="flex items-center justify-center h-40">
          <Loader2 className="h-12 w-12 animate-spin text-accent" />
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-8 md:py-12 px-4 sm:px-6 lg:px-8">
         <h2 className="text-2xl md:text-3xl font-bold mb-6 text-primary-foreground">Recommended For You</h2>
        <Alert variant="destructive">
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      </section>
    );
  }

  if (recommendations.length === 0) {
    return (
       <section className="py-8 md:py-12 px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-primary-foreground">Recommended For You</h2>
        <p className="text-muted-foreground">No recommendations available at the moment.</p>
      </section>
    );
  }

  return (
    <section className="py-8 md:py-12">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-primary-foreground px-4 sm:px-6 lg:px-8">Recommended For You</h2>
      <ScrollArea className="whitespace-nowrap">
        <div className="flex space-x-4 pb-4 px-4 sm:px-6 lg:px-8">
          {recommendations.map((item) => (
            <div key={item.id} className="w-40 md:w-48 lg:w-56 shrink-0">
              <ContentCard item={item} />
            </div>
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </section>
  );
}
