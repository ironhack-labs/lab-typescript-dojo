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
  albumType: "Studio Album" | "Live Album" | "Sountrack" | "Other";
};

function getYearsSinceRelease(mediaItem: Book | Movie | MusicAlbum): number {
  return new Date().getFullYear() - mediaItem.year;
}

console.log(
  getYearsSinceRelease({
    title: "The Dark Knight",
    year: 2008,
    genres: ["Action", "Crime", "Drama"],
    rating: 9,
    author: "Christopher Nolan",
    durationInMinutes: 152,
  })
);
