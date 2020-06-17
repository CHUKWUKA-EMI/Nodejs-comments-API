import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import db from "../DB/database";

const loginContoller = async (req, res) => {
	try {
		//check if email is in the database
		const user = await db.users.findOne({ where: { email: req.body.email } });
		if (!user) {
			throw new Error("User does not exist");
		}
		//check if password is correct
		const validPassword = await bcrypt.compare(
			req.body.password,
			user.password
		);
		if (!validPassword) {
			throw new Error("Wrong Password");
		}
		//generate token
		const token = jwt.sign(
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

export default loginContoller;
