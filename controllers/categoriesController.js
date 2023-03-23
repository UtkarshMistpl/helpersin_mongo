const db = require("../models");

// const Categories = db.categories;
const Categories = require("../models/categoriesMongoModel");
const mongoose = require("mongoose");

const getCategories = async (req, res) => {
	// Find all categories
	const categories = await Categories.find();
	if (!categories) {
		res.json({ status: "error", message: "failed no categories found" });
	}
	console.log("All categories:", JSON.stringify(categories, null, 2));
	res.json({ status: "success", categories: categories });
};

const addCategory = async (req, res) => {
	const category = req.body.category;
	if (!category) {
		return res.json({ status: "error", message: "Please provide a category" });
	}

	const exist = await Categories.findOne({ where: { category: category } });

	if (exist) {
		return res.json({ status: "error", message: "Category already exist" });
	}
	const result = await Categories.create({ category: category });

	if (!result) {
		return res.json({ status: "error", message: "Data did not saved" });
	}

	res.json({ status: "success", message: "data submited successfully" });
};

module.exports = {
	getCategories,
	addCategory,
};
