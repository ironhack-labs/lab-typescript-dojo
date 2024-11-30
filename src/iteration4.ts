//
// Iteration 4 | Type aliases
//

type MediaItem = {
    title: string;
    year: number;
    genres: string[];
    rating?: number;
};

type Book = MediaItem & {
    author: string;
    numberOfPages?: number;
};

type Movie = MediaItem & {
    director: string;
    durationInMinutes?: number;
};

type MusicAlbum = MediaItem & {
    artist: string;
    numberOfTracks?: number;
    durationInMinutes?: number;
    albumType: 'Studio Album' | 'Live Album' | 'Soundtrack' | 'Other';
};

const getYearsSinceRelease = ({ year }: MediaItem): number => 
    new Date().getFullYear() - year;
