import { Track } from "./track";

//create songs
let track1 = new Track(
    "South of the River",
    new Date("2017-07-05"),
    269,
    "Tom Misch",
    "Geography",
    "R&B");

let track2 = new Track(
    "In Da Club",
    new Date("2003-01-07"),
    193,
    "50 Cent",
    "Get Rich or Die Tryin'",
    "East Coast Hip Hop");

//save initial versions
track1.save(); 
track2.save();

//update songs
track1.name = "North of the River";
track1.releaseDate = new Date("2017-07-15");
track1.save(); 

track1.name = "West of the River";
track1.save();

track1.duration = 279;
track1.save();

track1.artist = "Thomas Misch";
track1.save();

track1.album = "Geography Album";
track1.save();

track2.name = "In The Club";
track2.save();

//prints out all versions for user
track1.printVersions();
track2.printVersions();

//restore a piece of music to one of its old versions
track1.load(3);
track1.print();

track2.load(2);
track2.print();





