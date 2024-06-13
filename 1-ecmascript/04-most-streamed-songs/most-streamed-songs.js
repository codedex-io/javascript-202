import songs from "./songs.js";

for (let song of songs) {
  for (let info in song) {
    console.log(song[info]);
  }
  console.log();
}
