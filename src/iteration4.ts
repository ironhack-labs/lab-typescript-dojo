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

enum AlbumType {
  StudioAlbum = 'Studio Album',
  LiveAlbum = 'Live Album',
  Soundtrack = 'Soundtrack',
  Other = 'Other',
}

type MusicAlbum = {
  title: string;
  year: number;
  genres: string[];
  rating?: number;
  artist: string;
  numberOfTracks?: number;
  durationInMinutes?: number;
  albumType: AlbumType;
};

function getYearsSinceRelease(object: Book | Movie | MusicAlbum): number {
  const currentYear: number = new Date().getFullYear();
  return currentYear - object.year;
}
