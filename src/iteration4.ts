//
// Iteration 4 | Type aliases
//

//  4.1  //

type Book = {
    title: string;
    year: number;
    genres: string[];
    rating?: number;
    author: string;
    numberOfPages?: number;
}

let test6: Book;

test6 = {
    title: "Tales of an Ironhacker", 
    year: 2024, 
    genres: ["thriller", "suspense", "horror"],
    rating: 5,
    author: "Anonymous Ironhacker",
    numberOfPages: 84
}

console.log(test6);


//  4.2  //

type Movies = {
    title: string;
    year: number;
    genres: string[];
    rating?: number;
    director: string;
    durationInMinutes?: number 
}

let test7: Movies;

test7= {
    title: "Tales of an Ironhacker - the Movie",
    year: 2024,
    genres: ["thriller", "suspense", "horror"],
    rating: 5,
    director: "Anonymous Ironhacker"
}

console.log(test7);


//  4.3  //

type MusicAlbum = {
    title: string;
    year: number;
    genres: string[];
    rating?: number;
    artist: string;
    numberOfTracks?: number;
    durationInMinutes?: number;
    albumType: "Studio Album" | "Live Album" | "Soundtrack" | "Other"
}

let test8: MusicAlbum;

test8 = {
    title: "Ironrock",
    year: 2023,
    genres: ["rock", "funk", "grunge"],
    artist: "Ironhack Cohort",
    albumType: "Live Album"
}

console.log(test8)


//  4.4  //

function getYearsSinceRelease(mediaItem: Book | Movies | MusicAlbum): number {
    const currentYear = new Date().getFullYear();
    return currentYear - mediaItem.year
}

console.log(getYearsSinceRelease(test8));