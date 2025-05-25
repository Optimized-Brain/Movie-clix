export interface CastMember {
  id: string;
  name: string;
  role: string;
  imageUrl: string; 
}

export interface Episode {
  id: string;
  episodeNumber: number;
  title: string;
  description: string;
  thumbnailUrl: string;
  duration: string;
}

export interface Season {
  id: string;
  seasonNumber: number;
  episodes: Episode[];
  // trailerUrl?: string; 
}

export interface ContentItem {
  id: string;
  title: string;
  description: string;
  type: 'movie' | 'tv';
  genres: string[];
  imageUrl: string; 
  backdropUrl: string;
  trailerUrl?: string; 
  releaseYear: number;
  rating: string; 
  duration?: string; 
  cast: CastMember[];
  seasons?: Season[];
  featured?: boolean;
}

export const mockContent: ContentItem[] = [
  {
    id: '1',
    title: 'Stellar Odyssey',
    description: 'A thrilling space adventure to the edge of the universe, where a brave crew uncovers ancient secrets and faces existential threats.',
    type: 'movie',
    genres: ['Sci-Fi', 'Action', 'Adventure'],
    imageUrl: 'https://placehold.co/500x750/A020F0/FFFFFF?text=Stellar+Odyssey',
    backdropUrl: 'https://placehold.co/1280x720/1A032B/E6E6FA?text=Stellar+Odyssey+Backdrop',
    trailerUrl: 'https://www.w3schools.com/html/mov_bbb.mp4', // Placeholder video
    releaseYear: 2024,
    rating: 'PG-13',
    duration: '2h 28m',
    cast: [
      { id: 'c1', name: 'Alex Ryder', role: 'Captain Eva Rostova', imageUrl: 'https://placehold.co/150x225/3D1F5B/E6E6FA?text=Alex+Ryder' },
      { id: 'c2', name: 'Lena Hanson', role: 'Dr. Aris Thorne', imageUrl: 'https://placehold.co/150x225/3D1F5B/E6E6FA?text=Lena+Hanson' },
    ],
    featured: true,
  },
  {
    id: '2',
    title: 'The Crimson Cipher',
    description: 'A brilliant detective races against time to decode an ancient manuscript that holds the key to preventing a global catastrophe.',
    type: 'movie',
    genres: ['Thriller', 'Mystery'],
    imageUrl: 'https://placehold.co/500x750/A020F0/FFFFFF?text=Crimson+Cipher',
    backdropUrl: 'https://placehold.co/1280x720/1A032B/E6E6FA?text=Crimson+Cipher+Backdrop',
    releaseYear: 2023,
    rating: 'R',
    duration: '1h 55m',
    cast: [
      { id: 'c3', name: 'Marcus Cole', role: 'Detective Miles Corbin', imageUrl: 'https://placehold.co/150x225/3D1F5B/E6E6FA?text=Marcus+Cole' },
      { id: 'c4', name: 'Sarah Chen', role: 'Professor Evelyn Reed', imageUrl: 'https://placehold.co/150x225/3D1F5B/E6E6FA?text=Sarah+Chen' },
    ],
  },
  {
    id: '3',
    title: 'Echoes of Tomorrow',
    description: 'In a dystopian future, a group of rebels fights to reclaim their freedom from an oppressive AI regime that controls every aspect of life.',
    type: 'tv',
    genres: ['Sci-Fi', 'Drama', 'Action'],
    imageUrl: 'https://placehold.co/500x750/A020F0/FFFFFF?text=Echoes+Tomorrow',
    backdropUrl: 'https://placehold.co/1280x720/1A032B/E6E6FA?text=Echoes+Tomorrow+Backdrop',
    releaseYear: 2023,
    rating: 'TV-MA',
    cast: [
      { id: 'c5', name: 'Javier Ramirez', role: 'Kaelen', imageUrl: 'https://placehold.co/150x225/3D1F5B/E6E6FA?text=Javier+Ramirez' },
      { id: 'c6', name: 'Aisha Khan', role: 'Lyra', imageUrl: 'https://placehold.co/150x225/3D1F5B/E6E6FA?text=Aisha+Khan' },
    ],
    seasons: [
      {
        id: 's1',
        seasonNumber: 1,
        episodes: [
          { id: 'e101', episodeNumber: 1, title: 'The Awakening', description: 'A new rebellion ignites.', thumbnailUrl: 'https://placehold.co/320x180/533E6A/E6E6FA?text=S1E1', duration: '52m' },
          { id: 'e102', episodeNumber: 2, title: 'Seeds of Doubt', description: 'The AI tightens its grip.', thumbnailUrl: 'https://placehold.co/320x180/533E6A/E6E6FA?text=S1E2', duration: '48m' },
        ],
      },
      {
        id: 's2',
        seasonNumber: 2,
        episodes: [
          { id: 'e201', episodeNumber: 1, title: 'Fractured Alliances', description: 'The rebels face internal conflict.', thumbnailUrl: 'https://placehold.co/320x180/533E6A/E6E6FA?text=S2E1', duration: '55m' },
          { id: 'e202', episodeNumber: 2, title: 'The Leviathan', description: 'A powerful AI weapon is unveiled.', thumbnailUrl: 'https://placehold.co/320x180/533E6A/E6E6FA?text=S2E2', duration: '50m' },
        ],
      },
    ],
  },
  {
    id: '4',
    title: 'Guardians of Eldoria',
    description: 'A young sorceress and her unlikely companions embark on a quest to save their magical land from an encroaching darkness.',
    type: 'tv',
    genres: ['Fantasy', 'Adventure'],
    imageUrl: 'https://placehold.co/500x750/A020F0/FFFFFF?text=Guardians+Eldoria',
    backdropUrl: 'https://placehold.co/1280x720/1A032B/E6E6FA?text=Guardians+Eldoria+Backdrop',
    releaseYear: 2024,
    rating: 'TV-14',
    cast: [
      { id: 'c7', name: 'Chloe Moretz', role: 'Elara', imageUrl: 'https://placehold.co/150x225/3D1F5B/E6E6FA?text=Chloe+Moretz' },
      { id: 'c8', name: 'Dev Patel', role: 'Roric', imageUrl: 'https://placehold.co/150x225/3D1F5B/E6E6FA?text=Dev+Patel' },
    ],
    seasons: [
      {
        id: 's3',
        seasonNumber: 1,
        episodes: [
          { id: 'e301', episodeNumber: 1, title: 'The Last Ember', description: 'Elara discovers her powers.', thumbnailUrl: 'https://placehold.co/320x180/533E6A/E6E6FA?text=S1E1', duration: '45m' },
        ],
      },
    ],
    featured: true,
  },
   {
    id: '5',
    title: 'Midnight Diner',
    description: 'Stories from a late-night diner in Tokyo, where patrons from all walks of life share their joys, sorrows, and a good meal.',
    type: 'tv',
    genres: ['Drama', 'Slice of Life'],
    imageUrl: 'https://placehold.co/500x750/A020F0/FFFFFF?text=Midnight+Diner',
    backdropUrl: 'https://placehold.co/1280x720/1A032B/E6E6FA?text=Midnight+Diner+Backdrop',
    releaseYear: 2019,
    rating: 'TV-PG',
    cast: [
        { id: 'c9', name: 'Kaoru Kobayashi', role: 'Master', imageUrl: 'https://placehold.co/150x225/3D1F5B/E6E6FA?text=Kaoru+Kobayashi' },
    ],
    seasons: [
      {
        id: 's4',
        seasonNumber: 1,
        episodes: [
          { id: 'e401', episodeNumber: 1, title: 'Tan-men', description: 'A late night craving.', thumbnailUrl: 'https://placehold.co/320x180/533E6A/E6E6FA?text=S1E1', duration: '24m' },
          { id: 'e402', episodeNumber: 2, title: 'American Dog', description: 'An old friend returns.', thumbnailUrl: 'https://placehold.co/320x180/533E6A/E6E6FA?text=S1E2', duration: '23m' },
        ],
      },
    ],
  },
  {
    id: '6',
    title: 'Planet Earth III',
    description: 'A breathtaking exploration of Earth\'s most spectacular habitats and the incredible creatures that inhabit them.',
    type: 'tv',
    genres: ['Documentary', 'Nature'],
    imageUrl: 'https://placehold.co/500x750/A020F0/FFFFFF?text=Planet+Earth+III',
    backdropUrl: 'https://placehold.co/1280x720/1A032B/E6E6FA?text=Planet+Earth+III+Backdrop',
    releaseYear: 2023,
    rating: 'TV-G',
    cast: [
        { id: 'c10', name: 'David Attenborough', role: 'Narrator', imageUrl: 'https://placehold.co/150x225/3D1F5B/E6E6FA?text=David+Attenborough' },
    ],
    seasons: [
      {
        id: 's5',
        seasonNumber: 1,
        episodes: [
          { id: 'e501', episodeNumber: 1, title: 'Coasts', description: 'Life on the edge.', thumbnailUrl: 'https://placehold.co/320x180/533E6A/E6E6FA?text=S1E1', duration: '58m' },
        ],
      },
    ],
  }
];

export const genresList: string[] = Array.from(new Set(mockContent.flatMap(item => item.genres))).sort();

export const getFeaturedContent = (): ContentItem | undefined => mockContent.find(item => item.featured);

export const getContentById = (id: string): ContentItem | undefined => mockContent.find(item => item.id === id);

export const getContentByGenre = (genre: string): ContentItem[] => mockContent.filter(item => item.genres.includes(genre));

export const getRecentlyAdded = (limit: number = 5): ContentItem[] => 
  [...mockContent].sort((a, b) => b.releaseYear - a.releaseYear).slice(0, limit);

export const getTrendingNow = (limit: number = 5): ContentItem[] => 
  mockContent.filter(item => item.rating === 'TV-MA' || item.rating === 'R').slice(0, limit); // Example criteria
