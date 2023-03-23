module.exports = (sequelize, DataTypes) => {
	const Countries = sequelize.define(
		"Countries",
		{
			sortname: {
				type: DataTypes.STRING,
			},
			country_name: {
				type: DataTypes.STRING,
			},
		},
		{
			timestamps: false,
		}
	);
	return Countries;
};
