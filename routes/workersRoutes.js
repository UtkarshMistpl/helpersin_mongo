const { application } = require("express");
const express = require("express");
const router = express.Router();

const {
	getWorkers,
	getOneWorker,
	getAllWorkers,
	deleteOneWorker,
	saveWorker,
	editWorker,
} = require("../controllers/workersController");
const { upload } = require("../utils/util");

router.post("/", getWorkers);
router.post("/one", getOneWorker);
router.post("/all", getAllWorkers);
router.post("/save", upload, saveWorker);
router.post("/edit", editWorker);
router.post("/delete-one", deleteOneWorker);

module.exports = router;
