const { verify } = require("jsonwebtoken");
const { authLogin, createUser } = require("../models/LoginModel");
const { createToken, verifyPassword, createHash } = require("../utils/util");
const { validationResult } = require("express-validator");

const loginUser = async (req, res) => {
	const email = req.body.email;
	const password = req.body.password;
	const result = await authLogin(email);
	const user = result[0][0];

	console.log(user);
	let auth = await verifyPassword(user.password, password);
	if (user != undefined && auth) {
		const token = createToken(user);
		const data = {
			id: user.id,
			username: user.username,
			email: user.email,
			appRoleId: user.role,
			match: auth,
		};
		res.json({ status: "success", token: token, user: data });
	} else {
		res.json({ status: "error", message: "Invalid Credentials" });
	}
};

const registerUser = async (req, res) => {
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		console.log(errors);
		return res.json({ status: 0, message: errors });
	}
	const { name, email, mobile, username, role, status, password, cpassword } =
		req.body;

	if (password !== cpassword)
		res.json({ status: 0, message: "confirm password did not match" });

	let hashpass = await createHash(password);

	let user = await createUser(req.body, hashpass);

	if (user !== undefined) {
		const token = createToken(user);
		// const data = {
		// 	id: user.id,
		// 	username: user.username,
		// 	email: user.email,
		// 	appRoleId: user.role,
		// };
		console.log(user);
		res.json({ status: "success", token: token, user: null });
	} else {
		res.json({ status: "error", message: "failed to create user" });
	}
};

module.exports = {
	loginUser,
	registerUser,
};
