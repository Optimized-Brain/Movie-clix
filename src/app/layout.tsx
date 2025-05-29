import type {Metadata} from 'next';
import {Geist, Geist_Mono} from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/layout/navbar';
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'MovieClix',
  description: 'Your universe of movies and TV shows.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark"> {/* Ensure dark theme is applied if needed, though CSS vars default to dark */}
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground min-h-screen flex flex-col`}>
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Toaster />
        <footer className="py-8 text-center text-muted-foreground border-t border-border mt-auto">
          <p>&copy; {new Date().getFullYear()} StreamVerse. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}
