import { Skeleton } from "@/components/ui/skeleton";
import { CalendarDays, Clock, Star, Tv } from 'lucide-react';

export default function LoadingContentDetailsPage() {
  return (
    <div className="min-h-screen">
      {/* Backdrop Skeleton */}
      <Skeleton className="relative h-[50vh] md:h-[65vh] w-full" />
      
      {/* Content Details Skeleton */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="absolute bottom-8 left-8 md:left-16 z-10" style={{top: 'calc(65vh - 100px)'}}> {/* Approximate position */}
           <Skeleton className="h-12 w-3/4 md:w-1/2 mb-2 rounded-md" />
           <div className="flex items-center space-x-3 text-sm md:text-base">
            <Skeleton className="h-5 w-20 rounded-md" />
            <Skeleton className="h-5 w-20 rounded-md" />
            <Skeleton className="h-5 w-20 rounded-md" />
           </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-[-80px] md:mt-[-120px] relative z-20"> {/* Pull content up */}
          {/* Left Column Skeleton */}
          <div className="md:col-span-1">
             <div className="sticky top-24">
                <Skeleton className="relative aspect-[2/3] w-full max-w-xs mx-auto md:mx-0 rounded-lg shadow-2xl mb-6" />
                <Skeleton className="h-12 w-full rounded-lg" />
             </div>
          </div>

          {/* Right Column Skeleton */}
          <div className="md:col-span-2">
            {/* Genres Skeleton */}
            <div className="mb-6 flex space-x-2">
              <Skeleton className="h-8 w-20 rounded-full" />
              <Skeleton className="h-8 w-24 rounded-full" />
              <Skeleton className="h-8 w-16 rounded-full" />
            </div>

            {/* Description Skeleton */}
            <Skeleton className="h-6 w-full mb-2 rounded-md" />
            <Skeleton className="h-6 w-full mb-2 rounded-md" />
            <Skeleton className="h-6 w-5/6 mb-8 rounded-md" />

            {/* Cast Skeleton */}
            <div className="mb-8">
              <Skeleton className="h-8 w-1/4 mb-4 rounded-md" />
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                {[...Array(4)].map((_, i) => (
                  <div key={i}>
                    <Skeleton className="aspect-[2/3] w-full rounded-lg mb-2" />
                    <Skeleton className="h-4 w-full rounded-md" />
                    <Skeleton className="h-3 w-3/4 mt-1 rounded-md" />
                  </div>
                ))}
              </div>
            </div>

            {/* Seasons Skeleton (Placeholder) */}
             <div>
              <Skeleton className="h-8 w-1/3 mb-4 rounded-md" />
              <Skeleton className="h-24 w-full mb-2 rounded-md" />
              <Skeleton className="h-24 w-full rounded-md" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
