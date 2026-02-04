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

function getYearsSinceRelease(mediaItem: MediaItem): number {
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
