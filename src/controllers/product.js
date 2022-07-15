import Product from "../models/product";
//  select all documents
export const selectAll = async (req, res) => {
	try {
		const products = await Product.find();
		res.json(products);
	} catch (error) {
		res.status(400).json({
			error: "No result!",
		});
	}
};
// select single document
export const selectOne = async (req, res) => {
	const populateValue = req.query["_expand"];
	try {
		const product = await Product.findOne({ _id: req.params.id }).popuplate(populateValue).exec();
		res.json(product);
	} catch (error) {
		res.status(400).json({
			error: "No result!",
		});
	}
};
// insert product
export const insert = async (req, res) => {
	try {
		const product = await new Product(req.body).save();
		res.json(product);
	} catch (error) {
		res.status(400).json({
			error: "Failed to insert!",
		});
	}
};
// update product

export const update = async (req, res) => {
	try {
		const id = req.params.id;
		const product = await Product.findByIdAndUpdate({ _id: id }, req.body, { new: true }).exec();
		res.json(product);
	} catch (error) {
		res.status(400).json({
			error: "Failed to update!",
		});
	}
};
// delete product
export const remove = async (req, res) => {
	try {
		const id = req.params.id;
		const product = await Product.findOneAndDelete({ _id: id }).exec();
		res.json(product);
	} catch (error) {
		res.status(400).json({
			error: "Failed to remove!",
		});
	}
};
