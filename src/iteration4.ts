//
// Iteration 4 | Type aliases
//
type Book = {
    title: string;
    year: number;
    genres: string[];
    rating: number;
    author: string;
    numberOfPages: number;
}

type Movie = {
    title: string;
    year: number;
    genres: string[];
    rating: number;
    director: string;
    durationInMinutes: number;
}

enum AlbumTypes {
    StudioAlbum,
    LiveAlbum,
    Soundtrack,
    Other,
}
type MusicAlbum = {
    title: string;
    year: number;
    genres: string[];
    artist: string;
    durationInMinutes: number;
    albumType: AlbumTypes;
}

function getYearsSinceRelease(mediaItem: Book | Movie | MusicAlbum) :number{
    return new Date().getFullYear() - mediaItem.year;
}