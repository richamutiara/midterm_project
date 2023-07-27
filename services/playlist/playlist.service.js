import * as playlistRepository from '../../repositories/playlist/playlist.repository.js';

class PlaylistService {
  constructor(playlistRepo) {
    this.playlistRepo = playlistRepo;
  }

  getAllSongs() {
    return this.playlistRepo.getAllSongs();
  }

  getSongByTitle(title) {
    const searchedSong = this.playlistRepo.getSongByTitle(title);
    if (!searchedSong) {
      throw new Error(`Song with title ${title} does not exist!`);
    }
    return searchedSong;
  }

  getSongById(id) {
    const searchedSong = this.playlistRepo.getSongById(id);
    if (!searchedSong) {
      throw new Error(`Song with id ${id} does not exist!`);
    }
    return searchedSong;
  }

  postSong(song) {
    const songWithSameTitle = this.playlistRepo.getSongByTitle(song.title);
    // throw error if song with the same title already exist.
    if (songWithSameTitle) {
      throw new Error(`Song with the title ${song.title} already exist!`);
    }
    return this.playlistRepo.postSong(song);
  }

  // could also do this in repository, prob better in repository if actual database (sort query in database much optimized than in memory)
  getAllSongsSortedByCount() {
    const songs = this.getAllSongs();
    songs.sort((a, b) => b.count - a.count);
    return songs;
  }
}

const playlistService = new PlaylistService(playlistRepository);

export default playlistService;
