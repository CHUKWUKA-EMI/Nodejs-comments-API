import jwt from "jsonwebtoken";

export default (req, res, next) => {
	const token = req.header("Authorization");

	if (!token || token === null) {
		console.log("User not Authenticated");
		return res.json({ Error: "User not Authenticated" });
	}

	const verified = jwt.verify(token, process.env.TOKEN_SECRET);
	if (!verified) {
		console.log("Invalid Token");
		return res.json({ Error: "Invalid token" });
	}
	console.log("Access granted");
	req.user = verified;
	next();
};
