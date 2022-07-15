import mongoose from "mongoose";
import { createHmac } from "crypto";
import { timeStamp } from "console";
const userSchema = mongoose.Schema({
	username: {
		type: String,
	},
	password: {
		type: String,
		minLength: 8,
	},
	email: {
		type: String,
		require: true,
	},
});
userSchema.methods = {
	encryptPassword: (password) => {
		if (!password) return;
		try {
			return createHmac("sha256", "blablabla").update(password).digest("hex");
		} catch (error) {
			console.log(error);
		}
	},
};
// return createHmac("sha256", "sdfawefddv").update(password).digest("hex");
// hash password before save into database
userSchema.pre("save", function (next) {
	this.password = this.encryptPassword(this.password);
	next();
});
export default mongoose.model("User", userSchema);
