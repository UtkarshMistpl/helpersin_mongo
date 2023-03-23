module.exports = (sequelize, DataTypes) => {
	const Workers = sequelize.define(
		"Workers",
		{
			name: {
				type: DataTypes.STRING,
			},
			last_name: {
				type: DataTypes.STRING,
			},
			category: {
				type: DataTypes.STRING,
			},
			mobile: {
				type: DataTypes.NUMBER,
			},
			otp: {
				type: DataTypes.STRING,
			},
			photo: {
				type: DataTypes.STRING,
			},
			unique_num: {
				type: DataTypes.STRING,
			},
			country: {
				type: DataTypes.STRING,
			},
			state: {
				type: DataTypes.STRING,
			},
			city: {
				type: DataTypes.STRING,
			},
			town: {
				type: DataTypes.STRING,
			},
			lat: {
				type: DataTypes.STRING,
			},
			lng: {
				type: DataTypes.STRING,
			},
			locality: {
				type: DataTypes.STRING,
			},
			detail: {
				type: DataTypes.STRING,
			},
			status: {
				type: DataTypes.STRING,
			},
			rating_count: {
				type: DataTypes.STRING,
			},
			visit_count: {
				type: DataTypes.STRING,
			},
			checkbox: {
				type: DataTypes.STRING,
			},
		},
		{
			createdAt: "created_at",
			updatedAt: "updated_at",
		}
	);

	return Workers;
};
