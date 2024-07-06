import jwt from "jsonwebtoken";
const jwtSecret = process.env.SECRET_KEY;

function authenticateToken(req, res, next) {

	const token = req.cookies.token;
    if (!token) return res.status(401).json({ message: "Token missing" });
    
	jwt.verify(token, jwtSecret, (err, email) => {
		if (err) return res.status(403).json({ message: "Invalid token" });
		req.email = email;
		console.log(email);
		next();
	});
}

export default authenticateToken;
