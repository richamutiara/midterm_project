import * as videoRepository from "../../repositories/video/video.repository.js";

class PlaylistService {
  constructor(repository) {
    this.videoRepo = repository;
  }

  getAllSongs() {
    return this.videoRepo.getAllSongs();
  }

  getSongByTitle(title) {
    const searchedSong = this.videoRepo.getSongByTitle(title);
    if (!searchedSong) {
      throw new Error(`Song with title ${title} does not exist!`);
    }
    return searchedSong;
  }

  getSongById(id) {
    const searchedSong = this.videoRepo.getSongById(id);
    if (!searchedSong) {
      throw new Error(`Song with id ${id} does not exist!`);
    }
    return searchedSong;
  }

  postSong(song) {
    const songWithSameTitle = this.videoRepo.getSongByTitle(song.title);
    // throw error if song with the same title already exist.
    if (songWithSameTitle) {
      throw new Error(`Song with the title ${song.title} already exist!`);
    }
    return this.videoRepo.postSong(song);
  }

  // could also do this in repository, prob better in repository if actual database (sort query in database much optimized than in memory)
  getAllSongsSortedByCount() {
    const songs = this.getAllSongs();
    songs.sort((a, b) => b.count - a.count);
    return songs;
  }

  async postVideo(title, videoUrl, thumbUrl, uploader) {
    const video = {
      title,
      videoUrl,
      thumbUrl,
      uploader,
    };

    const savedVideo = await this.videoRepo.postVideo(video);
    return savedVideo;
  }
}

const playlistService = new PlaylistService(videoRepository);

export default playlistService;
