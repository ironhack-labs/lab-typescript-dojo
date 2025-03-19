//
// Bonus: Iteration 5 | Interfaces
//
interface MediaItem{
    title: string;
    year: number;
    genres: string[];
    rating?: number;
}
interface Book extends MediaItem {
    author: string;
    numberOfPages?: number;
  };

  interface Movie extends MediaItem  {
     director: string;
   durationInMinutes?: number;
  };
  
  interface MusicAlbum extends MediaItem {
    artist: string;
    numberOfTracks?: number;
   durationInMinutes?: number;
   albumType: 'Studio Album'| 'Live Album'| 'Soundtrack'| 'Other';
  };

  const getYearsSinceRelease=(mediaItem:MediaItem): number => {
    return new Date().getFullYear()- mediaItem.year;
  }

  const book: Book = { 
    title: "To Kill a Mockingbird", 
    year: 1960, 
    genres: ["Fiction", "Classic"], 
    author: "Harper Lee"
  };
  
  const movie: Movie = { 
    title: "The Matrix", 
    year: 1999, 
    genres: ["Sci-Fi", "Action"], 
    director: "The Wachowskis", 
  };
  
  const album: MusicAlbum = { 
    title: "The Dark Side of the Moon", 
    year: 1973, 
    genres: ["Progressive Rock"], 
    artist: "Pink Floyd", 
    albumType: "Studio Album",
  };

  console.log(getYearsSinceRelease(book));
  console.log(getYearsSinceRelease(movie));
  console.log(getYearsSinceRelease(album));