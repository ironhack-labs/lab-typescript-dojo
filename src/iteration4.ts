//
// Iteration 4 | Type aliases
//
type Book = {
  title:string
  year:number
  genres: string[]
  rating?: number
  author: string
  numberOfPages?:number
}

type Movie = {
  title:string
  year:number
  genres: string[]
  rating?: number
  director: string
  durationInMinutes?:number
}
type MusicAlbum = {
  title:string
  year:number
  genres: string[]
  rating?: number
  artist:string
  numberOfTracks?:number
  durationInMinutes?:number
  director: string
  albumType:  'Studio Album'| 'Live Album'| 'Soundtrack' | 'Other'
}

const getYearsSinceRelease=(mediaItem: Book|Movie|MusicAlbum):number=>{
    return new Date().getFullYear()-mediaItem.year
}
/* const movie={
  title:"vikings",
  year:2015,
  genres: ["hi","hh"],
  rating: 10,
  artist: "ragnar",
  numberOfTracks: 6,
  durationInMinutes: 40,
  director: "me",
  albumType:  'Studio Album',
}
getYearsSinceRelease(movie)
console.log(getYearsSinceRelease(movie)) */