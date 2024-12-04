//
// Bonus: Iteration 5 | Interfaces
//
interface MediaItem {
  title: string
  year: number
  genres: string[]
  rating?: number
}

// ...

interface Book extends MediaItem {
  author: string
  numberOfPages?: number
}

interface Movie extends MediaItem {
  director: string
  durationInMinutes?: number
}

interface MusicAlbum extends MediaItem {
  artist: string
  numberOfTracks?: number
  durationInMinutes?: number
  albumType: 'Studio Album' | 'Live Album' | 'Soundtrack' | 'Other'
}
const getYearsSinceRelease = (mediaItem: MediaItem): number => {
  const currentYear = new Date().getFullYear()
  return currentYear - mediaItem.year
}

// Test cases
const book: Book = {
  title: 'The Great Gatsby',
  year: 1925,
  genres: ['Fiction', 'Classic'],
  author: 'F. Scott Fitzgerald'
}

const movie: Movie = {
  title: 'Inception',
  year: 2010,
  genres: ['Sci-Fi', 'Thriller'],
  director: 'Christopher Nolan',
  durationInMinutes: 148
}

const musicAlbum: MusicAlbum = {
  title: 'Abbey Road',
  year: 1969,
  genres: ['Rock'],
  artist: 'The Beatles',
  albumType: 'Studio Album'
}
