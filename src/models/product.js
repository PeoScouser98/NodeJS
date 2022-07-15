import mongoose, { Schema } from "mongoose";

// create schema
const productSchema = new Schema({
	name: {
		type: String,
		require: true,
	},
	price: {
		type: Number,
		require: true,
	},
	stock: {
		type: Number,
		require: true,
	},
	category: {
		type: Schema.Types.ObjectId,
		ref: "Category",
	},
});
export default mongoose.model("Product", productSchema);
