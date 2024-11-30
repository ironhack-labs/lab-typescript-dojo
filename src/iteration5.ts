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
    durationInMinutes?: number;
}

interface MusicAlbum extends MediaItem {
    artist: string;
    numberOfTracks?: number;
    durationInMinutes?: number;
    albumType: 'Studio Album' | 'Live Album' | 'Soundtrack' | 'Other';
}

const getYearsSinceRelease = ({ year }: MediaItem): number => 
    new Date().getFullYear() - year;

}