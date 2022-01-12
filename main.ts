import { Track } from "./track";

let track1 = new Track(
    "South of the River",
    new Date("2017-07-05"),
    269,
    "Tom Misch",
    "Geography",
    "R&B");

console.log(JSON.stringify(track1, undefined, 2));

track1.artist = "Thomas Misch";
track1.genre = "Soul"
console.log(JSON.stringify(track1, undefined, 2));
