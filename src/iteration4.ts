//
// Iteration 4 | Type aliases
//

  type Book = {
      title: string;
      year: number;
      genres: string[];
      rating?: number;
      author: string;
      numberOfPages?: number;
  }  

  type Movie = {
      title: string;
      year: number;
      genres: string[];
      rating?: number;
      director: string;
      durationInMinutes?: number;
  }  

   type MusicAlbum = {
      title: string;
      year: number;
      genres: string[];
      rating?: number;
      artist: string;
      numberOfTracks?: number;
      durationInMinutes?: number;
      albumType: 'Studio Album' | 'Live Album' | 'Soundtrack' | 'Other';
  }
  
    function getYearsSinceRelease(mediaItem: Book | Movie | MusicAlbum): number {
      const currentYear = new Date().getFullYear();
      const difference = currentYear - mediaItem.year;
      return difference;
  }  

    const book1: Book = {
        title: "List of Recipes that are simple stuff but I say them in french so it sounds fancy",
        year: 1955,
        genres: ["Cooking", "French Cuisine"],
        rating: 5,
        author: "Florian Karl Wunsch",
        numberOfPages: 1,}

    const movie1: Movie = {
        title: "The Laundry Machine Terror",
        year: 2025,
        genres: ["Horror", "Comedy"],
        rating: 5,
        director: "Carla Eliana Depietri",
        durationInMinutes: 120,}
    
    const musicAlbum1: MusicAlbum = {
        title: "The Sound of Kids Screaming in my Garden",
        year: 2025,
        genres: ["Experimental", "Noise"],
        rating: 4.5,
        artist: "My noisy romanian neighbors",
        numberOfTracks: 10,
        durationInMinutes: 45,
        albumType: 'Live Album',}

    console.log(getYearsSinceRelease(book1)); 
    console.log(getYearsSinceRelease(movie1)); 
    console.log(getYearsSinceRelease(musicAlbum1)); 
    console.log(book1);
    console.log(movie1);
    console.log(musicAlbum1);