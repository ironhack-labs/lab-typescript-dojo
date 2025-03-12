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
  durationInMinutes?: number;
  albumType: "Studio Album" | "Live Album" | "Soundtrack" | "Other";
};

function getYearsSinceRelease(mediaItem: Book | Movie | MusicAlbum): number {
  const currentYear = new Date().getFullYear();
  const difference = currentYear - mediaItem.year;
  return difference;
}

//Tests
const book: Book = {
  title: "The Great Gatsby",
  year: 1925,
  genres: ["Fiction", "Classic"],
  author: "F. Scott Fitzgerald",
};

const movie: Movie = {
  title: "The Matrix",
  year: 1999,
  genres: ["Sci-Fi", "Action"],
  director: "The Wachowskis",
};

const album: MusicAlbum = {
  title: "Abbey Road",
  year: 1969,
  genres: ["Rock"],
  artist: "The Beatles",
  albumType: "Studio Album",
};

const result11 = getYearsSinceRelease(book);
console.log(result11);

const result12 = getYearsSinceRelease(movie);
console.log(result12);

const result13 = getYearsSinceRelease(album);
console.log(result13);
