//
// Bonus: Iteration 5 | Interfaces
//

interface mediaItem {
title:string;
year:number;
genres:string[];
rating?:number
}

interface Books extends mediaItem {
    author:string;
    numberOfPages?:number;

}

interface Movie extends mediaItem{
    director:string;
    durationInMinutes?:number
}

interface MusicAlbum extends mediaItem{
    artist:string;
    numberOfTracks?:number;
    durationInMinutes?:number;
    albumType: "Studio" | "Live" | "Soundtrack" | "Other"

}

function getYearsSinceRelease (mediaItem:mediaItem):number{
    const currentYear:number=new Date().getFullYear()
    return currentYear-mediaItem.year
}