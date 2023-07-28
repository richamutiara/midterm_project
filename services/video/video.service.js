import * as videoRepository from "../../repositories/video/video.repository.js";
import * as productRepository from "../../repositories/product/product.repository.js";
import * as commentRepository from "../../repositories/comment/comment.repository.js";

class VideoService {
  #videoRepository;
  #productRepository;
  #commentRepository;
  constructor(videoRepository, productRepository, commentRepository) {
    this.#videoRepository = videoRepository;
    this.#productRepository = productRepository;
    this.#commentRepository = commentRepository;
  }

  async getAllVideos() {
    const videos = await this.#videoRepository.getAllVideos();
    return videos;
  }

  async getVideoById(videoId) {
    const video = await this.#videoRepository.getVideoById(videoId);
    return video;
  }

  async getProductsByVideoId(videoId) {
    const productVideo = await this.getVideoById(videoId);
    if (!productVideo) {
      throw new Error(`No video with ${videoId} exist!`);
    }
    const products = await this.#productRepository.getProductsByVideoId(
      videoId
    );
    return products;
  }

  async getCommentsByVideoId(videoId) {
    const commentVideo = await this.getVideoById(videoId);
    if (!commentVideo) {
      throw new Error(`No video with ${videoId} exist!`);
    }
    const comments = await this.#commentRepository.getCommentsByVideoId(
      videoId
    );
    return comments;
  }

  async postCommentByVideoId(comment, videoId) {
    const videoToPostComment = await this.getVideoById(videoId);
    if (!videoToPostComment) {
      throw new Error(`No video with ${videoId} exist!`);
    }
    comment = {
      ...comment,
      video_id: videoId,
    };

    return await this.#commentRepository.postCommentByVideoId(comment);
  }
}

const videoService = new VideoService(
  videoRepository,
  productRepository,
  commentRepository
);

export default videoService;
