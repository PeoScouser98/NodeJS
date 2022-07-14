import mongoose from "mongoose";

// create schema
const productSchema = mongoose.Schema({
	name: {
		type: String,
	},
	price: {
		type: Number,
	},
	stock: {
		type: Number,
	},
	categoryId: {
		type: mongoose.ObjectId,
		ref: "category",
	},
});
export default mongoose.model("Product", productSchema);
