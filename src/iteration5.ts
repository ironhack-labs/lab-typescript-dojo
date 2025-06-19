//
// Bonus: Iteration 5 | Interfaces
//
interface MediaItem {
  title: string;
  year: number;
  genre: string[];
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
  albumType: "Studio Album" | "Live Album" | "Compilation Album";
}
function getYearsSinceRelease(mediaItem: Book | Movie | MusicAlbum): number {
  const currentYear = new Date().getFullYear();
  const difference = currentYear - mediaItem.year;
  return difference;
}
