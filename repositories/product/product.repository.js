import Product from "./model/product.js";

async function getProductsByVideoId(videoId) {
  try {
    return await Product.find({ video_id: videoId }).exec();
  } catch (error) {
    throw new Error("Failed to get products by video id.");
  }
}

export { getProductsByVideoId };
