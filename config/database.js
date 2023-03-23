//get client
const mysql = require("mysql2/promise");

// import constant values like pass and username
const constant = require("./constant");
const mongoose = require("mongoose");

const db = mongoose
	.connect(constant.MONGOLAB_URI, {
		useUnifiedTopology: true,
		useNewUrlParser: true,
	})
	.then(() => console.log("e don connect"))
	.catch((err) => console.log(err));

// create the connection to database

const pool = mysql.createPool({
	host: "localhost",
	database: constant.DB,
	user: constant.USER_DB,
	waitForConnections: true,
	connectionLimit: 10,
	queueLimit: 0,
});
// create the connection to database
// const connection = mysql.createConnection({
// 	host: "localhost",
// 	user: constant.USER_DB,
// 	database: constant.DB,
// });

// const db = pool.connect(function (err) {
// 	if (err) throw err;
// 	// if connection is successful
// });

module.exports = Object.freeze({
	pool,
	db,
});
