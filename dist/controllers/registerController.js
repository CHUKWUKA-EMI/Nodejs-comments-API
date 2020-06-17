"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true,
});

var _database = require("../DB/database");

var _database2 = _interopRequireDefault(_database);

var _bcryptjs = require("bcryptjs");

var _bcryptjs2 = _interopRequireDefault(_bcryptjs);

var _dotenv = require("dotenv");

var _dotenv2 = _interopRequireDefault(_dotenv);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

_dotenv2.default.config();

const registerController = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    //check if email already exists
    const existingUser = await _database2.default.users.findOne({
      where: { email: email },
    });
    if (existingUser) {
      throw new Error("User already exists");
    }
    //encrypt the password
    const hashedPass = await _bcryptjs2.default.hash(password, 10);
    //save user's data in the database
    const user = await _database2.default.users.create({
      name: name,
      email: email,
      password: hashedPass,
    });
    return res.json(user);
  } catch (err) {
    throw err;
  }
};

exports.default = registerController;
