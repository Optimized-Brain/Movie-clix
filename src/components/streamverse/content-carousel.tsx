import type { ContentItem } from '@/lib/data';
import { ContentCard } from './content-card';
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

interface ContentCarouselProps {
  title: string;
  items: ContentItem[];
}

export function ContentCarousel({ title, items }: ContentCarouselProps) {
  if (!items || items.length === 0) {
    return null;
  }

  return (
    <section className="py-8 md:py-12">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-primary-foreground px-4 sm:px-6 lg:px-8">{title}</h2>
      <ScrollArea className="whitespace-nowrap">
        <div className="flex space-x-4 pb-4 px-4 sm:px-6 lg:px-8">
          {items.map((item) => (
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
