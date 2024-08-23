// src/iteration5.ts

interface MediaItem {
  title: string;
  year: number;
  genres: string[];
  rating?: number;
}

// src/iteration5.ts

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

// src/iteration5.ts

function getYearsSinceRelease(mediaItem: MediaItem): number {
  const currentYear = new Date().getFullYear();
  return currentYear - mediaItem.year;
}

// Test the function
const movie: Movie = {
  title: "Sample Movie",
  year: 2010,
  genres: ["Action"],
  director: "Director",
};
console.log(getYearsSinceRelease(movie)); // Should output the number of years since 2010
