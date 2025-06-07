'use client';

import { useState } from 'react';
import type { Season, Episode } from '@/lib/data';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import Image from 'next/image';
import { PlayIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface SeasonSwitcherProps {
  seasons: Season[];
  contentTitle: string;
}

export function SeasonSwitcher({ seasons, contentTitle }: SeasonSwitcherProps) {
  const [selectedSeasonId, setSelectedSeasonId] = useState<string | undefined>(seasons[0]?.id);

  const selectedSeason = seasons.find(s => s.id === selectedSeasonId);

  if (!seasons || seasons.length === 0) {
    return <p className="text-muted-foreground">No season information available.</p>;
  }

  return (
    <div className="my-8">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-2xl font-semibold text-primary-foreground">Episodes</h3>
        {seasons.length > 1 && (
          <Select
            value={selectedSeasonId}
            onValueChange={(value) => setSelectedSeasonId(value)}
          >
            <SelectTrigger className="w-[180px] bg-secondary text-secondary-foreground border-muted focus:ring-accent">
              <SelectValue placeholder="Select a season" />
            </SelectTrigger>
            <SelectContent className="bg-popover text-popover-foreground">
              {seasons.map((season) => (
                <SelectItem key={season.id} value={season.id} className="focus:bg-accent focus:text-accent-foreground">
                  Season {season.seasonNumber}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        )}
      </div>

      {selectedSeason && (
        <div className="space-y-4">
          {selectedSeason.episodes.map((episode, index) => (
            <Card key={episode.id} className="bg-card border-border/50 hover:border-accent/70 transition-colors duration-200">
              <CardContent className="p-4 flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-4">
                <div className="relative w-full md:w-48 h-28 md:h-24 shrink-0 rounded-md overflow-hidden">
                  <Image
                    src={episode.thumbnailUrl}
                    alt={`Thumbnail for ${contentTitle} Season ${selectedSeason.seasonNumber} Episode ${episode.episodeNumber}`}
                    layout="fill"
                    objectFit="cover"
                    data-ai-hint="episode scene"
                  />
                   <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 group">
                    <PlayIcon className="h-10 w-10 text-primary-foreground/80" />
                  </div>
                </div>
                <div className="flex-grow">
                  <CardHeader className="p-0 mb-1">
                    <CardTitle className="text-lg font-medium text-card-foreground">
                       {episode.episodeNumber}. {episode.title}
                    </CardTitle>
                  </CardHeader>
                  <CardDescription className="text-sm text-muted-foreground line-clamp-2">
                    {episode.description}
                  </CardDescription>
                </div>
                <div className="flex items-center space-x-2 shrink-0 pt-2 md:pt-0">
                   <span className="text-xs text-muted-foreground">{episode.duration}</span>
                   <Button variant="ghost" size="icon" className="text-accent hover:text-accent-foreground hover:bg-accent/20">
                     <PlayIcon className="h-5 w-5" />
                   </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
