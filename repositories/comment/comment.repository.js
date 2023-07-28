import Comment from "./model/comment.js";

async function getCommentsByVideoId(videoId) {
  try {
    const comments = await Comment.find({ video_id: videoId }).exec();
    return comments;
  } catch (error) {
    throw new Error("Failed to fetch list of comments by video id");
  }
}

async function postCommentByVideoId(comment) {
  try {
    const commentModel = new Comment(comment);
    return await commentModel.save();
  } catch (error) {
    throw new Error("Failed to post comment.");
  }
}

export { getCommentsByVideoId, postCommentByVideoId };
