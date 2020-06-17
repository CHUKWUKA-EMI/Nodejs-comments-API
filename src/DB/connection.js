import Sequelize from "sequelize";
import dotenv from "dotenv";

dotenv.config();

const { DB_PASSWORD } = process.env;

//connect to Database instance
const sequelize = new Sequelize("yykvyklz", "yykvyklz", DB_PASSWORD, {
  host: "ruby.db.elephantsql.com",
  dialect: "postgresql",
  port: 5432,
  define: {
    timestamps: false,
  },
});

export default sequelize;
global.sequelize = sequelize;
