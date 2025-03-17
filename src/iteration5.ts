//
// Bonus: Iteration 5 | Interfaces
//

interface MediaITem {
    title: string,
    year: number,
    genres: string[],
    rating?: number
}
interface Book extends MediaITem {
    author: string,
    numberOfPages?: number

}

interface Movie extends MediaITem {
    director: string,
    durationInMinutes?: number

}

interface MusicAlbum extends MediaITem {
    artist: string,
    numberOfTracks?: number,
    durationInMinutes?: number,
    albumType: 'Studio Album' | 'Live Album' | 'Soundtrack' | 'Other'
}

function getYearsSinceRelease(mediaItem: MediaITem): number {
    const currentYear = new Date().getFullYear();

    return currentYear - mediaItem.year;
}