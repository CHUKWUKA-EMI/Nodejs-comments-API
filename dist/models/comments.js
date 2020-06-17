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
  "Comments",
  {
    comment_id: {
      type: _sequelize2.default.UUID,
      allowNull: false,
      defaultValue: _sequelize2.default.UUIDV4,
      primaryKey: true,
      unique: true,
    },
    userId: {
      type: _sequelize2.default.UUID,
      allowNull: false,
      defaultValue: _sequelize2.default.UUIDV4,
    },
    body: {
      type: _sequelize2.default.TEXT,
    },
    created_at: {
      type: _sequelize2.default.DATE,
      defaultValue: _sequelize2.default.literal("CURRENT_TIMESTAMP"),
    },
    updated_at: {
      type: _sequelize2.default.DATE,
      defaultValue: _sequelize2.default.literal("CURRENT_TIMESTAMP"),
    },
    replies: {
      type: _sequelize2.default.ARRAY(_sequelize2.default.TEXT),
      defaultValue: "{}",
      allowNull: true,
    },
  },
  { timestamps: false }
);
