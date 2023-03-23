// const db = require("../models");
const { getDistance } = require("./../services/workers");

// const Workers = db.workers;
const Workers = require("./../models/workersMongoModel");
const mongoose = require("mongoose");
const { titleCase } = require("./../utils/util");

const getWorkers = async (req, res) => {
	const category = titleCase(req.body.category);
	const lat = req.body.lat;
	const lng = req.body.lng;
	const distance = req.body.distance ? req.body.distance : 5;

	// Find all categories
	const workers = await Workers.find({ category: category });

	if (!workers) {
		res.json({ status: "error", message: "failed no workers found" });
	}

	//calculate distance
	let filteredWorkers = workers.filter((it) => {
		return getDistance(it.lat, it.lng, lat, lng) <= distance;
	});

	console.log("All Workers:", JSON.stringify(category, null, 2));
	res.json({ status: "success", workers: filteredWorkers });
};

const getOneWorker = async (req, res) => {
	const id = req.body.id;

	// Find all categories
	const worker = await Workers.find({ id: id });

	if (!worker) {
		res.json({ status: "error", message: "failed no workers found" });
	}

	//calculate distance
	// let filteredWorkers = worker.filter((it) => {
	// 	return getDistance(it.lat, it.lng, lat, lng) <= distance;
	// });

	console.log("one Worker", JSON.stringify(worker, null, 2));
	res.json({ status: "success", worker: worker });
};

const getAllWorkers = async (req, res) => {
	const page = req.body.page ? req.body.page : 0;
	const rows = req.body.rows ? req.body.rows : 10;

	// Find all categories
	const workers = await Workers.find()
		.skip(page == 1 ? 0 : rows * (page - 1))
		.limit(rows);

	if (!workers) {
		res.json({ status: "error", message: "failed no workers found" });
	}

	//calculate distance
	// let filteredWorkers = worker.filter((it) => {
	// 	return getDistance(it.lat, it.lng, lat, lng) <= distance;
	// });

	console.log("all workers", JSON.stringify(workers, null, 2));
	res.json({ status: "success", workers: workers });
};

const deleteOneWorker = async (req, res) => {
	const id = req.body.id;

	// Find all categories
	const worker = await Workers.destroy({
		where: {
			id: id,
		},
	});

	if (!worker) {
		res.json({ status: "error", message: "failed no workers found" });
	}

	//calculate distance
	// let filteredWorkers = worker.filter((it) => {
	// 	return getDistance(it.lat, it.lng, lat, lng) <= distance;
	// });

	console.log("one Worker", JSON.stringify(worker, null, 2));
	res.json({ status: "success", worker: worker });
};

const saveWorker = async (req, res) => {
	const name = req.body.name;
	const last_name = req.body.last_name;
	const category = req.body.category;
	const country = req.body.country;
	const locality = req.body.locality;
	const detail = req.body.detail;
	const mobile = req.body.mobile;
	const lat = req.body.lat;
	const lng = req.body.lng;

	// console.log("cureent ", req.body.profile_pic);
	if (!name || !last_name || !category || !country || !locality || !detail) {
		return res.json({
			status: "error",
			message: "Please fill all the fields " + name,
		});
	}

	const exist = await Workers.findOne({ where: { mobile: mobile } });

	if (exist) {
		return res.json({ status: "error", message: "user already exist exist" });
	}
	const result = await Workers.create({
		name: name,
		last_name: last_name,
		category: category,
		country: country,
		locality: locality,
		details: detail,
		mobile: mobile,
		lat: lat,
		lng: lng,
	});

	if (!result) {
		return res.json({ status: "error", message: "Data did not saved" });
	}

	res.json({ status: "success", message: "data submited successfully" });
};

const editWorker = async (req, res) => {
	const name = req.body.name;
	const last_name = req.body.last_name;
	const email = req.body.email;
	const category = req.body.category;
	const country = req.body.country;
	const locality = req.body.locality;
	const detail = req.body.detail;
	const id = req.body.id;

	if (!id) {
		return res.json({
			status: "error",
			message: "Please fill all the fields " + id,
		});
	}

	const exist = await Workers.findOne({ where: { id: id } });

	if (!exist) {
		return res.json({ status: "error", message: "user does not exist " + id });
	}
	const result = await Workers.update(
		{
			name: name,
			last_name: last_name,
			email: email,
			category: category,
			country: country,
			locality: locality,
			detail: detail,
		},
		{ where: { id: id } }
	);

	if (!result) {
		return res.json({ status: "error", message: "Data did not saved" });
	}

	res.json({ status: "success", message: "data edited successfully" });
	console.log("edited Worker", JSON.stringify(result, null, 2));
};

module.exports = {
	getWorkers,
	getOneWorker,
	getAllWorkers,
	deleteOneWorker,
	saveWorker,
	editWorker,
};
