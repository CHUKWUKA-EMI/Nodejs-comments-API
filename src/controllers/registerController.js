import db from "../DB/database";
import bcrypt from "bcryptjs";
import dotenv from "dotenv";

dotenv.config();

const registerController = async (req, res) => {
	const { name, email, password } = req.body;
	try {
		//check if email already exists
		const existingUser = await db.users.findOne({ where: { email: email } });
		if (existingUser) {
			throw new Error("User already exists");
		}
		//encrypt the password
		const hashedPass = await bcrypt.hash(password, 10);
		//save user's data in the database
		const user = await db.users.create({
			name: name,
			email: email,
			password: hashedPass,
		});
		return res.json(user);
	} catch (err) {
		throw err;
	}
};

export default registerController;
