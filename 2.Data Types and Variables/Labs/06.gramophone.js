function gramophone(band, album, song) {
  let time = album.length * band.length * (song.length / 2);
  let rotates = time / 2.5;
  console.log(`The plate was rotated ${Math.ceil(rotates)} times.`);
}
gramophone("Rammstein", "Sehnsucht", "Engel");
