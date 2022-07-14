import Category from "../models/category";
import Product from "../models/product";
// selecet all categories
export const selectAll = async (req, res) => {
	try {
		const categories = await Category.find().exec();
		res.json(categories);
	} catch (error) {
		res.status(400).json({
			error: "No Result!",
		});
	}
};
// select one category
export const selectOne = async (req, res) => {
	try {
		const id = req.params.id;
		const category = await Category.findOne({ _id: id }).exec();
		const product = await Product.find({ category: category });
		res.json({
			category: category,
			product: product,
		});
	} catch (error) {
		res.status(400).json({
			error: "No Result!",
		});
	}
};
// add category
export const insert = async (req, res) => {
	try {
		const newCate = await new Category(req.body).save();
		res.json(newCate);
	} catch (error) {
		res.status(400).json({
			error: "Failed to add category!",
		});
	}
};
// update category
export const update = async (req, res) => {
	try {
		const id = req.params.id;
		const updatedCate = await Category.findByIdAndUpdate({ _id: id }, req.body, { new: true });
		res.json(updatedCate);
	} catch (error) {
		res.status(400).json({
			error: "Failed to update category!",
		});
	}
};
// delete category
export const remove = async (req, res) => {
	try {
		const id = req.params.id;
		const removedCate = await Category.findByIdAndDelete({ _id: id }).exec();
	} catch (error) {
		res.status(400).json({
			error: "Failed to delete category!",
		});
	}
};
