//
// Iteration 4 | Type aliases
//node dist/iteration4.js

type Book =
    {
        title: string,
        year: number,
        genres: string[],
        rating?: number,
        author: string,
        numberOfPages?: number
    }

const book1: Book = {
    title: 'Berserk',
    year: 1984,
    genres: ['manga', 'graphic novel', 'horror', 'drama', 'gore'],
    rating: 100000000,
    author: 'Kentaro Miura',
    numberOfPages: 350
};

type Movie =
    {
        title: string,
        year: number,
        genres: string[],
        rating?: number,
        director: string,
        durationInMinutes?: number
    }

const movie1: Movie = {
    title: 'Berserk',
    year: 1984,
    genres: ['manga', 'graphic novel', 'horror', 'drama', 'gore'],
    rating: 100000000,
    director: 'Kentaro Miura',
    durationInMinutes: 350
};

type MusicAlbum =
    {
        title: string,
        year: number,
        genres: string[],
        rating?: number,
        numberOfTracks?: number,
        durationInMinutes?: number,
        albumType: 'Studio Album' | 'Live Album' | 'Soundtrack' | 'Other'
    }

const album1: MusicAlbum =
{
    title: 'sth',
    year: 1980,
    genres: ['sth'],
    albumType: 'Other'
}

function getYearsSinceRelease(mediaItem: Book | MusicAlbum | Movie): number {
    return 2025 - mediaItem.year
}

/* let result1: number = getYearsSinceRelease(album1)
console.log(result1); */




