import Sequelize from "sequelize";
import sequelize from "../DB/connection";

export default sequelize.define(
	"Users",
	{
		id: {
			type: Sequelize.UUID,
			allowNull: false,
			defaultValue: Sequelize.UUIDV4,
			primaryKey: true,
			unique: true,
		},
		name: {
			type: Sequelize.STRING,
			allowNull: false,
			required: true,
		},
		email: {
			type: Sequelize.STRING,
			allowNull: false,
			required: true,
			unique: true,
		},
		password: {
			type: Sequelize.STRING,
			allowNull: false,
			required: true,
		},
	},
	{ timestamps: false }
);
