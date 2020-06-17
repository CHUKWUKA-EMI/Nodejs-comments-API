import Sequelize from "sequelize";

const sequelize = new Sequelize(
	"postgres://yykvyklz:rwWG3cZXu35niyIjL4pIoKFIRyiACCz5@ruby.db.elephantsql.com:5432/yykvyklz"
);

export default sequelize;
global.sequelize = sequelize;
