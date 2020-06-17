import db from "../DB/database";
import authenticate from "../middleware/Authorization";

const postComment = async (req, res) => {
	const { comment } = req.body;
	try {
		//create a comment
		const commentBody = await db.comments.create({
			userId: req.user.userId,
			body: comment,
		});

		return res.status(200).json(commentBody);
	} catch (err) {
		return res.status(500).send(err.message);
	}
};

const getComments = async (req, res) => {
	try {
		//get all comments
		const comments = await db.comments.findAll();
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
		const [updated] = await db.comments.update(
			{
				replies: db.Sequelize.fn(
					"array_append",
					db.Sequelize.col("replies"),
					replies
				),
			},
			{ where: { comment_id: comment_id } }
		);
		//check if comment has been updated or replied to, then return it
		if (updated) {
			const updatedComment = await db.comments.findOne({
				where: { comment_id: comment_id },
			});
			return res.status(200).json(updatedComment);
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
		const deleted = await db.comments.destroy({
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
