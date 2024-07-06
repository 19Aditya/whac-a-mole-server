import jwt from "jsonwebtoken";
const jwt_secret = process.env.jwt_secret;
console.log(jwt_secret);

function authenticateToken(req, res, next) {
	// Get token from cookies
	const token = req.cookies.token;

	// Check if token is missing
	if (!token) return res.status(401).json({ message: "Token missing" });

	// Verify token
	jwt.verify(token, jwt_secret, (err, user) => {
		if (err) return res.status(403).json({ message: "Invalid token" });

		// Attach user to request object
		req.user = user;

		// Call next middleware
		next();
	});
}

export default authenticateToken;
