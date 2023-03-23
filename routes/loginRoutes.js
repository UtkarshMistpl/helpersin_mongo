const { application } = require("express");
const express = require("express");
const router = express.Router();

const { loginUser, registerUser } = require("../controllers/loginController");
const { addUser, adminLogin } = require("../controllers/userController");
const { formValidator } = require("../utils/util");

router.post("/login", loginUser);
router.post("/signup", formValidator, addUser);
router.post("/admin-login", adminLogin);
module.exports = router;
