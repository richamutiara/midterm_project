import playlist from "../playlist/json/playlist.json" assert { type: "json" };
import { v4 as uuid } from "uuid";
import Video from "./model/video.js";

function getAllSongs() {
  return playlist.songs;
}

function getSongByTitle(title) {
  // simulate query from database "such as get songs where title = x"
  const song = playlist.songs.find((song) => song.title === title);

  if (!song) {
    return null;
  }

  song.count++; // add count everytime the song get hit, as requested by mentor.
  return song;
}

function getSongById(id) {
  const song = playlist.songs.find((song) => song.id == id);

  if (!song) {
    return null;
  }

  song.count++; // add count everytime the song get hit, as requested by mentor.
  return song;
}

function postSong(song) {
  playlist.songs.push({
    id: uuid(),
    ...song,
  });

  return song;
}

async function postVideo({ title, videoUrl, thumbUrl, uploader }) {
  try {
    const videoToSave = new Video({
      title,
      videoUrl,
      thumbUrl,
      uploader,
    });

    const savedVideo = await videoToSave.save();
    return savedVideo;
  } catch (error) {
    throw new Error(`Video with title ${title} failed to be uploaded`);
  }
}

export { getAllSongs, getSongById, getSongByTitle, postSong, postVideo };
