import type { ContentItem } from '@/lib/data';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { PlayCircle } from 'lucide-react';

interface ContentCardProps {
  item: ContentItem;
}


export function ContentCard({ item }: ContentCardProps) {
  return (
    <Link href={`/watch/${item.id}`} className="block group">
      <Card className="overflow-hidden transition-all duration-300 ease-in-out hover:shadow-accent/50 hover:shadow-lg hover:scale-105 border-transparent bg-card hover:border-accent/50">
        <CardContent className="p-0">
          <div className="aspect-[2/3] relative">
            <Image
              src={item.imageUrl}
              alt={item.title}
              layout="fill"
              objectFit="cover"
              className="transition-opacity duration-300 group-hover:opacity-80"
              data-ai-hint={item.type === 'movie' ? "movie poster" : "tv show poster"}
            />
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <PlayCircle className="h-16 w-16 text-primary-foreground/80" />
            </div>
          </div>
          <div className="p-3 bg-card">
            <h3 className="text-md font-semibold truncate text-card-foreground group-hover:text-accent transition-colors">{item.title}</h3>
            <p className="text-xs text-muted-foreground">{item.releaseYear} &bull; {item.rating}</p>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
