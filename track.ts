class Track {
    name: string;
    releaseDate: Date;
    duration: number;
    artist: string;
    album: string;
    genre: string;
    
    constructor(name: string, releaseDate: Date,
        duration: number, artist: string,
        album: string, genre: string) {

        this.name = name;
        this.releaseDate = releaseDate;
        this.duration = duration;
        this.artist = artist;
        this.album = album;
        this.genre = genre;
    }
}

export { Track };