//
// Iteration 4 | Type aliases
//
type IBook = {
  title: string;
  year: number;
  genres: string[];
  rating?: number;
  author: string;
  numberOfPages?: number;
};
type IMovies = {
  title: string;
  year: number;
  genre: string[];
  rating?: number;
  director: string;
  duration?: number;
};
type IMusic = {
  title: string;
  year: number;
  genre: string[];
  rating?: number;
  artist: string;
  numberOfTracks?: number;
  durationInMinutes?: number;
  albumType: "Studio Album" | "Live Album" | "Compilation Album";
};
function getYearsSinceRelease(mediaItem: IBook | IMovies | IMusic) {
  const currentYear = new Date().getFullYear();
  const difference = currentYear - mediaItem.year;
  return difference;
}
