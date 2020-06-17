"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true,
});

var _jsonwebtoken = require("jsonwebtoken");

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

exports.default = (req, res, next) => {
  const token = req.header("Authorization");

  if (!token || token === null) {
    console.log("User not Authenticated");
    return res.json({ Error: "User not Authenticated" });
  }

  const verified = _jsonwebtoken2.default.verify(
    token,
    process.env.TOKEN_SECRET
  );
  if (!verified) {
    console.log("Invalid Token");
    return res.json({ Error: "Invalid token" });
  }
  console.log("Access granted");
  req.user = verified;
  next();
};
