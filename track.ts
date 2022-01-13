import { TrackData } from "./trackData";

class Track {
    
    tdArray: TrackData[];
    currentTrack: TrackData;

    constructor(name: string, releaseDate: Date,
        duration: number, artist: string,
        album: string, genre: string) {

        let td = new TrackData(name, releaseDate,
            duration, artist, album, genre);
        
        this.tdArray = [];
        this.currentTrack = td; 
    }


    public get name(){
        return this.currentTrack.name;
    }

    public set name(theName: string){
        this.currentTrack.name = theName;
    }

    public get releaseDate(){
        return this.currentTrack.releaseDate;
    }

    public set releaseDate(theReleaseDate: Date){
        this.currentTrack.releaseDate = theReleaseDate;
    }

    public get duration(){
        return this.currentTrack.duration;
    }

    public set duration(theDuration: number){
        this.currentTrack.duration = theDuration;
    }

    public get artist(){
        return this.currentTrack.artist;
    }

    public set artist(theArtist: string){
        this.currentTrack.artist = theArtist;
    }

    public get album(){
        return this.currentTrack.album;
    }

    public set album(theAlbum: string){
        this.currentTrack.album = theAlbum;
    }

    public get genre(){
        return this.currentTrack.genre;
    }

    public set genre(theGenre: string){
        this.currentTrack.genre = theGenre;
    }

    public save(){
        if (this.tdArray.length == 5){
            this.tdArray.shift();
        }

        let newTrackData = new TrackData(this.currentTrack.name,
            this.currentTrack.releaseDate, this.currentTrack.duration, 
            this.currentTrack.artist, this.currentTrack.album,
            this.currentTrack.genre);

        this.tdArray.push(newTrackData);
    }

    public load(version: number){
        if (version > 5){
            console.error("Version number must be between 1 and 5, inclusive")
        }
        this.currentTrack = this.tdArray[version - 1];
    }

    public print(){
        console.log(JSON.stringify(this.currentTrack, undefined, 2));
    }

    public printVersions(){
        for (let i = 1; i <= this.tdArray.length; i++)
            console.log(i, ": ", JSON.stringify(this.tdArray[i-1], undefined, 2));
    }
}

export { Track };