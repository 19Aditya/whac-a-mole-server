import { verify } from "jsonwebtoken";
require("dotenv").config();
// const jwt_secret = process.env.jwt_secret
const jwt_secret = "asdasd";

function authenticateToken(req, res, next) {
	// Get token from cookies
	const token = req.cookies.token;

	// Check if token is missing
	if (!token) return res.status(401).json({ message: "Token missing" });

	// Verify token
	verify(token, jwt_secret, (err, user) => {
		if (err) return res.status(403).json({ message: "Invalid token" });

		// Attach user to request object
		req.user = user;

		// Call next middleware
		next();
	});
}

export default authenticateToken;
