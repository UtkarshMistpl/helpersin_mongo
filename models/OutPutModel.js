module.exports = (sequelize, DataTypes) => {
	const Output = sequelize.define(
		"Output",
		{
			uid: {
				type: DataTypes.STRING,
			},
			Facility: {
				type: DataTypes.STRING,
			},
			CarrierName: {
				type: DataTypes.STRING,
			},
			VoucherNumber: {
				type: DataTypes.STRING,
			},
			AccountNumber: {
				type: DataTypes.INTEGER,
			},
			PatientName: {
				type: DataTypes.STRING,
			},
			ServiceDate: {
				type: DataTypes.INTEGER,
			},
			Fees: {
				type: DataTypes.INTEGER,
			},
			Balance: { type: DataTypes.INTEGER },
			Comments: {
				type: DataTypes.STRING,
			},
			StatusName: {
				type: DataTypes.STRING,
			},
			SubStatus: {
				type: DataTypes.STRING,
			},
			ActionCode: {
				type: DataTypes.STRING,
			},
			ActionType: {
				type: DataTypes.STRING,
			},
			FollowUpDate: { type: DataTypes.STRING },
			WorkedDate: { type: DataTypes.STRING },
			Name: {
				type: DataTypes.STRING,
			},
			ATBdate: { type: DataTypes.STRING },
			BilledDate: { type: DataTypes.STRING },
			AgingDays: { type: DataTypes.INTEGER },
			AgingBucket: { type: DataTypes.STRING },
			BuilledBucket: { type: DataTypes.STRING },
			pms_id: { type: DataTypes.INTEGER },
			assigned_to: { type: DataTypes.INTEGER },
		},
		{
			createdAt: "inserted_date",
			updatedAt: "updated_date",
			tableName: "tbl_output",
		}
	);

	return Output;
};
