"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true,
});

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _Authorization = require("../middleware/Authorization");

var _Authorization2 = _interopRequireDefault(_Authorization);

var _commentsController = require("../controllers/commentsController");

var _commentsController2 = _interopRequireDefault(_commentsController);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

const router = _express2.default.Router();

router.post(
  "/comments",
  _Authorization2.default,
  _commentsController2.default.postComment
); //protected;
router.get("/comments", _commentsController2.default.getComments);
router.patch(
  "/comments/:comment_id",
  _Authorization2.default,
  _commentsController2.default.updateComment
); //protected;
router.delete(
  "/comments/:comment_id",
  _Authorization2.default,
  _commentsController2.default.deleteComment
); //protected;

exports.default = router;
