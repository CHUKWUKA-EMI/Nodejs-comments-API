"use strict";

module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable("Users", {
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
		});
	},

	down: (queryInterface, Sequelize) => {
		return queryInterface.dropTable("Users");
	},
};
