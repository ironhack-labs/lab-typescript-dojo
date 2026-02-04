//
// Bonus: Iteration 5 | Interfaces
//

// 5.1 - Create a common interface for shared properties

interface MediaItem {
  title: string;
  year: number;
  genres: string[];
  rating?: number;
}

// 5.2 - Create specific interfaces for books, movies, and music albums

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

// 5.3 - Implement the function getYearsSinceRelease()

function getYearsSinceRelease(mediaItem: MediaItem):number{
    return new Date().getFullYear() - mediaItem.year;
}