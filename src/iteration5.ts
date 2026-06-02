//
// Bonus: Iteration 5 | Interfaces
//

export interface MediaItem {
  title: string;
  year: number;
  genres: string[];
  rating?: number;
}

export interface Book extends MediaItem {
  author: string;
  numberOfPages?: number;
}

export interface Movie extends MediaItem {
  director: string;
  durationInMinutes?: number;
}

export interface MusicAlbum extends MediaItem {
  artist: string;
  numberOfTracks?: number;
  durationInMinutes?: number;
  albumType: "Studio Album" | "Live Album" | "Soundtrack" | "Other";
}

export function getYearsSinceRelease(mediaItem: MediaItem): number {
  const currentYear = new Date().getFullYear();

  return currentYear - mediaItem.year;
}

