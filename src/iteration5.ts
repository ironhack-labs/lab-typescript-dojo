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

enum AlbumType {
  StudioAlbum = 'Studio Album',
  LiveAlbum = 'Live Album',
  Soundtrack = 'Soundtrack',
  Other = 'Other',
}

interface MusicAlbum extends MediaItem {
  artist: string;
  numberofTracks?: number;
  durationInMinutes?: number;
  albumType: AlbumType;
}

function getYearsSinceRelease(mediaItem: MediaItem): number {
  const currentYear = new Date().getFullYear();
  const difference = currentYear - mediaItem.year;
  return difference;
}