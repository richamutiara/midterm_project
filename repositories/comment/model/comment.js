import mongoose, { Schema } from "mongoose";
import { RequiredStringType } from "../../helper/schema.type.js";

const commentSchema = mongoose.Schema({
  username: RequiredStringType,
  content: RequiredStringType,
  created_at: {
    type: Date,
    default: Date.now,
  },
  video_id: {
    type: Schema.Types.ObjectId,
    ref: "video",
  },
});

const Comment = mongoose.model("comment", commentSchema);

export default Comment;
