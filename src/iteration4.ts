//
// Iteration 4 | Type aliases
//

// 4.1 - Create a type alias for books

type Book = {
  title: string;
  year: number;
  genres: string[];
  rating?: number;
  author: string;
  numberOfPages?: number;
};

// 4.2 - Create a type alias for movies

type Movie = {
  title: string;
  year: number;
  genres: string[];
  rating?: number;
  director: string;
  durationInMinutes?: number;
};

// 4.3 - Create a type alias for music albums
type MusicAlbum = {
  title: string;
  year: number;
  genres: string[];
  rating?: number;
  artist: string;
  numberOfTracks?: number;
  durationInMinutes?: number;
  albumType: "Studio Album" | "Live Album" | "Soundtrack" | "Other";
};


// 4.4 - Implement the function getYearsSinceRelease()

function getYearsSinceRelease(mediaItem: Book | Movie | MusicAlbum):number{
    return new Date().getFullYear() - mediaItem.year
}