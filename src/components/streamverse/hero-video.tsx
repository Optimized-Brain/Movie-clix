import type { ContentItem } from '@/lib/data';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PlayCircle, Info } from 'lucide-react';

interface HeroVideoProps {
  item: ContentItem;
}
// this is where content video streaming content will be hosted
export function HeroVideo({ item }: HeroVideoProps) {
  return (
    <div className="relative h-[75vh] w-full overflow-hidden">
      <Image
        src={item.backdropUrl}
        alt={`Backdrop for ${item.title}`}
        layout="fill"
        objectFit="cover"
        className="brightness-50"
        data-ai-hint={item.type === 'movie' ? "movie backdrop" : "tv show backdrop"}
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
      <div className="absolute bottom-0 left-0 p-8 md:p-16 text-background-foreground w-full md:w-2/3 lg:w-1/2">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-4 drop-shadow-lg">{item.title}</h1>
        <p className="text-lg md:text-xl text-primary-foreground/90 mb-6 line-clamp-3 drop-shadow-sm">{item.description}</p>
        <div className="flex space-x-4">
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg px-8 py-3 text-lg">
            <Link href={item.trailerUrl || `/watch/${item.id}`}>
              <PlayCircle className="mr-2 h-6 w-6" />
              Play
            </Link>
          </Button>
          <Button asChild variant="secondary" size="lg" className="bg-secondary/80 hover:bg-secondary text-secondary-foreground rounded-lg px-8 py-3 text-lg">
            <Link href={`/watch/${item.id}`}>
              <Info className="mr-2 h-6 w-6" />
              More Info
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
