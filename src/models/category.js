import mongoose, { Schema } from "mongoose";

const cateSchema = mongoose.Schema({
	_id: Schema.Types.ObjectId,
	name: {
		type: String,
	},
});
export default mongoose.model("Category", cateSchema);
