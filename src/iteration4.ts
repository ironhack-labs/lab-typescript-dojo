//
// Iteration 4 | Type aliases
//

/*
Declare a type alias `Book`, with the following properties:
- `title` (string)
- `year` (number)
- `genres` (array of strings)
- `rating` (number) - this should be an optional property 
- `author` (string)
- `numberOfPages` (number) - this should be an optional property 
*/

type Book = {
    title: string;
    year: number;
    genres: string[];
    rating?: number;
    author: string;
    numberOfPages?: number;
};

// example
const book1: Book = {
    title: "The Great Gatsby",
    year: 1925,
    genres: ["Fiction", "Drama"],
    author: "F. Scott Fitzgerald",
    numberOfPages: 180,
    rating: 4.5,
};


/*
### 4.2 - Create a type alias for movies

Declare a type alias `Movie`, with the following properties:
- `title` (string)
- `year` (number)
- `genres` (array of strings)
- `rating` (number) - this should be an optional property 
- `director` (string)
- `durationInMinutes` (number) - this should be an optional property 
*/

type Movie = {
    title: string;
    year: number;
    genres: string[];
    rating?: number;
    director: string;
    durationInMinutes?: number;
};

// example
const movie1: Movie = {
    title: "The Shawshank Redemption",
    year: 1994,
    genres: ["Drama"],
    director: "Frank Darabont",
    durationInMinutes: 142,
    rating: 4.5,
};

/*
### 4.3 - Create a type alias for music albums

Declare a type alias `MusicAlbum`, with the following properties:
- `title` (string)
- `year` (number)
- `genres` (array of strings)
- `rating` (number) - this should be an optional property 
- `artist` (string)
- `numberOfTracks` (number) - this should be an optional property 
- `durationInMinutes` (number) - this should be an optional property 
- `albumType` - this property should have only these possible values: 'Studio Album', 'Live Album', 'Soundtrack', or 'Other'.

*/

type MusicAlbum = {
    title: string;
    year: number;
    genres: string[];
    rating?: number;
    artist: string;
    numberOfTracks?: number;
    durationInMinutes?: number;
    albumType: 'Studio Album' | 'Live Album' | 'Soundtrack' | 'Other';
};

// example
const musicAlbum1: MusicAlbum = {
    title: "The Dark Side of the Moon",
    year: 1973,
    genres: ["Rock"],
    artist: "Pink Floyd",
    albumType: "Studio Album",
    numberOfTracks: 10,
    durationInMinutes: 60,
    rating: 4.5,
};

console.log(musicAlbum1);

/*

### 4.4 - Implement the function `getYearsSinceRelease()` 

- Name of the function: `getYearsSinceRelease`
- Parameters:
    - `mediaItem` (an object of type `Book`, `Movie`, or `MusicAlbum`).
- Return value: should return the number of years since the media item was released based on the current year (for example, if a book published in 2000 is passed as an argument and we're in 2024, it should return 24).
*/

function getYearsSinceRelease(mediaItem: Book | Movie | MusicAlbum): number {
    const currentYear = new Date().getFullYear();
    return currentYear - mediaItem.year;
}

console.log(getYearsSinceRelease(musicAlbum1));