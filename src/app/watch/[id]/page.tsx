import { getContentById, type ContentItem, type CastMember } from '@/lib/data';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { PlayCircle, CalendarDays, Clock, Star, Tv } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { SeasonSwitcher } from '@/components/streamverse/season-switcher';
import { CastMemberCard } from '@/components/streamverse/cast-member-card';
import Link from 'next/link';

interface ContentDetailsPageProps {
  params: { id: string };
}

export default function ContentDetailsPage({ params }: ContentDetailsPageProps) {
  const item = getContentById(params.id);

  if (!item) {
    notFound();
  }

  return (
    <div className="min-h-screen">
      {/* Backdrop Section */}
      <div className="relative h-[50vh] md:h-[65vh] w-full">
        <Image
          src={item.backdropUrl}
          alt={`Backdrop for ${item.title}`}
          layout="fill"
          objectFit="cover"
          className="brightness-50"
          data-ai-hint={item.type === 'movie' ? "movie backdrop" : "tv show backdrop"}
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent"></div>
        <div className="absolute bottom-8 left-8 md:left-16 z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-2 drop-shadow-xl">{item.title}</h1>
          <div className="flex items-center space-x-3 text-primary-foreground/80 text-sm md:text-base">
            <span><CalendarDays className="inline h-4 w-4 mr-1" /> {item.releaseYear}</span>
            {item.duration && <span><Clock className="inline h-4 w-4 mr-1" /> {item.duration}</span>}
            <span><Star className="inline h-4 w-4 mr-1 text-yellow-400" /> {item.rating}</span>
            <span><Tv className="inline h-4 w-4 mr-1" /> {item.type === 'tv' ? 'TV Series' : 'Movie'}</span>
          </div>
        </div>
      </div>

      {/* Content Details Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Column: Poster & Play Button */}
          <div className="md:col-span-1">
            <div className="sticky top-24"> {/* Sticky poster */}
              <div className="relative aspect-[2/3] w-full max-w-xs mx-auto md:mx-0 rounded-lg overflow-hidden shadow-2xl mb-6">
                <Image
                  src={item.imageUrl}
                  alt={item.title}
                  layout="fill"
                  objectFit="cover"
                  data-ai-hint={item.type === 'movie' ? "movie poster" : "tv show poster"}
                />
              </div>
              <Button asChild size="lg" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg py-3 text-lg">
                <Link href={item.trailerUrl || "#"}> {/* Fallback to # if no trailer */}
                  <PlayCircle className="mr-2 h-6 w-6" />
                  {item.trailerUrl ? 'Play Trailer' : 'Play'}
                </Link>
              </Button>
            </div>
          </div>

          {/* Right Column: Info, Cast, Seasons */}
          <div className="md:col-span-2">
            {/* Genres */}
            <div className="mb-6">
              {item.genres.map((genre) => (
                <Badge key={genre} variant="secondary" className="mr-2 mb-2 text-sm px-3 py-1 bg-secondary text-secondary-foreground">
                  {genre}
                </Badge>
              ))}
            </div>

            {/* Description */}
            <p className="text-base md:text-lg text-foreground/90 mb-8 leading-relaxed">{item.description}</p>

            {/* Cast */}
            {item.cast && item.cast.length > 0 && (
              <div className="mb-8">
                <h3 className="text-2xl font-semibold text-primary-foreground mb-4">Cast</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                  {item.cast.map((member: CastMember) => (
                    <CastMemberCard key={member.id} member={member} />
                  ))}
                </div>
              </div>
            )}

            {/* Seasons (for TV shows) */}
            {item.type === 'tv' && item.seasons && item.seasons.length > 0 && (
              <SeasonSwitcher seasons={item.seasons} contentTitle={item.title} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
