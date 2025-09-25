//
// Iteration 4 | Type aliases
//
export type Book = {
    title: string;
    year: number;
    geners: string[];
    rating? : number;
    author: string;
    numberOfPage: number;
};

export type Movie = {
    title: string;
    year: number;
    geners: string[];
    rating?: number;
    director: string;
    durationInMinutes: number;
}

export type MusicAlbum ={
    title: string;
    year: number;
    genres: string[];
    rating?: number;
    artist: string;
    albumType: 'studio Album' | 'Live Album' | 'Sound Track' | 'Other' ;

};

//getYearsSinceRelease

export function getYearsSinceRelease (item: Book | Movie | MusicAlbum): number {
    const currentYear = new Date().getFullYear();
    return currentYear - item.year;
}

//test
const b: Book = {title: 'TS Deep', year:2020,geners: ['Tech'], author:'Mhmad', numberOfPage:44 };
console.log(getYearsSinceRelease(b));