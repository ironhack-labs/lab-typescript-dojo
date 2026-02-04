//
// Bonus: Iteration 5 | Interfaces
//

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
    durationMinutes?: number;
}

interface MusicAlbum extends MediaItem {
    artist: string;
    numberOfTracks?: number;
    durationInMinutes?: number;
    albumType?: 'StudioAlbum' | 'LiveAlbum' | 'Soundtrack' | 'Other';
}

function getYearSinceRealease(mediaItem: MediaItem): number {
    const currentYear = new Date().getFullYear();
    const difference = currentYear - mediaItem.year;
    return difference;
}

console.log(getYearSinceRealease({
    title: "The Great Gatsby",
    year: 1925,
    genres: ["Novel", "Historical"]
})); 

console.log(getYearSinceRealease({
    title: "Inception",
    year: 2010,
    genres: ["Action", "Sci-Fi"]
}));


