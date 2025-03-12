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

function getYearsSinceRelease(mediaItem: Book | Movie | MusicAlbum) {
  const thisYear: number = new Date().getFullYear();
  return thisYear - mediaItem.year;
}

const myBook: Book = {
  title: "The Great Gatsby",
  year: 1925,
  genres: ["Novel", "Historical"],
  author: "F. Scott Fitzgerald",
};

console.log(`Years since release: ${getYearsSinceRelease(myBook)}`);
