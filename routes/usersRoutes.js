const { application } = require("express");
const express = require("express");
const router = express.Router();

const { loginUser, registerUser } = require("../controllers/loginController");
const { addUser, getCountries } = require("../controllers/userController");
const { formValidator } = require("../utils/util");

router.post("/", loginUser);
router.post("/countries", getCountries);
router.post("/signup", formValidator, addUser);
module.exports = router;
