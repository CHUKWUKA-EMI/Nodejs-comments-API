"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true,
});

var _sequelize = require("sequelize");

var _sequelize2 = _interopRequireDefault(_sequelize);

var _connection = require("./connection");

var _connection2 = _interopRequireDefault(_connection);

var _users = require("../models/users");

var _users2 = _interopRequireDefault(_users);

var _comments = require("../models/comments");

var _comments2 = _interopRequireDefault(_comments);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

const db = {};

db.Sequelize = _sequelize2.default;
db.sequelize = _connection2.default;

db.users = _users2.default;
db.comments = _comments2.default;

exports.default = db;
