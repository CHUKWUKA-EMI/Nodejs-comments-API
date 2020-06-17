import express from "express";
import registerController from "../controllers/registerController";
import loginController from "../controllers/loginController";

const router = express.Router();

router.post("/register", registerController);
router.post("/login", loginController);

export default router;
