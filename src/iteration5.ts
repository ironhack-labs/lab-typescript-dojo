//
// Bonus: Iteration 5 | Interfaces
//


/*
## 5.1 - Create a common interface for shared properties

Declare an interface `MediaItem` with the following properties:
- `title` (string)
- `year` (number)
- `genres` (array of strings)
- `rating` (number) - this should be an optional property

*/


// example
interface MediaItem {
    title: string;
    year: number;
    genres: string[];
    rating?: number;
}

/*
### 5.2 - Create specific interfaces for books, movies, and music albums

Declare an interface `Book` that extends `MediaItem` and includes the following properties:
- `author` (string)
- `numberOfPages` (number) - this should be an optional property

Declare an interface `Movie` that extends `MediaItem` and includes the following properties:
- `director` (string)
- `durationInMinutes` (number) - this should be an optional property

Declare an interface `MusicAlbum` that extends `MediaItem` and includes the following properties:
- `artist` (string)
- `numberOfTracks` (number) - this should be an optional property
- `durationInMinutes` (number) - this should be an optional property
- `albumType` - this property should have only these possible values: 'Studio Album', 'Live Album', 'Soundtrack', or 'Other'.
*/

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


// usage example
const book1: Book = {
    title: "To Kill a Mockingbird",
    year: 1960,
    genres: ["Fiction", "Drama"],
    author: "Harper Lee",
    numberOfPages: 281,
    rating: 4.5,
};

const movie1: Movie = {
    title: "The Shawshank Redemption",
    year: 1994,
    genres: ["Drama"],
    director: "Frank Darabont",
    durationInMinutes: 142,
    rating: 4.5,
};

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

console.log(book1);
console.log(movie1);
console.log(musicAlbum1);