const { application } = require("express");
const express = require("express");
const router = express.Router();

const {
	getCategories,
	addCategory,
} = require("../controllers/categoriesController");

router.post("/categories", getCategories);
router.post("/addCategory", addCategory);
module.exports = router;
