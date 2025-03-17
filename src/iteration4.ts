//
// Iteration 4 | Type aliases
//


type Book = {
    title: string,
    year: number,
    genres: string[],
    rating?: number,
    author: string,
    numberOfPages?: number
}

type Movies = {
    title: string,
    year: number,
    genres: string[],
    rating?: number,
    director: string,
    durationInMinutes?: number
}

type MusicAlbum = {
    title: string,
    year: number,
    genres: string[],
    rating?: number,
    artist: string,
    numberOfTracks?: number,
    durationInMinutes?: number,
    albumType: 'Studio Album' | 'Live Album' | 'Soundtrack' | 'Other'
}

function getYearsSinceRelease(mediaItem: Book | Movies | MusicAlbum) {
    const currentYear = new Date().getFullYear();

    return currentYear - mediaItem.year;
}