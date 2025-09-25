//
// Bonus: Iteration 5 | Interfaces
//
export interface MediaItem {
    title: string;
    year: number;
    geners: string[];
    rating?: number;
}

export interface Book extends MediaItem {
    author: string;
    numberOfPage?: number;
}

export interface Movie extends MediaItem {
    director: string;
    durationInMinutes?: number;
}

export interface MusicAlbum extends MediaItem {
    artist: string;
    numberOfTracks?: number;
    durationInMinutes?: number;
    albumType: 'Studio Album' | ' Live Album' | 'SoundTrack' | 'Other';

}

export function getYearsSinceReleaseIf(item: MediaItem): number{
    const currentYear = new Date().getFullYear();
    return currentYear - item.year;
}

