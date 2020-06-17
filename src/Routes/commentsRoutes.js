import express from "express";
import verify from "../middleware/Authorization";
import comments from "../controllers/commentsController";

const router = express.Router();

router.post("/comments", verify, comments.postComment); //protected;
router.get("/comments", comments.getComments);
router.patch("/comments/:comment_id", verify, comments.updateComment); //protected;
router.delete("/comments/:comment_id", verify, comments.deleteComment); //protected;

export default router;
