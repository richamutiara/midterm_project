import mongoose, { Schema } from "mongoose";
import { RequiredStringType } from "../../helper/schema.type.js";

const productSchema = mongoose.Schema({
  title: RequiredStringType,
  url: RequiredStringType,
  price: {
    type: Number,
    required: true,
  },
  video_id: {
    type: Schema.type.ObjectId,
    ref: "Video",
  },
});

const Product = mongoose.model("Product", productSchema);

export default Product;
