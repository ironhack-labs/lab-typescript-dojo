//
// Iteration 4 | Type aliases
//

// 4.1 - Tipo Book
type Book = {
  title: string;
  year: number;
  genres: string[];
  rating?: number;
  author: string;
  numberOfPages?: number;
};

// 4.2 - Tipo Movie
type Movie = {
  title: string;
  year: number;
  genres: string[];
  rating?: number;
  director: string;
  durationInMinutes?: number;
};

// 4.3 - Tipo MusicAlbum
type MusicAlbum = {
  title: string;
  year: number;
  genres: string[];
  rating?: number;
  artist: string;
  numberOfTracks?: number;
  durationInMinutes?: number;
  albumType: "Studio Album" | "Live Album" | "Soundtrack" | "Other";
};

// 4.4 - Función getYearsSinceRelease
function getYearsSinceRelease(mediaItem: Book | Movie | MusicAlbum): number {
  const currentYear = new Date().getFullYear();
  const difference = currentYear - mediaItem.year;
  return difference;
}
