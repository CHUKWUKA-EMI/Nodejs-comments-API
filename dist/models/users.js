"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true,
});

var _sequelize = require("sequelize");

var _sequelize2 = _interopRequireDefault(_sequelize);

var _connection = require("../DB/connection");

var _connection2 = _interopRequireDefault(_connection);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

exports.default = _connection2.default.define(
  "Users",
  {
    id: {
      type: _sequelize2.default.UUID,
      allowNull: false,
      defaultValue: _sequelize2.default.UUIDV4,
      primaryKey: true,
      unique: true,
    },
    name: {
      type: _sequelize2.default.STRING,
      allowNull: false,
      required: true,
    },
    email: {
      type: _sequelize2.default.STRING,
      allowNull: false,
      required: true,
      unique: true,
    },
    password: {
      type: _sequelize2.default.STRING,
      allowNull: false,
      required: true,
    },
  },
  { timestamps: false }
);
