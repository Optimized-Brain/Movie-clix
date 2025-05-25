import Link from 'next/link';
import { Clapperboard } from 'lucide-react';

export function Navbar() {
  return (
    <nav className="bg-background/80 backdrop-blur-md sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <Link href="/" className="flex items-center text-primary hover:text-accent transition-colors">
              <Clapperboard className="h-10 w-10 mr-3" />
              <span className="font-bold text-3xl tracking-tight">StreamVerse</span>
            </Link>
          </div>
          <div className="flex items-center space-x-6">
            <Link href="/" className="text-foreground hover:text-accent transition-colors text-lg font-medium">
              Home
            </Link>
            {/* Future links: TV Shows, Movies, My List */}
          </div>
        </div>
      </div>
    </nav>
  );
}
