//
// Iteration 4 | Type aliases
//

type Book = {
  title: string;
  year: number;
  genres: string[];
  rating: number;
  author: string;
  numberOfPages?: number;
};

type Movies = {
  title: string;
  year: number;
  genres: string[];
  rating: number;
  director: string;
  durationInMinutes?: number;
};

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

function getYearsSinceRelease(mediaItem: Book | Movies | MusicAlbum): number {
  return new Date().getFullYear() - mediaItem.year;
}

// const book: Book = {
//   title: 'The Pragmatic Programmer',
//   year: 1999,
//   genres: ['Technology', 'Programming'],
//   rating: 5,
//   author: 'Andrew Hunt',
// };

// // console.log(book);

// console.log(getYearsSinceRelease(book));
