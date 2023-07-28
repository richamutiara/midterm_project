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
    type: Schema.Types.ObjectId,
    ref: "video",
  },
});

const Product = mongoose.model("product", productSchema);

export default Product;
