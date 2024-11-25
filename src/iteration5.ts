//
// Bonus: Iteration 5 | Interfaces
//
interface MediaItem {
    title: string;
    year:number;
    genres: string[];
    rating: number | undefined;
}

interface Movie extends MediaItem {
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
interface MusicAlbum extends MediaItem {
    artist: string;
    durationInMinutes: number;
    albumType: AlbumTypes;
}

function getYearsSinceRelease(mediaItem: MediaItem) :number{
    return new Date().getFullYear() - mediaItem.year;
}