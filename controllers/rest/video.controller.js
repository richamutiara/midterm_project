import videoService from "../../services/video/video.service.js";

async function getAllVideos(_, res) {
  const videos = await videoService.getAllVideos();

  if (videos.length === 0) {
    res.json({
      status: "There are no videos yet.",
      videos: videos,
    });
  } else {
    res.json({
      status: "success",
      videos: videos,
    });
  }
}

async function getProductsByVideoId(req, res) {
  const videoId = req.params.id;

  if (!videoId) {
    res.status(400).json({
      status: "error",
      message: "Bad Request id",
    });
    return;
  }

  try {
    const products = await videoService.getProductsByVideoId(videoId);

    if (products.length === 0) {
      res.json({
        status: `No products found for this video id: ${videoId}`,
        products,
      });
    } else {
      res.json({
        status: "success",
        products,
      });
    }
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
}

async function getCommentsByVideoId(req, res) {
  const videoId = req.params.id;

  if (!videoId) {
    res.status(400).json({
      status: "error",
      message: "Bad Request id",
    });
    return;
  }

  try {
    const comments = await videoService.getCommentsByVideoId(videoId);
    if (comments.length === 0) {
      res.json({
        status: `No comments found for this video id: ${videoId}`,
        comments,
      });
    } else {
      res.json({
        status: "success",
        comments,
      });
    }
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
}

async function postCommentByVideoId(req, res) {
  const comment = req.body;
  const videoId = req.params.id;

  try {
    await videoService.postCommentByVideoId(comment, videoId);
    res.status(201).json({
      status: "success",
      message: "comment successfully posted",
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
}

export {
  getAllVideos,
  getCommentsByVideoId,
  getProductsByVideoId,
  postCommentByVideoId,
};
