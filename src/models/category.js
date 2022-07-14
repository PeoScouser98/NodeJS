import mongoose, { mongo } from "mongoose";

const cateSchema = mongoose.Schema({
	name: {
		type: String,
	},
});
export default mongoose.model("Category", cateSchema);
