// src/iteration4.ts

type Book = {
  title: string;
  year: number;
  genres: string[];
  rating?: number;
  author: string;
  numberOfPages?: number;
};

// src/iteration4.ts

type Movie = {
  title: string;
  year: number;
  genres: string[];
  rating?: number;
  director: string;
  durationInMinutes?: number;
};

// src/iteration4.ts

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

// src/iteration4.ts

function getYearsSinceRelease(mediaItem: Book | Movie | MusicAlbum): number {
  const currentYear = new Date().getFullYear();
  return currentYear - mediaItem.year;
}

// Test the function
const book: Book = {
  title: "Sample Book",
  year: 2000,
  genres: ["Fiction"],
  author: "Author",
};
console.log(getYearsSinceRelease(book)); // Should output the number of years since 2000
