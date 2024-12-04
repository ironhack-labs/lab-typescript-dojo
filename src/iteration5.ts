//
// Bonus: Iteration 5 | Interfaces
//

//  5.1  //

interface MediaItem {
    title: string;
    year: number;
    genres: string [];
    rating?: number;
}


//  5.2  //

interface Book extends MediaItem {
    author: string;
    numberOfPages: number;
}

interface Movie extends MediaItem {
    director: string;
    durationInMinutes: number;
}

interface MusicAlbum extends MediaItem {
    artist: string;
    numberOfTracks?: number;
    durationInMinutes?: number;
    albumType: "Studio Album" | "Live Album" | "Sountrack" | "Other"
}


//  5.3  //

function getYearsSinceRelease(mediaItem: MediaItem): number {
    const currentYear = new Date().getFullYear();
    return currentYear - mediaItem.year
}