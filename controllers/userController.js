const { hash } = require("bcrypt");
const db = require("./../models");
const { createToken, verifyPassword, createHash } = require("../utils/util");
const { validationResult } = require("express-validator");

const User = require("./../models/userMongoModel");
const mongoose = require("mongoose");
const Countries = db.countries;
const Users = db.users;

const addUser = async (req, res) => {
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

	let emailCheck = await Users.findOne({ where: { email: email } });

	if (emailCheck !== null) {
		res.json({ status: 0, message: "Email Already Exists" });
	} else {
		let data = {
			name: name,
			email: email,
			mobile: mobile,
			username: username,
			role: role,
			password: hashpass,
			status: status,
		};

		let user = await Users.create(data);

		if (user !== undefined) {
			const token = createToken(user.dataValues);
			const data = {
				id: user.dataValues.id,
				username: user.dataValues.username,
				email: user.dataValues.email,
				appRoleId: user.dataValues.role,
			};
			res.json({ status: "success", token: token, user: data });
		} else {
			res.json({ status: "error", message: "failed to create user" });
		}
	}
};

const adminLogin = async (req, res) => {
	const email = req.body.email;
	const password = req.body.password;

	console.log("email");
	if (!email) {
		res.send({ status: "error", message: "email missing" });
		return;
	}
	console.log("password");

	if (!password) {
		res.json({ status: "error", message: "password missing" });
		return;
	}

	let userCheck = await User.find({ email: email, password: password });

	console.log("found user:", JSON.stringify(userCheck, null, 2));

	if (userCheck.length == 0) {
		res.json({ status: "error", message: "invalid credentials" });
		return;
	}
	const token = createToken(userCheck);

	res.json({ status: "success", token: token, user: userCheck });
};

const getCountries = async (req, res) => {
	const countries = await Countries.findAll();
	if (!countries) {
		res.json({ status: "error", message: "failed no categories found" });
	}
	console.log("All Countries:", JSON.stringify(countries, null, 2));
	res.json({ status: "success", countries: countries });
};
module.exports = {
	addUser,
	adminLogin,
	getCountries,
};
