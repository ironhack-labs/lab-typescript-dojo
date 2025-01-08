//
// Bonus: Iteration 5 | Interfaces
//node dist/iteration5.js

interface MediaItem {
    title: string,
    year: number,
    genres: string[],
    rating?: number
}

interface Book extends MediaItem {
    author: string,
    numberOfPages?: number
}

interface Movie extends MediaItem {
    director: string,
    durationInMinutes?: number
}

interface MusicAlbum extends MediaItem {
    artist: string,
    numberOfTracks?: number,
    durationInMinutes?: number,
    albumType: 'Studio Album' | 'Live Album' | 'Soundtrack' | 'Other'
}

function getYearsSinceRelease(mediaItem: MediaItem): number {
    return 2025 - mediaItem.year
}

const album1: MusicAlbum =
{
    artist: 'sth',
    title: 'sth',
    year: 1980,
    genres: ['sth'],
    albumType: 'Other'
}

let result1: number = getYearsSinceRelease(album1)
console.log(result1);


