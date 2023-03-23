const { pool } = require("../config/database");

const authLogin = async (email) => {
	let user = pool.execute(`SELECT * FROM tbl_users WHERE email = "${email}"`);
	return user;
};

const createUser = async (data, hashpass) => {
	console.log(data);
	let user = pool.execute(
		`INSERT INTO tbl_users (name, email, mobile, username, role, password, status) VALUES("${data.name}","${data.email}","${data.mobile}","${data.username}","${data.role}","${hashpass}","${data.status}");`
	);
	return user;
};

module.exports = {
	authLogin,
	createUser,
};
