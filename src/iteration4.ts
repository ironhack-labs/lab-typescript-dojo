export type Book = {
  title: string,
  year: number,
  genres: string[],
  rating?: number,
  author: string,
  numberOfPages?: number,
};

export type Movie = {
  title: string,
  year: number,
  genres: string[],
  rating?: number,
  director: string,
  durationInMinutes?: number,
};

export type MusicAlbum = {
  title: string,
  year: number,
  genres: string[],
  rating?: number,
  artist: string,
  numberOfTracks?: number,
  durationInMinutes?: number,
  albumType: "Studio Album" | "Live Album" | "Soundtrack" | "Other",
};

export function getYearsSinceRelease(
  mediaItem: Book | Movie | MusicAlbum
): number {
  const currentYear = new Date().getFullYear();
  return currentYear - mediaItem.year;
}