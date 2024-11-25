// Iteration 4 | Type aliases

type Book = {
  title: string;
  year: number;
  genres: string[];
  ratings?: number;
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
  ratings?: number;
  artist: string;
  numberOfTracks?: number;
  durationInMinutes?: number;
  albumType: "Studio Album" | "Live Album" | "Soundtrack" | "Other";
};

function getYearsSinceRelease(mediaItem: Book | Movie | MusicAlbum): number {
  return new Date().getFullYear() - mediaItem.year;
}

const result1 = getYearsSinceRelease({
  title: "The Dark Knight",
  year: 2008,
  genres: ["Action", "Crime", "Drama"],
  rating: 9,
  director: "Christopher Nolan",
  durationInMinutes: 152,
});
console.log(result1);
