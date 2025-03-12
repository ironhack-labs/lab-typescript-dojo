//
// Bonus: Iteration 5 | Interfaces
//
interface MediaItem {
  title: string;
  year: number;
  genres: string[];
  rating?: number;
}

interface Book extends MediaItem {
  author: string;
  numberOfPages?: number;
}

interface Movie extends MediaItem {
  director: string;
  durationInMinutes?: number;
}

interface MusicAlbum extends MediaItem {
  artist: string;
  numberOfTracks?: number;
  durationInMinutes?: number;
  albumType: "Studio Album" | "Live Album" | "Soundtrack" | "Other";
}

function getYearsSinceRelease(mediaItem: Book | Movie | MusicAlbum): number {
  const currentYear = new Date().getFullYear();
  const difference = currentYear - mediaItem.year;
  return difference;
}

//Tests

const book: Book = {
  title: "1984",
  year: 1949,
  genres: ["Dystopian", "Political Fiction"],
  author: "George Orwell",
};

const movie: Movie = {
  title: "Inception",
  year: 2010,
  genres: ["Sci-Fi", "Thriller"],
  director: "Christopher Nolan",
};

const album: MusicAlbum = {
  title: "The Dark Side of the Moon",
  year: 1973,
  genres: ["Rock", "Progressive Rock"],
  artist: "Pink Floyd",
  albumType: "Studio Album",
};

const result14 = getYearsSinceRelease(book);
console.log(result14);

const result15 = getYearsSinceRelease(movie);
console.log(result15);

const result16 = getYearsSinceRelease(album);
console.log(result16);
