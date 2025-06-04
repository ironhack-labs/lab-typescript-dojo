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
    albumType: 'Studio Album' | 'Live Album' | 'Soundtrack' | 'Other';
};

function getYearsSinceRelease(mediaItem: Book | Movie | MusicAlbum): number {
    const currentYear = new Date().getFullYear();
    return currentYear - mediaItem.year;
}

const frenchBooks: Book[] = [
  {
    title: "Les Misérables",
    year: 1862,
    genres: ["Historical", "Drama"],
    author: "Victor Hugo",
    numberOfPages: 1463,
    rating: 4.5
  },
  {
    title: "Madame Bovary",
    year: 1856,
    genres: ["Realism", "Drama"],
    author: "Gustave Flaubert",
    numberOfPages: 329,
  },
];

const frenchMovies: Movie[] = [
  {
    title: "La Haine",
    year: 1995,
    genres: ["Drama", "Crime"],
    director: "Mathieu Kassovitz",
    rating: 8.1,
    durationInMinutes: 98,
  },
];

const frenchMusicAlbums: MusicAlbum[] = [
  {
    title: "Trash Yéyé",
    year: 2007,
    genres: ["Pop", "Electro"],
    artist: "Yelle",
    numberOfTracks: 14,
    durationInMinutes: 45,
    albumType: "Studio Album",
    rating: 4.0
  },
];

