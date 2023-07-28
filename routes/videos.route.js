import express from "express";
import {
  getAllVideos,
  getCommentsByVideoId,
  getProductsByVideoId,
  postCommentByVideoId,
} from "../controllers/rest/video.controller.js";

const router = express.Router();

router.get("/", getAllVideos);

router.get("/:id/comments", getCommentsByVideoId);

router.post("/:id/comments", postCommentByVideoId);

router.get("/:id/products", getProductsByVideoId);

export default router;
