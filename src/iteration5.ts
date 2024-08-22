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
  albumType: "Studio Album" | "Live Album" | "Sountrack" | "Other";
}

function getYearsSinceRelease(mediaItem: MediaItem): number {
  return new Date().getFullYear() - mediaItem.year;
}

console.log(
  getYearsSinceRelease({
    title: "The Dark Knight",
    year: 2008,
    genres: ["Action", "Crime", "Drama"],
    rating: 9,
    author: "Christopher Nolan",
    durationInMinutes: 152,
  })
);
