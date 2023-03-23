const mongoose = require("mongoose");

const WorkerSchema = new mongoose.Schema({
	name: {
		type: String,
	},
	last_name: {
		type: String,
	},
	category: {
		type: String,
	},
	mobile: {
		type: String,
	},
	otp: {
		type: String,
	},
	photo: {
		type: String,
	},
	unique_num: {
		type: String,
	},
	country: {
		type: String,
	},
	state: {
		type: String,
	},
	city: {
		type: String,
	},
	town: {
		type: String,
	},
	lat: {
		type: String,
	},
	lng: {
		type: String,
	},
	locality: {
		type: String,
	},
	detail: {
		type: String,
	},
	status: {
		type: String,
	},
	rating_count: {
		type: String,
	},
	visit_count: {
		type: String,
	},
	checkbox: {
		type: String,
	},
});

const Workers = mongoose.model("worker", WorkerSchema);

module.exports = Workers;
