"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true,
});

var _jsonwebtoken = require("jsonwebtoken");

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

var _bcryptjs = require("bcryptjs");

var _bcryptjs2 = _interopRequireDefault(_bcryptjs);

var _database = require("../DB/database");

var _database2 = _interopRequireDefault(_database);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

const loginContoller = async (req, res) => {
  try {
    //check if email is in the database
    const user = await _database2.default.users.findOne({
      where: { email: req.body.email },
    });
    if (!user) {
      throw new Error("User does not exist");
    }
    //check if password is correct
    const validPassword = await _bcryptjs2.default.compare(
      req.body.password,
      user.password
    );
    if (!validPassword) {
      throw new Error("Wrong Password");
    }
    //generate token
    const token = _jsonwebtoken2.default.sign(
      { userId: user.id, email: user.email },
      process.env.TOKEN_SECRET,
      { expiresIn: "14 days" }
    );
    //save token to cookie
    res.header("Authorization", token);
    //return jwt
    return res.json({ userId: user.id, token, tokenExpiration: 14 });
  } catch (err) {
    return res.status(500).send(err.message);
  }
};

exports.default = loginContoller;
