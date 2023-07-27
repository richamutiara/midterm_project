import playlistService from '../../services/playlist/playlist.service.js';

function getAllSongs(req, res, next) {
  if (req.query.title) {
    next();
    return;
  }

  let playlist;
  // if sort query params is count, get all songs sorted by count (descending);
  if (req.query.sort === 'count') {
    playlist = playlistService.getAllSongsSortedByCount();
  } else {
    playlist = playlistService.getAllSongs();
  }

  res.json(playlist);
}

function getSongByTitle(req, res) {
  const title = req.query.title;

  try {
    const selectedSong = playlistService.getSongByTitle(title);
    res.json(selectedSong);
  } catch (error) {
    res.status(404).json({
      status: 'error',
      message: error.message,
    });
  }
}

function getSongById(req, res) {
  const id = req.params.id;
  try {
    const song = playlistService.getSongById(id);
    res.json(song);
  } catch (error) {
    res.status(404).json({
      status: 'error',
      message: error.message,
    });
  }
}

function postSong(req, res) {
  const song = req.body;

  if (!song) {
    res.status(400).send('You have not sent a valid song!');
  }
  // could add better validation here.

  try {
    playlistService.postSong(song);
    res.json({
      status: 'success',
      message: 'song successfully added',
    });
  } catch (error) {
    res.status(409).json({
      status: 'error',
      message: error.message,
    });
  }
}

export { getAllSongs, postSong, getSongById, getSongByTitle };
