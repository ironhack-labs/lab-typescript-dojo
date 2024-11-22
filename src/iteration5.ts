//
// Bonus: Iteration 5 | Interfaces
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
    albumType: 'Studio Album' | 'Live Album' | 'Soundtrack' | 'Other';
}

function getYearsSinceRelease(mediaItem: MediaItem): number {
    const currentYear = new Date().getFullYear();
    return currentYear - mediaItem.year;
}

// Testing
const myAlbum: MusicAlbum = { title: "Thriller", year: 1982, genres: ["Pop"], artist: "Michael Jackson", albumType: "Studio Album" };
console.log(getYearsSinceRelease(myAlbum)); // e.g., 42 (current year-dependent)



