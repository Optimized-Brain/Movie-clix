import { HeroVideo } from '@/components/streamverse/hero-video';
import { ContentCarousel } from '@/components/streamverse/content-carousel';
import { RecommendedContent } from '@/components/streamverse/recommended-content';
import { getFeaturedContent, getContentByGenre, genresList, getRecentlyAdded, getTrendingNow } from '@/lib/data';

export default function HomePage() {
  const featuredItem = getFeaturedContent();
  const recentlyAdded = getRecentlyAdded(10);
  const trendingNow = getTrendingNow(10);

  return (
    <div>
      {featuredItem && <HeroVideo item={featuredItem} />}
      <div className="container mx-auto px-0 sm:px-0 lg:px-0"> {/* Container for carousels to manage padding if needed, carousels manage their own padding now */}
        <ContentCarousel title="Trending Now" items={trendingNow} />
        <ContentCarousel title="Recently Added" items={recentlyAdded} />
        {genresList.map((genre) => {
          const itemsByGenre = getContentByGenre(genre);
          if (itemsByGenre.length > 0) {
            return <ContentCarousel key={genre} title={`${genre} Picks`} items={itemsByGenre} />;
          }
          return null;
        })}
        <RecommendedContent />
      </div>
    </div>
  );
}
