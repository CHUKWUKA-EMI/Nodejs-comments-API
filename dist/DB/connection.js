"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true,
});

var _sequelize = require("sequelize");

var _sequelize2 = _interopRequireDefault(_sequelize);

var _dotenv = require("dotenv");

var _dotenv2 = _interopRequireDefault(_dotenv);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

_dotenv2.default.config();

const { DB_PASSWORD } = process.env;

//connect to Database instance
const sequelize = new _sequelize2.default("yykvyklz", "yykvyklz", DB_PASSWORD, {
  host: "ruby.db.elephantsql.com",
  dialect: "postgresql",
  port: 5432,
  define: {
    timestamps: false,
  },
});

exports.default = sequelize;

global.sequelize = sequelize;
