//
// Bonus: Iteration 5 | Interfaces
//
interface MediaItem {
    title:string
    year:number 
    genres: string[]
    rating?: number
}

interface Book extends MediaItem{
    author: string
    numberOfPages?:number
}

interface Movie extends MediaItem{
    director: string
    durationInMinutes ?:number
}
interface MusicAlbum extends MediaItem{
    artist: string
    numberOfTracks?:number
    durationInMinutes ?:number
    albumType:  'Studio Album'| 'Live Album'| 'Soundtrack' | 'Other'
}

const getYearsSinceRelease=(mediaItem:MediaItem)=>{
   return new Date().getFullYear() - mediaItem.year
}
/* const media = {
    title:'boo',
    year:2014 ,
    genres: ["gg","fff"]
}

console.log(getYearsSinceRelease(media)) */