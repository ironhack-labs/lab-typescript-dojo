//
// Iteration 4 | Type aliases
//

// 4.1
type Book = {
  title: string;
  year: number;
  genres: string[];
  rating?: number;
  author: string;
  numberOfPages?: number;
};

// 4.2
type Movie = {
  title: string;
  year: number;
  genres: string[];
  rating?: number;
  director: string;
  durationInMinutes?: number;
};

// 4.3
type MusicAlbum = {
  title: string;
  year: number;
  genres: string[];
  rating?: number;
  artist: string;
  numberOfTracks: number;
  durationInMinutes: number;
  albumType: "Studio Album" | "Live Album" | "Soundtrack" | "Other";
};

// 4.4.
const getYearsSinceRelease = (mediaItem: Book | Movie | MusicAlbum): number => {
  const currentYear = new Date().getFullYear();
  return currentYear - mediaItem.year;
};
