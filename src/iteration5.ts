//
// Bonus: Iteration 5 | Interfaces
//

interface MediaItem {
  title: string;
  year: number;
  genres: string[];
  rating?: number;
}

interface Book extends MediaItem {
  author: string;
  numberOfPages?: number;
}

interface Movies extends MediaItem {
  director: string;
  durationInMinutes?: number;
}

interface MusicAlbum extends MediaItem {
  artist: string;
  numberOfTracks?: number;
  durationInMinutes?: number;
  albumType: 'Studio Album' | 'Live Album' | 'Soundtrack' | 'Other';
}

function getYearsSinceRelease(mediaItem: MediaItem): number {
  return new Date().getFullYear() - mediaItem.year;
}

// const book: Book = {
//   title: 'The Pragmatic Programmer',
//   year: 1999,
//   genres: ['Technology', 'Programming'],
//   rating: 5,
//   author: 'Andrew Hunt',
// };

// console.log(getYearsSinceRelease(book));
