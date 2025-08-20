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
    albumType: 'Studio Album' | 'Live Album' | 'Soundtrack' | 'Other';
}

function getYearsSinceRelease(mediaItem: MediaItem): number {
    const currentYear = new Date().getFullYear();
    return currentYear - mediaItem.year;
}



const book: Book = {
  title: "The Hobbit",
  year: 1937,
  genres: ["Fantasy", "Adventure"],
  author: "J.R.R. Tolkien",
};
console.log(getYearsSinceRelease(book));

const movie: Movie = {
  title: "The Truman Show",
  year: 1998,
  genres: ["Drama", "Comedy", "Sci-Fi"],
  rating: 8.1,
  director: "Peter Weir",
  durationInMinutes: 103,
};
console.log(getYearsSinceRelease(movie));

const music: MusicAlbum = {
  title: "Nevermind",
  year: 1991,
  genres: ["Grunge", "Alternative Rock"],
  rating: 9.5,
  artist: "Nirvana",
  numberOfTracks: 13,
  durationInMinutes: 49,
  albumType: "Studio Album",
};
console.log(getYearsSinceRelease(music));
