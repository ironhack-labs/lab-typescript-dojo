//
// Iteration 4 | Type aliases
//

type Book = {
    title: string;
    year: number;
    genre: string[];
    rating?: number;
    author: string;
    numberOfPages: number;
}

type Movie = {
    title: string;
    year: number;
    gennres: string[];
    rating?: number;
    director: string;
    durationInMinutes?: number;
}

type MusicalAlbum = {
    title: string;
    year: number;
    gennres: string[];
    rating?: number;
    artist: string;
    numberOfTracks?: number;
    durationInMinutes?: number;
    albumType?: 'StudioAlbum' | 'SoundTrack' | 'Other';
}

function getYearsSinceRelease(mediaItem: Book | Movie | MusicalAlbum)  {
    const currentYear = new Date().getFullYear();
    const difference = currentYear - mediaItem.year;
    return `It has been ${difference} years since the release of "${mediaItem.title}".`;
}

console.log (getYearsSinceRelease({
    title: "Inception",
    year: 2010,
    gennres: ["Sci-Fi", "Thriller"],
    director: "Christopher Nolan",
    durationInMinutes: 148
}));
