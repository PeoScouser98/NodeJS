import User from "../models/user";
// create new account
export const register = async (req, res) => {
	try {
		const existedEmail = await User.findOne({ username: req.body.username }).exec();
		if (existedEmail) {
			return res.status(400).json({
				message: "Email has already existed!",
			});
		}
		const newAccount = await new User(req.body).save();
		res.json(newAccount);
	} catch (error) {
		return res.status(400).json({
			error: "Cannot create account!",
		});
	}
};
// login
export const login = async (req, res) => {
	try {
		const account = await User.findOne({ name: req.body.name }).exec();
		if (!account)
			return res.status(400).json({
				message: "Account doesn't exist!",
			});
		else {
			console.log("Login successfully!");
			return res.status(200).json({
				name: account.username,
			});
		}
	} catch (error) {
		return res.status(400).json({
			error: "Failed to login!",
		});
	}
};
