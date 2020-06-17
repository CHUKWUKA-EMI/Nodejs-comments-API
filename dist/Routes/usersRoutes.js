"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true,
});

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _registerController = require("../controllers/registerController");

var _registerController2 = _interopRequireDefault(_registerController);

var _loginController = require("../controllers/loginController");

var _loginController2 = _interopRequireDefault(_loginController);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

const router = _express2.default.Router();

router.post("/register", _registerController2.default);
router.post("/login", _loginController2.default);

exports.default = router;
