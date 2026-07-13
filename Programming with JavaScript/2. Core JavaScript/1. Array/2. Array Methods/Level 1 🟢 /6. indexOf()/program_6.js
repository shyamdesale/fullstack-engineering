// 3. Music Playlist Management
let playlist = [
    "Believer",
    "Shape of You",
    "Perfect",
    "Faded",
    "Thunder"
];

let currentSong = "Perfect";

let songIndex = playlist.indexOf(currentSong);

if (songIndex !== -1) {
    console.log(`Now Playing: ${playlist[songIndex]}`);

    if (songIndex < playlist.length - 1) {
        console.log(`Next Song: ${playlist[songIndex + 1]}`);
    } else {
        console.log("This is the last song in the playlist.");
    }
}


// Playlist: [ 'Believer', 'Shape of You', 'Perfect', 'Faded', 'Thunder' ]
// Current Song: Perfect
// Now Playing: Perfect
// Next Song: Faded