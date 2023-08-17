// Phase 2
const {
  getAllArtists,
  getLatestArtist,
  getArtistByArtistId,
  addArtist,
  editArtistByArtistId,
  deleteArtistByArtistId,
  getAlbumsForLatestArtist,
  getAlbumsByArtistId,
  getAlbumByAlbumId,
  addAlbumByArtistId,
  editAlbumByAlbumId,
  deleteAlbumByAlbumId,
  getFilteredAlbums,
  getSongsByArtistId,
  getSongsByAlbumId,
  getSongBySongId,
  addSongByAlbumId,
  editSongBySongId,
  deleteSongBySongId
} = require('./data');

const express = require('express');
const app = express();

// Your code here
app.use(express.json());
/* Test
app.use((req, res, next) => {
  console.log('Body:', req.body);
  next();
});
*/

// getAllArtists
app.get('/artists', (req, res) => {
  let allArtists = getAllArtists();
  res.status(200).send(allArtists);
});

// getLatestArtist
app.get('/artists/latest', (req, res) => {
  let latest = getLatestArtist();
  res.status(200).send(latest);
});

// getArtistByArtistId
app.get('/artists/:artistId', (req, res) => {
  let id = req.params.artistId;
  let artist = getArtistByArtistId(id);
  res.status(200).send(artist);
});

// addArtist
app.post('/artists', (req, res) => {
  let artist = addArtist(req.body);
  res.status(201).send(artist);
});

// editArtistByArtistId
app.put('/artists/:artistId', (req, res) => {
  let id = req.params.artistId;
  let artist = req.body;
  let edit = editArtistByArtistId(id, artist);
  res.status(200).send(edit);
});

app.patch('/artists/:artistId', (req, res) => {
  let id = req.params.artistId;
  let artist = req.body;
  let edit = editArtistByArtistId(id, artist);
  res.status(200).send(edit);
});

// deleteArtistByArtistId
app.delete('/artists/:artistId', (req, res) => {
  let id = req.params.artistId;
  deleteArtistByArtistId(id);
  let msg = {
    "message": "Successfully deleted"
  };
  res.status(200).send(msg);
});

// getAlbumsForLatestArtist
app.get('/artists/latest/albums', (req, res) => {
  let albums = getAlbumsForLatestArtist();
  res.status(200).send(albums);
});

// getAlbumsByArtistId
app.get('/artists/:artistId/albums', (req, res) => {
  let id = req.params.artistId;
  let albums = getAlbumsByArtistId(id);
  res.status(200).send(albums);
});

// getAlbumByAlbumId
app.get('/albums/:albumId', (req, res) => {
  let id = req.params.albumId;
  let album = getAlbumByAlbumId(id);
  res.status(200).send(album);
});

// addAlbumByArtistId
app.post('/artists/:artistId/albums', (req, res) => {
  let id = req.params.artistId;
  let info = req.body;
  let album = addAlbumByArtistId(id, info);
  res.status(201).send(album);
});

// editAlbumByAlbumId
app.put('/albums/:albumId', (req, res) => {
  let id = req.params.albumId;
  let info = req.body;
  let edit = editAlbumByAlbumId(id, info);
  res.status(200).send(edit);
});

app.patch('/albums/:albumId', (req, res) => {
  let id = req.params.albumId;
  let info = req.body;
  let edit = editAlbumByAlbumId(id, info);
  res.status(200).send(edit);
});

// deleteAlbumByAlbumId
app.delete('/albums/:albumId', (req, res) => {
  let id = req.params.albumId;
  deleteAlbumByAlbumId(id);
  let msg = {
    "message": "Successfully deleted"
  };
  res.status(200).send(msg);
});

// getFilteredAlbums
app.get('/albums', (req, res) => {
  let filter = req.query.startsWith;
  let albums = getFilteredAlbums(filter);
  res.status(200).send(albums);
});

// getSongsByArtistId
app.get('/artists/:artistId/songs', (req, res) => {
  let id = req.params.artistId;
  let songs = getSongsByArtistId(id);
  res.status(200).send(songs);
});

// getSongsByAlbumId
app.get('/albums/:albumId/songs', (req, res) => {
  let id = req.params.albumId;
  let songs = getSongsByAlbumId(id);
  res.status(200).send(songs);
});

// getSongBySongId
app.get('/songs/:songId', (req, res) => {
  let id = req.params.songId;
  let song = getSongBySongId(id);
  res.status(200).send(song);
});

// addSongByAlbumId
app.post('/albums/:albumId/songs', (req, res) => {
  let id = req.params.albumId;
  let info = req.body;
  let song = addSongByAlbumId(id, info);
  res.status(201).send(song);
});

// editSongBySongId
app.put('/songs/:songId', (req, res) => {
  let id = req.params.songId;
  let info = req.body;
  let song = editSongBySongId(id, info);
  res.status(200).send(song);
});

app.patch('/songs/:songId', (req, res) => {
  let id = req.params.songId;
  let info = req.body;
  let song = editSongBySongId(id, info);
  res.status(200).send(song);
});

// deleteSongBySongId
app.delete('/songs/:songId', (req, res) => {
  let id = req.params.songId;
  deleteSongBySongId(id);
  let msg = {
    "message": "Successfully deleted"
  };
  res.status(200).send(msg);
});


// DO NOT MODIFY
if (require.main === module) {
  const port = 8000;
  app.listen(port, () => console.log('Server is listening on port', port));
} else {
  module.exports = app;
}
