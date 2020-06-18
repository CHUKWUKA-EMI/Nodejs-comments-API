"use strict";

var _database = require("../DB/database");

var _database2 = _interopRequireDefault(_database);

var _Authorization = require("../middleware/Authorization");

var _Authorization2 = _interopRequireDefault(_Authorization);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

const postComment = async (req, res) => {
  const { comment } = req.body;
  try {
    //create a comment
    const commentBody = await _database2.default.comments.create({
      userId: req.user.userId,
      body: comment,
      replies: null,
    });

    return res.status(200).json(commentBody);
  } catch (err) {
    return res.status(500).send(err.message);
  }
};

const getComments = async (req, res) => {
  try {
    //get all comments
    const comments = await _database2.default.comments.findAll();
    return res.status(200).json(comments);
  } catch (err) {
    return res.status(500).send(err.message);
  }
};

const updateComment = async (req, res) => {
  const { comment_id } = req.params;
  const { replies } = req.body;
  try {
    //update the comment by appending a reply to it
    const [updated] = await _database2.default.comments.update(
      {
        replies: _database2.default.Sequelize.fn(
          "array_append",
          _database2.default.Sequelize.col("replies"),
          replies + " " + "- " + req.user.email
        ),
      },
      { where: { comment_id: comment_id } }
    );
    //check if comment has been updated or replied to, then return it
    if (updated) {
      const updatedComment = await _database2.default.comments.findOne({
        where: { comment_id: comment_id },
      });
      return res.status(200).json({ comment: updatedComment });
    }
    //if comment does not exist
    throw new Error("Comment not found");
  } catch (err) {
    return res.status(500).send(err);
  }
};

const deleteComments = async (req, res) => {
  const { comment_id } = req.params;
  try {
    //delete a comment whose id matches the req.params.id
    const deleted = await _database2.default.comments.destroy({
      where: { comment_id: comment_id },
    });
    //check if comment is deleted successfully
    if (deleted) {
      return res.status(200).send(`Comment with id ${comment_id} deleted`);
    }

    throw new Error("Comment not found");
  } catch (err) {
    return res.status(500).send(err);
  }
};

module.exports = {
  postComment: postComment,
  getComments: getComments,
  updateComment: updateComment,
  deleteComment: deleteComments,
};
