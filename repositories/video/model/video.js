import mongoose, { Schema } from "mongoose";
import { RequiredStringType } from "../../helper/schema.type.js";

const videoSchema = mongoose.Schema({
  _id: {
    // optional _id, in case we want to add id explicitly for adding products at the same time.
    type: Schema.Types.ObjectId,
  },
  title: RequiredStringType,
  videoUrl: RequiredStringType,
  thumbUrl: RequiredStringType,
  uploader: RequiredStringType,
});

const Video = mongoose.model("video", videoSchema);

export default Video;
