//
// Iteration 4 | Type aliases
//Declare a type alias Book, with the following properties:

// title (string)
// year (number)
// genres (array of strings)
// rating (number) - this should be an optional property
// author (string)
// numberOfPages (number) - this should be an optional property

type Book = {
    title: string
    year: number
    genres: string[]
    rating?: number
    numberOfPages?:number
};

// Declare a type alias Movie, with the following properties:

// title (string)
// year (number)
// genres (array of strings)
// rating (number) - this should be an optional property
// director (string)
// durationInMinutes (number) - this should be an optional property

type Movie = {
    title: string
    year: number
    genres: string[]
    rating?: number
    director: number
    durationInMinutes?:number
}

// Declare a type alias MusicAlbum, with the following properties:

// title (string)
// year (number)
// genres (array of strings)
// rating (number) - this should be an optional property
// artist (string)
// numberOfTracks (number) - this should be an optional property
// durationInMinutes (number) - this should be an optional property
// albumType - this property should have only these possible values: 'Studio Album', 'Live Album', 'Soundtrack', or 'Other'.

type MusicAlbum= {
    title: string
    year: number
    genres: string[]
    rating?: number
    artist: string
    numberOfTracks?: number
    durationInMinutes?: number
    albumType: 'Studio Album' | 'Live Album'| 'Soundtrack' | 'Other'

}

// Name of the function: getYearsSinceRelease
// Parameters:
// mediaItem (an object of type Book, Movie, or MusicAlbum).
// Return value: should return the number of years since the media item was released based on the current year (for example, if a book published in 2000 is passed as an argument and we're in 2024, it should return 24).


function getYearsSinceRelease(mediaItem: Book | Movie | MusicAlbum):number{
    const currentYear = new Date().getFullYear();
      const difference = currentYear - mediaItem.year;
      return difference;

}