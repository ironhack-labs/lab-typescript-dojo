//
// Iteration 4 | Type aliases
//

type Book = {
  title: string;
  year: number;
  genres: string[];
  rating?: number;
  author: string;
  numberOfPages?: number;
};

type Movie = {
  title: string;
  year: number;
  genres: string[];
  rating?: number;
  director: string;
  durationInMinutes?: number;
};

type MusicAlbum = {
  title: string;
  year: number;
  genres: string[];
  rating?: number;
  artist: string;
  numberOfTracks?: number;
  durationInMinures?: number;
  albumType: "Studio Album" | "Live Album" | "Soundtrack" | "Other";
};

function getYearsSinceRelease(mediaItem: Book | Movie | MusicAlbum): number {
  const currentYear = new Date().getFullYear();
  const difference = currentYear - mediaItem.year;
  return difference;
}

const book: Book = {
  title: "Clean Code",
  year: 2008,
  genres: ["Programming"],
  author: "Robert C. Martin",
};

const album: MusicAlbum = {
  title: "Random Access Memories",
  year: 2013,
  genres: ["Electronic"],
  artist: "Daft Punk",
  albumType: "Studio Album",
};

const movie: Movie = {
  title: "Inception",
  year: 2010,
  genres: ["Sci-Fi", "Action"],
  director: "Christopher Nolan",
};

console.log(getYearsSinceRelease(movie));
console.log(getYearsSinceRelease(album));
console.log(getYearsSinceRelease(book));
