import Video from "./model/video.js";

async function getAllVideos() {
  try {
    return await Video.find().exec();
  } catch (error) {
    throw new Error("Failed to get all videos.");
  }
}

async function getVideoById(id) {
  try {
    return await Video.findById(id).exec();
  } catch (error) {
    throw new Error("Failed to get video by id");
  }
}

export { getAllVideos, getVideoById };
