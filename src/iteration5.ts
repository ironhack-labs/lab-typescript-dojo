//
// Bonus: Iteration 5 | Interfaces
//

// 5.1
interface MediaItem {
  title: string;
  year: number;
  genres: string[];
  rating: number;
}

// 5.2

interface MediaItem {
  author: string;
  numberOfPages?: number;
}

interface Movie extends MediaItem {
  director: string;
  durationInMinutes?: number;
}

interface MusicAlbum extends MediaItem {
  artist: string;
  numberOfTracks?: number;
  durationInMinutes?: number;
  albumType: "Studio Album" | "Live Album" | "Soundtrack " | "Other";
}

// 5.3
const getYearsSinceRelease = (mediaItem: MediaItem): number => {
  const currentYear = new Date().getFullYear();
  return currentYear - mediaItem.year;
};
