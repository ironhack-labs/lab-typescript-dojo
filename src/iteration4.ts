//
// Iteration 4 | Type aliases
//

type Book = {
  title: string;
  year: number;
  genres: string[];
  rating: number;
  author: string;
  numberOfPages?: number;
};

type Movie = {
  title: string;
  year: number;
  genres: string[];
  rating: number;
  director: string;
  durationInMinutes: number;
};

type MusicAlbum = {
  title: string;
  year: number;
  genres: string[];
  rating: number;
  numberOfTracks: number;
  durationInMinutes: number;
  albumType: "Studio Album" | "Live Album" | "Soundtrack" | "Other";
};

const result1: Movie = {
  title: "lalaland",
  year: 2015,
  genres: ["drama", "mystery"],
  rating: 8,
  director: "M Night",
  durationInMinutes: 305,
};

function getYearsSinceRelease(mediaItem: Book | Movie | MusicAlbum): number {
  const currentYear = new Date().getFullYear();
  const difference = currentYear - mediaItem.year;
  return difference;
}

console.log(getYearsSinceRelease(result1));
