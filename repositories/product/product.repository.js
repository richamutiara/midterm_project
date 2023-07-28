import Product from "./model/product";

async function getProductsByVideoID(videoID) {
  try {
    const products = await Product.find({ video_id: videoID });
  } catch (error) {
    throw new Error("");
  }
}
