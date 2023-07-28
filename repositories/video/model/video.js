import mongoose from "mongoose";
import { RequiredStringType } from "../../helper/schema.type.js";

const videoSchema = mongoose.Schema({
  title: RequiredStringType,
  videoUrl: RequiredStringType,
  thumbUrl: RequiredStringType,
  uploader: RequiredStringType,
});

const Video = mongoose.model("video", videoSchema);

export default Video;
