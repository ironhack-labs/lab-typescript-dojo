//
// Iteration 4 | Type aliases
//

type Book = {
    title: string;
    year: number;
    genres: string[];
    rating?: number;
    author: string;
    numberOfPages?: number;
}

type Movie = {
    title: string;
    year: number;
    genres: string[];
    rating?: number;
    director: string;
    durationInMinutes?: number;
}

type MusicAlbum = {
    title: string;
    year: number;
    genres: string[];
    rating?: number;
    artist: string;
    numberOfTracks?: number;
    durationInMinutes?: number;
    albumType: 'Studio Album' | 'Live Album' | 'Soundtrack' | 'Other';
}

function getYearSinceRelease(mediaItem: Book | Movie | MusicAlbum): number{
    const current = new Date().getFullYear();
    return current - mediaItem.year;
}