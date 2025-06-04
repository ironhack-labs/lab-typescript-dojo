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



const bookExample: Book = {
  title: "Les Misérables",
  year: 1862,
  genres: ["Historical", "Drama"],
  author: "Victor Hugo",
  numberOfPages: 1463,
  rating: 4.5,
};

const movieExample: Movie = {
  title: "Amélie",
  year: 2001,
  genres: ["Romantic Comedy", "Fantasy"],
  director: "Jean-Pierre Jeunet",
  durationInMinutes: 122,
  rating: 8.3,
};

const albumExample: MusicAlbum = {
  title: "Trash Yéyé",
  year: 2007,
  genres: ["Pop", "Electro"],
  artist: "Yelle",
  numberOfTracks: 14,
  durationInMinutes: 45,
  albumType: "Studio Album",
  rating: 4.0,
};


